var addBtn =document.querySelector("#addGuide");
var modal =document.querySelector(".model");
var closeBtn=document.querySelector(".close-icon");
addBtn.onclick=function (){
    modal.classList.add("active");
}

closeBtn.addEventListener("click",()=>{
    modal.classList.remove("active");
})