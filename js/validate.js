function vlad() {
    var name = document.getElementById("nameInput").value;
    console.log(name);
    var email = document.getElementById("emailInput").value;
    console.log(email);
    // var selectedGender = document.querySelector('input[name="gender"]:checked').value;
    // console.log(selectedGender);
    // var selectedHobbies[] = document.querySelector('input[name="hobbies"]:checked').value;
    // console.log(selectedHobbies);

    if (name == "") {
        alert("Please enter the name");
        return false;

    }
    else if (email == "") {
        alert("Please enter a valid Email")
        return false;
    }
    else {
        alert("Name is: " + name + "\nEmail is: " + email);
        return true;
    }

}