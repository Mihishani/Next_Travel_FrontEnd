/*
let formBtn = document.querySelector('#addGuide');
let loginForm = document.querySelector('.model');
let formClose = document.querySelector('#close-modal');

window.onscroll =() =>{
    loginForm.classList.remove('active');
}

formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');

});

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');

});
*/
/*strat for control coding*/

var addBtn =document.querySelector("#addGuide");
var modal =document.querySelector(".model");
var closeBtn=document.querySelector(".close-icon");
addBtn.onclick=function (){
    modal.classList.add("active");
}

closeBtn.addEventListener("click",()=>{
    modal.classList.remove("active");
})
/*

var userData=[]
var guideId = document.getElementById("#IdGuide");
var guideName = document.getElementById("#name");
var guideAge = document.getElementById("#guideAge");
var guideAddress = document.getElementById("#guideAddress");
var guideContact = document.getElementById("#guideContact");
var guideExperience = document.getElementById("#guideExperience");
var guideGender = document.getElementById("#guideGender");
var registerButton = document.querySelector("#registerBtn");
var registerForm =document.querySelector("#register-form");
var imgGuideUrl;
var imgIdUrl;
var imgNIC;

registerButton.onclick=function (e){
     registration();
     registerForm.reset('');
     e.preventDefault();
     closeBtn.click();
}

 if (localStorage.getItem("userData")!= null){
     userData = JSON.parse(localStorage.getItem("userData"));
 }

function registration(){
    userData.push({
        IdGuide : guideId.value,
        name : guideName.value,
        guideAge :guideAge.value,
        guideAddress : guideAddress.value,
        guideContact : guideContact.value,
        guideExperience : guideExperience.value,
        guideGender : guideGender.value,
        guideImage : imgGuideUrl == undefined ? "assets/images/_Mx_ Delinquent_ _ Various!Tbhk x reader.jpg" : imgGuideUrl,
        guideId  : imgIdUrl == undefined ?  "assets/images/_Mx_ Delinquent_ _ Various!Tbhk x reader.jpg" : imgIdUrl,
        guideNIC  : imgNIC == undefined ?  "assets/images/_Mx_ Delinquent_ _ Various!Tbhk x reader.jpg" : imgNIC,
    });

    var userString = JSON.stringify(userData);
    localStorage.setItem("userData",userString);
}
var tableData =document.querySelector("#table-data");
 const  getDataFromLocal = ()=>{
     userData.innerHTML="";
     userData.forEach((data,index)=>{
        tableData.innerHTML += `
        <tr index ='${index}'>
            <td>hello world</td>
             <td></td>
             <td></td>
             <td></td> 
             <td></td>
              <td></td> 
              <td></td> 
              <td></td> 
              <td></td> 
               <td></td>
   <td>
                <button><i class="fas fa-eye"></i></button>
                <button style="background-color: red;"><i class="fas fa-trash"></i></button>
            </td>`;
     })
 }

 getDataFromLocal();*/


/*------------------------------------------------Image Processing-------------------------------------------------*/

var GuideImage =document.querySelector("#img1");
var uploadpic =document.querySelector("#inputFile");
uploadpic.onchange=function (){
   /* if (uploadpic.files[0].size < 1000000){
        var fReader = new FileReader();
        fReader.onload=function (e){
            var imgUrl = e.traget.result;
            GuideImage.src=imgUrl;
            console.log(imgUrl);
        }
        fReader.readAsDataURL(uploadpic.files[0]);
    }else {
        alert("File size is to long")
    }*/
    alert();
}