// See https://stackoverflow.com/a/43053803
const cartesian = (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())));

// See https://stackoverflow.com/a/12646864
function shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const cards = () => {
    const cards = cartesian(ranks, suits).map((card) => new Card(card[0], card[1]));
    shuffle(cards);
    return cards;
}

const ranks = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A' ];
const suits = ['diams', 'hearts', 'spades', 'clubs'];
const stages = ['init', 'preflop', 'flop', 'turn', 'river'];

var game;

class Card {
    constructor (rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }

    toHTML = (side) => {
        switch (side) {
            case 'back':
                return `<div class="card back"></div>`;
            case 'front':
            default:
                return `<div class="card rank-${this.rank} ${this.suit}">
                    <span class="rank">${this.rank}</span>
                    <span class="suit">&${this.suit};</span>
                    </div>`;
        }
    }
}

const apply = () => {
    const e_dump = document.getElementById('dump');
    const e_table = document.getElementById('table');
    const e_hand = document.getElementById('hand');

    e_hand.innerHTML = '';
    game.players[0].hand.forEach((card) => {
        e_hand.innerHTML += '<li>' + card.toHTML('front') + '</li>';
    })

    e_dump.innerHTML = '';
    game.dump.forEach((card) => {
        e_dump.innerHTML += '<li>' + card.toHTML('back') + '</li>';
    })

    e_table.innerHTML = '';
    game.table.forEach((card) => {
        e_table.innerHTML += '<li>' + card.toHTML('front') + '</li>';
    })
}

const handleDocumentReady = (event) => {
    game = new Game();
    apply();
}

const handleClickStack = (event) => {
    switch (game.stage) {
        case 'init':
            game.players.forEach((player) => {
                game.burnCard();
                game.dealCard(player);
                game.dealCard(player);
            });
            game.stage = 'preflop';
            break;
        case 'preflop':
            game.burnCard();
            game.turnCard();
            game.turnCard();
            game.turnCard();
            game.stage = 'flop';
            break;
        case 'flop':
            game.burnCard();
            game.turnCard();
            game.stage = 'turn';
            break;
        case 'turn':
            game.burnCard();
            game.turnCard();
            game.stage = 'river';
            break;
        case 'river':
        default:
            break;
    }
    apply();
}

const handleClickFold = (event) => {
    game.players[0].fold();
    apply();
}