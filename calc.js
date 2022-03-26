const LOAN_MIN = 5000
const LOAN_MAX = 60000
const LOAN_STEP = 5000

var age_slider = document.getElementById("age-slider")
var loan_slider = document.getElementById("loan-slider")

var age_val_p = document.getElementById("age-p")
var loan_val_p = document.getElementById("loan-amt-p")

var result = document.getElementById("result")

age_slider.oninput  = () => { 
    age_val_p.innerHTML = age_slider.value
    result.innerHTML = calc_loan(loan_slider.value, age_slider.value) 
} 
loan_slider.oninput = () => { 
    loan_val_p.innerHTML = loan_slider.value
    result.innerHTML = calc_loan(loan_slider.value, age_slider.value) 
} 

var map_range = function(from, to, s) {
    return to[0] + (s - from[0]) * (to[1] - to[0]) / (from[1] - from[0]);
};

function calc_loan(sum, years) {
    // not working yet
    var tax_thing = years - 1
    var res = Math.round(
        sum * years/12 
        + tax_thing
    )
    return res
}

