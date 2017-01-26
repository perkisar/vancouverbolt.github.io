function categories() {
    // Category Page Event Handlers (and vars)
    var catAll = document.getElementById('all');
    var catComp = document.getElementById('computer');
    var catxSQL = document.getElementById('inxsql');
    var catFast = document.getElementById('fastener');

    catAll.addEventListener("click", function () {
        getPage('all');
    });
    catComp.addEventListener("click", function () {
        getPage('computer');
    });
    catxSQL.addEventListener("click", function () {
        getPage('inxsql');
    });
    catFast.addEventListener("click", function () {
        getPage('fastener');
    });
}

function getPage(id) {
    var pathname = window.location.pathname;

    if (pathname == '/test/videos.html' || pathname == '/videos.html') {
        if (id == 'all') {
            window.location.href = 'videos.html';
        }

        else if (id == 'computer') {
            window.location.href = 'videos/computer/';
        }

        else if (id == 'inxsql') {
            window.location.href = 'videos/inxsql/';
        }

        else if (id == 'fastener') {
            window.location.href = 'videos/fastener/';
        }
        else {
            alert('something went wrong. Please contact your web administrator: webmin@vancouverbolt.com');
        }
    }

    if (pathname == '/videos/computer/' || pathname == '/videos/inxsql/' || pathname == '/videos/fastener/') {
        if (id == 'all') {
            window.location.href = '../../videos.html';
        }

        else if (id == 'computer') {
            window.location.href = '../computer/';
        }

        else if (id == 'inxsql') {
            window.location.href = '../inxsql/';
        }

        else if (id == 'fastener') {
            window.location.href = '../fastener/';
        }
        else {
            alert('something went wrong. Please contact your web administrator: webmin@vancouverbolt.com');
        }
    }

    if (pathname == '/test/videos/computer/' || pathname == '/test/videos/inxsql/' || pathname == '/test/videos/fastener/') {
        if (id == 'all') {
            window.location.href = '../../videos.html';
        }

        else if (id == 'computer') {
            window.location.href = '../computer/';
        }

        else if (id == 'inxsql') {
            window.location.href = '../inxsql/';
        }

        else if (id == 'fastener') {
            window.location.href = '../fastener/';
        }
        else {
            alert('something went wrong. Please contact your web administrator: webmin@vancouverbolt.com');
        }
    }
}

