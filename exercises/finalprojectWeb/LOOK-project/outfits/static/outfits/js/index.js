
var Edit = document.getElementById("Edit"),
    show = document.getElementById("im1"),
    overlay = document.getElementById("o2"),
    confirmdel = document.getElementById("confirmdelete"),
    container = document.getElementById("c1");

show.onclick = function(){
    if(overlay.style.display == "none")
        overlay.style.display = "block"
    else
        overlay.style.display = "none"
}

overlay.onclick = function(){
    if(overlay.style.display == "none")
    overlay.style.display = "block"
else
    overlay.style.display = "none"
}

confirmdel.onclick = function(){
    container.style.display = "none"
    lightbox.modal("hide");
}

// delete modal

var lightbox = $("#deleteModal").modal("hide");

document.getElementById("delete").onclick = function () {
    lightbox.modal("show");
}



document.getElementById("addOutfits").onclick =function(){
    window.location.href = "createLook"; 
}


// filter modal for looks

// var lightbox1 = $("#filterModal").modal("hide");
// document.getElementById("filter").onclick = function () {
//     lightbox1.modal("show");
// }


// document.getElementById("addOutfits").onclick =function(){
//     window.location.href = "{{% url 'createLook' %}}"; 
// }

// var lookid;
// function lookid() {
//     var akValue = window.location.search.substring(1).split('&');
//         console.log(akValue)
//         titleId = akValue[0].split("=")[1];
//         console.log(titleId)

//     return titleId;
// }


// $(document).ready(function(){
//         $.getJSON('../../static/accounts/includes/data/forms.json', function(data) {
//             var titleId = getFormId();
//             console.log(titleId.value)
//             $.each(data, function(key, value){
//                 if(value.id == key)
//                 //var title = "<h3>" + value.name + "</h3>";
//                     ('#title').html(value);
//         });   
//     });
// });

// $(document).ready(function(){
//     $.getJSON("json",function(data){
//         var sHTML = "<ul>";

//         $.each(data,function(key,value){
//             console.log(val);
//             sHTML += "<li><b>" + key + "</b>:...." + val + "</li>";
//         });

//         sHTML += "</ul>";
//         console.log("sHTML :"+sHTML);
//         $('#allLooks').append(sHTML);
//     });
// });

