categories();

//Initialize Variables
var date, month, title, desc, url, test, parent, testing, temp;

//Display all videos initially
displayAll();

//function to display all videos
function displayAll() {
    for (i = 0; i < vbsVideos.length; i++) {
        clearFix(i);
        url = vbsVideos[i].src.replace("watch?v=", "v/");
        img = vbsVideos[i].img;
        date = vbsVideos[i].date;
        month = vbsVideos[i].month;
        title = vbsVideos[i].title;
        desc = vbsVideos[i].desc;

        test = '<div class="videos col-md-6 col-sm-12 blog-padding-right"><div class="single-blog two-column"><div class="post-thumb"><a href="videos/details.php?id=' + i + '">' +
                    img + '</a><div class="post-overlay"><span class="uppercase"><a href="#">' +
                    date + ' <br><small>' +
                    month + '</small></a></span></div></div><div class="post-content overflow"><h2 class="post-title bold"><a href="videos/details.php?id=' + i + '">' +
                    title + '</a></h2><h6 style="color:#0099AE;" class="post-author">Brought to you by VBS</h6><p>' +
                    desc + '</p></div></div></div>';

        temp = document.createElement('div');
        temp.setAttribute('class', 'video');

        document.getElementById('lalal').appendChild(temp);
        temp.innerHTML = test;
    }
}

function clearFix(i) {
    if (i && (i % 2 === 0)) {
        var clearIt = document.createElement('div');
        clearIt.setAttribute('class', 'clearfix');
        document.getElementById('lalal').appendChild(clearIt);
    }
}

function passVid() {
    var vidDetails = $('.vidDetails');
    vidDetails.eventListener(function () {
        var url = "details.html?source=" + value;
        $("#YOUR_ID").attr("href", url)
    });
}