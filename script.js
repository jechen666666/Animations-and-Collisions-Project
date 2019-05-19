var count = 1;
$(".ending").hide();
$('.characterSection').hide();
$("#portal").hide();
$('#start').click(function() {
    $('#beginnings').fadeOut();
    $('#game').show();
    $('h1').show();
    $('.characterSection').show();
    $('#level').show();
    $('#boss').css("width", "0.1px");
    $(".minions").css("top", "30px");
    $('#boneDrag2').css("width", "0.1px");
    $('#boneDrag1').css("width", "0.1px");
});

$("#characterA").click(function() {
    $("#character1").attr("src", $("#characterA").attr("src"));
});
$("#characterB").click(function() {
    $("#character1").attr("src", $("#characterB").attr("src"));
});

$("body").keydown(function(event) {
    if (event.which === 39) {
        $("#character1").css("left", $("#character1").offset().left + 10);
        $("#character1").css("transform", "scaleX(1)");
    } else if (event.which === 37) {
        $("#character1").css("left", $("#character1").offset().left - 10);
        $("#character1").css("transform", "scaleX(-1)");
    } else if (event.which === 38) {
        $("#character1").css("bottom", "155px");
    } else if (event.which === 65) {
        $("#character2").css("left", $("#character2").offset().left - 5);
        $("#character2").css("transform", "scaleX(1)");
    } else if (event.which === 68) {
        $("#character2").css("left", $("#character2").offset().left + 5);
        $("#character2").css("transform", "scaleX(-1)");
    }
    collisionsGame();
});

$("body").keyup(function(event) {
    if (event.which === 38) {
        $("#character1").css("bottom", "50px");
    }
});

var portalLeft;
var portalRight;

function collisionsGame() {
    var character1Left = $("#character1").offset().left;
    var character1Right = character1Left + $("#character1").width();
    var character1Top = $("#character1").offset().top;
    var character1Bottom = character1Top + $("#character1").outerHeight(true);
    var character2Left = $("#character2").offset().left;
    var wallTop = $("#wall").offset().top;
    var wallLeft = $("#wall").offset().left;
    var bossLeft = $("#boss").offset().left;
    var boneDrag1Left = $("#boneDrag1").offset().left;
    var boneDrag1Top = $("#boneDrag1").offset().top;
    var boneDrag2Left = $("#boneDrag2").offset().left;
    var boneDrag2Top = $("#boneDrag2").offset().top;
    var boneDrag2Bottom = boneDrag2Top + $("#boneDrag2").outerHeight(true);

    if (character1Top > boneDrag2Bottom) {
        boneDrag2Left = undefined;
    }
    if ((character1Top < boneDrag2Bottom) && (character1Bottom < boneDrag1Top)) {
        boneDrag2Left = undefined;
    }
    if (character1Left > boneDrag2Left) {
        boneDrag2Left = undefined;
    }
    if (character1Right > boneDrag2Left) {
        alert("It appears that you have been eaten by a Dragon. Restarting level now...");
        $("#character1").css("left", "0px");
        $("#character1").css("bottom","57px");
    }
    if (character1Top < boneDrag1Top) {
        boneDrag1Left = undefined;
    }
    if (character1Left > boneDrag1Left) {
        boneDrag1Left = undefined;
    }
    if (character1Right > boneDrag1Left) {
        alert("It appears that you have been eaten by a Dragon. Restarting level now...");
        $("#character1").css("left", "0px");
    }
    if (character1Right > bossLeft) {
        $(".whole").hide();
        $(".ending").show();
        $("#character2").remove();
    }
    if (character1Top < wallTop) {
        wallLeft = undefined;
        character2Left = undefined;
    }
    if (character1Left > wallLeft) {
        wallLeft = undefined;
    }
    if (character1Right > wallLeft) {
        alert("Oh nose! It appears that you have accidentally collided with this wall. You now must restart this level.");
        $("#character1").css("left", "0px");
    }

    if (character1Right > character2Left) {
        alert("You have completed this level! Enter the portal in the wall to proceed.");
        $("#portal").show();
        portalLeft = $("#portal").offset().left;
        portalRight = portalLeft + $("#portal").width();
        $("#character2").attr("src", "https://media.giphy.com/media/L6rd4mAJ6UqQ0/giphy.gif");
        $("#character2").css("bottom", "57px");
    }
    if (portalRight > character1Left) {
        levelTwo();
    }
}

function levelTwo() {
    $("#game").css("background", "url(https://www.pixilart.com/images/art/thumb/18b140ee5ae7053.png)");
    $("#game").css("height", "283");
    $("#portal").hide();
    $("#wall").css("width", "0.1px");
    $("#wall").css("bottom", "10px");
    $("#character2").hide();
    $("#character1").css("left", "0px");
    $("#character1").css("transform", "scaleX(1)");
    $("#boss").css("width", "450px");
    $("#boneDrag1").css("width", "100px");
    $("#boneDrag2").css("width", "100px");
    $(".minions").css("top", "-255px");
    portalRight = undefined;
    count = count + 1;
    $("#count").text(count + " (BOSS)");
}



//Character Selection
//Check Collison Function
//Character 1 Movement
//Next Level if Needed