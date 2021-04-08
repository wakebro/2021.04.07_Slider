"User stric";

// Slider1
// 슬라이더를 출력 할 class 생성
const showing = "showing";
const firstSlider = document.querySelector(".slider1__item:first-child");

function slider() {
  const currentSlider = document.querySelector(`.${showing}`);
  if (currentSlider) {
    currentSlider.classList.remove(showing); // 현재 출력되는 슬라이더가 있을 경우 class 지우기
    const nextSlider = currentSlider.nextElementSibling; // nextElementSibling을 이용하여 다음 슬라이더 탐색
    if (nextSlider) {
      nextSlider.classList.add(showing); // 출력할 다음 슬라이더가 있을 경우 class 추가
    } else {
      firstSlider.classList.add(showing); // 출력할 다음 슬라이더가 없을 경우 처음 슬라이더 출력
    }
  } else {
    firstSlider.classList.add(showing); // 출력되는 슬라이더가 없을 경우 처음 슬라이더 실행
  }
}
slider(); // 함수 실행
setInterval(slider, 2000); // setInterval_실행할 함수 2000ms마다 재실행

// Slider2
const sliderWrapper = document.querySelector(".slider2"),
  sliderContainer = document.querySelector(".sliderContainer"),
  slides = document.querySelectorAll(".slide2__item"),
  slideCount = slides.length,
  navPrev = document.querySelector("#prev"),
  navNext = document.querySelector("#next");
var currentIndex = 0,
  topHeight = 0;

// 슬라이드 높이 확인하여 가장 높은 높이 지정
function calculateHeight() {
  for (let i = 0; i < slideCount; i++) {
    if (slides[i].offsetHeight > topHeight) {
      topHeight = slides[i].offsetHeight;
    }
  }
  sliderWrapper.style.height = `${topHeight}px`;
  sliderContainer.style.height = `${topHeight}px`;
}
calculateHeight();

// 슬라이드 가로로 나열
function calculateLeft() {
  for (let i = 0; i < slideCount; i++) {
    slides[i].style.left = `${i * 100 + 50}%`;
  }
}
calculateLeft();

// 슬라이드 이동 함수
function goToSlide(index) {
  sliderContainer.style.left = `${index * -100}%`;
  sliderContainer.classList.add("animated");
  currentIndex = index;
  //   updateNav();
}
// goToSlide(0);

// 버튼 클릭 후 슬라이드 이동
navPrev.addEventListener("click", (event) => {
  event.preventDefault();
  //   goToSlide(currentIndex - 1);
  currentIndex > 0 ? goToSlide(currentIndex - 1) : goToSlide(slideCount - 1);
});
navNext.addEventListener("click", (event) => {
  event.preventDefault();
  currentIndex < slideCount - 1 ? goToSlide(currentIndex + 1) : goToSlide(0);
});

// 버튼 기능 업데이트
function updateNav() {
  if (currentIndex === 0) {
    navPrev.classList.add("disable");
  } else {
    navPrev.classList.remove("disable");
  }
  if (currentIndex === slideCount - 1) {
    navNext.classList.add("disable");
  } else {
    navNext.classList.remove("disable");
  }
}
// 첫번째 슬라이드 먼저 보이게 하기
goToSlide(0);

// Slider3
const slider3Wrapper = document.querySelector(".slider3_wrap"),
  slider3Contaner = document.querySelector(".slider3_Container"),
  nav3Prev = document.querySelector("#prev3"),
  nav3Next = document.querySelector("#next3");
let currentIndex3 = 0,
  slide3Height = 0,
  slide3Width = 0;

// 첫 번째와 마지막 슬라이드에 붙일 슬라이드 복제
const firstChild = slider3Contaner.firstElementChild,
  lastChild = slider3Contaner.lastElementChild,
  cloneFirst = firstChild.cloneNode(true),
  cloneLast = lastChild.cloneNode(true);
slider3Contaner.appendChild(cloneFirst);
slider3Contaner.insertBefore(cloneLast, slider3Contaner.firstElementChild);
const slides3 = slider3Contaner.querySelectorAll(".slide3__item"),
  slide3Count = slides3.length;

// 슬라이드 높이 확인 후 가장 큰 높이 지정
function checkHeight() {
  for (let i = 0; i < slide3Count; i++) {
    if (slide3Height < slides3[i].offsetHeight) {
      slide3Height = slides3[i].offsetHeight;
    }
  }
  slider3Wrapper.style.height = `${slide3Height}px`;
  slider3Contaner.style.height = `${slide3Height}px`;
}
checkHeight();
// 슬라이드 넓이 확인 후 가장 넓은 너비 지정
function checkWidth() {
  for (let i = 0; i < slide3Count; i++) {
    if (slide3Width < slides3[i].offsetWidth) {
      slide3Width = slides3[i].offsetWidth;
    }
  }
  slider3Wrapper.style.width = `${slide3Width}px`;
  slider3Contaner.style.width = `${slide3Width}px`;
}
checkWidth();

//슬라이드 가로로 나열
function arryHorizon() {
  for (let i = 0; i < slide3Count; i++) {
    slides3[i].style.left = `${i * 100 + 50}%`;
  }
}
arryHorizon();

// 슬라이드 이동
function goToSlide3(index) {
  slider3Contaner.style.left = `${-index * 100}%`;
  slider3Contaner.classList.add("animated");
  currentIndex3 = index;
}

// 버튼 클릭 후 슬라이드 이동
nav3Prev.addEventListener("click", (event) => {
  event.preventDefault();
  currentIndex3 > 0
    ? goToSlide3(currentIndex3 - 1)
    : goToSlide3(slide3Count - 1);
  // 무한 루프 슬라이드 기능 추가
  if (currentIndex3 === 0) {
    setTimeout(() => {
      slider3Contaner.style.transition = "0ms";
      slider3Contaner.style.left = `-${slideCount * 100}%`;
      currentIndex3 = slideCount;
    }, 300);
  } else {
    slider3Contaner.style.transition = "all 0.3s ease-in";
  }
});
nav3Next.addEventListener("click", (event) => {
  event.preventDefault();
  currentIndex3 < slide3Count - 1
    ? goToSlide3(currentIndex3 + 1)
    : goToSlide3(0);
  // 무한 루프 슬라이드 기능 추가
  if (currentIndex3 === slide3Count - 1) {
    setTimeout(() => {
      slider3Contaner.style.transition = "0ms";
      slider3Contaner.style.left = "-100%";
      currentIndex3 = 1;
    }, 300);
  } else {
    slider3Contaner.style.transition = "all 0.3s ease-in";
  }
});
goToSlide3(1);
