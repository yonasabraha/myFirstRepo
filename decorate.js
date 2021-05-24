function hello() {
    alert("Hello, World!");
}

function interval() {
    var id = setInterval(enlargeText, 1000);
    setTimeout(clearInterval, 5000, id);
}

function enlargeText() {
    var prop = window.getComputedStyle(document.getElementById("textarea")).fontSize;
    newProp = parseInt(prop) + 2 + "pt";
    document.getElementById("textarea").style.fontSize = newProp;
}

function boldText() {
    if (document.getElementById("bling").checked == true) {
        document.getElementById("textarea").style.fontWeight = "bold";
        document.getElementById("textarea").style.color = "red";
        document.getElementById("textarea").style.textDecoration = "underline";
        document.body.style.backgroundImage ="url('university1.jpg')";
    } else {
        document.getElementById("textarea").style.fontWeight = "";
        document.getElementById("textarea").style.color = "";
        document.getElementById("textarea").style.textDecoration = "";
        document.body.style.backgroundImage = "Url('university2.jpg')";

    }
}

function pig() {
    var words = document.getElementById("textarea").value;
    var splittedword = words.split(/\s+/);
    var result = "";
    for (var i = 0; i < splittedword.length; i++) {
        if (splittedword[i].charAt(0).match("[aeoiuAEOIU]")) {
            changed = splittedword[i] + "ay";
        } else {
            var word = splittedword[i];
            for (var j = 0; j < word.length; j++) {
                if (word[j].match("[aeoiuAEOIU]")) {
                    var changed = word.substring(j) + word.substring(0, j) + "ay";
                    break;
                }

            }
        }
        result += changed + " ";

    }
    document.getElementById("textarea").value = result;

}

function markov() {
    var words = document.getElementById("textarea").value;
    var arr = words.split(/\s+/);
    var result = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            arr[i] = "Malkovich";
        }
        result += arr[i] + " ";
    }
    document.getElementById("textarea").value = result;
}