function vlad() {

    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    const genderRadios = document.getElementsByName('gender');
    let selectedGender = 0;

    for (const radio of genderRadios) {
        if (radio.checked) {
          selectedGender = radio.value;
          break;
        }
    }

    console.log(selectedGender);
    

    // return false;

    

    if (name == "") {
        alert("Please enter the name");
        return false;

    }
    else if (email == "") {
        alert("Please enter a valid Email");
        return false;
    }

    else if (selectedGender == "") {
        alert("Please enter gender");
        return false;
    }

    else {
        alert("Name is: " + name + "\nEmail is: " + email);
        return true;
    }

    
    
}


function vladan(){
    var firstName = document.getElementById("fname").value;
    // console.log(firstName);

    var lastName = document.getElementById("lname").value;
    // console.log(lastName);

    var subject = document.getElementById("subject").value;
    // console.log(subject);


    if (firstName == "") {
        alert("Please enter the first name");
        return false;

    }
    else if (lastName == "") {
        alert("Please enter a valid last name");
        return false;
    }

    else if(subject == ""){
        alert("Please enter the text");
        return false;
    }
    else {
        alert("Name is: " + firstName + " " + lastName);
        return true;
    }
}