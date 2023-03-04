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
    event.preventDefault(event);
    var userEmail =document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;

    var dataFromLs =JSON.parse(localStorage.getItem("userData"));

    var flag= false;

    for (var i=0 ; i< dataFromLs.length ; i++){
        if(dataFromLs[i].email === userEmail  && dataFromLs[i].password === userPassword){
            flag =true;
        }
    }

    if(flag){
        document.getElementById("email").value ="";
        document.getElementById("password").value ="";
        window.location.href="/home.html";
        alert("Login sucessful");
    }
    else{
        alert("Email or Password does not match");
    }

}

var GettingEmail;

function forgetPassword(){
    // alert('working');

    var UserEmail = document.getElementById("email").value;
    GettingEmail = UserEmail;

    var DataFromLS = JSON.parse(localStorage.getItem("userData"));
   

    var flag = false;

    for(var i =0; i < DataFromLS.length; i++){
        if(DataFromLS[i].email === UserEmail){
            flag = true;
        }
    }

    if(flag === true){
       var newCode = `<input type="password" id="password"/><br><button onclick = "newPassword()">Set New Password</button>`
       var divFromHTML = document.getElementById("change");
       divFromHTML.innerHTML = newCode;
       alert(" Now Set new Password")
    }
    else{
        alert("please check your email");
    }
  
}


function newPassword(){

    // event.preventDefault();
    // alert("Worked");

    var userPassword = document.getElementById("password").value;
    console.log(userPassword, "userPassword");
    var dataFromLS = JSON.parse(localStorage.getItem("userData"));
    console.log(dataFromLS, "dataFromLS");

    for(var i=0; i < dataFromLS.length; i++){
        if(dataFromLS[i].email === GettingEmail){
            dataFromLS[i].password = userPassword;
        }
    }
    // console.log(dataFromLS, "data");

    localStorage.setItem("userData", JSON.stringify(dataFromLS));
    GettingEmail = '';
    window.location.href = "/login.html";
    alert("password Change Successfully");

}


