
const form = document.querySelector("#sports");

form.onsubmit = (event) => {
    //stop form submission
    event.preventDefault();

    //manually validate...
    let hasErrors = false;

    const fullname = document.querySelector("#fullname").value;
    const fullnameError = document.querySelector("#fullname-error");

    if (fullname && fullname.length >= 2 && fullname.length <= 30) {
        fullnameError.style.display = "none";
    } else {
        fullnameError.style.display = "block";
        hasErrors = true;
    }

    const age = Number(document.querySelector("#age").value);
    const ageError = document.querySelector("#age-error");

    if (age >= 1 && age <= 100) {
        ageError.style.display = "none";
    } else {
        ageError.style.display = "block";
        hasErrors = true;
    }

    //submit the form if there are no errors
    if (!hasErrors) {
        document.forms[0].submit();
    }
}