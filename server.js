function register(event) {

    event.preventDefault()
    // getting data from html to js

    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var userData = { name: userName, email: userEmail, password: userPassword }

    //    storing data from LS to JS

    var dataFromLS = JSON.parse(localStorage.getItem("userData")) || [];
    console.log(dataFromLS, "dataFromLS");

    var flag = false;

    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === userEmail) {
            flag = true
        }
    }

    if (flag === true) {
        alert("Email  already present")
    }
    else if (userPassword.length < 1 && userName.length < 1 && userEmail.length < 1) {
        alert("must fill all field")
    }
    else if (userPassword.length < 8) {
        alert("password must be more than 8 digit")
    }
    else {
        dataFromLS.push(userData);
        localStorage.setItem("userData", JSON.stringify(dataFromLS));
        document.getElementById("userName").value = "";
        document.getElementById("userEmail").value = "";
        document.getElementById("userPassword").value = "";
        window.location.href = "/login.html";
        alert("registration done");
    }

}


function login(event){

    alert('Working');
    event.preventDefault();   

  


}