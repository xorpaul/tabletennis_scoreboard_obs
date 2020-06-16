var top_score = 0;
var bottom_score = 0;
var top_game_score = 0;
var bottom_game_score = 0;

function swapserve() {

    if (!((top_score + bottom_score) % 2) || ((top_score >= 10) && (bottom_score >= 10))) {

        var top_player = document.getElementById("serve_indicator_top_player");
        var bottom_player = document.getElementById("serve_indicator_bottom_player");
        if (top_player.style.display === "none") {
            top_player.style.display = "block";
            bottom_player.style.display = "none";
        } else {
            top_player.style.display = "none";
            bottom_player.style.display = "block";
        }

    }
    checkgameormatchpoint();
};

function checkgameormatchpoint() {
    // gamepoint calculation
    var gamepoint = document.getElementById("gamepoint");
    // alert("top_score: " + top_score);
    // alert("bottom_score: " + bottom_score);
    if ((top_score >= 10 && bottom_score < 10) || (bottom_score >= 10 && top_score < 10) || (((top_score >= 10) && (bottom_score >= 10)) && (bottom_score != top_score))) {
        gamepoint.innerText = "GAMEPOINT";
        // gamepoint.style.display = "block";
        gamepoint.style.visibility = 'visible';
        gamepoint.style.height = "14%";
        gamepoint.style.width = "auto";
        gamepoint.style.padding = '5%';
        gamepoint.style.left = '195%';
    } else {
        gamepoint.innerText = "";
        // gamepoint.style.display = "none";
        gamepoint.style.visibility = 'hidden';
        //hint.style.opacity = '0';
        gamepoint.style.height = '0';
        gamepoint.style.width = '0';
        gamepoint.style.padding = '0';
    }

    // matchpoint calculation
    if (gamepoint.style.visibility == "visible") {

        var gamemode = document.querySelector('input[name="gamemode"]:checked').value;
        // alert(gamemode);
        if ((top_game_score == gamemode - 1 && top_score > bottom_score) || (bottom_game_score == gamemode - 1 && bottom_score > top_score)) {
            gamepoint.innerText = "MATCHPOINT";
            // change position because MATCHPOINT has more character than GAMEPOINT
            // so that it lines up with the end of the top player's score <div>
            gamepoint.style.left = "181%";
        }
    }
};

function topi() {
    top_score = top_score + 1;
    document.getElementById('top_score').innerHTML = top_score;
    swapserve();
};

function topm() {
    top_score = top_score - 1;
    document.getElementById('top_score').innerHTML = top_score;
    swapserve();
};

function topr() {
    top_score = 0;
    document.getElementById('top_score').innerHTML = top_score;
    swapserve();
};

function bottomi() {
    bottom_score = bottom_score + 1;
    document.getElementById('bottom_score').innerHTML = bottom_score;
    swapserve();
};

function bottomm() {
    bottom_score = bottom_score - 1;
    document.getElementById('bottom_score').innerHTML = bottom_score;
};

function bottomr() {
    bottom_score = 0;
    document.getElementById('bottom_score').innerHTML = bottom_score;
};

function nextgame() {
    // var gamepoint = document.getElementById("gamepoint");
    // gamepoint.innerText = "";
    // // gamepoint.style.display = "none";
    // gamepoint.style.visibility = 'hidden';
    // //hint.style.opacity = '0';
    // gamepoint.style.height = '0';
    // gamepoint.style.width = '0';
    // gamepoint.style.padding = '0';
    document.getElementById('bottom_score').innerHTML = bottom_score;
    document.getElementById('top_score').innerHTML = top_score;


    if (top_score > bottom_score) {
        top_game_score = top_game_score + 1

    } else {
        bottom_game_score = bottom_game_score + 1
    }

    document.getElementById('bottom_game_score').innerHTML = bottom_game_score;
    document.getElementById('top_game_score').innerHTML = top_game_score;

    topr();
    bottomr();
    swapserve();
};

function resetall() {
    bottom_game_score = 0;
    top_game_score = 0;
    document.getElementById("gamepoint").visibility = "hidden";
    document.getElementById('bottom_game_score').innerHTML = bottom_game_score;
    document.getElementById('top_game_score').innerHTML = top_game_score;
    topr();
    bottomr();
};

function toggle_header_text() {
    score_text = document.getElementById('score_text').innerHTML;
    game_text = document.getElementById('game_text').innerHTML;
    if (score_text == "" || game_text == "") {
        document.getElementById('score_text').innerHTML = "Points";
        document.getElementById('game_text').innerHTML = "Games";
    } else {
        document.getElementById('score_text').innerHTML = "";
        document.getElementById('game_text').innerHTML = "";
    }
};

// color selector stuff
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color
var color_top_player;
var color_bottom_player;
var top_defaultColor = "#008000";
var bottom_defaultColor = "#FF0000";

window.addEventListener("load", startup, false);

function startup() {
    color_top_player = document.querySelector("#color_top_player");
    color_top_player.value = top_defaultColor;
    color_top_player.addEventListener("change", updateTopColor, false);
    color_top_player.select();

    color_bottom_player = document.querySelector("#color_bottom_player");
    color_bottom_player.value = bottom_defaultColor;
    color_bottom_player.addEventListener("change", updateBottomColor, false);
    color_bottom_player.select();
}

function updateTopColor(event) {
    document.querySelectorAll("#top_player").forEach(function(p) {
        p.style.backgroundColor = event.target.value;
    });
    document.querySelectorAll("#top_score").forEach(function(p) {
        p.style.backgroundColor = event.target.value;
    });
}

function updateBottomColor(event) {
    document.querySelectorAll("#bottom_player").forEach(function(p) {
        p.style.backgroundColor = event.target.value;
    });
    document.querySelectorAll("#bottom_score").forEach(function(p) {
        p.style.backgroundColor = event.target.value;
    });
}