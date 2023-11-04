
function RegisterUser(){
    let  name= $("#name").val();
    let  userRole= $("#userRole").val();
    let  userName= $("#userName").val();
    let  userEmail= $("#userEmail").val();
    let  userPassword= $("#userPassword").val();
    let  userNIC= $("#userNIC").val();
    let  userAddress =$("#userAddress").val();
    let  userAge= $("#userAge").val();
    let  userPhone= $("#userPhone").val();
    let  userImageLocation= $("#userImageLocation").val();
    let  gender= $("#gender").val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/auth/getAuth",
        async:true,
        data:JSON.stringify({
            "userId":"",
           "name":name,
            "userRole":userRole,
            "userName":userName,
            "userEmail":userEmail,
            "userPassword":userPassword,
            "userNIC":userNIC,
            "userAddress":userAddress,
            "userAge":userAge,
            "userPhone":userPhone,
            "userImageLocation":userImageLocation,
            "gender":gender
        }),
        success:function(data){
            alert("saved")
        },
        error:function (xhr,exeception){
            alert("Error")
        }
    })
}
