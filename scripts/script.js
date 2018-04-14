var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
const delay = 7000;
var credits = 999;
var required = 1;

$( document ).ready(function() {
  showAllPrizes(JubilerCase);
  document.getElementById("credits").innerHTML = credits;
});

//Nazwa, typ, miniaturka, zdjecie
var JubilerCase = [
    ["✪ Bandito ✪", "legendary", "http://gtav.pl/uploads/gtam/GTASA_vehicles/568.jpg", "https://i.imgur.com/fwMNHX6.png"],
    ["Bullet", "mythical", "http://gtav.pl/uploads/gtam/GTASA_vehicles/541.jpg", "https://i.imgur.com/oHx73bO.png"],
    ["Comet", "mythical", "http://gtav.pl/uploads/gtam/GTASA_vehicles/480.jpg", "https://i.imgur.com/Wo0ICbx.png"],
    ["Sultan", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/560.jpg", "https://i.imgur.com/8m9n7ex.png"],
    ["Jester", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/559.jpg", "https://i.imgur.com/MbWwCfE.png"],
    ["Flash", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/565.jpg", "https://i.imgur.com/3qXA5Zs.png"],
    ["Feltzer", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/533.jpg", "https://i.imgur.com/aKfc4i1.png"],
    ["Windsor", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/555.jpg", "https://i.imgur.com/H05wu2i.png"],
    ["Blista", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/496.jpg", "https://i.imgur.com/mbJ0DEg.png"],
    ["Tampa", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/549.jpg", "https://i.imgur.com/NNOiDIc.png"],
    ["Oceanic", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/466.jpg", "https://i.imgur.com/123fcqH.png"],
    ["Clover", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/542.jpg", "https://i.imgur.com/ga2c3fl.png"],
    ["Greenwood", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/492.jpg", "https://i.imgur.com/cnOXDef.png"],
    ["Regina", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/479.jpg", "https://i.imgur.com/BTXjesq.png"],
    ["Moonbean", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/418.jpg", "https://i.imgur.com/iNP7ADY.png"],
    ["Hermes", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/474.jpg", "https://i.imgur.com/buwtM6v.png"],
];

function showAllPrizes(caseName){
    //Wyświetlanie wszystkich możliwych przedmiotów do zdobycia
    var arr = caseName.slice();
    var arrlen = arr.length;
    for(var i = arrlen-1; i >= 0; i--){
        var card_wrapper = document.createElement("div");
        card_wrapper.className += "card_wrapper ";
        $(card_wrapper).attr("style", "display: none");
        $('.bottom_field')[0].appendChild(card_wrapper);

        var card = document.createElement("div");
        card.className += "card";
        card.setAttribute("style", "background-image: url('"+arr[i][2]+"')");
        $(card).attr('value', arr[i][0]);
        card_wrapper.appendChild(card);

        var info = document.createElement("div");
        info.className += "info ";
        info.className += arr[i][1];
        info.innerHTML = arr[i][0];
        card.appendChild(info);
    }

    $('.card_wrapper').each(function(){
        $(this).fadeIn("slow");
    })
}

function generateCase(caseName){
    var arr = caseName.slice();
    var arrlen = arr.length;

    var cardList = document.createElement("div");
    cardList.className += "cardList ";
    $(cardList).attr('id', 'main');
    $(cardList).attr("style", "display: none");
    $('.center')[0].appendChild(cardList);

    //showAllPrizes(caseName);

    for(var i = 0; i < arrlen; i++){
        if(arr[i][1] == "common"){
            for(var j = 0; j < 300; j++) arr.push([arr[i][0], arr[i][1], arr[i][2]]);
        }
        else if(arr[i][1] == "rare"){
            for(var j = 0; j < 60; j++) arr.push([arr[i][0], arr[i][1], arr[i][2]]);
        }
        else if(arr[i][1] == "unreal"){
            for(var j = 0; j < 10; j++) arr.push([arr[i][0], arr[i][1], arr[i][2]]);
        }
        else if(arr[i][1] == "mythical"){
            for(var j = 0; j < 5; j++) arr.push([arr[i][0], arr[i][1], arr[i][2]]);
        }
        else if(arr[i][1] == "legendary"){
            for(var j = 0; j < 1; j++) arr.push([arr[i][0], arr[i][1], arr[i][2]]);
        }
    }


    //Losowe generowanie caseFielda
    for(var i = 0; i < 80; i++){
        var rand = (Math.floor((Math.random()*100000))) % arr.length;

        var card = document.createElement("div");
        card.className += "card";
        $(card).attr('id', 'card_'+i);
        $(card).attr('value', arr[rand][0]);
        card.setAttribute("style", "background-image: url('"+arr[rand][2]+"')");
        $('.cardList')[0].appendChild(card);

        var info = document.createElement("div");
        info.className += "info ";
        info.className += arr[rand][1];
        info.innerHTML = arr[rand][0];
        card.appendChild(info);
   }

    $('.cardList').fadeIn("slow");
    $('#spin').prop('disabled', false);
}

function spin() {
    var newMargin = 0, newDistance = 0;
    newDistance = Math.floor((Math.random()*2000)+10000);
	newMargin = -(newDistance);
    $('.card').first().animate({
        marginLeft: newMargin
    }, delay);

    var card_id = parseInt((-((newMargin-100) / 200))) + 1;
    var itemWon = $('#card_'+card_id).attr('value');

    showPrize(JubilerCase, itemWon);
}

function showPrize(caseName, item){
    var arr = caseName.slice();
    var prizePicture;

    for(var i = 0; i < arr.length; i++){
        if(arr[i][0] == item){
            $('.modal-header')[0].innerHTML = "Wygrany przedmiot: " + item;
            $('.modal-img')[0].setAttribute("style", "background-image: url('"+arr[i][3]+"')");
            break;
        }
    }

    setTimeout(function(){
            $('#myModal').fadeIn("fast");
        }, delay+1000);
}

function startSpinning(){
    $('.card').first().css('margin-left', 0);
    $('#spin').prop('disabled',true);
    setTimeout(spin,100);
    if(credits>=required){
        setTimeout(function(){
            $('#open').prop('disabled',false);
        }, delay + 2000);
    }
}

$('#open').click(function() {

    if(credits >= required){
        credits -= required;
        $('.case_field').fadeIn("fast");
        $('#open').prop('disabled',true);
        document.getElementById("credits").innerHTML = credits;

        try{
            /*$('.card_wrapper').each(function(){
                $(this).remove();
            });*/
            $('.cardList')[0].remove();
        }catch(err){}

        $('.top_field').fadeOut("fast");
        setTimeout(function(){
            generateCase(JubilerCase);
        },700);
        setTimeout(function(){
            startSpinning();
        }, 1300)
    }
});

span.onclick = function() {
    closeModalWindow();
}

function closeModalWindow(){
    $('#myModal').fadeOut("fast");
}
