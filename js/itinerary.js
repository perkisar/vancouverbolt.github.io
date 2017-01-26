// THIS IS NOT BEING USED

//Button Event Listeners
var schBtn = document.getElementById("schBtn");
var calBtn = document.getElementById("calBtn");
var btnDiv = document.getElementById("select");
var begin = document.getElementById("begin");
var debug = document.getElementById("debug");

// Var Initialzie for Form Inputs
var acct = document.getElementById('acctName');
var cont = document.getElementById('contName');
var exist = document.getElementById('existAcct');
var cold = document.getElementById('coldCall');
var loc = document.getElementById('location');
var pros = document.getElementById('prospect');
var note = document.getElementById('notes');

// Variables for Sales Itinerary Entry Form Submission
var dayBtns = document.getElementsByClassName('driverBtn');
var mon = document.getElementById('mon');
var tue = document.getElementById('tue');
var wed = document.getElementById('wed');
var thu = document.getElementById('thu');
var fri = document.getElementById('fri');
var day;

schBtn.addEventListener("click", function () {
    hideBtn();
    showSchedule();
});

calBtn.addEventListener("click", function () {
    hideBtn();
    showCalendar();
});

debug.addEventListener("click", function () {
    showForm();
});

window.addEventListener("hashchange", function (e) {
    location.reload();
})

//Submit Button on Step One of Entering a Schedule
begin.addEventListener("click", function () {
    getRadioBtn();
});

function hideBtn() {
    schBtn.setAttribute("class", "hidden");
    calBtn.setAttribute("class", "hidden");
    btnDiv.setAttribute("class", "hidden");
}

function showSchedule() {
    showHTML('.schedule');
}

function showCalendar() {
    showHTML('.calendar');
}

//Shows start up page for sales form - hidden because dev is not finished.
function showForm() {
    $('#calendar').removeClass('hidden');
    $('#nono').addClass('hidden');
}

// removes class="hidden" from element passed in by param
function showHTML(elem) {
    var target = document.getElementById(elem);
    //jQuery - Could not figure out simple vanilla JS solution
    $(elem).removeClass('hidden');
}

function hideHTML(elem) {
    var target = document.getElementById(elem);
    $(elem).addClass('hidden');
}

// Disable/Enable Other Name Text Box Depending on which radio button is selected
function disableTxt() {
    document.getElementById("otherName").disabled = true;
    $("#otherName").attr("placeholder", "   ").val("").focus().blur();
}
function enableTxt() {
    document.getElementById("otherName").disabled = false;
    $('#otherName').attr("placeholder", "Type Name...").val("").focus().blur();
}

function getRadioBtn() {
    var names = document.getElementsByName('name');
    var name = $('#otherName').val()
    for (i = 0; i < names.length; i++) {
        if (document.getElementById('btn' + i).checked) {
            //alert selected radio button test
            //alert(names[i].value);
            if (names[i].value == "Other") {
                if (name != null && name != "") {
                    showEntryForm(name);
                    console.log(name);
                    localStorage.setItem("name", names[i].value);
                    return name;
                    break;
                }

                else {
                    displayWarning('nameWarning', 'Please input your name in the text field.');                         
                }
            }

            else {
                //Store Selected Radio Button for Later Submission
                showEntryForm(names[i].value);
                console.log(names[i].value)
                localStorage.setItem("name", names[i].value);
                break;
            }
        }

        else {
            displayWarning('nameWarning', 'Please select your name above. If you do not see your name, <br/>select "Other" and input your name manually.');
        }
    }
}

function showEntryForm(name) {
    hideHTML($('.schedule'));
    showHTML($('#entryForm'));
}

// Event Listeners for Days of the Week Buttons
mon.addEventListener("click", function () {
    day = 'Monday';
    disableBtn(mon);
    return day;
});

tue.addEventListener("click", function () {
    day = 'Tuesday';
    disableBtn(tue);
    return day;
});

wed.addEventListener("click", function () {
    day = 'Wednesday';
    disableBtn(wed);
    return day;
});

thu.addEventListener("click", function () {
    day = 'Thursday';
    disableBtn(thu);
    return day;
});

fri.addEventListener("click", function () {
    day = 'Friday';
    disableBtn(fri);
    return day;
});

// Used to disable other buttons. Now only highlights current button.
function disableBtn(active) {
    for (j = 0; j < dayBtns.length; j++) {
        dayBtns[j].setAttribute("style", "");
        dayBtns[j].setAttribute("class", "driverBtn btn btn-default");
        active.setAttribute("style", "background-color:#0099ae;color:#fff;border:1px solid #0099ae;");
    }
    // Local Storage of Var
    localStorage.setItem("day", day);
}

