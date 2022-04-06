const LOAN_MIN = 5000
const LOAN_MAX = 60000
const LOAN_STEP = 5000

var age_slider = document.getElementById("age-slider")
var loan_slider = document.getElementById("loan-slider")

var age_val_p = document.getElementById("age-p")
var loan_val_p = document.getElementById("loan-amt-p")

var result = document.getElementById("result")

age_slider.oninput = () => { 
    age_val_p.innerHTML = age_slider.value
    result.innerHTML = calc_loan(loan_slider.value, age_slider.value) 
} 
loan_slider.oninput = () => { 
    loan_val_p.innerHTML = loan_slider.value
    result.innerHTML = calc_loan(loan_slider.value, age_slider.value) 
} 

/* https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers */
const scale = (num, in_min, in_max, out_min, out_max) => (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min

function calc_loan(sum, years) {
    // not working yet
    //  2.95–27.0%
    let factor = scale(years, 1, 20, 0.0295, 0.27)
    let res = Math.round(
        (sum / (years * 12 )) * (1 + factor)
    )
    return res
}

