window.onload = function () {
    // alert("working");


    var AddProduct = document.getElementById("container");
    var DataFromLS = JSON.parse(localStorage.getItem("Data"));
    console.log(DataFromLS, "DataFromLS")

    var array = [];

    for (var i = 0; i < DataFromLS.length; i++) {

        array += `<div><h1>${DataFromLS[i].Name}</h1><img src ="${DataFromLS[i].Image}"></img><p>${DataFromLS[i].Price}</p></div>`

    }
    //  console.log(array, "array");
    AddProduct.innerHTML = array;
    console.log(AddProduct, "AddProduct");


}

