function calculateAge() {
    let birthdate = document.querySelector("#birthdate").value;
    let resultElement = document.querySelector("#result");

    if (birthdate) {
        let today = new Date();
        let birthDate = new Date(birthdate);


        let ageYears = today.getFullYear() - birthDate.getFullYear()
        let ageMonths = today.getMonth() - birthDate.getMonth()
        let ageDays = today.getDate() - birthDate.getDate()

        if (ageDays < 0) {
            ageMonths--;
            ageDays += new Date(today.getFullYear(),today.getMonth(),).getDate();
        }

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        resultElement.innerText = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`
        resultElement.style.color = "orange"; 
    } else {
        resultElement.innerText = "Please enter your birthdate"
        resultElement.style.color = "red"
    }



}
