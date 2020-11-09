function openNav() {
  document.getElementById("sidenav-sidebar").style.width = "250px";
  document.getElementById("main-sidebar").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sidenav-sidebar").style.width = "0";
  document.getElementById("main-sidebar").style.marginLeft = "0";
}
function myFunction() {
    var x = document.getElementById("input_senha")
    var y = document.getElementById("hide1")
    var z = document.getElementById("hide2")

    if (x.type === 'password') {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        if (x.type == "text")
            x.type = "password";
        y.style.display = "none";
        z.style.display = "block";


    }

}
