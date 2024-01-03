/**
 * Button
 * - ImageButton
 * - TextButton
 *   - SubmitButton
 *   - CancelButton
 */

class Button {
    constructor () {}

    render = () => `<button>${this.innerHTML()}</button>`;
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
     * e_div.innerHTML = ...
     */
    e_div.innerHTML == '';
    e_div.innerHTML += btn1.render();
    e_div.innerHTML += btn2.render();
}