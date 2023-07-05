/* Decimal odds to Money line odds */
function dectoml(inputbox, updatebox) {
    let inputvalue = document.getElementById(inputbox).value;

    if (inputvalue > 2){
        document.getElementById(updatebox).value = Math.round(100*(inputvalue-1)*1000)/1000
    } else if (inputvalue > 1) {
        document.getElementById(updatebox).value = Math.round(-100/(inputvalue-1)*1000)/1000
    } else {
        document.getElementById(updatebox).value = ""
    }
}

/* Money line odds to Decimal odds*/
function mltodec(inputbox, updatebox) {
    let inputvalue = document.getElementById(inputbox).value;

    if (inputvalue >= 100){
        document.getElementById(updatebox).value = Math.round(((inputvalue/100)+1)*1000)/1000
    } else if (inputvalue <= -100){
        document.getElementById(updatebox).value = Math.round(((-100/inputvalue)+1)*1000)/1000
    } else {
        document.getElementById(updatebox).value = ""
    }
}

/* Decimal odds to implied probability */
function dectoprob(inputbox, updatebox) {
    let inputvalue = document.getElementById(inputbox).value;

    if (inputvalue > 1){
        document.getElementById(updatebox).value = Math.round((1/inputvalue)*10000)/100 + "%"
    } else {
        document.getElementById(updatebox).value = ""
    }
}

/* Money line odds to implied probability */
function mltoprob(inputbox, updatebox) {
    let inputvalue = document.getElementById(inputbox).value;

    if (inputvalue >= 100){
        document.getElementById(updatebox).value = Math.round((100/(100 + parseInt(inputvalue)))*10000)/100 + "%"
    } else if (inputvalue <= -100){
        document.getElementById(updatebox).value = Math.round((inputvalue/(inputvalue - 100))*10000)/100 + "%"
    } else {
        document.getElementById(updatebox).value = ""
    }
}

