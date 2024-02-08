 <script>     
let link1 = document.querySelector('link');
let link2 = document.querySelector('#myVideo');

function btn1(){
  link1.href ='styles/pop-it.css';
  document.body.style.backgroundImage = 'url(media/pop-it.jpg)';
}

function btn2(){
  document.body.style.backgroundImage = 'null';
  link1.href ='styles/water-drop.css';
  link2.src='media/sea.mp4';
  
}

function btn3(){
  link1.href ="styles/neon.css";
  document.body.style.backgroundImage = 'url(media/neon.jpg)';
}

function btn4(){
  link1.href ='styles/fire.css';
  background = 'transparent';
  link2.src="media/Fire Background.mp4";
}

function btn5(){
  link1.href ='styles/space.css';
  document.body.style.backgroundImage = 'url(media/space.jpg)';
}
 </script>
