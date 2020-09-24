//get bill input
const tipForm = document.getElementById("#tip-form"); //global scope

tipForm.addEventListener('submit', function(e){
    e.preventDefault();
    const billAmount = Number(document.querySelector("#bill-amount").value); //scoped to function, function scope
    const tipPercentage = Number(document.querySelector("#tip-amount").value); 
    //do some math for the tip
    //do some math for tip plus bill
    const tipAmount = document.querySelector("#final-tip");
    tipAmount.innerHTML = `${tipPercent}`;
    //reset the calculator
});

//get tip percentage

//process the values (actual calculations) get the tip

//display to the user