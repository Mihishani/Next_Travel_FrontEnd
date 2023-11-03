
/*
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
*/


/*-------------------------------------------Crud Operation----------------------------------------------*/

$(document).ready(()=>{
    alert("ssssssssssssssssssssssssss")
    localStorage.setItem("hotelAuthToken",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6IkhvdGVsQWRtaW4iLCJzdWIiOiJVc2VybmFtZSIsImlhdCI6MTY5ODQzMzg2OSwiZXhwIjo0ODUyMDMzODY5fQ.tqSzSCYSfcHkJ_d2BuxSiYmWtMJy4gKby8t2cSSuzB8"))
    localStorage.setItem("packageAuthToken",JSON.stringify("eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6InBhY2thZ2VBZG1pbiIsInN1YiI6InBhY2thZ2VVc2VybmFtZSIsImlhdCI6MTY5ODQ3NjEwNCwiZXhwIjo0ODUyMDc2MTA0fQ.FYCOEGVIe6CONvffvJ290eInLANUmbVsyiEsGCtculM"))
    // $("#hotelId").prop("disabled", true);
   // addTableField();
    packageIds();
});


var regularId = '';
var midrangeId = '';
var luxuryId = '';
var superluxuryId = '';

function packageIds() {
    $.ajax({
        url: "http://localhost:8087/api/v1/package/getAllPackages",
        method: "GET",
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("pac"))
        },
        success: function (response) {
            if (response.statusCode === 200) {
                response.data.forEach(function (packages) {
                    switch (packages.packageCategory) {
                        case "Regular":
                            regularId = packages.packageId;
                            break;
                        case "Mid-level":
                            midrangeId = packages.packageId;
                            break;
                        case "Luxury":
                            luxuryId = packages.packageId;
                            break;
                        case "Super Luxury":
                            superluxuryId = packages.packageId;
                            break;
                    }
                });
                // Do something with the IDs if needed, like updating the UI
            } else {
                swal("OOPS!", "Error: " + response.message, "error");
            }
        },
        error: function (error) {
            swal("OOPS!", "An error occurred while communicating with the server: " + error.responseText, "error");
        }
    });
}


var packageSelected = '';  // this is category type
var packageSelectedId = ''; //this is the package id

$(document).ready(function(){
    $('.form-group #packageId').click(function(){

        var comboBox = document.getElementById("packageId");

        packageSelected = comboBox.options[comboBox.selectedIndex].text;

        switch (packageSelected) {
            case "Regular" :packageSelectedId = regularId;
                break;
            case "Mid-level" :packageSelectedId = midrangeId;
                break;
            case "Luxury" :packageSelectedId = luxuryId;
                break;
            case "Super Luxury" :packageSelectedId = superluxuryId;
                break;
        }
        console.log(packageSelected);
        console.log(packageSelectedId);
        $("#packageIdd").val(packageSelectedId)

    });
});


var petSelected = '';

$(document).ready(function(){
    $('.form-group #isPetsAllowed').click(function(){

        var comboBox = document.getElementById("isPetsAllowed");

        petSelected = comboBox.options[comboBox.selectedIndex].text;

        console.log(petSelected);
    });
});

// save
$(document).ready(() => {
    $(document).on("click", "#submit", () => {
        if (!validator()) {
            return swal("Operation failed!", "Please fill all the fields!", "error")
        }

        setTimeout(() => {
            let hotel = {
                hotelId: "",
                hotelName: $("#hotelName").val(),
                hotelCategory: $("#hotelCategory").val(),
                hotelLocation: $("#hotelLocation").val(),
                hotelContact: $("#hotelContact").val(),
                fullBoardWithACLuxuryRoomDouble: $("#fullBoardWithACLuxuryRoomDouble").val(),
                halfBoardWithACLuxuryRoomDouble: $("#halfBoardWithACLuxuryRoomDouble").val(),
                fullBoardWithACLuxuryRoomTriple: $("#fullBoardWithACLuxuryRoomTriple").val(),
                halfBoardWithACLuxuryRoomTriple: $("#halfBoardWithACLuxuryRoomTriple").val(),
                hotelContactEmail: $("#hotelContactEmail").val(),
                isPetsAllowed: petSelected,
                cancellationCriteria: $("#cancellationCriteria").val(),
                packageId: $("#packageIdd").val()
            }
            console.log(hotel)

            $.ajax({
                url: "http://localhost:8083/api/v1/hotel/hsave",
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("hotelAuthToken"))
                },
                data: JSON.stringify(hotel),
                success: (response) => {
                    if (response.statusCode === 200 || response.statusCode === 201) {
                        addTableField();
                        clearFields();
                        swal("Done!", response.message, "success")
                    } else {
                        return swal("OOPS!", response.message, "error")
                    }
                }, error: (error) => {
                    console.log(error.responseJSON.message)
                    swal("OOPS!", "An error occurred while communicating with the server ! ", "error");
                },
            })
        },5000)
    })
});

