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

// 슬라이드 가로로 배결
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
