import { LitElement, html, css } from "lit";
import "./input-calculator.js";
import "./input-operator.js";

class InputCount extends LitElement{

    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 14rem;
        }

        .limpiar, .resultado{
            width: 3rem;
            padding: 0.8rem;
            border: none;
            border-radius: 5px;
            font-family: sans-serif;
            font-size: 1.5rem;
            color: #fff;
            cursor: pointer;
            transition: background-color 0.3s ease-in;
        }

        .limpiar, .resultado{
            background-color: #1ca800;
        }
        .limpiar:hover{
            background-color: #1a9601;
        }
        
        .resultado{
            background-color: #919191;
        }
        .resultado:hover{
            background-color: #707070;
        }
        .row-1, .row-2, .row-3, .row-4{
            display: flex;
            gap: 0.7rem;
            margin-bottom: 0.7rem;
        }
        .view{
            width: 100%;
            border-radius: 5px;
            border: none;
            margin-bottom: 0.7rem;
            height: 2.8rem;
            font-size: 1.5rem;
        }
    `;

    static properties = {
        inputDato: { type: String},
        operador: {type: String},
        operadorType: {type: String},
    }

    constructor(){
        super();
        this.inputDato = '';
        this.operador = '';
    }

    name(e){
        const numero = e.target.number;
        this.recibir(numero);
    }

    recibir(dato){
        console.log(dato);
        this.inputDato += dato;
    }

    suma(){
        this.operador = this.inputDato;
        this.inputDato = '';
        this.operadorType = 'suma';
    }

    resta(){
        this.operador = this.inputDato;
        this.inputDato = '';
        this.operadorType = 'resta';
    }

    multiplicacion(){
        this.operador = this.inputDato;
        this.inputDato = '';
        this.operadorType = 'mul';
    }

    division(){
        this.operador = this.inputDato;
        this.inputDato = '';
        this.operadorType = 'div';
    }

    resultado(){
        var resultado;

        if(this.operadorType === 'suma'){
            resultado = parseInt(this.operador) + parseInt(this.inputDato);
        } else if(this.operadorType === 'resta'){
            resultado = parseInt(this.operador) - parseInt(this.inputDato);
        } else if(this.operadorType === 'mul') {
            resultado = parseInt(this.operador) * parseInt(this.inputDato);
        } else if(this.operadorType === 'div') {
            resultado = parseInt(this.operador) / parseInt(this.inputDato);
        }

        this.inputDato= resultado.toString();
    }

    limpiarResultado(){
        this.inputDato='';
        this.operador='';
    }

    render(){
        return html`
            <input type="text" value=${this.inputDato} class="view"/>

            <div class="row-1">
            <input-calculator number="1" @click="${this.name}"></input-calculator>
            <input-calculator number="2" @click="${this.name}"></input-calculator>
            <input-calculator number="3" @click="${this.name}"></input-calculator>
            <input-operator operator="x" @click="${this.multiplicacion}"></input-operator>
            </div>

            <div class="row-2">
            <input-calculator number="4" @click="${this.name}"></input-calculator>
            <input-calculator number="5" @click="${this.name}"></input-calculator>
            <input-calculator number="6" @click="${this.name}"></input-calculator>
            <input-operator operator="/" @click="${this.division}"></input-operator>
            </div>

            <div class="row-3">
            <input-calculator number="7" @click="${this.name}"></input-calculator>
            <input-calculator number="8" @click="${this.name}"></input-calculator>
            <input-calculator number="9" @click="${this.name}"></input-calculator>
            <input-operator operator="+" @click="${this.suma}"></input-operator>
            </div>

            <div class="row-4">
            <input-calculator number="0" @click="${this.name}"></input-calculator>
            <button @click="${this.limpiarResultado}" class="limpiar">C</button>
            <button @click="${this.resultado}" class="resultado">=</button>
            <input-operator operator="-" @click="${this.resta}"></input-operator>
            </div>
        `;
    }
}

customElements.define('input-count', InputCount);