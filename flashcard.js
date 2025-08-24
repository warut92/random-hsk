let chinese_random = document.getElementById('chinese_word');
let pinyin_random = document.getElementById('pin_yin');
let meaning_random = document.getElementById('meaning');
let i = 0;


function playSound() {
    const msg = new SpeechSynthesisUtterance(word_list[i][0]);
    msg.lang = "zh-CN"; // Chinese
    speechSynthesis.speak(msg);
}


let x = 0;
function hide() {
    x++
    if (x == 1) {
        document.getElementById("hide").innerHTML = "[hide: meaning]";
        meaning_random.style.color = "#212121";
    } else if (x == 2) {
        document.getElementById("hide").innerHTML = "[hide: pin yin]";
        meaning_random.style.color = "#dcdcdc";
        pinyin_random.style.color = "#212121";
    } else if (x == 3) {
        document.getElementById("hide").innerHTML = "[hide: meaning+pin yin]";
        meaning_random.style.color = "#212121";
        pinyin_random.style.color = "#212121";
    } else if (x == 4) {
        document.getElementById("hide").innerHTML = "[hide: none]";
        meaning_random.style.color = "#dcdcdc";
        pinyin_random.style.color = "#dcdcdc";
        x = 0
    }
}

let y = 0;
function soundOpt() {
    y++
    if (y == 1) {
    document.getElementById("soundOpt").innerHTML = "[sound: auto]";
    // document.getElementById("speakBtn").style.display = "none";

    //play sound!
    playSound();
    } else if (y == 2) {
    document.getElementById("soundOpt").innerHTML = "[sound: manual]";
    // document.getElementById("speakBtn").style.display = "block";

    y = 0
    }
        console.log(y);
}

function random() {
    i = Math.floor(Math.random() * word_list.length);
    document.getElementById('chinese_word').innerHTML = word_list[i][0]
    document.getElementById('pin_yin').innerHTML = word_list[i][1]
    document.getElementById('meaning').innerHTML = word_list[i][2]
    if (y == 1) {
        playSound()
    }
}

random()