var warningFields = "";

function inputValidation() {
    if (day == null) {
        for (l = 0; l < dayBtns.length; l++) {
            inputRequired(dayBtns[l]);
        }
        blah = "NO";
        return blah;
    }

    if (acct.value == "") {
        inputRequired(acct);
        blah = "NO";
        return blah;
    }

    if (cont.value == "") {
        inputRequired(cont);
        blah = "NO";
        return blah;
    }

    if (loc.value == "") {
        inputRequired(loc);
        blah = "NO";
        return blah;
    }

    if (pros.value == "") {
        inputRequired(pros);
        blah = "NO";
        return blah;
    }

}

// Handler for clearing required text and styles when input it focused
acct.addEventListener("click", function () {
    removeWarn(acct);
});

cont.addEventListener("click", function () {
    removeWarn(cont);
});
loc.addEventListener("click", function () {
    removeWarn(loc);
});
pros.addEventListener("click", function () {
    removeWarn(pros);
});

function displayWarning(textId, warningTxt) {
    //textId = HTML element id for insertion
    //warningTxt = defined by caller, text to be inserted

    document.getElementById(textId).innerHTML = '<div class="alert alert-danger fade in">' +
    '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
    '<p>'+ warningTxt +'</p></div>';
}

function inputRequired(elem) {
    $(elem).addClass('warnBorder');
    var p = elem.getAttribute('placeholder');
    if (p == "Account Name" || p == "Contact Name" || p == "Location" || p == "Prospect") {
        $(elem).attr('placeholder', elem.getAttribute('placeholder') + ' *** REQUIRED ***');
    }
}

function removeWarn(elem) {
    $(elem).removeClass('warnBorder');
    //$(elem).attr('placeholder', elem.getAttribute('placeholder').substring(0, elem.getAttribute('placeholder').length - 17));
    if (elem.id == 'acctName') {
        result = 'Account Name';
    }
    
    if (elem.id == 'contName') {
        result = 'Contact Name';
    }
    
    if (elem.id == 'location') {
        result = 'Location';
    }
    
    if (elem.id == 'prospect') {
        result = 'Prospect';
    }

    $(elem).attr('placeholder', result);
}

// Use these values to POST with AJAX! 
function showVars() {
    console.log("Name: " + localStorage.getItem("name"));
    console.log("Day: " + day);
    console.log("Account Name: " + acct.value);
    console.log("Contact Name: " + cont.value);
    console.log("Location: " + loc.value);
    console.log("Prospect: " + pros.value);
    console.log("Optional Notes: " + note.value);

    var acctType = document.getElementById('acctType');


    // handling checkboxes
    if (exist.checked == true) {
        $('#acctType').value = 'Existing Account';
        console.log("Account Type: " + 'Existing Account');
        acctType.value = 'Existing Account';
    }

    if (cold.checked == true) {
        $('#acctType').value = 'Cold Call';
        console.log("Account Type: " + 'Cold Call');
        acctType.value = 'Cold Call';
    }

    if (cold.checked == true && exist.checked == true) {
        alert("Select EITHER cold call or existing account");
    }

    if (cold.checked == false && exist.checked == false) {
        alert("Select either cold call or existing account");
    }
}

// Submission Buttons
var cancel = document.getElementById('cancel');
var complete = document.getElementById('complete');
var submit = document.getElementById('submit');
var blah;

// Event Listeners for Form Submission
cancel.addEventListener("click", function () {
    location.reload();
});

complete.addEventListener("click", function () {
    inputValidation(blah);
    showVars();

    // if all inputs are validated
    if (blah != "NO") {
        php();
    }
});

submit.addEventListener("click", function () {
    inputValidation(blah);
    showVars();
    doItNow();

});

function getNames() {
    var name = localStorage.getItem('name');
    var acctName = acct.value;
    var contName = cont.value;
    var location = loc.value;
    var prospect = pros.value;
    var notes = note.value;
    console.log(name, acctName, contName, location, prospect, notes);
    return name, acctName, contName, location, prospect, notes;
}

function doItNow() {
    getNames();
    $.ajax({
        type: "POST",
        url: 'php/addEntry.php',
        data: name, acctName, acctType, location, prospect, notes,
        success: function () {

        },

        error: function () {
            alert("error");
            console.log('javascript error');
        }
        
    });
}

function php(blah) {
    document.getElementById("salesForm").submit;
}