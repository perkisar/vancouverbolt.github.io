
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var target = document.getElementById('alphabet');
    for (i = 0; i < 25; i++) {

        var newLink = document.createElement('li');
        target.appendChild(newLink);
        newLink.innerHTML = "<a href='#" + alphabet[i] + "'>" + alphabet[i] + "</a> - ";
    }

    var newLink = document.createElement('li');
    target.appendChild(newLink);
    newLink.innerHTML = "<a href='#" + alphabet[25] + "'>" + alphabet[25] + "</a>";
    

    //alert(alphabet);
    //alert(newLink);
    //alert(target);
 