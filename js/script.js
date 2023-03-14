const pictur = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
]

const giu = document.getElementById("down");
const su = document.getElementById("up");
let i = 0;


giu.addEventListener("click", function(){
    i += 1;
    document.getElementById("xd").src= pictur[i]
    console.log(i);
    if (i > pictur.length - 1){
        i= 0
        document.getElementById("xd").src= pictur[i]
    }
})


su.addEventListener("click", function(){
    i -= 1;
    document.getElementById("xd").src= pictur[i]
    console.log(i);
    if (i < 0){
        i  = pictur.length - 1;
        document.getElementById("xd").src= pictur[i]
    }
})


