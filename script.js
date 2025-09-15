$(document).ready(function() {
  const audio = document.getElementById('myAudio');
  audio.volume = 0.3;
  const musicToggle = $('#musicToggle');

  // Check if audio was playing before navigating away
  const audioState = localStorage.getItem('audioState');
  if (audioState === 'playing') {
    audio.play();
  }
});

  $( function() {
    $(".bambigreenhouse").draggable();
    $(".pileagreenhouse").draggable();
    $(".rosagreenhouse").draggable();
    $(".pothosgreenhouse").draggable();
    $(".wateringcangreenhouse").draggable();
    $(".scissorsgreenhouse").draggable();
    $(".fertilizergreenhouse").draggable();
    $(".sonnygreenhouse").draggable();
    $(".pixelgreenhouse").draggable();
    $(".ecosystemgreenhouse").draggable();
  });