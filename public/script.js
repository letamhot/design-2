function checkbox() {
    var checkBox = document.getElementById("checkbox");
    if (checkBox.checked) {
        document.getElementById("basic").innerHTML = "<span class='dollar'>&dollar;</span>19.99";
        document.getElementById("pro").innerHTML = "<span class='dollar'>&dollar;</span>24.99";
        document.getElementById("master").innerHTML = "<span class='dollar'>&dollar;</span>39.99";
    } else {
        document.getElementById("basic").innerHTML = "<span class='dollar'>&dollar;</span>199.99";
        document.getElementById("pro").innerHTML = "<span class='dollar'>&dollar;</span>249.99";
        document.getElementById("master").innerHTML = "<span class='dollar'>&dollar;</span>399.99";

    }
}