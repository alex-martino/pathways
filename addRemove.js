// JavaScript Document

function add(a, b) {
	document.getElementById(a).style.backgroundColor = 'rgba(114,152,75,0.3)';
	document.getElementById(b).innerHTML = 'Added';
}
	
function removeElement(parentDiv, childDiv){
     if (childDiv == parentDiv) {
          alert("The parent div cannot be removed.");
     }
     else if (document.getElementById(childDiv)) {     
          var child = document.getElementById(childDiv);
          var parent = document.getElementById(parentDiv);
          parent.removeChild(child);
     }
     else {
          alert("Child div has already been removed or does not exist.");
          return false;
     }
}

function show(a) {
	document.getElementById(a).style.display = 'block';
}

function hide(a) {
	document.getElementById(a).style.display = 'none';
}