// update
$(document).ready(() => {
    $(document).on("click", "#update", () => {
        if (!validator()) {
            return swal("Operation failed!", "Please fill all the fields!", "error")
        }

        setTimeout(() => {
            let hotel = {
                hotelId: "",
                hotelName: $("#hotelName").val(),
                hotelCategory: $("#hotelCategory").val(),
                hotelLocation: $("#hotelLocation").val(),
                hotelContact: $("#hotelContact").val(),
                fullBoardWithACLuxuryRoomDouble: $("#fullBoardWithACLuxuryRoomDouble").val(),
                halfBoardWithACLuxuryRoomDouble: $("#halfBoardWithACLuxuryRoomDouble").val(),
                fullBoardWithACLuxuryRoomTriple: $("#fullBoardWithACLuxuryRoomTriple").val(),
                halfBoardWithACLuxuryRoomTriple: $("#halfBoardWithACLuxuryRoomTriple").val(),
                hotelContactEmail: $("#hotelContactEmail").val(),
                isPetsAllowed: petSelected,
                cancellationCriteria: $("#cancellationCriteria").val(),
                packageId: $("#packageIdd").val()
            }

            $.ajax({
                url: "http://localhost:8083/api/v1/hotel/hput",
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("hotelAuthToken"))
                },
                data: JSON.stringify(hotel),
                success: (response) => {
                    if (response.statusCode === 200 || response.statusCode === 201) {
                        addTableField();
                        clearFields();
                        swal("Done!", response.message, "success")
                    } else {
                        return swal("OOPS!", response.message, "error")
                    }
                }, error: (error) => {
                    swal("OOPS!", "An error occurred while communicating with the server ! ", "error");
                },
            })
        },5000)
    })
});

//search
$(document).ready(() => {
    $(document).on("keydown", "#hotelName", (event) => {

        if (event.key === 'Enter') {
            $.ajax({
                url: "http://localhost:8083/api/v1/hotel/getHotelByHotelName?hotelName=" + $("#hotelName").val(),
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("hotelAuthToken"))
                },
                success: (res) => {
                    console.log(res.data)
                    $("#packageIdd").val(res.data.packageId);

                    if (res.statusCode === 200 || res.statusCode === 201) {
                        $("#hotelId").prop("disabled", false);
                        $("#hotelId").val(res.data.hotelID);
                        $("#hotelId").prop("disabled", true);
                        $("#hotelName").val(res.data.hotelName);
                        $("#hotelCategory").val(res.data.hotelCategory);
                        $("#hotelLocation").val(res.data.hotelLocation);
                        $("#hotelContact").val(res.data.hotelContact);
                        $("#fullBoardWithACLuxuryRoomDouble").val(res.data.fullBoardWithACLuxuryRoomDouble);
                        $("#halfBoardWithACLuxuryRoomDouble").val(res.data.halfBoardWithACLuxuryRoomDouble);
                        $("#fullBoardWithACLuxuryRoomTriple").val(res.data.fullBoardWithACLuxuryRoomTriple);
                        $("#halfBoardWithACLuxuryRoomTriple").val(res.data.halfBoardWithACLuxuryRoomTriple);
                        $("#hotelContactEmail").val(res.data.hotelContactEmail);
                        $("#cancellationCriteria").val(res.data.cancellationCriteria);

                        $("#packageIdd").val(res.data.packageId);
                        return swal("Done!", "success");

                    }
a

                    swal("OOPS!","error");
                    clearFields();

                },
                error: (error) => {
                    swal("OOPS!", "An error occurred while communicating with the server ! ", "error");
                }
            });
        }
    })
});

//delete
$(document).ready(() => {
    $(document).on("keydown", "#name", (event) => {

        if (event.key === 'Enter') {


            $.ajax({
                url: "http://localhost:8083/api/v1/hotel/getHotelByHotelName?hotelName=" + $("#hotelName").val(),
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("hotelAuthToken"))
                },
                success: (res) => {
                    console.log(res.data)
                    if (res.statusCode === 200 || res.statusCode === 201) {
                        $("#hotelId").prop("disabled", false);
                        $("#hotelId").val(res.data.hotelID);
                        $("#hotelId").prop("disabled", true);
                        $("#hotelName").val(res.data.hotelName);
                        $("#hotelCategory").val(res.data.hotelCategory);
                        $("#hotelLocation").val(res.data.hotelLocation);
                        $("#hotelContact").val(res.data.hotelContact);
                        $("#fullBoardWithACLuxuryRoomDouble").val(res.data.fullBoardWithACLuxuryRoomDouble);
                        $("#halfBoardWithACLuxuryRoomDouble").val(res.data.halfBoardWithACLuxuryRoomDouble);
                        $("#fullBoardWithACLuxuryRoomTriple").val(res.data.fullBoardWithACLuxuryRoomTriple);
                        $("#halfBoardWithACLuxuryRoomTriple").val(res.data.halfBoardWithACLuxuryRoomTriple);
                        $("#hotelContactEmail").val(res.data.hotelContactEmail);
                        $("#cancellationCriteria").val(res.data.cancellationCriteria);

                        $("#packageIdd").val(res.data.packageId);
                        return swal("Done!", "success");



                        swal("Done!", "success");

                        $(document).on("click", "#delete", () => {
                            // if (!validator()) {
                            //     return swal("Operation failed!", "Please fill all the fields!", "error")
                            // }

                            if ($("#hotelId").val() === "") {
                                return swal("OOPS!", "Please enter a Vehicle name to delete!", "error");
                            }

                            $.ajax({
                                url: "http://localhost:8083/api/v1/hotel/H_Delete?H_ID=" + $("#hotelId").val(),
                                method: "DELETE",
                                headers: {
                                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("hotelAuthToken"))
                                },
                                success: (res) => {
                                    console.log(res.data)
                                    if (res.statusCode === 200 || res.statusCode === 201) {
                                        addTableField();
                                        clearFields();
                                        return swal("Done!", res.message, "success");


                                    }
                                    swal("OOPS!", res.message, "error");

                                },
                                error: (error) => {
                                    swal("OOPS!", "An error occurred while communicating with the server ! ", "error");
                                }
                            });
                        })

                    }
                    swal("OOPS!","error");
                    clearFields();

                },
                error: (error) => {
                    swal("OOPS!", "An error occurred while communicating with the server ! ", "error");
                }
            });
        }
    })
});


