// // .checked = property that determines the checked state of an HTML checkbox or radio button element

const myCheckbox = document.getElementById(`myCheckbox`);
const visaBtn = document.getElementById(`visaBtn`);
const masterCardBtn = document.getElementById(`masterCardBtn`);
const payPalBtn = document.getElementById(`payPalBtn`);
const myBtn = document.getElementById(`myBtn`);
const subResult = document.getElementById(`subResult`);
const payementResult = document.getElementById(`payementResult`);

myBtn.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = "You are subcribed";
    }
    else{
        subResult.textContent = "You are NOT subcribed";
    }

    if(visaBtn.checked){
        payementResult.textContent = "You are paying with Visa";
    }
    else if(masterCardBtn.checked){
        payementResult.textContent = "You are paying with MasterCard";
    }
    else if(payPalBtn.checked){
        payementResult.textContent = "You are paying with PayPal";
    }
    else{
        payementResult.textContent = "You must select a payment type";
    }
}