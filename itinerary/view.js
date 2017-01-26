//Submit filter "form" without button
function submit_form() {
    document.filterDB.submit();
}

var filterByName = document.getElementById("filterName");

filterByName.addEventListener("change", function () {
    switch (filterByName.value) {
        case 'Ralph':
            console.log("Ralph");
            filterName('Ralph');
            break;
        case 'Dan':
            console.log("Dan");
            filterName('Dan');
            break;
        case 'Brady':
            console.log("Brady");
            filterName('Brady');
            break;
        case 'Abby':
            console.log("Abby");
            filterName('Abby');
            break;
        case 'All':
            filterName('All');
            break;
    }
});

function filterName(n) {
    $("div").filter(".people").hide();
    $("div").filter("." + n).show();

    var people = $(".people");

    if (n == 'All') {
        $("div").filter(".people").show();
        $('#emptyPerson').addClass("hidden");
    }

    else {
        for (i = 0; i < people.length; i++) {
            if ($('.people:visible').length == 0) {
                $('#emptyPerson').removeClass("hidden");
                $('#pInsert').html(n);
            }

            else {
                $('#emptyPerson').addClass("hidden");
            }
        }
    }
}

function moreInfo(a) {
    $(a.children[0].children[2]).toggleClass("hidden");
}