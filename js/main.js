const infolettuce = document.querySelector('.infolettuce')
const animationphotolettuce = document.querySelector('.animationphotolettuce')

infolettuce.addEventListener('click', () => {
    animationphotolettuce.classList.toggle('active')
    literingText()
})


var i = 0,
    text;

text = "Low carb, High protein. This meal is a good option after training"


function literingText() {
    if (i < text.length) {
        document.querySelector('.photolettucetext').innerHTML += text.charAt(i);
        i++
        setTimeout(literingText, 100)
    }
}

const boxcardanimation = document.querySelector(".boxcardanimation");
const cardlettuce = document.querySelectorAll(".cardlettuce");


function showCard() {
    cardlettuce.forEach((el) => {
        el.classList.remove('activeBurger')
        this.classList.add("activeBurger")
    })

    handleBgColor(this);
}




const handleBgColor = (card) => {
    const season = card.getAttribute("data-season");
    boxcardanimation.setAttribute("data-bg", season);
};

cardlettuce.forEach((card) => card.addEventListener("click", showCard));