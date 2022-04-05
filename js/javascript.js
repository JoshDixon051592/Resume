$(document).ready(function(){
    tabDisplay = document.getElementsByClassName("tabcontent");
    for(i=0; i<tabDisplay.length; i++){
        tabDisplay[i].style.display = "none";
    }
});
function foo(){
    var audio = new Audio('audio//crazy_pills.mp3');
    audio.play();
}

function openTab(evt, tabName){
    var i;
    var tabDisplay;
    var tabLinks;
    tabDisplay = document.getElementsByClassName("tabcontent");
    for(i=0; i<tabDisplay.length; i++){
        tabDisplay[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tablinks");
    for(i=0; i<tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
