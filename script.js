var box = document.querySelector(".box");
var wordcount = document.querySelector(".wordcount");
var charcount = document.querySelector(".charcount");
var uniquecount = document.querySelector(".uniquecount");
//give space
box.addEventListener("input", countNow);
//give space
function countNow() {
    var boxValue = box.value.trim();
    var words = boxValue === "" ? 0 : boxValue.split(/\s+/).length;
    var characters = boxValue.length;
    var uniqueWords = new Set(boxValue.match(/\b\w+\b/g)).size;

    wordcount.innerHTML = "Word : " + words;
    charcount.innerHTML = "Character count : " + characters;
    uniquecount.innerHTML = "Unique counts : " + uniqueWords;
}