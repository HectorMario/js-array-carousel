const pictur = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
]

const giu = document.getElementById("down");
const su = document.getElementById("up");
const yu = document.getElementsByClassName("border")
let i = 0;


giu.addEventListener("click", function(){
    yu[i].classList.remove("ms-border")
    i += 1;
    document.getElementById("se").src= pictur[i]
    console.log(i);
    if (i > pictur.length - 1){
        i= 0;
        document.getElementById("se").src= pictur[i]
        yu[i].classList.add("ms-border");
    }
    yu[i].classList.add("ms-border");
})


su.addEventListener("click", function(){
    yu[i].classList.remove("ms-border")
    i -= 1;
    document.getElementById("se").src= pictur[i]
    console.log(i);
    if (i < 0){
        i  = pictur.length - 1;
        document.getElementById("se").src= pictur[i]
        yu[i].classList.add("ms-border");     
    }
    yu[i].classList.add("ms-border");
})


