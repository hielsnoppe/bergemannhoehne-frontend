class Order {
    constructor(no, items) {
        this.no = no;
        this.items = items;
    }

    toHTML = (format) => {
        let html;
        switch (format) {
            case 'kitchen':
                html = '<dt>Order ' + this.no + '</dt>';
                this.items.forEach((item) => {
                    html += '<dd>' + item + '</dd>';
                });
                return html;
            case 'table':
                html = '<button class="btn-eat" onclick="handleClickEat(event)">Essen</button>';
                return html;
        }
    }
}

const apply = () => {

    const e_kitchen = document.getElementById('kitchen');
    const e_tables = document.getElementById('tables');
    const e_plates = document.getElementById('plates');
    const e_next = document.getElementById('text-next');

    const next = ordersPlaced.peek();
    e_next.innerHTML = next ? next.no : '&nbsp;';

    e_kitchen.innerHTML = '';
    ordersPlaced.items.forEach((order) => {
        e_kitchen.innerHTML += order.toHTML('kitchen');
    })

    e_tables.innerHTML = '';
    ordersCooked.items.forEach((order) => {
        e_tables.innerHTML += order.toHTML('table');
    })

    e_plates.innerHTML = '';
    plates.items.forEach((dish) => {
        e_plates.innerHTML += '<li>' + 'Noch ein Teller' + '</li>';
    })
}

const handleSubmit = (event) => {
    event.preventDefault();
    placeOrder();
    apply();
    return false;
}

const handleClickCook = (event) => {
    cookOrder();
    apply();
}

const handleClickWash = (event) => {
    washDish();
    apply();
}

const handleClickEat = (event) => {
    eatOrder();
    apply();
}