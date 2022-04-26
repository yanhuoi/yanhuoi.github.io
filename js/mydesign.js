let backimg =["url(/img/banner1/0.jpg)","url(/img/banner1/1.jpg)","url(/img/banner1/2.jpg)","url(/img/banner1/3.jpg)","url(/img/banner1/4.jpg)","url(/img/banner1/5.jpg)",,"url(/img/banner1/6.jpg)"];
let index =Math.ceil(Math.random() * (backimg.length-1))-1;
// document.getElementById("web_bg").style.backgroundImage = backimg[index]
document.getElementById("page-header").style.backgroundImage = backimg[index]