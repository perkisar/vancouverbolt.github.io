var myApp = angular.module('videos', []);

myApp.controller('VideoController', ['$scope', function ($scope) {
    $scope.videos = [
        {
            id: 0,
            title: "How To Send a Fax",
            src: 'https://www.youtube.com/embed/mAPOq90T7sA',
            img: 'images/videos/how_to_fax.png',
            desc: "How to send a fax using fax.vancouverbolt.com",
            category: "computer"
        },
        {
            id: 1,
            title: "How To Set Your Default Printer",
            src: 'https://www.youtube.com/embed/06k0cdXSyGk',
            img: 'images/videos/how_to_default_printer.png',
            desc: "How to set your default printer in any version of Windows.",
            category: "computer"
        },
        {
            id: 2,
            title: "How To Setup Out-Of-Office Automatic Email Replies",
            src: 'https://www.youtube.com/embed/ty6cZLf7NLw',
            img: 'images/videos/how_to_auto_reply.png',
            desc: "Going on vacation? Convention? Whatever the reason, setup your e-mail to auto reply!",
            category: "computer"
        },
        {
            id: 3,
            title: "The Exciting World of Fasteners: #1 - Introduction to Fasteners",
            src: 'https://www.youtube.com/embed/WEg04viXVJA',
            img: 'images/videos/fasteners/1.png',
            desc: "",
            category: "fastener"
        },
        {
            id: 4,
            title: "The Exciting World of Fasteners: #2 - Bolt and Screw Threads",
            src: 'https://www.youtube.com/embed/KJkZXVfYObM',
            img: 'images/videos/fasteners/2.png',
            desc: "",
            category: "fastener"
        },
        {
            id: 5,
            title: "The Exciting World of Fasteners: #3 - Hex Head Bolts and Screws",
            src: 'https://www.youtube.com/embed/gn8b7St_9RI',
            img: 'images/videos/fasteners/3.png',
            desc: "",
            category: "fastener"
        },
        {
            id: 6,
            title: "The Exciting World of Fasteners: #4 - Large Externally Threaded Fasteners",
            src: 'https://www.youtube.com/embed/1Km-ed0MhUI',
            img: 'images/videos/fasteners/4.png',
            desc: "",
            category: "fastener"
        },
        {
            id: 7,
            title: "The Exciting World of Fasteners: #5 - Socket Products",
            src: 'https://www.youtube.com/embed/804XAFQfYcs',
            img: 'images/videos/fasteners/5.png',
            desc: "",
            category: "fastener"
        },
        {
            id: 8,
            title: "The Exciting World of Fasteners: #6 - Nuts",
            src: 'https://www.youtube.com/embed/1eOEr6Phlxw',
            img: '../images/videos/fasteners/6.png',
            desc: "",
            category: "fastener"
        },
        {
            id: 9,
            title: "The Exciting World of Fasteners: #7 - Small Screws",
            src: 'https://www.youtube.com/embed/CA_8e4fWCo8',
            img: '../images/videos/fasteners/7.png',
            desc: "",
            category: "fastener"
        },
        {
            id: 10,
            title: "The Exciting World of Fasteners: #8 - Unthreaded Products",
            src: 'https://www.youtube.com/embed/s-NOm19kndg',
            img: '../images/videos/fasteners/8.png',
            desc: "",
            category: "fastener"
        },
        {
            id: 11,
            title: "The Exciting World of Fasteners: #9 - Materials, Coatings, Strength Grades",
            src: 'https://www.youtube.com/embed/FV8WW-MbRXA',
            img: '../images/videos/fasteners/9.png',
            desc: "",
            category: "fastener"
        },
        {
            id: 12,
            title: "The Exciting World of Fasteners:#10 - Metrics",
            src: 'https://www.youtube.com/embed/urByGRskn6c',
            img: '../images/videos/fasteners/10.png',
            desc: "",
            category: "fastener"
        },
    ];
    $scope.categoryCt = [
    {
        computer: countMe(com),
        inxsql: countMe(inx),
        general: countMe(fas),
    }
    ];

    function countMe(category) {
        angular.forEach($scope.videos, function (video) {
            if (video.category == 'computer') {
                com = com + 1;
            }
            if (video.category == 'inxsql') {
                inx = inx + 1;
            }
            if (video.category == 'fasteners') {
                fas = fas + 1;
            }
        }, category);

        console.log(cnt);
        return com;
        return inx;
        return fas;
    }
}]);

