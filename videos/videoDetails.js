
// set counter to allow no more than 5 results
var counter = 0;
// get current url
var url = location;
// convert to string
url = String(url);
// remove off id (after '=')
var id = url.split("=").pop();
// global category var
var category = vbsVideos[id].category;

/************* POPULATE VIDEO DETAILS PAGE **************/
function populateDetails() {
    // get current url
    var url = location;
    // convert to string
    url = String(url);
    // remove off id (after '=')
    var id = url.split("=").pop();
    //console.log(id);

    // get json data from ../js/newVideos.js using id
    // for loop, get correct json data
    for (i = 0; i < vbsVideos.length; i++) {
        if (i == id) {
            //alert('match!' + i + ' ' + id);
            // set title of blog page
            var pageTitle = document.getElementsByTagName('title');
            pageTitle[0].innerHTML = vbsVideos[i].title + ' | VBS&trade;';

            // set breadcrumb / title 
            var bcTitle = document.getElementsByClassName('title');
            bcTitle[0].innerHTML = vbsVideos[i].title;

            // set breadcrumb subtitle to category 
            var bcSub = document.getElementsByClassName('subTitle');
            humanizeCat(bcSub);

            // set blog title below video
            var title = document.getElementById('blogTitle');
            title.innerHTML = vbsVideos[i].title;

            // set description
            var desc = document.getElementById('blogDesc');
            desc.innerHTML = vbsVideos[i].desc;

            // set video
            var video = document.getElementById('video');
            var src = vbsVideos[i].src;
            var frame = '<iframe width="775" height="400" src="' + src + '" frameborder="0" allowfullscreen></iframe>'
            video.innerHTML = frame;

        }
    }
}

function humanizeCat(className) {
    // make json category human-friendly
    switch (vbsVideos[i].category) {
        case 'computer':
            className[0].innerHTML = 'General Computer Knowledge';
            break;
        case 'fastener':
            className[0].innerHTML = 'Fastener Information';
            break;
        case 'inxsql':
            className[0].innerHTML = 'INxSQL How-To';
            break;
    }
}

// related video titles to display in right-sidebar
var parent = document.getElementById('related');


/* DISPLAY 5 VIDEOS FROM SAME CATEGORY (MAX 5) */
for (i = parseInt(id)+1; i < vbsVideos.length; i++) {
    if (counter < 5) {
        if (vbsVideos[i].category == category) {
            var li = document.createElement('li');
            li.setAttribute('class', 'next');
            li.setAttribute('id', i);
            li.innerHTML = '<a href="details.php?id=' + i + '">' + vbsVideos[i].title + '</a>';
            var ul = document.getElementById('related');
            ul.appendChild(li);
            counter++;
        }
    }
}

/* IF LESS THAN 5 VIDEOS ARE IN THE DISPLAY PANE, BUT MORE THAN 5 VIDEOS EXIST IN THE CATEGORY, START OVER */
if (parseInt(id) > 5) {
    for (j = 0; j < id; j++) {
        if (counter < 5) {
            if (vbsVideos[j].category == category) {
                var li = document.createElement('li');
                li.setAttribute('class', 'next');
                li.setAttribute('id', j);
                li.innerHTML = '<a href="details.php?id=' + j + '">' + vbsVideos[j].title + '</a>';
                var ul = document.getElementById('related');
                ul.appendChild(li);
                counter++;
            }
        }
    }
}