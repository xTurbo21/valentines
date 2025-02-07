/* const letters = [
  { date: "2025-02-07", title: "Rose Day", content: "A rose for you! 🌹" },
  {
    date: "2025-02-08",
    title: "Propose Day",
    content: "Will you be mine forever? 💍",
  },
];

const today = new Date().toISOString().split("T")[0];
const container = document.getElementById("letters");

letters.forEach((letter) => {
  const div = document.createElement("div");
  div.className = "letter";
  div.innerHTML = `<h2>${letter.title}</h2>${
    today >= letter.date ? `<p>${letter.content}</p>` : "<p>Locked 🔒</p>"
  }`;
  container.appendChild(div);
});
*/

const correctAnswers = [
  "ayesha",
  "karima",
  "ayesha karima",
  "ayesha ahammad karima",
  "ayshu",
  "babyboo",
  "his queen",
  "his baby",
];

document.addEventListener("DOMContentLoaded", function () {
  const enterButton = document.querySelector(".authorize button");
  const enterBg = document.querySelector(".authorize");
  const nameInput = document.querySelector(".name-input input");
  const originalButtonText = enterButton.textContent;
  const originalButtonColor = enterBg.style.backgroundColor;

  enterButton.addEventListener("click", function () {
    if (correctAnswers.includes(nameInput.value.trim().toLowerCase())) {
      enterButton.textContent = "SUCCESS!";
      setTimeout(function () {
        window.location.href = "valentines.html";
      }, 1000);
    } else {
      //alert("Incorrect name. Please try again.");
      enterButton.textContent = "TRY AGAIN";
      enterBg.style.backgroundColor = "#ff0000";

      setTimeout(function () {
        enterButton.textContent = originalButtonText;
        enterBg.style.backgroundColor = originalButtonColor;
      }, 1000);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const timerElement = document.querySelector(".timer");
  const dayNameElement = document.querySelector(".day-name");

  const valentinesWeek = [
    { date: "2025-02-07T00:00:00+06:00", name: "Rose Day" },
    { date: "2025-02-08T00:00:00+06:00", name: "Propose Day" },
    { date: "2025-02-09T00:00:00+06:00", name: "Chocolate Day" },
    { date: "2025-02-10T00:00:00+06:00", name: "Teddy Day" },
    { date: "2025-02-11T00:00:00+06:00", name: "Promise Day" },
    { date: "2025-02-12T00:00:00+06:00", name: "Hug Day" },
    { date: "2025-02-13T00:00:00+06:00", name: "Kiss Day" },
    { date: "2025-02-14T00:00:00+06:00", name: "Valentine's Day" },
  ];

  function updateTimer() {
    const now = new Date();

    let currentDayIndex = -1;

    for (let i = 0; i < valentinesWeek.length; i++) {
      const dayDate = new Date(valentinesWeek[i].date);
      if (now < dayDate) {
        currentDayIndex = i;
        break;
      }
    }

    if (currentDayIndex === -1) {
      timerElement.textContent = "00:00";
      dayNameElement.textContent = "Valentine's Week is Over!";
      return;
    }

    const currentDay = valentinesWeek[currentDayIndex];
    const nextDayDate = new Date(currentDay.date); // Already in GMT+6

    dayNameElement.textContent = valentinesWeek[currentDayIndex - 1].name;

    const timeRemaining = nextDayDate - now;
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    timerElement.textContent = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  setInterval(updateTimer, 1000);
  updateTimer();
});

// Daily gift

document.addEventListener("DOMContentLoaded", function () {
  const gifts = document.querySelectorAll(".gift");

  const giftsData = [
    {
      day: 0,
      image: "daisy.png",
      text: "🌼 Daisies are White 🌼<br>🌼 You're my Babyboo 🌼<br>🌼 It's Rose Day 🌼<br>🌼 And I Love You 🌼<br>Happy Rose Day My Love! I know roses aren't really your favourite - daisies are! So, here's some beautiful little daisies for my beautiful Queen 💖 You deserve all the beautiful flowers in the world and more 🌎🌼",
    },
    {
      day: 1,
      image: "propose.png",
      text: "💍 I heard my baby likes Darry rings? Now, I don't know if at the time of writing this we're still together or not but even if we are - Will you be mine forever? 💍 Till I buy you a real one someday, here's a virtual darry ring for your pretty finger 💖",
    },
    {
      day: 2,
      image: "chocolate.png",
      text: "🍫 Toblerone? Ferrero Rocher? Hersheys? Kinder Bueno? Yes. YES. YES!! ALL OF THEM FOR MY BABYBOO!! I will feed you these until you look pregnant 😈😈 Happy Chocolate Day My Love!! 💖🍫 Hope you like these virtual chocolates :3",
    },
    {
      day: 3,
      image: "teddy.png",
      text: "🧸 What's the best teddy in the world? KUUUUULOOOOOOOOOOOMIIIIIIII TEEEDDDYYYYYYY!!! FOR MY KUROMI BABYYYYYYYY!! HAPPY TEDDY DAY MY CUTE LIL TEDDYBEAR!! I LOVE YOU SO SO MUCHHHH 💖🧸",
    },
    {
      day: 4,
      image: "promise.png",
      text: "🙌🏻 It's promise day! I know we both broke a lot of promises.. but one thing I can promise is that you will always, and I mean ALWAYS have a very special place in my heart. I love you so much My Love 💖 Happy Promise Day! 💖",
    },
    {
      day: 5,
      image: "hug.png",
      text: "🤗 Honestly I miss your hugs so much:) I can't wait to hug you tightly again. Happy Hug Day My Love! For today's gift, you get a FREE ticket for an INFINITE NUMBER OF HUGS FOREVEEEEEEEEERR!!!!!!! YAYAYAYAY 💖🤗 I LOVE YOUU 💖",
    },
    {
      day: 6,
      image: "kiss.gif",
      text: "💋 Ofcourse I had to pull out this bad boy for today's picture 🤭🤭 Happy Kiss Day My Baby 💋💖 May I always get to fill you with kisses whenever I see you 🤪🤪 I love kissing you hehe I love you so much 💖💋<br>I hope you loved all the virtual presents I made for you. But since it's the last day, there's only one question that remains.. <br> 💖 WILL YOU BE MY VALENTINE? 💖",
    },
  ];

  function isDayUnlocked(dayIndex) {
    const now = new Date();
    const valentinesWeek = [
      "2025-02-07T00:00:00+06:00",
      "2025-02-08T00:00:00+06:00",
      "2025-02-09T00:00:00+06:00",
      "2025-02-10T00:00:00+06:00",
      "2025-02-11T00:00:00+06:00",
      "2025-02-12T00:00:00+06:00",
      "2025-02-13T00:00:00+06:00",
      "2025-02-14T00:00:00+06:00",
    ];
    return now >= new Date(valentinesWeek[dayIndex]);
  }

  gifts.forEach((gift, index) => {
    const giftText = gift.querySelector(".gift-text");
    const revealedContent = gift.querySelector(".revealed-content");
    const revealedImage = revealedContent.querySelector(".revealed-image");
    const revealedText = revealedContent.querySelector(".revealed-text");

    if (isDayUnlocked(index)) {
      giftText.textContent = "UNLOCK";
    } else {
      giftText.textContent = "LOCKED";
    }

    gift.addEventListener("click", function () {
      if (isDayUnlocked(index)) {
        revealedImage.src = giftsData[index].image;
        revealedText.innerHTML = giftsData[index].text;
        revealedContent.style.display = "block";
        giftText.style.display = "none";
      } else {
        giftText.textContent = "TRY TOMORROW!";
        giftText.style.background = "rgba(200, 20, 20, 1)";

        setTimeout(function () {
          giftText.textContent = "LOCKED";
          giftText.style.background = "rgba(0, 0, 0, 0.7)";
        }, 2000);
      }
    });
  });
});
