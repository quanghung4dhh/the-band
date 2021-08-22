
//Menu Dropdown for small menu

function Dropdown() {
  var x = document.getElementById('dropdown_content');
  if (x.className.indexOf('dropdown_show') == -1) {
    x.className += 'dropdown_show';
  } else {
    x.className = '';
  }
}

//Img slide

window.onload = function() {
  img_show();
}

var a = 0;

function img_show() {
  var x = document.getElementsByClassName('top_img');
  for (let i=0; i<x.length; i++) {
    x[i].style.display = 'none';
  }
  if (a>x.length-1) {
    a = 0;
  }
  x[a].style.display = 'block';
  a++;
  setTimeout(img_show, 4000);
}

//Order Ticket

function order() {
  document.getElementsByClassName('ticket_order')[0].style.display = 'block';
}

//Close order button

function Close() {
  document.getElementsByClassName('ticket_order')[0].style.display = 'none';
}