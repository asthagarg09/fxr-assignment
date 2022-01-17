window.onload = function(){
    var lName = document.getElementById("lastname");

    var modal = document.getElementById("myModal");

    var span = document.getElementsByClassName("close-box")[0];

    lName.addEventListener("click", function() {
    modal.style.display = "block";
    });

    span.addEventListener("click", function() {
    modal.style.display = "none";
    });

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }}

}