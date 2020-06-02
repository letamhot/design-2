function checkbox() {
    var checkBox = document.getElementById("checkbox");
    if (checkBox.checked) {
        document.getElementById("basic").innerHTML = "&dollar;19.99";
        document.getElementById("pro").innerHTML = "&dollar;24.99";
        document.getElementById("master").innerHTML = "&dollar;39.99";
    } else {
        document.getElementById("basic").innerHTML = "&dollar;199.99";
        document.getElementById("pro").innerHTML = "&dollar;249.99";
        document.getElementById("master").innerHTML = "&dollar;399.99";

    }
}