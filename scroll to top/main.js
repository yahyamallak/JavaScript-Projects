const scroll = document.getElementById("scroll");


document.onscroll = () => {
    if (this.scrollY >= 300 ) {
        scroll.style.transform = "none";
    } else {
        scroll.style.transform = "translateX(100px)"
    }
}

if(scroll) {
    scroll.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
}