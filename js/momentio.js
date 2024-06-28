let menuIcon = document.querySelector("nav .burger-icon");
let aside = document.querySelector("aside .content");
let closeIcon = document.querySelector("aside .aside-close");
let asideLinks = document.querySelectorAll(".aside-links a");
menuIcon.addEventListener("click", toggleAside);
function toggleAside() {
    aside.classList.toggle("top-0");
}
closeIcon.addEventListener("click", toggleAside);

asideLinks.forEach(function (el) { el.addEventListener("click", toggleAside) });

let landing = document.querySelector(".landing");


let skills = document.querySelector(".skills-section");
let circleProg = document.querySelectorAll(".skills-section .circular-prog");
function fillProg() {
    if (window.pageYOffset >= (skills.offsetTop - 200)) {
        circleProg.forEach(function (el) {
            let left = el.children[0].children[0];
            let right = el.children[1].children[0];
            let precent = +el.getAttribute("data-prog");
            if (precent >= 50) {
                left.style.rotate = "-180deg";
                precent -= 50;
                right.style.rotate = `-${180 * (precent / 50)}deg`;
            }
            else {
                left.style.rotate = `-${180 * (precent / 50)}deg`;
            }
        });
        clearInterval(intrvl);
    }
}
let intrvl = setInterval(fillProg, 100);


let selectBox = document.querySelectorAll("#about-us .select-box");
let memberCard = document.querySelectorAll(".member-card");
let memberCardArray = Array.from(memberCard);
selectBox.forEach(function (el) {
    el.addEventListener("click", function (e) {
        memberCardArray.forEach(function (cardEle) {
            cardEle.classList.remove('active');
        });
        let memberIndex = +el.id.substring(2);
        memberCardArray[memberIndex].classList.add('active');
    })
});