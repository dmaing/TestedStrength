var modal = document.getElementById("modal");
var button = document.getElementById("submitimg");
var form = document.getElementById("newsletter");
var span = document.getElementsByClassName("close")[0];

newsletter.onsubmit = function ()
{
    //modal.style.display = "block";
    window.alert("ppeeeee");
}

span.onclick = function ()
{
    modal.style.display = "none";
}

// close modal when user clicks anywhere else on window
window.onclick = function(event)
{
    if (event.target == modal) {
      modal.style.display = "none";
    }
  } 