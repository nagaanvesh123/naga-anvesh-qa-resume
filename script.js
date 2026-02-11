const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");
const slider = document.querySelector(".tab-slider");

function activateTab(tab) {

    tabs.forEach(btn => btn.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");

    const content = document.getElementById(tab.dataset.tab);
    content.classList.add("active");

    slider.style.width = tab.offsetWidth + "px";
    slider.style.left = tab.offsetLeft + "px";

    animateProgress(content);
}

tabs.forEach(tab => {
    tab.addEventListener("click", () => activateTab(tab));
});

function animateProgress(content) {

    const bar = content.querySelector("span");
    const percentText = content.querySelector(".percent");
    const target = bar.getAttribute("data-progress");

    bar.style.width = target + "%";

    let count = 0;
    const interval = setInterval(() => {
        if (count >= target) {
            clearInterval(interval);
        } else {
            count++;
            percentText.textContent = count + "%";
        }
    }, 15);
}

/* AUTO ACTIVATE FIRST */
activateTab(document.querySelector(".tab-btn.active"));
