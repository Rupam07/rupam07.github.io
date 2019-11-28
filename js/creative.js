window.addEventListener('scroll', scrollevent);
function scrollevent() {

  function isScrolledIntoView(adj, el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
	  let flagcheck = true
    var isVisible = elemTop < window.innerHeight - adj && elemBottom >= 0;
     if(isVisible && flagcheck) {
          flagcheck = false;
          return true;
     } 
}

var aboutDiv = document.querySelector("#about");
var projectContainer = document.querySelector(".container-fluid");

  if(isScrolledIntoView(500, document.querySelector("#about"))) {
        document.querySelector("#about img").classList.remove("hidden");
        document.querySelector("#about img").classList.add("animate-top");
        document.querySelector("#about .col-lg-8a.col-lg-offset-2").classList.remove("hidden");
        document.querySelector("#about .col-lg-8a.col-lg-offset-2").classList.add("animate-bottom");
}

if(isScrolledIntoView(400, document.querySelector(".container-fluid"))) {
  document.querySelector('.container-fluid').classList.remove("hidden");
     var leftProjects = document.querySelectorAll('#projects .col-lg-3:nth-child(odd)');
        leftProjects.forEach((i) => {
          //i.classList.remove("hidden");
          i.classList.add("animate-left");
          });
     var rightProjects = document.querySelectorAll('#projects .col-lg-3:nth-child(even)');
     rightProjects.forEach((i) => {
        //i.classList.remove("hidden");
        i.classList.add("animate-right");
     });
     window.removeEventListener('scroll', scrollevent)
}
}
      function navToggle() {
        var element = document.querySelector('.top-nav .menu')
        if (element.classList.contains('nav-hidden')) {
          element.classList.remove("nav-hidden");
        }
        else {
          element.classList.add("nav-hidden");
        }
      }
