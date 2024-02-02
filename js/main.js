// window.onscroll=function () {
//     console.log (window.scrollY)
// }


let num1 =document.querySelectorAll('.num1')

// if (window.scrollY >2000) {
// let counts=setInterval (updated)
// let upto=0
// function updated (){
//     num1[0].innerHTML= ++upto
//     num1[1].innerHTML= ++upto
//     num1[2].innerHTML= ++upto
//     num1[3].innerHTML= ++upto
//     if (upto == 4000) {

//         clearInterval(counts)
//     }
// }

// }

function Counter(counter,limit) {
    let upto=0
    myINterveal =setInterval (function(){

if(window.scrollY > 2000) {
    if (upto > limit) {
        clearInterval (myInterval);
    }

    counter.innerHTML=upto;
    upto=upto +10;

   
}

    },10)


}
Counter(num1[0],4000)
Counter(num1[1],10000)
Counter(num1[2],8000)
Counter(num1[3],12000)