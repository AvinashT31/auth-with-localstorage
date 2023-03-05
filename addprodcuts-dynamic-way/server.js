
function AddProduct(){

    alert("working")

   var ProductName = document.getElementById("Name").value;
   var ProductImage = document.getElementById("Image").value;
   var ProductPrice = document.getElementById("Price").value;

   var Data = {Name : ProductName, Image : ProductImage, Price : ProductPrice}
//    console.log(Data, "Data");


   var DataFromLS = JSON.parse(localStorage.getItem("Data")) || [];
   document.getElementById("Name").value = '';
   document.getElementById("Image").value = '';
   document.getElementById("Price").value = '';
   DataFromLS.push(Data);
   console.log(DataFromLS, "DataFromLS");
   localStorage.setItem("Data", JSON.stringify(DataFromLS));


}