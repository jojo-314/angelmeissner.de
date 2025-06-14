function javaScrpit() {

function openMenu() {
    let hMenu = document.getElementById('smallNav');
    if (hMenu.style.display=="none") {
        hMenu.style.display="block";  
        document.getElementById("hamburgerIcon").classList.toggle("toggleBars")
    } else {
        hMenu.style.display="none";
        document.getElementById("hamburgerIcon").classList.remove("toggleBars")
    }
}
}