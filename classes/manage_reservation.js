var reserveDesk;
$(document).ready(function() {
   reserveDesk = function(rowID) {
      alert("reserve desk work")
      $.ajax({
         url: '../classes/make_reservation.php',
         type: 'post',
         data: {
            IdOfRow: rowID
         },
         //success: function(response) { alert(response); }
      });
   };
});

function rowClick(rowId) {
   alert("row : " + rowId);
   //$.get("somepage.php"); //to execute php page for searching in sql
   // TODO: : call jquery fction
   //<?php check_row(rowId);
   reserveDesk(rowId);
}

/*function rowClick(rowId) {
   alert("row : "+rowId);
   //$.get("somepage.php"); //to execute php page for searching in sql
    // TODO: : call jquery fction
    <?php check_row(rowId);?>
   //reserveDesk(rowId);
}*/



/*class ManageDesk {
   constructor() {

   }

   addDesk(){
      $("<form></form>", { // form creation
         "class": "mb-3",
         "method": "post",
         "action": "index.php",
         "enctype": "multipart/form-data",
         "id": String("form_user_img_path")
      }).appendTo("#card-container");
      $("<div></div>", { // div for form
         "class": "input-group mb-3",
         "id": String("user_img_path")
      }).appendTo("#form_user_img_path");
      $("<div></div>", { // div for form
         "class": "custom-file",
         "id": String("user_img_path_div_custom")
      }).appendTo("#user_img_path");
      $("<input></input>", { // input to enter new path
         "type": "file",
         "name": "path",
         "class": "custom-file-input",
         "aria-describedby": "inputGroupFileAddon04"
      }).appendTo("#user_img_path_div_custom");
      $("<label></label>", { // input to enter new path
         "class": "custom-file-label",
         "for":"inputGroupFile04",
         "text":"Choose file"
      }).appendTo("#user_img_path_div_custom");
      $("<div></div>", { // input to enter new path
         "class": "input-group-append",
         "id": String("user_img_path_div_btn")
      }).appendTo("#user_img_path");
      $("<input></input>", { // input to Submit
         "class": "btn btn-outline-secondary",
         "type": "submit",
         "name": "submit",
         "id": "button-addon2",
         "value": "Upload"
      }).appendTo("#user_img_path_div_btn");
   }
}*/


//$(document).ready(function() {
//$("#specificDesk").click(function() {
//window.location.href = "views/reserve.php";
//});
/*
$("<form></form>", { // form creation
   "class": "mb-3",
   "method": "post",
   "action": "index.php",
   "enctype": "multipart/form-data",
   "id": String("form_user_img_path")
}).appendTo("#card-container");
$("<div></div>", { // div for form
   "class": "input-group mb-3",
   "id": String("user_img_path")
}).appendTo("#form_user_img_path");
$("<div></div>", { // div for form
   "class": "custom-file",
   "id": String("user_img_path_div_custom")
}).appendTo("#user_img_path");
$("<input></input>", { // input to enter new path
   "type": "file",
   "name": "path",
   "class": "custom-file-input",
   "aria-describedby": "inputGroupFileAddon04"
}).appendTo("#user_img_path_div_custom");
$("<label></label>", { // input to enter new path
   "class": "custom-file-label",
   "for":"inputGroupFile04",
   "text":"Choose file"
}).appendTo("#user_img_path_div_custom");
$("<div></div>", { // input to enter new path
   "class": "input-group-append",
   "id": String("user_img_path_div_btn")
}).appendTo("#user_img_path");
$("<input></input>", { // input to Submit
   "class": "btn btn-outline-secondary",
   "type": "submit",
   "name": "submit",
   "id": "button-addon2",
   "value": "Upload"
}).appendTo("#user_img_path_div_btn");
*/
//});
