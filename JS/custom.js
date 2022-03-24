var count = 0;
var countremove = 0;
$("#btnAdd-1").click(function() {
    count++;
    countremove = count
    alert("This Is " + count + " Address");
    console.log("count: " + count);
});

$("#remove-btn").click(function() {

    console.log("remove" + countremove--);
});


// $(document).ready(function() {
//     $(function() {

//         // $("#fname_error_message").hide();
//         // var error_fname = false;

//         // $("#form_fname").focusout(function() {
//         //     check_fname();
//         // });

//         // function check_fname() {
//         //     var pattern = /^[a-zA-Z]*$/;
//         //     var fname = $("#form_fname").val();
//         //     if (pattern.test(fname) && fname !== '') {
//         //         $("#fname_error_message").hide();
//         //         $("#form_fname").css("border-bottom", "2px solid #34F458");
//         //     } else {
//         //         $("#fname_error_message").html("Should contain only Characters");
//         //         $("#fname_error_message").show();
//         //         $("#form_fname").css("border-bottom", "2px solid #F90A0A");
//         //         error_fname = true;
//         //     }
//         // }

//         $("#registration_form").submit(function() {
//             // error_fname = false;

//             // check_fname();

//             // if (error_fname === false) {
//             //     alert("Registration Successfull");
//             //     return true;
//             // } else {
//             //     alert("Please Fill the form Correctly");
//             //     return false;
//             // }

//             var fname = $("#form_fname").val();
//             if (fname == " ") {
//                 alert("not");
//                 return false;
//             }
//         });
//     });
// });