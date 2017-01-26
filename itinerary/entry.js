// Var Initialzie for Form Inputs
var name = document.getElementById('name');
var day = document.getElementById('day');
var type = document.getElementById('acctType');
var acct = document.getElementById('acctName');
var cont = document.getElementById('contName');
var exist = document.getElementById('existAcct');
var cold = document.getElementById('coldCall');
var loc = document.getElementById('location');
var pros = document.getElementById('prospect');
var note = document.getElementById('notes');

// Clear alerts on input focus 
acct.addEventListener("click", function () {
    removeAlert();
});
cont.addEventListener("click", function () {
    removeAlert();
});
exist.addEventListener("click", function () {
    removeAlert();
});
cold.addEventListener("click", function () {
    removeAlert();
});
loc.addEventListener("click", function () {
    removeAlert();
});
pros.addEventListener("click", function () {
    removeAlert();
});
note.addEventListener("click", function () {
    removeAlert();
});

function removeAlert() {
    $('#entrySuccess').attr("class", "hidden");
    $('#entryFailure').attr("class", "hidden");
}

