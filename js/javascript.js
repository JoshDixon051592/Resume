$(document).ready(function(){
    tabDisplay = document.getElementsByClassName("tabcontent");
    for(i=0; i<tabDisplay.length; i++){
        tabDisplay[i].style.display = "none";
    }
});
function playAudio(clipTitle){
    var audio = new Audio('audio//' + clipTitle);
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

function initMap(){
    const uluru = {lat: -25.344, lng:131.036};
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 4,
        center: uluru,
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}