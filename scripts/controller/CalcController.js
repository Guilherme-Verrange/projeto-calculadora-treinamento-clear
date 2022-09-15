class CalcController{

    constructor(){

        this._locale = "pt-BR";
        this._displayEl = document.querySelector("#display");
        this._displayDateElement = document.querySelector("#data");
        this._displayTimeElement = document.querySelector("#hora");
        this._currentDate;//Pega a data e hora atual
        this.initialize();
<<<<<<< HEAD
        this.initButtonsEvent();
=======
>>>>>>> origin/main

    }

    initialize(){

        this.setdisplayDateTime();

        setInterval(()=>{

            this.setdisplayDateTime();

            this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            //Pega o valor de displayDate em get e converte na data com toLocale
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
            //Pega o valor de displayTime em get e converte na data com toLocale

        }, 1000);
        
    }

<<<<<<< HEAD
    initButtonsEvent(){

        let buttons = document.querySelectorAll("#buttons > g, #party > g");

        buttons.forEach(btn=>{
            btn.addEventListener('click', e => {
                console.log(e);
            });
        });// Criação do foreach onde vai percorrer toda a lista node e pegar os btn.
        
    }

=======
>>>>>>> origin/main
    setdisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._displayTimeElement.innerHTML;
    }

    set displayTime(value){
        return this._displayTimeElement.innerHTML = value;
    }

    get displayDate(){
        return this._displayDateElement.innerHTML;
    }

    set displayDate(value){
        return this._displayDateElement.innerHTML = value;
    }

    get displayCalc(){
        return this._displayEl.innerHTML;
    }

    set displayCalc(valor){
        this._displayEl.innerHTML =  value;
    }

    get currentDate(){
        return new Date();

    }

    set currentDate(valor){

        return this.currentDate = value;
    }

}