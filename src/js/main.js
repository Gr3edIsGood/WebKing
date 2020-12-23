import '../scss/style.scss';
import '../index.html';
import $ from 'jquery';


$(document).ready(function(){
    $(".page").hide();
    $(".alert").hide();
    $(".main-btn").click(function () {
        if ($(".page").is(":hidden")) {
            $(".page").show('fast');
            $(".main-btn").hide()
        } else {
            $(".page").hide('fast');

        }
    });
    $('.close-btn').click(function (){
        $(".page").hide('fast');
    })
    $('.send-btn').click(function (){
        $(".page").hide('fast');
        $(".alert").fadeIn('slow');
    })
    $('.alert__close--btn').click(function (){
        $(".alert").fadeOut('slow');
    })


})

