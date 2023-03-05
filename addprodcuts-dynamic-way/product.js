 window.onload = function () {
    alert("working");


    // var AddProduct = document.getElementById("container");
    // var products = JSON.parse(localStorage.getItem("Data"));
    // console.log(products, "products")

    // var array = [];

    // for (var i = 0; i < products.length; i++) {

    //     array += `<div><h1>${products[i].Name}</h1><img src ="${products[i].Image}"></img><p>${products[i].Price}</p><button onclick = 'addToCart(${JSON.stringify(products[i])})'>Add to cart</button></div>`

    // }
    // //  console.log(array, "array");
    // AddProduct.innerHTML = array;
    // console.log(AddProduct, "AddProduct");
}


// function addToCart(pro) {
//     alert("caled")
//     var product = JSON.stringify(pro);
//     var DataFromLS = JSON.parse(localStorage.getItem("userData"));
//     var currentUser = JSON.parse(localStorage.getItem("current-user"));

//     if (currentUser) {

//         var allusers = [];

//         for (var i = 0; i < DataFromLS.length; i++) {
//             if (DataFromLS[i].email === currentUser["Current-user-email"]) {
//                 // console.log("got user")
//                 var newObj = DataFromLS[i];
//                 newObj["cartProducts"] = newObj["cartProducts"] || [];
//                 newObj["cartProducts"].push(JSON.parse(product));
//                 allusers.push(newObj)
//             }
//             else{
//                 allusers.push(DataFromLS[i])
//             }
//         }
//         // console.log(allusers,"allusers")
//         localStorage.setItem("userData", JSON.stringify(allusers));
//         alert("Product added to the cart")

//     }
//     else{
//         alert("login First to add product into cart");
//     }
// }

