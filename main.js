function checkEligibility() {
    const age = parseInt(document.getElementById("age").value);
    const text = document.getElementById("text").value;

    if (isNaN(age)) {
        document.getElementById("result").innerHTML = "Please enter a valid age."
    } else if (age >= 18){
        document.getElementById("result").innerHTML = `You are eligible to vote ${text}. sharp guy!`
    } else {
        document.getElementById("result").innerHTML = `You are not eligible to vote ${text}.. grow up youngie!`
    }
}