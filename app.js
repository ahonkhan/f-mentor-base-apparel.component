const stateWraper = document.querySelector('.state-wrapper')
const submitBtn = document.querySelector('.submit')
const emailField = document.querySelector('#email')


function isValidEmail(email) {
    if (email.toLowerCase().match(/^[a-z\._\0-9]*[@][a-z]*[\.][a-z]{2,4}$/)) {
        return true
    } else {
        return false
    }
}



submitBtn.addEventListener("click", () => {

    if (isValidEmail(emailField.value)) {
        console.log("ok ok")
    } else {
        stateWraper.classList.add("not-valid")

        setTimeout(() => {
            stateWraper.classList.remove("not-valid")
            
        }, 3500);
    }

})