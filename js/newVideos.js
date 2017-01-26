//Initialize Variables
var date, month, title, desc, url, test, parent, testing, temp;

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

//Display all videos initially
displayAll();

function filter(category) {
    //Sort by category selected. By default, "ALL" is selected. 
    function sortByKey(array, key) {
        return array.sort(function (a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

    //Remove active from previous selected category
    var all = document.getElementsByClassName('category')
    for (k = 0; k < all.length; k++) {
        all[k].removeAttribute('class');
    }

    //Add active to current selected category
    var selected = document.getElementById(category);
    selected.setAttribute('class', 'category active');

    var children = document.getElementsByClassName('video');

    //assign results of filter 
    videos = sortByKey(vbsVideos, category);

    //Remove all currently displayed videos
    var clear = document.getElementById('lalal');
    lalal.innerHTML = "     ";

    for (j = 0; j < vbsVideos.length; j++) {
        var counter;
        counter++;
        //if All is selected, select all!
        if (category == 'all') {
            displayAll(counter);
            break;
        }
            //if index in vbsVideos matches the category selected by user, then display them
        if (videos[j].category == category) {
            clearFix(counter);
            img = vbsVideos[j].img;
                date = vbsVideos[j].date;
                month = vbsVideos[j].month;
                title = vbsVideos[j].title;
                desc = vbsVideos[j].desc;

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

                //noVids();
                //not working

        }
        else {
            counter = counter - 1;
        }
    }
}
var counter = 0;
function categoryCount(category, id) {
    counter = 0;
    for (y = 0; y < vbsVideos.length; y++) {
        if (vbsVideos[y].category == category) {
            counter++;
        }
    }

    var count = document.getElementById(id);
    count.innerHTML = "(" + counter + ")";
    return counter;
}

    //Show total video count for all categories 
    
    var categories = document.getElementsByClassName('category');
    for (z = 0; z < categories.length; z++) {
        //computer
        if (categories[z].getAttribute("id") == "computer") {
            categoryCount('computer', 'computerCount');
        }
        //inxsql
        if (categories[z].getAttribute("id") == "inxsql") {
            categoryCount('inxsql', 'inxsqlCount');
        }
        //all
        if (categories[z].getAttribute("id") == "all") {
            for (y = 0; y < vbsVideos.length; y++) {
                counter++;
                }  
            var count = document.getElementById('allCount');
            count.innerHTML = "(" + counter + ")";
        }
        //fasteners  
        if (categories[z].getAttribute("id") == "fastener") {
            categoryCount('fastener', 'fastenerCount');
        }
    }

//Display no video avail if no vids are present for that category 
//not working l;kajsdlkjasldkjasld
//function noVids() {
//        var bullshit = document.getElementById('lalal');
//        if (bullshit.innerHTML != "     " | bullshit.innerHTML == "") {
//            alert('has innerhtml');
//        }

//        else { alert('no innerhtml') };
//}

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
