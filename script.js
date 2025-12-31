const music = document.getElementById("bgMusic");
const wishButton = document.getElementById("wishButton");
const endButton = document.getElementById("endButton");
const mainContainer = document.getElementById("mainContainer");
const loveContainer = document.getElementById("loveContainer");
const loveMessage = document.getElementById("loveMessage");
const loveText = document.getElementById("loveText");
const bgImage = document.querySelector(".bg-image");

// Surprise button click
wishButton.addEventListener("click", () => {
    music.play().catch(() => alert("Tap to allow sound 🎵"));

    // Hide first part, show love part
    mainContainer.classList.add("hidden");
    loveContainer.classList.remove("hidden");

    // Fade in background image
    setTimeout(() => {
        bgImage.classList.add("show");
    }, 300);

    // Start floating hearts
    createHearts();

    // Typewriter message
    const text = `Kartika 💖,
 ❤ My Love, My Everything ❤
Aaj New Year aane wala hai,
aur is moment pe mujhe sirf tum yaad aa rahi ho.
Tum meri life ka wo hissa ho jiske bina main apne aaj aur kal dono imagine nahi kar sakta.
Tum sirf meri friend ya meri girlfriend nahi ho,
tum meri hone wali wife, meri family,
aur meri zindagi ka sabse important person ho 💍❤
Humare beech jo kuch bhi hua hai —
ladayi, misunderstandings, narazgi, silence…
har cheez ke baad mujhe ek hi baat clear hui hai
main tumse aur zyada strongly pyar karne laga hoon 🥺💞
Main promise karta hoon
chahe life mein jo bhi phase aaye,
main tumhare saath khada rahunga.
Tumhari khushi meri responsibility hai,
aur tumhari safety, respect aur care meri priority 🫶
Main tumse isliye pyar nahi karta
kyunki tum perfect ho,
main tumse isliye pyar karta hoon
kyunki tum meri ho ❤
Aaj, is New Year ke start pe,
main bas itna kehna chahta hoon —
main tumhare saath hoon,
tumhare liye hoon,
aur hamesha rahunga ♾
Thank you meri life mein aane ke liye,
mujhe samajhne ke liye,
aur mujhe bina condition ke pyar karne ke liye 🥹❤
Happy New Year meri jaan 🎉🥂
I love you… today, tomorrow, always 😘❤
`;

    let i = 0;
    loveMessage.innerHTML = ""; // reset before typing

    function typeWriter() {
        if (i < text.length) {
            loveMessage.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();
});

// End button click
endButton.addEventListener("click", () => {
    loveMessage.textContent = "";
    loveText.classList.remove("hidden");
    loveText.textContent = "💞 With Love, from Sujal 💖";
});

// Floating hearts animation
function createHearts() {
  const heartsContainer = document.querySelector(".hearts");
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 24 + 10 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s"; // different speeds
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }, 400);
}

