const tabs = document.querySelectorAll(".tab ul.tabs li");
const divs = document.querySelectorAll(".tab .content div");

tabs.forEach(function(tab) {
    tab.onclick = () => {
        tabs.forEach(function(tab) {
            tab.classList.remove("active");
        });

        tab.classList.add("active");

        divs.forEach(function(div) {

            if(div.dataset.num == tab.dataset.num) {
                div.classList.add("active")
            } else {
                div.classList.remove("active")
            }
        });
    }
});