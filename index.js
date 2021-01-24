
document.getElementsByClassName("todo-count")[0].innerHTML=
document.getElementsByClassName("list-elem").length -
document.getElementsByClassName("checked").length
+ " items left";

var myNodelist = document.getElementsByClassName("list-elem");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    document.getElementById("todo-list").removeChild(this.parentElement);
    // var div = this.parentElement;
    // div.style.display = "none";
  }
}



// filters display:none / display:block
var list = document.querySelector('ul');
document.addEventListener('click', function(ev) {
  if (ev.target.classList.contains("active")) {
    var listCheck = document.getElementsByClassName("list-elem");
    for (var i = 0; i < listCheck.length; i++){
      if(listCheck[i].classList.contains('checked'))
      listCheck[i].style.display='none';
      else
      listCheck[i].style.display='block';
    }
  }
  if (ev.target.classList.contains("completed")) {
    var listCheck = document.getElementsByClassName("list-elem");
    for (var i = 0; i < listCheck.length; i++){
      if(!listCheck[i].classList.contains('checked'))
      listCheck[i].style.display='none';
      else
      listCheck[i].style.display='block';
    }
  }
  if (ev.target.classList.contains("selected")) {
    var listCheck = document.getElementsByClassName("list-elem");
    for (var i = 0; i < listCheck.length; i++){
      listCheck[i].style.display='block';
    }
  }
  if (ev.target.classList.contains("clear-completed")) {
    var listCheck = document.getElementsByClassName("list-elem");
    for (var i = 0; i < listCheck.length; i++){
      if(listCheck[i].classList.contains('checked'))
      {
        document.getElementById("todo-list").removeChild(listCheck[i]);
        i=i-1;
      }
    }
  }

  document.getElementsByClassName("todo-count")[0].innerHTML=
document.getElementsByClassName("list-elem").length -
document.getElementsByClassName("checked").length
+ " items left";
}, false);



// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
  document.getElementsByClassName("todo-count")[0].innerHTML=
document.getElementsByClassName("list-elem").length -
document.getElementsByClassName("checked").length
+ " items left";
}, false);

// The select all / deselect all button 
document.addEventListener('click', function(ev) {
  if (ev.target.classList.contains("fa-chevron-down")){
    var listCheck = document.getElementsByClassName("list-elem");
    var s = 0;
    for (var i = 0; i < listCheck.length; i++){
      if(listCheck[i].classList.contains('checked'))
      s = s+1;
    }
    
    for (var i = 0; i < listCheck.length; i++){
      if(listCheck[i].classList.contains('checked') && s==listCheck.length )
      {listCheck[i].classList.toggle('checked');}
      else{
        if(!listCheck[i].classList.contains('checked') && s!=listCheck.length ){
          listCheck[i].classList.toggle('checked');
        }
      }
    }
    document.getElementsByClassName("todo-count")[0].innerHTML=
document.getElementsByClassName("list-elem").length -
document.getElementsByClassName("checked").length
+ " items left";
  }
}, false);



var input=document.getElementById("myInput");
document.addEventListener('keydown', function(e) {
    // console.log(e.key);
    if (e.key === 'Enter') {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.classList.add("list-elem");
    li.appendChild(t);
    if (inputValue === '') {
      } else {
        document.getElementById("todo-list").appendChild(li);
      }
      document.getElementById("myInput").value = "";
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
    
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          document.getElementById("todo-list").removeChild(this.parentElement);
          // var div = this.parentElement;
          // div.style.display = "none";
        }
      }
      document.getElementsByClassName("todo-count")[0].innerHTML=
document.getElementsByClassName("list-elem").length -
document.getElementsByClassName("checked").length
+ " items left";
     }
}, false);