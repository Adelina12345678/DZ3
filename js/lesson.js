// PHONE CHECKER

const phoneInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#email_input")
const phoneResult = document.querySelector("#email_input")

const regExp =/\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "OK"
        phoneResult.style.color = "green"
    }else {
        phoneResult.innerHTML = "NOT OK"
        phoneResult.style.color = "red"
    }

}
