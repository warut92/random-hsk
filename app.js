let chinese_random = document.getElementById('chinese_word');
let pinyin_random = document.getElementById('pin_yin');
let meaning_random = document.getElementById('meaning');
let i = 0;

function random() {
    i = Math.floor(Math.random() * word_list.length);
    document.getElementById('chinese_word').innerHTML = word_list[i][0]
    document.getElementById('pin_yin').innerHTML = word_list[i][1]
    document.getElementById('meaning').innerHTML = word_list[i][2]

}
random()

document.getElementById("speakBtn").addEventListener("click", () => {
    console.log(i);
    const msg = new SpeechSynthesisUtterance(word_list[i][0]);
    msg.lang = "zh-CN"; // Chinese
    speechSynthesis.speak(msg);
  });
