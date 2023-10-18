function checkEligibility() {
    const age = parseInt(document.getElementById("age").value);

    if (isNaN(age)) {
        document.getElementById("result").innerHTML = "please enter a valid age."
    } else if (age >= 18){
        document.getElementById("result").innerHTML ="you are eligible to vote sharp guy!"
    } else {
        document.getElementById("result").innerHTML ="you are not eligible to vote.. grow up youngie!"
    }
}