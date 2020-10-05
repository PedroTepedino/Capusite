$(document).ready(function (){
    $('#capudinoPhoto').click(function () {
        $('#aboutUsPhoto > img').attr("src", "./images/CapudinoLogo.png").stop(true,true).hide().fadeIn(1000, "swing");
        $('#aboutUsTitle').text("Capudino").stop(true,true).hide().fadeIn(1000, "swing");
        $('#aboutUsText').text("").stop(true,true).hide().fadeIn(1000, "swing");
    });

    $('#rofoPhoto').click(function () {
        $('#aboutUsPhoto > img').attr("src", "./images/RofoRofosoTotoso.jpg").stop(true,true).hide().fadeIn(1000, "swing");
        $('#aboutUsTitle').text("Rafael Oliveira").stop(true,true).hide().fadeIn(1000, "swing");
        $('#aboutUsText').text("Programmer").stop(true,true).hide().fadeIn(1000, "swing");
    });

    $('#topoPhoto').click(function () {
        $('#aboutUsPhoto > img').attr("src", "./images/TopoToposo.jpg").stop(true,true).hide().fadeIn(1000, "swing");
        $('#aboutUsTitle').text("Pedro Tepedino").stop(true,true).hide().fadeIn(1000, "swing");
        $('#aboutUsText').text("Lead Programmer").stop(true,true).hide().fadeIn(1000, "swing");
    });

    $('#dovoPhoto').click(function () {
        $('#aboutUsPhoto > img').attr("src", "./images/DavizeraRera.jpg").stop(true,true).hide().fadeIn(1000, "swing");
        $('#aboutUsTitle').text("Davi Carrijo").stop(true,true).hide().fadeIn(1000, "swing");
        $('#aboutUsText').text("VFX Artist").stop(true,true).hide().fadeIn(1000, "swing");
    });

    $('#joooPhoto').click(function () {
        $('#aboutUsPhoto > img').attr("src", "./images/JoooOoo.jpg").stop(true,true).hide().fadeIn(1000, "swing");
        $('#aboutUsTitle').text("João de Lorenzi").stop(true,true).hide().fadeIn(1000, "swing");
        $('#aboutUsText').text("Artist").stop(true,true).hide().fadeIn(1000, "swing");
    });

    $('#josoPhoto').click(function () {
        $('#aboutUsPhoto > img').attr("src", "./images/JosoJososo.jpg").stop(true,true).hide().fadeIn(1000, "swing");
        $('#aboutUsTitle').text("José Karnikowski").stop(true,true).hide().fadeIn(1000, "swing");
        $('#aboutUsText').text("Artist").stop(true,true).hide().fadeIn(1000, "swing");
    });
})