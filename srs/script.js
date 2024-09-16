var textWrapper = document.querySelector(".lpm1");
var textWrapper2 = document.querySelector(".lpm2");
var textWrapper3 = document.querySelector(".lpm3");
var textWrapper4 = document.querySelector(".lpm4");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
textWrapper2.innerHTML = textWrapper2.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
textWrapper3.innerHTML = textWrapper3.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
textWrapper4.innerHTML = textWrapper4.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline().add({
  targets: ".lpm1 .letter",
  translateY: [10, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 1000,
  delay: (el, i) => 1000 + 60 * i,
});
anime.timeline().add({
  targets: ".lpm2 .letter",
  translateY: [10, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 1000,
  delay: (el, i) => 1000 + 60 * i,
});
anime.timeline().add({
  targets: ".lpm3 .letter",
  translateY: [10, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 1000,
  delay: (el, i) => 1500 + 60 * i,
});
anime.timeline().add({
  targets: ".lpm4 .letter",
  translateY: [10, 0],
  translateZ: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 1000,
  delay: (el, i) => 2000 + 60 * i,
});


document.querySelectorAll('.cartStoneImageLink').forEach(link => {
  link.addEventListener('mouseenter', () => {
      document.querySelectorAll('.cartStoneWrapper').forEach(wrapper => {
          if (wrapper !== link.parentElement) {
              wrapper.classList.add('hovered');
          }
      });
  });

  link.addEventListener('mouseleave', () => {
      document.querySelectorAll('.cartStoneWrapper').forEach(wrapper => {
          wrapper.classList.remove('hovered');
      });
  });
});

document.querySelectorAll('.cartStoneImageLink').forEach(link => {
  link.addEventListener('mouseenter', () => {
      const title = link.parentElement.querySelector('.cartTitleStoneLink');
      title.classList.add('hovered-title');
  });

  link.addEventListener('mouseleave', () => {
      const title = link.parentElement.querySelector('.cartTitleStoneLink');
      title.classList.remove('hovered-title');
  });
});