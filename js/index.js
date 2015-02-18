$(document).ready(function() {
    $('.button').click(function() {
        var type = $(this).attr('data-type');

        $('.overlay-container').fadeIn();
        $('.window-container.'+type).addClass('window-container-visible');
        $('.button').attr("disabled",true);

        $('.overlay-container').click(function() {
            $('.window-container.'+type).removeClass('window-container-visible');
            $('.overlay-container').fadeOut();
            $('.button').attr("disabled",false);
        });
        animarNumero();
    });
});

$("#pagetwo").on('pagebeforeshow', function() {
    $(".listFinance div").animate({
        width: '10px'
    });
});

var tope = 245;
var numeroActual = 1;
function animarNumero() {
    var tid = undefined;
    
    numeroActual += Math.floor(tope / 200);
    if(numeroActual >= tope) {
        $("#dineroEfectivo .cantidad").html(tope);
        clearInterval(tid);
    } else {
        $("#dineroEfectivo .cantidad").html(numeroActual);
        tid = setTimeout(animarNumero, 1);
    }
    
}

//Parte de angular
var mod = angular.module("financeApp", []);

mod.controller('FinanceAppCtrl', function($scope) {
   $scope.prueba = 3; 
});
