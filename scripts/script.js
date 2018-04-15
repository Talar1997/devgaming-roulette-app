const delay = 8000;
var credits = 999;
var required = 1;
var currentCase;
var CurrentCaseName;


$( document ).ready(function() {
  var itemHistory = getCookie("itemHistory");
  $('myItems')[0].innerHTML = itemHistory;
  document.getElementById("credits").innerHTML = credits;
});

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


var allCases = [
    ["LombardCase", "Skrzynia operacji lombard" , "https://i.imgur.com/YKqqZJt.png"],
    ["JunkyardCase", "Skrzynia złomiarza", "https://i.imgur.com/QzPCR8Y.png"],
    ["JubilerCase", "Skrzynia Jubilera", "https://i.imgur.com/JGBOthU.png"],
    ["MoneyCase", "Skrzynia z pieniędzmi", "https://i.imgur.com/6PvxaCp.png"],
    ["WorkshopCase", "Skrzynia op. warsztat", "https://i.imgur.com/CQgu1IM.png"],
    ["PremiumCase", "Skrzynia Premium", "https://i.imgur.com/rdPuR2i.png"],
];

//Nazwa, typ, miniaturka, zdjecie
var LombardCase = [
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
    ["Oceanic", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/467.jpg", "https://i.imgur.com/123fcqH.png"],
    ["Clover", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/542.jpg", "https://i.imgur.com/ga2c3fl.png"],
    ["Greenwood", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/492.jpg", "https://i.imgur.com/cnOXDef.png"],
    ["Regina", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/479.jpg", "https://i.imgur.com/BTXjesq.png"],
    ["Moonbean", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/418.jpg", "https://i.imgur.com/iNP7ADY.png"],
    ["Hermes", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/474.jpg", "https://i.imgur.com/buwtM6v.png"],
];

//brakuje obrazków
var MoneyCase = [
    ["✪ $50.000 ✪", "legendary", "https://i.imgur.com/W2sjZzC.png", ""],
    ["$35.500", "mythical", "https://i.imgur.com/q5OGU9T.png", ""],
    ["$32.000", "mythical", "https://i.imgur.com/sKSUz6R.png", ""],
    ["$25.500", "unreal", "https://i.imgur.com/H1wbZH8.png", ""],
    ["$24.000", "unreal", "https://i.imgur.com/XObJ3He.png", ""],
    ["$23.500", "unreal", "https://i.imgur.com/LIdxOhM.png", ""],
    ["$15.000", "rare", "https://i.imgur.com/pMtOv6B.png", ""],
    ["$14.500", "rare", "https://i.imgur.com/APgdI4N.png", ""],
    ["$13.000", "rare", "https://i.imgur.com/SPrHofu.png", ""],
    ["$12.500", "rare", "https://i.imgur.com/3PPcxO8.png", ""],
    ["$6.000", "common", "https://i.imgur.com/v1L3CfZ.png", ""],
    ["$5.500", "common", "https://i.imgur.com/eoJ79Zq.png", ""],
    ["$5.000", "common", "https://i.imgur.com/TciHicN.png", ""],
    ["$4.500", "common", "https://i.imgur.com/9hEzbRe.png", ""],
    ["$4.000", "common", "https://i.imgur.com/Jqce2pC.png", ""],
    ["$3.500", "common", "https://i.imgur.com/23Nd0Xh.png", ""],
    ["$3.000", "common", "https://i.imgur.com/otrHSaW.png", ""],
    ["$2.500", "common", "https://i.imgur.com/h7yqzeI.png", ""],
    ["$2.000", "common", "https://i.imgur.com/4P6exjN.png", ""],
];


//Brakuje powiekszonych obrazkow
var JunkyardCase = [
    ["✪ Hot-Knife ✪", "legendary", "http://gtav.pl/uploads/gtam/GTASA_vehicles/434.jpg", ""],
    ["Hustler", "mythical", "http://gtav.pl/uploads/gtam/GTASA_vehicles/545.jpg", ""],
    ["Buffalo", "mythical", "http://gtav.pl/uploads/gtam/GTASA_vehicles/402.jpg", ""],
    ["Patriot", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/470.jpg", ""],
    ["Mesa", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/500.jpg", ""],
    ["BF-Injection", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/424.jpg", ""],
    ["Broadway", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/575.jpg", ""],
    ["Admiral", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/445.jpg", ""],
    ["Phoenix", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/603.jpg", ""],
    ["Sabre", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/475.jpg", ""],
    ["Sadler", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/543.jpg", ""],
    ["Intruder", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/546.jpg", ""],
    ["Stafford", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/580.jpg", ""],
    ["Perrenial", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/404.jpg", ""],
    ["Solair", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/458.jpg", ""],
    ["Camper", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/483.jpg", ""],

];

//Brakuje powiekszonych obrazków
var PremiumCase = [
    ["✪ Paintjob ✪", "legendary", "https://i.imgur.com/FOzpPJC.png", ""],
    ["50.000 cP", "mythical", "https://i.imgur.com/SMHefzM.png", ""],
    ["Grupa rodziny", "mythical", "https://i.imgur.com/qj2Mkje.png", ""],
    ["Konto premium 90 dni", "unreal", "https://i.imgur.com/SMHefzM.png", ""],
    ["Konto premium 60 dni", "unreal", "https://i.imgur.com/SMHefzM.png", ""],
    ["30.000 cP", "unreal", "https://i.imgur.com/zV6iO8r.png", ""],
    ["Konto premium 30 dni", "rare", "https://i.imgur.com/zV6iO8r.png", ""],
    ["12.000 cP", "rare", "https://i.imgur.com/zV6iO8r.png", ""],
    ["Konto premium 21 dni", "rare", "https://i.imgur.com/zV6iO8r.png", ""],
    ["11.000 cP", "rare", "https://i.imgur.com/zV6iO8r.png", ""],
    ["5.000 cP", "common", "https://i.imgur.com/4aYezGj.png", ""],
    ["4.500 cP", "common", "https://i.imgur.com/4aYezGj.png", ""],
    ["4.000 cP", "common", "https://i.imgur.com/4aYezGj.png", ""],
    ["Własna rejestracja", "common", "https://i.imgur.com/gnPyMkf.png", ""],
    ["Blokada postaci", "common", "https://i.imgur.com/qz9rrRm.png", ""],
    ["Konto premium 3 dni", "common", "https://i.imgur.com/4aYezGj.png", ""],
    ["Konto premium 1 dni", "common", "https://i.imgur.com/4aYezGj.png", ""],
];


var JubilerCase = [
    ["✪ Maverick ✪", "legendary", "http://gtav.pl/uploads/gtam/GTASA_vehicles/487.jpg", ""],
    ["NRG-400", "mythical", "http://gtav.pl/uploads/gtam/GTASA_vehicles/522.jpg", ""],
    ["Super GT", "mythical", "http://gtav.pl/uploads/gtam/GTASA_vehicles/506.jpg", ""],
    ["Washinton", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/421.jpg", ""],
    ["Stretch", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/409.jpg", ""],
    ["Slamvan", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/535.jpg", ""],
    ["Sentinel", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/516.jpg", ""],
    ["Premier", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/426.jpg", ""],
    ["Stratum", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/561.jpg", ""],
    ["Dinghy", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/473.jpg", ""],
    ["Journey", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/508.jpg", ""],
    ["Bobcat", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/422.jpg", ""],
    ["Picador", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/600.jpg", ""],
    ["Walton", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/478.jpg", ""],
    ["Previon", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/436.jpg", ""],
    ["Glendale", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/466.jpg", ""],
    ["Fortune", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/526.jpg", ""],
    ["Emperor", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/585.jpg", ""],
];

var WorkshopCase = [
    ["✪ Sandking ✪", "legendary", "http://gtav.pl/uploads/gtam/GTASA_vehicles/495.jpg", ""],
    ["Cheetah", "mythical", "http://gtav.pl/uploads/gtam/GTASA_vehicles/415.jpg", ""],
    ["Turismo", "mythical", "http://gtav.pl/uploads/gtam/GTASA_vehicles/451.jpg", ""],
    ["Squallo", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/452.jpg", ""],
    ["Alpha", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/602.jpg", ""],
    ["Huntley", "unreal", "http://gtav.pl/uploads/gtam/GTASA_vehicles/579.jpg", ""],
    ["BF-Injection", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/424.jpg", ""],
    ["Stratum", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/561.jpg", ""],
    ["Club", "rare", "http://gtav.pl/uploads/gtam/GTASA_vehicles/589.jpg", ""],
    ["Picador", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/600.jpg", ""],
    ["Hermes", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/474.jpg", "https://i.imgur.com/buwtM6v.png"],
    ["Regina", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/479.jpg", "https://i.imgur.com/BTXjesq.png"],
    ["Sunrise", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/550.jpg", ""],
    ["Manana", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/410.jpg", ""],
    ["Rumpo", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/440.jpg", ""],
    ["Walton", "common", "http://gtav.pl/uploads/gtam/GTASA_vehicles/478.jpg", ""],
];

var BankCase = [
    ["✪✪", "", "", ""],
];

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);

    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

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


    for(var i = 0; i < arrlen; i++){
        var category = arr[i][1]
        if(category == "common"){
            for(var j = 0; j < 1000; j++) arr.push([arr[i][0], arr[i][1], arr[i][2]]);
        }
        else if(category == "rare"){
            for(var j = 0; j < 180; j++) arr.push([arr[i][0], arr[i][1], arr[i][2]]);
        }
        else if(category == "unreal"){
            for(var j = 0; j < 30; j++) arr.push([arr[i][0], arr[i][1], arr[i][2]]);
        }
        else if(category == "mythical"){
            for(var j = 0; j < 15; j++) arr.push([arr[i][0], arr[i][1], arr[i][2]]);
        }
        else if(category == "legendary"){
            for(var j = 0; j < 3; j++) arr.push([arr[i][0], arr[i][1], arr[i][2]]);
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

function spin(caseName) {
    var newMargin = 0, newDistance = 0;
    var mySound = new sound("sounds/sound.wav");

    newDistance = Math.floor((Math.random()*2000)+10000);
	  newMargin = -(newDistance);
    mySound.play();
    $('.card').first().animate({
        marginLeft: newMargin
    }, delay);

    var card_id = parseInt((-((newMargin-100) / 200))) + 1;
    var itemWon = $('#card_'+card_id).attr('value');

    showPrize(currentCase, itemWon);
    addToItemList(currentCase, itemWon);
}

function addToItemList(currentCase, itemWon){
  var arr = currentCase.slice();
  var currentDate = new Date();
  var day = currentDate.getDate(); if(day < 10) day = "0" + day;
  var month = (parseInt(currentDate.getMonth())+1); if(month < 10) month = "0" + month;
  var year = currentDate.getFullYear();
  var hour = currentDate.getHours(); if(hour < 10) hour = "0" + hour;
  var minutes = currentDate.getMinutes(); if(minutes < 10) minutes = "0" + minutes;
  var seconds = currentDate.getSeconds(); if(seconds < 10) seconds = "0" + seconds;
  var now = "[" + day + "." + month + "." + year + " " + hour + ":" + minutes + ":" + seconds + "] ";
  var className;
  for(var i = 0; arr.length; i++){
      if(arr[i][0]==itemWon){
        className = arr[i][1];
        break;
  }
}
  var oldItemHistory = $('.myItems')[0].innerHTML;
   var newItemHistory = now + " " + currentCaseName +" <span class='" + className + "'>" + itemWon + "</span><br>" + oldItemHistory;
   $('.myItems')[0].innerHTML = newItemHistory;
   setCookie("itemHistory",newItemHistory,30);
}

function showPrize(caseName, item){
    var mySound = new sound("sounds/sound2.wav");
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
            mySound.play();
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

$('a').click(function(){
    $('.back').attr('value', '1');
    var mySound = new sound("sounds/sound3.wav");
    mySound.play();
    var caseOption = $(this).attr('value');
    $('.bottom_field > .card_wrapper').each(function(){
        $(this).remove();
    });
    $('.menu').attr("style", "display: none");
    switch(caseOption){
        case "LombardCase":
            currentCaseName = "Skrzynia operacji lombard";
            currentCase = LombardCase.slice();
            break;
        case "MoneyCase":
            currentCaseName = "Skrzynia z pieniędzmi";
            currentCase = MoneyCase.slice();
            break;
        case "JunkyardCase":
            currentCaseName = "Skrzynia złomiarza";
            currentCase = JunkyardCase.slice();
            break;
        case "WorkshopCase":
            currentCaseName = "Skrzynia op. warsztat";
            currentCase = WorkshopCase.slice();
            break;
        case "JubilerCase":
            currentCaseName = "Skrzynia Jubilera";
            currentCase = JubilerCase.slice();
            break;
        case "PremiumCase":
            currentCaseName = "Skrzynia Premium";
            currentCase = PremiumCase.slice();
            break;
        default:
            break;
    }

    for(var i = 0; i < allCases.length; i++){
        if(allCases[i][0] == caseOption){
            $('.case > .card_wrapper > .card').attr('style', "background-image: url('"+allCases[i][2]+"')");
            document.getElementById('cName').innerHTML = allCases[i][1];
            break;
        }
    }

    $('.top_field').fadeIn('fast');
    showAllPrizes(currentCase);
    $('.case-opening').fadeIn('fast');
})

$('#open').click(function() {
    $('.back').attr('value', '0');
    var mySound = new sound("sounds/sound3.wav");
    if(credits >= required){
        mySound.play();
        credits -= required;
        $('.case_field').fadeIn("fast");
        $('#open').prop('disabled',true);
        document.getElementById("credits").innerHTML = credits;

        try{
            $('.cardList')[0].remove();
        }catch(err){}

        $('.top_field').fadeOut("fast");
        setTimeout(function(){
            generateCase(currentCase);
        },700);
        setTimeout(function(){
            startSpinning();
        }, 1300)
    }
});

$(".close")[0].onclick = function() {
    var mySound = new sound("sounds/sound3.wav");
    mySound.play();
    closeModalWindow();
    $('.case_field').fadeOut('fast');
    $('.case-opening').attr("style","display: none");
    $('.menu').attr("style", "display: block");
}

$('.back')[0].onclick = function(){
    if($(this).attr('value')==1){
      var mySound = new sound("sounds/sound3.wav");
      mySound.play();
      $('.case_field').fadeOut('fast');
      $('.case-opening').attr("style","display: none");
      $('.menu').attr("style", "display: block");
    }
}

function closeModalWindow(){
    $('#myModal').fadeOut("fast");
}
