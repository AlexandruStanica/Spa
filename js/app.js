let checkbox = document.getElementById("navi-toggle");
let links = document.querySelectorAll(".navigation__link");

links.forEach(link => {
    link.addEventListener("click", () => {
        checkbox.checked = false;
    });
});