function validator() {
    if ($("#hotelName").val() === "" || $("#hotelCategory").val() === "" || $("#hotelLocation").val() === "" || $("#hotelContact").val() === "" || $("#fullBoardWithACLuxuryRoomDouble").val() === "" || $("#halfBoardWithACLuxuryRoomDouble").val() === "" || $("#fullBoardWithACLuxuryRoomTriple").val() === "" || $("#halfBoardWithACLuxuryRoomTriple").val() === "" || $("#hotelContactEmail").val() === "" || $("#cancellationCriteria").val() === "") {
        return false;
    }
    return true;
}

function clearFields() {
    $("#hotelId").val("");
    $("#hotelName").val("");
    $("#hotelCategory").val("");
    $("#hotelLocation").val("");
    $("#hotelContact").val("");
    $("#fullBoardWithACLuxuryRoomDouble").val("");
    $("#halfBoardWithACLuxuryRoomDouble").val("");
    $("#fullBoardWithACLuxuryRoomTriple").val("");
    $("#halfBoardWithACLuxuryRoomTriple").val("");
    $("#hotelContactEmail").val("");
    $("#cancellationCriteria").val("");
    $("#packageIdd").val("");
}

// $(document).ready(() => {
//     $(document).on("click", "#", () => {
//         clearFields();
//     })
// })

/*function  addTableField(){
    $.ajax({
        url: "http://localhost:8083/api/v1/hotel/getAllHotels",
        method: "GET",
        headers: {
            "Authorization": "Bearer " + JSON.parse(localStorage.getItem("hotelAuthToken"))
        },
        success: (res) => {

            var html = "";
            res.data.forEach(function (hotel , hotelId ,hotelName){
                hotelId = hotel.vehicleID;
                hotelName = hotel.vehicleBrand;


                html += "<tr>";
                html += "<td>" + hotel.hotelId + "</td>";
                html += "<td>" + hotel.hotelName + "</td>";
                html += "<td>" + hotel.hotelCategory + "</td>";
                html += "<td>" + hotel.hotelLocation + "</td>";
                html += "<td>" + hotel.hotelContact + "</td>";
                /!*html += "<td>" + hotel.fullBoardWithACLuxuryRoomDouble + "</td>";
                html += "<td>" + hotel.halfBoardWithACLuxuryRoomDouble + "</td>";
                html += "<td>" + hotel.fullBoardWithACLuxuryRoomTriple + "</td>";
                html += "<td>" + hotel.halfBoardWithACLuxuryRoomTriple + "</td>";*!/
                html += "<td>" + hotel.hotelContactEmail + "</td>";
                html += "<td>" + hotel.isPetsAllowed + "</td>";
                html += "<td>" + hotel.cancellationCriteria + "</td>";
                html += "<td>" + hotel.packageId + "</td>";
                //html += '<td><button onclick="deleteDataa(' + hotelId + ')" class="btn btn-danger">Delete</button><button onclick="UpdateData(' + hotelName + ')" class="btn btn-warning m-2">Edit</button></td>';
                html += "</tr>";
            })

            document.querySelector("#crudTable tbody").innerHTML = html;

        }, error: (error) => {
            swal("OOPS!", "An error occurred while communicating with the server ! ", "error");
        }
    })
}*/

/*
function getCoordinates(){
    axios.get("https://geocode.maps.co/search?q="+$("#name").val())
        .then((res)=>{
            console.log(res.data[0].lat)
            $("#hotelLocationWithCoordinates").val("Latitude : "+res.data[0].lat+',Longitude : '+res.data[0].lon)

        })
        .catch((err)=>{
            console.log(err)
            swal("OOPS! ","An error occurred while fetching coordinates!","error");


        })
}

$(document).on("mouseleave","#name",()=>{
    getCoordinates();
})*/
