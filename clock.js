const clock = document.querySelector("#clock");
const cal = document.querySelector("#cal");
const youtube = document.querySelector("#youtube");
const naver = document.querySelector("#naver");
const netflix = document.querySelector("#netflix");
const coupang = document.querySelector("#coupang");

clock.classList.add("font");
cal.classList.add("yfont");
youtube.classList.add("ufont");
naver.classList.add("nfont");
netflix.classList.add("nffont");
coupang.classList.add("cfont");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");

    clock.innerText = hours + ":" + min;
}
function getDate(){
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0")
    const dayOfWeek = ["MON", "TUE", "WEN", "THU", "FRI", "SAT", "SUN"];

    cal.innerText = year + "/" + month + "/" + day + " " + dayOfWeek[date.getDay()];
}
getDate();
getClock();
setInterval(getClock, 1000);