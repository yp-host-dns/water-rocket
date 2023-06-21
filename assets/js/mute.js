
let vid = document.getElementById("myVideo");

function enableMute() { 
  vid.muted = true;
} 

function disableMute() { 
  vid.muted = false;
} 

function checkMute() { 
  alert(vid.muted);
} 
