var button = document.querySelector(".clr");
var colors = ["#FF5733" , "#FFFC33" , "#3349FF" , "#8F0BF7"];
button.addEventListener("click" , function(){
    var colorIndex = Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor = colors[colorIndex];
});