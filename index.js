const header = document.querySelector("header")
const scrolltotop = document.querySelector(".scrolltotop")

window.addEventListener("scroll", () => {
    let h = header.getBoundingClientRect().height;
    if (window.pageYOffset - h > 500) {
        if (!header.classList.contains("sticky")) {
            header.classList.add("sticky")
        }
    } else {
        header.classList.remove("sticky")
    }
    if (window.pageYOffset > 2000) {
        scrolltotop.style.display = "block"
    } else {
        scrolltotop.style.display = "none"
    }
})

const glide = new Glide('.glide')
const caption = document.querySelectorAll('.slide_caption');
glide.on(['mount.after', 'run.after'], () => {


    const acaption = caption[glide.index];
    anime({
        targets: acaption.children,
        opacity: [0, 1],
        duration: 400,
        easing: "linear",
        delay: anime.stagger(400, { start: 300 }),
        translateY: [anime.stagger(40, 10), 0]
    })
})
glide.on['run.before', () => {
    document.querySelectorAll('.slide_caption>*').forEach(el => {
        el.style.opacity = 0;
    })
}]
glide.mount();
const isotope = new Isotope('.img', {
    layoutMode: 'fitRows',
    itemSelector: '.item'
})
const filter = document.querySelector('.filter-btn');
filter.addEventListener('click', e => {
    let { target } = e;
    const filter1 = target.getAttribute('data-filter')
    if (filter1) {
        document.querySelectorAll('.btn.active').forEach(btn => {
            btn.classList.remove("active")
            target.classList.add("active")
            isotope.arrange({ filter: filter1 })
        })
    }
})
const option = {
    delay: 300,
    distance: "50px",
    duration: 500,
    easing: "ease-in-out",
    origin: "buttom"
}
ScrollReveal().reveal(".feature", {...option, interval: 350 })
ScrollReveal().reveal(".service-item", {...option, interval: 350 })
ScrollReveal().reveal(".data-section", {
    beforeReveal: () => {
        anime({
            targets: '.data-piece .num',
            innerHTML: el => {
                return [0, el.innerHTML];
            },
            duration: 2000,
            round: 1,
            easing: 'easeInExpo'
        })
    }

})
const data1 = document.querySelector(".data-section");
window.addEventListener("scroll", () => {
    const bottom = data1.getBoundingClientRect().bottom;
    const top = data1.getBoundingClientRect().top;
    if (bottom >= 0 && top <= window.innerHeight) {
        data1.style.backgroundPosition = "center calc(50%-{bottom/5}px)";
    }
})
const gundong = new SmoothScroll('nav a[href*="#"], .scrolltotop a[href*="#"]', {
    header: "header",
    offset: 80
})
const btns = document.querySelectorAll('.explore');
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        gundong.animateScroll(document.querySelector('#a'))
    })
})