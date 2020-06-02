function checkbox() {
    var checkBox = document.getElementById("checkbox");
    if (checkBox.checked) {
        document.getElementById("basic-price").innerHTML = "&dollar;19.99";
        document.getElementById("pro-price").innerHTML = "&dollar;24.99";
        document.getElementById("master-price").innerHTML = "&dollar;39.99";
    } else {
        document.getElementById("basic-price").innerHTML = "&dollar;199.99";
        document.getElementById("pro-price").innerHTML = "&dollar;249.99";
        document.getElementById("master-price").innerHTML = "&dollar;399.99";

    }
}