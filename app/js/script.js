function onMenuClick() {
    this.classList.toggle('open')
}

document.getElementById('nav-icon').addEventListener('click', onMenuClick)

function onMenuOpen() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}