

// var overlay = getElementsByClassName("overlay"),
// imgs = document.getElementsByClassName("dynamic_image"), i ,

// Edit = document.getElementById("Edit"),

// createuser = document.getElementById("create");

// register = document.getElementById("gotoregister");

// register.onclick = function () { window.location.href = "home"; }

// createuser.onclick = function () { window.location.href = "login"; }

// $(document).ready(function (){ 
//     i = 0;
//     for( i ; i < overlay.length ; i++)
//         overlay[i].style.display = "none";
// });

// $(document).ready(function(){
//     i =0 ;
//     for(i; i < imgs.length ; i++)
//     {
//         imgs[i].onclick = function() {
//             if( overlay[i].style.display == "none")
//                 overlay[i].style.display = "block";
//             else
//                 overlay[i].style.display = "none";
//         }
//     }
// });

// img.onclick = function () {
//         var overlay = document.getElementsByClassName("overlay")[0];
//         if (overlay.style.display == "none")
//             overlay.style.display = "block";
//         else
//             overlay.style.display = "none";
//     };

// var overlay = document.getElementsByClassName("overlay")[0];
// overlay.onclick = function(){ overlay.style.display = "none"};


// Edit.onclick = function(){ window.location.href = "createLook.html";}


// // delete modal

// var lightbox = $("#deleteModal").modal("hide");
// document.getElementById("delete").onclick = function(){ 
//   lightbox.modal("show");
// }

// // filter modal for looks

// var lightbox1 = $("#filterModal").modal("hide");
// document.getElementById("filter").onclick = function(){ 
//   lightbox1.modal("show");
// }


// document.getElementById("showStylist").onclick = function(){
//     // window.open('stylist','_self');
//     window.location.href = "{% url 'stylist' %}"; 
// }




//light box options between tops and pants
var golfElement = document.getElementById("golftab");


var lightbox1 = $("#myModal").modal("hide");
// var lightbox1 = $("#deleteModal").modal("hide");

document.getElementById("tops").onclick = function(){ 
  lightbox1.modal("show");
  golfElement.style.fontWeight = 900;
  golfElement.style.color = "#0d0909";
}

document.getElementById("save").onclick = function(){ lightbox1.modal("hide");}

document.getElementById("saveTlook").onclick = function(){
    // window.open('stylist','_self');
    window.location.href = "profile"; 
    document.getElementById("changeOutfit").src= "{% static 'outfits/images/o6.jpg' %}";
}