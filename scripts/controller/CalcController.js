class CalcController {
  constructor() {

    this._operation = [];
    this._locale = "pt-BR";
    this._displayEl = document.querySelector("#display");
    this._displayDateElement = document.querySelector("#data");
    this._displayTimeElement = document.querySelector("#hora");
    this._currentDate; //Pega a data e hora atual
    this.initialize();
    this.initButtonsEvent();
  }

  initialize() {
    this.setdisplayDateTime();

    setInterval(() => {
      this.setdisplayDateTime();

      this.displayDate = this.currentDate.toLocaleDateString(this._locale);
      //Pega o valor de displayDate em get e converte na data com toLocale
      this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
      //Pega o valor de displayTime em get e converte na data com toLocale
    }, 1000);
  }
  addEventListenerAll(element, events, fn) {
    events.split(" ").forEach((event) => {
      element.addEventListener(event, fn, false);
    });

    //Função split que transforma as strings em array e retorna ela mesma.
  }


  clearEntry(){

    this._operation.pop(); // Ao contrário do método push, o "pop" remove a ultima informação do array.

  }

  clearAll(){
    this._operation = []; // Zera o array, reinicia a calculadora.
  }

  addOperation(value){
    this._operation.push(value); //"Push" Método que pega uma informação e adiciona dentro de um array.
  }

  setError(){
    this.displayCalc = "Error";
  }


  execBtn(value) {
    switch(value) {

        case 'ac':
            this.clearAll();
        break;

        case 'ce':
            this.cancelEntry();
        break;

        case 'soma':
            this.cancelEntry();
        break;

        case 'subtracao':
            this.cancelEntry();
        break;

        case 'divisao':
            this.cancelEntry();
        break;

        case 'multiplicacao':
            this.cancelEntry();
        break;

        case 'porcento':
            this.cancelEntry();
        break;

        case 'igual':
            this.cancelEntry();
        break;

        case '0':
        case '1':   
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '10':
            this._operation(parseInt(value));
            break;


        default:
            this.setError();
            break;
    }

  }

  initButtonsEvent() {
    let buttons = document.querySelectorAll("#buttons > g, #party > g");

    buttons.forEach((btn) => {
      this.addEventListenerAll(btn, "click", (e) => {
        let btnText = btn.className.baseVal.replace("btn-", "");
        this.execBtn(btnText);
        // Criação do foreach onde vai percorrer toda a lista node e pegar os btn.
      });

      this.addEventListenerAll(btn, "mouseover mouseup mousedown", (e) => {
        btn.style.cursor = "pointer";
      });
    });
  }

  setdisplayDateTime() {
    this.displayDate = this.currentDate.toLocaleDateString(this._locale);
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
  }

  get displayTime() {
    return this._displayTimeElement.innerHTML;
  }

  set displayTime(value) {
    return (this._displayTimeElement.innerHTML = value);
  }

  get displayDate() {
    return this._displayDateElement.innerHTML;
  }

  set displayDate(value) {
    return (this._displayDateElement.innerHTML = value);
  }

  get displayCalc() {
    return this._displayEl.innerHTML;
  }

  set displayCalc(valor) {
    this._displayEl.innerHTML = value;
  }

  get currentDate() {
    return new Date();
  }

  set currentDate(valor) {
    return (this.currentDate = value);
  }
}
