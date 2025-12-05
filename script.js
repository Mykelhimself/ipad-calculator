const inputEl = document.getElementById("input-el")
const buttons = document.querySelectorAll(".btns")
let currentValue = ""

buttons.forEach(button => {
    button.addEventListener("click", function(){
        const value = button.textContent;

        if (value === "AC") {
            currentValue = ""
            inputEl.value = ""
        } else if (value === "=") {
            try {
                currentValue = eval(currentValue).toString();
                inputEl.value = currentValue
            } catch (err) {
                inputEl.value = "Error"
                currentValue = ""
            }
        } else {
            currentValue += value
            inputEl.value = currentValue
        }
    })
})