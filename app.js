const button=document.querySelector("button");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.onstart = function () {
    console.log("Speech recognition started");
};

recognition.onresult=function (event) {
 console.log(event);

 const spokenwords = event.results[0][0].transcript;

 console.log("spoken words are",spokenwords);
 computerSpeech(spokenwords);
};

function computerSpeech(words){
 const Speech = new SpeechSynthesisUtterance();
 Speech.lang ="en-us";
 Speech.pitch=1.9;
 Speech.volume=1;
 Speech.rate=1;

// Speech.text=words;
 determineWords(Speech,words);

 window.speechSynthesis.speak(Speech);
};


function determineWords(Speech,words){
    if(words.includes("Hi,i love you")){
        Speech.text ="I am fine , thank you";
    }
    if(words.includes("Hi")){
        Speech.text ="I am fine , thank you";
    }
    if(words.includes("How are you")){
        Speech.text ="I am fine , thank you";
    }
    if(words.includes("who am I")){
        Speech.text ="you are k s r c e Student ";
    }
    if(words.includes("How are you")){
        Speech.text ="I am fine , what about you";
    }
    if(words.includes("open google for me")){
        Speech.text =" opening google for you now";
        window.open("https://www.google.com/")
    }
    if(words.includes("open facebook for me")){
        Speech.text =" opening facebook for you now";
        window.open("https://www.facebook.com/")
    }
    if(words.includes("open youtube for me")){
        Speech.text =" opening youtube for you now";
        window.open("https://www.youtube.com/")
    }
    if(words.includes("tell me something about k s r c e for me")){
        Speech.text =" this college is located in namakkal district ";
        window.open("https://ksrce.ac.in/")
    }
    if(words.includes("open gmail for me")){
        Speech.text ="opening youtube for you now ";
        window.open("https://mail.google.com/")
    }
    if(words.includes("open google classroom for me")){
        Speech.text =" opening google classroom  for you now";
        window.open("https://classroom.google.com/")
    }
}

button.addEventListener("click", () => {
 recognition.start();
});