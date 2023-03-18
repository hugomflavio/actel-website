window.onload = function () { updateNavbar(); };
window.onscroll = function () { updateNavbar(); };

function addClassToElement(classToAdd, element) {
  document.getElementById(element).classList.add(classToAdd);
}

function removeClassFromElement(classToRemove, element) {
  document.getElementById(element).classList.remove(classToRemove);
}

function hideElement(element) {
  document.getElementById(element).style.display = 'none';
}

function showElement(element) {
  document.getElementById(element).style.display = 'flex';
}

function switchElementsControler(elementToHide, elementToShow) {
  hideElement(elementToHide);
  showElement(elementToShow);
}
	/* Toggle between adding and removing the "responsive" class to navBar when the user clicks on the icon */
function toogleNavBarResponsive() {
    var x = document.getElementById("navBar");
    if (x.classList.contains("responsive") ) {
      removeClassFromElement('responsive', "navBar");
    } else {
      addClassToElement('responsive', "navBar");
    }
}

function closeNavBarDropdown() {
    var x = document.getElementById("navBar");
    if (x.classList.contains("responsive") ) {
      removeClassFromElement('responsive', "navBar");
    }  
}

$(document).on('click','.navbar-toggleable-xs.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
/**
 * updateNavbar is the function that defines the style of the navbar depending if we are on the top of the page or if we are scrolling
 */
function updateNavbar() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    addClassToElement('navBarScrollTop', 'navBar');
    removeClassFromElement('navBarTop', 'navBar');
    addClassToElement('navBar-secondScrollTop', 'navBar-manual');
    removeClassFromElement('navBar-secondTop', 'navBar-manual');
  } else {
    addClassToElement('navBarTop', 'navBar');
    removeClassFromElement('navBarScrollTop', 'navBar');
    addClassToElement('navBar-secondTop', 'navBar-manual');
    removeClassFromElement('navBar-secondScrollTop', 'navBar-manual');
  }
}



  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toogleManualNavBarResponsive() {
  var y = document.getElementById("navBar-manual");
  if (y.classList.contains("responsive")) {
    removeClassFromElement('responsive', "navBar-manual");
    removeClassFromElement('show', 'navBar-manual');
  } else {
    addClassToElement('responsive', "navBar-manual");
    addClassToElement('show', 'navBar-manual');
  }
}
