/*
var addBtn =document.querySelector("#addHotel");
var modal =document.querySelector(".model");
var closeBtn=document.querySelector(".close-icon");
addBtn.onclick=function (){
    modal.classList.add("active");
}

closeBtn.addEventListener("click",()=>{
    modal.classList.remove("active");
})*/

document.getElementById('hotelForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Send data to the server or perform CRUD operations here
    console.log(data);
});
