var vbsVideos = 
     [
        {
            "title": "How To Send a Fax",
            "src": '<iframe width="854" height="215" src="https://www.youtube.com/watch?v=mAPOq90T7sA" frameborder="0" allowfullscreen></iframe>',
            "desc": "How to send a fax using fax.vancouverbolt.com",
            "category": "computer",
            "month": "",
            "date": "",
            "keywords": [
                "send", "fax"
            ]
        },
        {
            "title": "How To Set Your Default Printer",
            "src": '<iframe width="854" height="215" src="https://www.youtube.com/watch?v=06k0cdXSyGk" frameborder="0" allowfullscreen></iframe>',
            "desc": "How to set your default printer in any version of Windows.",
            "category": "computer",
            "month": "",
            "date": "",
            "keywords": [
                "default", "printer", "set"
            ]
        },
        {
            "title": "How To Setup Out-Of-Office Automatic Email Replies",
            "src": '<iframe width="854" height="215" src="https://www.youtube.com/watch?v=ty6cZLf7NLw" frameborder="0" allowfullscreen></iframe>',
            "desc": "Going on vacation? Convention? Whatever the reason, if you want to set up your e-mail to automatically reply under certain parameters, follow this video to find out how to do it!",
            "category": "computer",
            "month": "",
            "date": "",
            "keywords": [
                "automatic", "email", "response", "out of office"
            ]
        },
    ]


var date, month, title, desc, url, test, parent, testing, temp;


for (i = 0; i < vbsVideos.length; i++) {
    console.log(vbsVideos[i])
    url = vbsVideos[i].src.replace("watch?v=", "v/");
    date = vbsVideos[i].date;
    month = vbsVideos[i].month;
    title = vbsVideos[i].title;
    desc = vbsVideos[i].desc;


    
    test = '<div class="videos col-md-6 col-sm-12 blog-padding-right"><div class="single-blog two-column"><div class="post-thumb"><a href="blogdetails.html">' +
                url + '</a><div class="post-overlay"><span class="uppercase"><a href="#">' +
                date + ' <br><small>' +
                month + '</small></a></span></div></div><div class="post-content overflow"><h2 class="post-title bold"><a href="blogdetails.html">' +
                title + '</a></h2><h6 style="color:#0099AE;" class="post-author">Brought to you by VBS</h6><p>' +
                desc + '</p></div></div></div>';
                


    temp = document.createElement('div');
    temp.setAttribute('class', 'video');
    
    document.getElementById('lalal').appendChild(temp);
    temp.innerHTML = test;
}


//Filter By Category
//var all = document.getElementById('all');
var categories = document.getElementsByClassName('category');

function filter(category) {
    //alert(category);

    var cat = category;

    for (i = 0; i < categories.length; i++) {
        categories[i].attributes.removeNamedItem('class');
    }

    all.removeAttribute('class');
    var selected = document.getElementById(category);
    selected.setAttribute('class', 'category active');

    var clear = document.getElementById('lalal');
    var children = document.getElementsByClassName('video');
    
    // had to put this twice for it to work. have no idea why.
    try {
        for (i = 0; i <= children.length; i++) {
            clear.removeChild(children[i]);
        }
        for (i = 0; i <= children.length; i++) {
            clear.removeChild(children[i]);
        }
    }

    catch (ex) { }

    //Display NEW Videos Under Category
    for (i = 0; i < vbsVideos.length; i++) {
        //alert(vbsVideos.videos[i].category);
        var current = vbsVideos.category;

        //not working
        //if (current = category) {
        //    alert('match');
        //}
    }


    function sortByKey(array, key) {
        return array.sort(function (a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }
    
    videos = sortByKey(vbsVideos, 'category');
    alert(videos);

}