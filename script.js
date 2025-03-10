const gameContainer = document.querySelector(".container");
userResult = document.querySelector(".user_result img");
cpuResult = document.querySelector(".cpu_result img");
result = document.querySelector(".result");
optionImages = document.querySelectorAll(".option_image");

//Iterate Over Option Image
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");
    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("active");
    });
    
    gameContainer.classList.add("start")

    let time = setTimeout(() => {
      gameContainer.classList.remove("start")

      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;

      let randomNumber = Math.floor(Math.random() * 3);

      let cpuImages = [
        "images/rock.png",
        "images/paper.png",
        "images/scissors.png",
      ];

      cpuResult.src = cpuImages[randomNumber];

      let cpuValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];

      let outcomes = {
        RR: "Draw",
        RP: "User",
        RS: "Cpu",
        PP: "Draw",
        PS: "Cpu",
        PR: "User",
        SS: "Draw",
        SP: "Cpu",
        SR: "User",
      };

      let outComeValue = outcomes[userValue + cpuValue];
      result.innerText =
        userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
    }, 2500);
  });
});
