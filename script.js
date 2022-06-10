var book = function() {
    document.getElementById("book-button").innerHTML = "Edit Booking";
    document.getElementById("name").disabled = true;
    document.getElementById("email").disabled = true;
    document.getElementById("conf-email").disabled = true;
}

var chooseService = function(s) {
    window.location.href = "book.html";
    var serviceSelect = document.getElementById("service");
    serviceSelect.value = s;
}

var chooseExpert = function(e) {
    window.location.href = "book.html";
    document.getElementById("expert").selectedIndex = e;
}