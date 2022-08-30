import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class InputOperator extends LitElement {

    //* Estilos
    static styles = css`
        :host {
            display: inline-block;
        }
        button{
            width: 3rem;
            padding: 0.8rem;
            background-color: #df6c00;
            border: none;
            border-radius: 5px;
            font-family: sans-serif;
            font-size: 1.5rem;
            color: #fff;
            cursor: pointer;
            transition: background-color 0.3s ease-in;
        }
        button:hover{
            background-color: #e98222;
        }
    `;

    //* Propiedades
    static properties = {
        operator: { type: String},
    }

    //* Constructor
    constructor(){
        super();
        this.operator = '?';
    }

    //* Template
    render() {
        return html`
            <button>${this.operator}</button>
        `;
    }
}
customElements.define('input-operator', InputOperator);
