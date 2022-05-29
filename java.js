let accordion = document.getElementsByClassName('container');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}

//burger icon

let navigation = document.getElementById ('navbarlinks');
let toggleButton = document.getElementById ('toggleBurger');
let upLine = document.getElementById('burger1');
let middleLine = document.getElementById('burger2');
let downLine = document.getElementById('burger3');

toggleButton.addEventListener('click', function () {
    navigation.classList.toggle('activeNavigation');
    upLine.classList.toggle('up');
    middleLine.classList.toggle('middle');
    downLine.classList.toggle('down');
});