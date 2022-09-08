/*===============NAV JS=====================*/

/*----adding b-g on scroll-----*/
const nav = document.querySelector(".nav");

window.addEventListener('scroll', ()=> {
    nav.classList.toggle("dark", window.pageYOffset > 80)
});

/*----toggling nav on mediusm and small screens-----*/
const listContainer = document.querySelector('.list-container');
const barBtn = document.querySelector('.bar-btn');
const crossBtn = document.querySelector('.cross-btn');

barBtn.addEventListener('click', () => {
    listContainer.style.display = "initial";
    crossBtn.style.display = "initial";
    barBtn.style.display = "none";
})

crossBtn.addEventListener('click', () => {
    listContainer.style.display = "none";
    crossBtn.style.display = "none";
    barBtn.style.display = "block";
})



/*=============FAQ JS===============*/

const allArticles = document.querySelectorAll('.article');

allArticles.forEach(article => {
    const btn = article.querySelector(".btn i")
    
    btn.addEventListener('click', ()=> {
        allArticles.forEach(e => {
            if(e !== article){
                e.classList.remove('show-ans')
            }
        })
        article.classList.toggle('show-ans')
    })
})

/*=============TESTIMONIAL JS===============*/

let count = 1;

setInterval(() => {
    count++;
    if(count > 5){
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}, 5000);