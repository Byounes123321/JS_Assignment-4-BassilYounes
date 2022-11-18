
window.onload = pageLoaded;
function pageLoaded() {
    //create variables for the form elements
    var formHandle = document.forms.ixdForm
    formHandle.onsubmit = formSubmit;

    var header = document.getElementById("welcome");
    var hidnMsg = document.getElementById("result");

    //create function for the form submit
    function formSubmit() {

        //create variables for the form elements
        var fName = formHandle.f__fName;
        console.log(fName.value);

        var lName = formHandle.f__lName
        console.log(lName.value);

        var sId = formHandle.f__id;

        console.log(sId.value);

        var progrm = formHandle.f__program;
        console.log(progrm.value);


        var online = document.getElementById("in_online").checked;
        console.log(online);

        var inperson = document.getElementById("in_person").checked;
        console.log(inperson);


        var restaurant = document.getElementById("in_restaurant").checked
        console.log(restaurant);

        var humber = document.getElementById("in_humber").checked;
        console.log(humber);

        var self = document.getElementById("in_self").checked;
        console.log(self);

        //form validation for the first name
        if (fName.value == "") {

            fName.style.backgroundColor = "red";
            fName.focus();

            return false;
        }
        else {
            fName.style.backgroundColor = "white";
        }

        //form validation for the last name
        if (lName.value == "") {

            lName.style.backgroundColor = "red";
            lName.focus();

            return false;
        }
        else {
            lName.style.backgroundColor = "white";
        }

        //Regex for the student id validation
        var humberId = /(n|N)\d{8}$/;
        console.log(humberId.test(sId));
        if (!humberId.test(sId.value)) {

            sId.style.backgroundColor = "red";
            sId.focus();

            return false;
        }
        else {
            sId.style.backgroundColor = "white";
        }


        //form validation for the program
        if (progrm.value == "X") {

            progrm.style.backgroundColor = "red";
            progrm.focus();

            return false;
        }
        else {
            progrm.style.backgroundColor = "white";
        }

        //form validation for the delivery method
        if (online == false && inperson == false) {
            document.getElementById("caption_deliver").style.backgroundColor = "red";

            return false;
        }
        else {
            document.getElementById("caption_deliver").style.backgroundColor = "white";
        }

        //form validation for the project
        if (restaurant == false && humber == false && self == false) {

            document.getElementById("caption_project").style.backgroundColor = "red";
            document.getElementById("caption_project").focus();

            return false;
        }
        else {
            document.getElementById("caption_project").style.backgroundColor = "white";
        }

        //program selection output
        var program = "";
        switch (progrm.value) {
            case "WD":
                program = "Web Development"
                break;
            case "CS":
                program = "Content Strategy"
                break;
            case "UX":
                program = "User Experience Design"
                break;
        }

        //Delivery method validation
        var delivery = "";
        if (online == true) {
            delivery = "online"
        } else {
            delivery = "in person"
        }
        //Project selection output
        var project = "";
        if (restaurant == true) {
            project = "LEGO "
        } else if (humber == true) {
            project = "Humber Current ";
        } else {
            project = "Self-determined ";
        }



        //output the results to the page
        document.getElementById("result__Fname").innerHTML = "<strong>" + fName.value + "</strong>";

        document.getElementById("result__Lname").innerHTML = "<strong>" + lName.value + "</strong>";

        document.getElementById("result__id").innerHTML = "<strong>" + sId.value + "</strong>";

        document.getElementById("result__program").innerHTML = "<strong>" + program + "</strong>";

        document.getElementById("result__delivery").innerHTML = "<strong>" + delivery + "</strong>";

        document.getElementById("result__project").innerHTML = "<strong>" + project + "</strong>";


        //hide the form and show the results
        header.style.display = "none";
        formHandle.style.display = "none";
        hidnMsg.style.display = "inline";

        return false
    };
};
