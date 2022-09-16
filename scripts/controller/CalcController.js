class CalcController {
  constructor() {



    this._lastOperator = '';
    this._lastNumber = '0';
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

    this.setLastNumberToDisplay();
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
    this.setLastNumberToDisplay();

  }

  clearAll(){
    this._operation = [0]; // Zera o array, reinicia a calculadora.
    this.setLastNumberToDisplay();
    this.lastNumber = '';
    this._lastOperator = '';
  }

  getLastOperation(){
    return this._operation[this._operation.length-1];
  }

  setLastOperation(value){
    this._operation[this._operation.length-1] = value;

  }


  isOperator(value){

   return (['+', '-', '*', '%', '/'].indexOf(value) > - 1);
        
  }

  pushOperation(value){ //verifica se tem mais de 3 operadores na calculadora

    this._operation.push(value);

    if(this._operation.length > 3){


        this.calc();
    }

  }


  getResult(){

    return eval(this._operation.join(""));
    
  }

  calc(){

    let last = '';

    this._lastOperator = this.getLastItem();

    if (this._operation.length < 3){

      let firstItem = this._operation[0];
      this._operation = [firstItem, this._lastOperator, this._lastNumber];
    
  }
    

    if (this._operation.length > 3){

      last = this._operation.pop();

      this._lastNumber = this.getResult();

    } else  if (this._operation.length == 3){

      this._lastNumber = this.getLastItem(false);

    }
    
   

    console.log('this._lastOperator', this._lastOperator);
    console.log('this._lastNumber', this._lastNumber);


    let result = this.getResult();

    if (last == '%'){

      result /= 100;

      this._operation = [result];

    }else{

      this._operation = [result];

      if (last) this._operation.push(last);

    }

    this.setLastNumberToDisplay();

  }

  getLastItem(isOperator = true){

    let lastItem;

    for (let i = this._operation.length-1; i >= 0; i--){

        if (this.isOperator(this._operation[i]) == isOperator){

            lastItem = this._operation[i];
            break;
        }
   } 

   if (!lastItem){

    lastItem = (isOperator) ? this._lastOperator : this.lastNumber;

   }

  return lastItem;

}

  setLastNumberToDisplay(){

    let lastNumber = this.getLastItem(false);


    if (!lastNumber) lastNumber = 0;
        this.displayCalc = lastNumber;
  }

  addOperation(value){

    if (isNaN(this.getLastOperation())){

        if(this.isOperator(value)) {

            this.setLastOperation(value);



        }else{

            this.pushOperation(value);
            this.setLastNumberToDisplay();

        }


    }else{

        if(this.isOperator(value)){
            this.pushOperation(value);

        }else{

            let newValue = this.getLastOperation().toString() + value.toString();//Pega o ultimo valor, transforma em string e concatena com o valor atual
            this.setLastOperation((newValue));//Pega o valor atual e adiciona dentro do array

            this.setLastNumberToDisplay();
        }
    }
  }


  addDot(){

    let lastOperation = this.getLastOperation();

    if (typeof lastOperation === 'string' && lastOperation.split('').indexOf('.') > -1) return;

    if (this.isOperator(lastOperation) || !lastOperation) {

        this.pushOperation('0.');

    } else {

        this.setLastOperation(lastOperation.toString() + '.');

    }

    this.setLastNumberToDisplay();
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
           this.clearEntry();
        break;

        case 'soma':
           this.addOperation('+');
        break;

        case 'subtracao':
            this.addOperation('-');
        break;

        case 'divisao':
            this.addOperation('/');
        break;

        case 'multiplicacao':
            this.addOperation('*');
        break;

        case 'porcento':
            this.addOperation('%');
        break;

        case 'igual':
            this.calc();
        break;

        case 'ponto':
            this.addDot();
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
        case '9':
            this.addOperation(parseInt(value));
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

  set displayCalc(value) {
    this._displayEl.innerHTML = value;
  }

  get currentDate() {
    return new Date();
  }

  set currentDate(value) {
    return (this.currentDate = value);
  }
}
