
let buttons = document.querySelector('.button');
let btn = buttons.querySelectorAll('.btn');
for (var i = 0 ; i<btn.length;i++){
   btn[i].addEventListener('click',function(){
    let current = document.getElementsByClassName('active');
    current[0].classList = current[0].className.replace("active","");
    this.className +=" active";
   })
}

function setFontSize(fontSize) {
    var imgTextElements = document.getElementsByClassName('img-text');
    for (var i = 0; i < imgTextElements.length; i++) {
        imgTextElements[i].style.fontSize = fontSize;
    }
}
function color(z){
    var a=getComputedStyle(z);
    var b=a.backgroundColor;
    document.getElementsByTagName("BODY")[0].style.backgroundColor=b;
}
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

random_bg_color();