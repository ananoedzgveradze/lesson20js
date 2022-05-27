// let accordion1 = document.getElementsByClassName('container');

// for (let i = 0; i < accordion1.length; i++) {
//    accordion1[i].addEventListener('click', function () {
//        this.classList.add('active');
//    })
// }


let accordion = document.getElementsByClassName('container');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.add('active');
    });
    
}