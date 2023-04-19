const billAmount = document.querySelector(".bill-label");
const numberOfPeople = document.querySelector(".people");
const customTip = document.querySelector(".custom");
const billTipAmount = document.querySelector(".tipNumber");
const billTotalPerPerson = document.querySelector(".totalnumber");
const resetButton = document.querySelector(".reset-btn");
const buttons = document.querySelectorAll(".tip-btn button")

billAmount.addEventListener('input', billAmountFun);
numberOfPeople.addEventListener('input', numberOfPeopleFun);
customTip.addEventListener('input',  tipCustom);

buttons.forEach(function(val) {
    val.addEventListener('click', handleClick)
})


billAmount.value ="0.0";
numberOfPeople.value ="1";
billTipAmount.innerHTML = "$" + (0.0).toFixed(2);
billTotalPerPerson.innerHTML = "$" + (0.0).toFixed(2);


let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.05;

function billAmountFun() {
    billValue = parseFloat(billAmount.value)
    resetButton.classList.remove('default')
    calculatorTip();
};

function numberOfPeopleFun() {
    peopleValue = parseFloat(numberOfPeople.value)
    resetButton.classList.remove('default')
    if(peopleValue <= 0 || peopleValue === "") {
        document.querySelector('.text').classList.add('error')
        document.querySelector('.number-input').classList.add('error')
    } else {
        document.querySelector('.text').classList.remove('error')
        document.querySelector('.number-input').classList.remove('error')

    }
    calculatorTip();
};

function tipCustom() {
    resetButton.classList.remove('default')
    tipValue = parseFloat(customTip.value / 100);
    buttons.forEach(function(val){
        val.classList.remove('active')
    })
    calculatorTip()
}

function handleClick (event){
    resetButton.classList.remove('default')
    buttons.forEach(function(val){
        val.classList.remove('active')
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add('active')
            tipValue = parseFloat(val.innerHTML) / 100
        }
    })
    calculatorTip()
}

function calculatorTip() {
    if ( peopleValue >=1) { 
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue + tipAmount) / peopleValue;
        billTipAmount.innerHTML = "$" + tipAmount.toFixed(2);
        billTotalPerPerson.innerHTML = "$" +total.toFixed(2);
    }
}

resetButton.onclick = function(e) {
    billAmount.value ="0.0";
    billAmountFun();
    numberOfPeople.value ="1";
    numberOfPeopleFun();
    customTip.value= '';
    buttons.forEach(function(val){
        val.classList.remove('active')
    })
    resetButton.classList.add('default')
}