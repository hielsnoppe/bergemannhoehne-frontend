/**
 * Button
 * - ImageButton
 * - TextButton
 *   - SubmitButton
 *   - CancelButton
 */

class Button {
    constructor () {}

    render = (document) => {
        const e_btn = document.createElement('button');
        e_btn.innerHTML = this.innerHTML();
        return e_btn;
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
    const e_btn1 = btn1.render(document);
    e_div.appendChild(e_btn1);
}