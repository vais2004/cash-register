const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

const availableNotes = [2000, 500, 700, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if  (billAmount.value > 0) {
        if  (cashGiven.value  >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
        showMessage(
            "do you wanna wash plates?"
            );
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amountToBeReturned) {
    const 
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";  
    message.innerText = msg;
}








