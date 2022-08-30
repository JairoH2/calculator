import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class InputCalculator extends LitElement{

    static styles = css`
        :host {
            display: inline-block;
        }
        button{
            width: 3rem;
            padding: 0.8rem;
            background-color: #792075;
            border: none;
            border-radius: 5px;
            font-family: sans-serif;
            font-size: 1.5rem;
            color: #fff;
            cursor: pointer;
            transition: background-color 0.3s ease-in;
        }
        button:hover{
            background-color: #f764BA;
        }
    `;

    static properties = {
        number: { type: String},
    }

    constructor(){
        super();
        this.number = '?';
    }

    render(){
        return html`
            <button>${this.number}</button>
        `;
    }
}

customElements.define('input-calculator', InputCalculator);