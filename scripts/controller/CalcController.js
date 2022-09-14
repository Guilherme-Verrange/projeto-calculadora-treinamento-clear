class CalcController{

    constructor(){

        this._locale = "pt-BR";
        this._displayEl = document.querySelector("#display");
        this._displayDateElement = document.querySelector("#data");
        this._displayTimeElement = document.querySelector("#hora");
        this._currentDate;//Pega a data e hora atual
        this.initialize();

    }

    initialize(){

        setInterval(()=>{

            this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            //Pega o valor de displayDate em get e converte na data com toLocale
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
            //Pega o valor de displayTime em get e converte na data com toLocale

        }, 1000);
        
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