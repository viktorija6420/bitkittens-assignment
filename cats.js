document.addEventListener("DOMContentLoaded", function() {

var b = document.querySelector('.summon-cats');
var box = document.querySelector('.cat-box');
b.addEventListener('click', function(e){
  // console.log('Hello Kitty');
  $.ajax({
    method: 'GET',
    url: 'http://bitkittens.herokuapp.com/cats.json',
    dataType: 'JSON'
  }).done(function(data){
    var imgTag = document.createElement('img');
    imgTag.src = data.cats[1].photo;
    imgTag.alt = data.cats[1].name;
    box.appendChild(imgTag);
  });
});
});
