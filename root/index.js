function d(id) {
    return document.getElementById(id);
}
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
var currentPage = "main";
(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyAqVe2qYW9YBMfUCiNWFltUI9rUQ57Xdf4",
        authDomain: "the-carbon-calculator.firebaseapp.com",
        projectId: "the-carbon-calculator",
        storageBucket: "the-carbon-calculator.appspot.com",
        messagingSenderId: "825429602688",
        appId: "1:825429602688:web:3349a586ea89c48ac31165",
        measurementId: "G-2TB1T540WQ"
    };

    var app = firebase.initializeApp(firebaseConfig);
    setTimeout(function () {
        d("title-wrap").style.transform = "translate(-50%, -50%)";
        d("title-wrap").style.opacity = 1;
        d("bottomBanner").style.transform = "translateY(0)";
        d("title-button").addEventListener("click", function () {
            //d("bottomBanner").style.transform = "translateY(50%)";
            if (validateEmail(d("email").value) == null) {
                alert("Please enter a valid email")
            } else {
                d("title-wrap").style.transform = "translate(-50%, -70%)";
                d("title-wrap").style.opacity = 0;
                setTimeout(function () {
                    d("title-wrap").remove();
                }, 300)
                d("loading-wrap").style.transform = "translate(-50%, -50%)";
                d("loading-wrap").style.opacity = 1;
                setTimeout(function () {
                    document.querySelectorAll("a").forEach(function (elem) {
                        elem.addEventListener("click", function (e) {
                            console.log("hi")
                            d(currentPage + "-wrap").style.transform = "translate(-50%, -70%)";
                            d(currentPage + "-wrap").style.opacity = 0;
                            d(currentPage + "-wrap").style.visibility = "hidden";
                            switch (e.target.getAttribute("link")) {
                                case "home":
                                    d("dashboard-wrap").style.transform = "translate(-50%, -50%)";
                                    d("dashboard-wrap").style.opacity = 1;
                                    d("dashboard-wrap").style.visibility = "visible";
                                    currentPage = "dashboard";
                                    break;
                                case "electrical":
                                    d("electric-wrap").style.transform = "translate(-50%, -50%)";
                                    d("electric-wrap").style.opacity = 1;
                                    d("electric-wrap").style.visibility = "visible";
                                    currentPage = "electric";
                                    break;
                                case "vehicle":
                                    d("vehicle-wrap").style.transform = "translate(-50%, -50%)";
                                    d("vehicle-wrap").style.opacity = 1;
                                    d("vehicle-wrap").style.visibility = "visible";
                                    currentPage = "vehicle";
                                    break;
                                case "food":
                                    alert("This feature has not been implemented yet")
                                    break;
                            }
                        })
                    })
                    d("loading-wrap").style.transform = "translate(-50%, -70%)";
                    d("loading-wrap").style.opacity = 0;
                    currentPage = "dashboard";
                    document.querySelectorAll(".dashboard-center-button").forEach(function (button) {
                        button.addEventListener("click", function (e) {
                            d("dashboard-wrap").style.transform = "translate(-50%, -70%)";
                            d("dashboard-wrap").style.opacity = 0;
                            d("dashboard-wrap").style.visibility = "hidden";
                            d(e.target.closest(".dashboard-center-button").getAttribute("type") + "-wrap").style.transform = "translate(-50%, -50%)";
                            d(e.target.closest(".dashboard-center-button").getAttribute("type") + "-wrap").style.opacity = 1;
                            d(e.target.closest(".dashboard-center-button").getAttribute("type") + "-wrap").style.visibility = "visible";
                            currentPage = e.target.closest(".dashboard-center-button").getAttribute("type");
                            $(document).on('change', 'input', function () {
                                var options;
                                switch ($(this)[0]) {
                                    case d("vehicle-makes-input"):
                                        options = $('#vehicle-makes')[0].options;
                                        break;
                                    case d("vehicle-models-input"):
                                        options = $('#vehicle-models')[0].options;
                                        break;
                                    default:
                                        options = [];
                                }
                                for (var i = 0; i < options.length; i++) {
                                    if (options[i].value == $(this).val()) {
                                        switch ($(this)[0]) {
                                            case d("vehicle-makes-input"):
                                                $.ajax({
                                                    url: "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/" + $(this).val() + "?format=json",
                                                    type: "GET",
                                                    dataType: "json",
                                                    success: function (models) {
                                                        for (var i = 0; i < models.Results.length; i++) {
                                                            var option = document.createElement("option")
                                                            option.value = models.Results[i].Model_Name;
                                                            d("vehicle-models").appendChild(option)
                                                        }
                                                        d("vehicle-models-input").disabled = false;
                                                    },
                                                    error: function (xhr, ajaxOptions, thrownError) {
                                                        console.log(xhr.status);
                                                        console.log(thrownError);
                                                    }
                                                });
                                                break;
                                            case d("vehicle-models-input"):
                                                d("vehicle-years-input").disabled = false;
                                                break;
                                        }
                                        break;
                                    }
                                }
                            });
                            switch (e.target.closest(".dashboard-center-button").getAttribute("type")) {
                                case "electric":
                                    d("electric-button").addEventListener("click", function() {
                                        if (d("electric-location").value !== "" && d("electric-hours").value !== "") {
                                            console.log(electricalRegCarbon(d("electric-location").value, d("electric-hours").value))
                                        } else {
                                            alert("Please enter all fields");
                                        }
                                    })
                                    break;
                                case "vehicle":
                                    $.ajax({
                                        url: "https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json",
                                        type: "GET",
                                        dataType: "json",
                                        success: function (result) {
                                            for (var i = 0; i < result.Results.length; i++) {
                                                var option = document.createElement("option")
                                                option.value = result.Results[i].Make_Name;
                                                option.setAttribute("makeid", result.Results[i].Make_ID)
                                                d("vehicle-makes").appendChild(option)
                                            }

                                            d("vehicle-makes-input").disabled = false;
                                        },
                                        error: function (xhr, ajaxOptions, thrownError) {
                                            console.log(xhr.status);
                                            console.log(thrownError);
                                        }
                                    });
                                    break;
                                case "food":

                                    break;
                            }
                            d("dashboard-nav").style.transform = "translateY(0)";
                            d("dashboard-nav").style.opacity = 1;
                            d("vehicle-button").addEventListener("click", function () {
                                if (d("vehicle-makes-input").value !== "" && d("vehicle-models-input").value !== "" && d("vehicle-years-input").value !== "" && d("vehicle-miles-driven").value !== "" && $('#fueltype option:selected') !== false) {
                                    $.getJSON("https://www.carqueryapi.com/api/0.3/?callback=?", { cmd: "getTrims", model: d("vehicle-models-input").value }, function (data) {

                                        //The 'data' variable contains all response data.
                                        $.getJSON("https://www.carqueryapi.com/api/0.3/?callback=?", { cmd: "getModel", model: data.Trims[0].model_id }, function (data) {

                                            //The 'data' variable contains all response data.
                                            var carbon = tradVehicCarbon(d("fueltype").value, data[0].model_mpg_mixed, d("vehicle-miles-driven").value)
                                            alert("Your trip emitted " + carbon + " carbon tonnes!")
                                        });
                                    });
                                } else {
                                    alert("Please fill out all fields");
                                }
                            })
                        })
                    })
                    setTimeout(function () {
                        d("loading-wrap").remove();
                    }, 300)
                    d("dashboard-wrap").style.transform = "translate(-50%, -50%)";
                    d("dashboard-wrap").style.opacity = 1;
                    d("dashboard-wrap").style.visibility = "visible";
                }, 1500)
            }
        })
    }, 500)
})();