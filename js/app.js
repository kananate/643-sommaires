

const mainEle = document.querySelectorAll("h2");
const conEle = document.querySelectorAll(".chapitre");
const foot = document.querySelector(".display-f");

for (let x = 0; x < mainEle.length; x++) {
    mainEle[x].addEventListener("click", function () {
        console.log(mainEle[x].firstElementSibling);
        clearActive();        
        mainEle[x].nextElementSibling.classList.toggle("chapitre");        
        foot.classList.toggle("display-f");
        
        })
}

function clearActive() {
    for (let x = 0; x < conEle.length; x++) {
        conEle[x].classList.remove("chapitre");
    }
}

// scroll up
document.querySelector(".scroll-up-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "unset";
    }, 2000);
});   

