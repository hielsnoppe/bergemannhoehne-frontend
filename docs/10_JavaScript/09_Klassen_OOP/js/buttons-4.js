/**
 * Button
 * - ImageButton
 * - TextButton
 *   - LinkButton
 *   - SubmitButton
 *   - CancelButton
 */

class Button {
    constructor () {}

    render = (document) => {
        const e_btn1 = document.createElement('button');
        e_btn1.innerHTML = this.innerHTML();
        return e_btn1;
    }
}
class ImageButton extends Button {
    constructor (src) {
        super(); // ruft Konstruktor von allg. Klasse auf
        this.src = src;
    }

    innerHTML = () => `<img src="${this.src}">`;
}
class TextButton extends Button {
    constructor (text) {
        super(); // ruft Konstruktor von allg. Klasse auf
        this.text = text;
    }

    innerHTML = () => `${this.text}`;
}
class LinkButton extends TextButton {
    constructor (text, href) {
        super(text); // ruft Konstruktor von allg. Klasse auf
        this.href = href;
    }

    render = (document) => {
        const e_link = document.createElement('a');
        e_link.setAttribute('href', this.href);
        e_link.innerHTML = this.innerHTML();
        return e_link;
    }
}
class SubmitButton extends TextButton {}
class CancelButton extends TextButton {}

/**
 * "onLoad" registriert automatisch einen EventListener für
 * DOMContentLoaded:
 * 
 * document.addEventListener('DOMContentLoaded', onLoad);
 */
function onLoad () {
    
    const e_div = document.getElementById('buttons');
    
    const btn1 = new TextButton('Nummer Eins');
    const btn2 = new TextButton('Nummer Zwei');

    /**
     * Buttons in das HTML einfügen mit
     * button.render(document) und
     * e_div.appendChild(...)
     */
    const link = new LinkButton('Mein Text', '#');
    e_div.appendChild(link.render(document));
}