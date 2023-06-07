let slideWrap = $(".slide_wrap"),
slideShow = slideWrap.find(".slide_show"),
slideList = slideShow.find(".slide_list"),
slides = slideList.find(".slide"),
slideBtn = slideWrap.find(".slide_btn");

let slideCount = slides.length,
slideWidth = slides.innerWidth(),
showNum = 3,
num = 0,
currentIndex = 0,

slideCopy = $(".slide:lt(" + showNum + ")").clone();
slideList.append(slideCopy);

// 이미지 움직이기
function backShow() {
    if (num == 0) {
     // 시작
    num = slideCount;
    slideList.css("left", -num * slideWidth + "px");
    }
num--;
slideList.stop().animate({ left: -slideWidth * num + "px" }, 400);
}

function nextShow() {
if (num == slideCount) {
    // 마지막
    num = 0;
    slideList.css("left", num);
}
num++;
slideList.stop().animate({ left: -slideWidth * num + "px" }, 400);
}

// 자동 슬라이드 기능 추가
let slideInterval = setInterval(nextShow, 3000);

// 슬라이드 정지 기능 추가
slideWrap.hover(
    function () {
        clearInterval(slideInterval);
    },
    function () {
        slideInterval = setInterval(nextShow, 3000);
    }
);

// 왼쪽, 오른쪽 버튼 설정
slideBtn.on("click", "button", function () {
    if ($(this).hasClass("prev")) {
        // 왼쪽 버튼을 클릭
        backShow();
    } else {
        // 오른쪽 버튼을 클릭
        nextShow();
    }
});

const searchIcon = document.querySelector('#search-icon');
const searchInput = document.querySelector('#search-input');

window.onload = function() {
  searchIcon.addEventListener('click', function() {
    const searchValue = searchInput.value.trim();
    if (searchValue !== '') {
      fetch(`/api?area=${searchValue}&item_count=10`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  });
}

$(function() {
  $('#search-input').keyup(function() {
    const query = $(this).val().trim();
    if (query !== '') {
      $.getJSON('/api', { area: '', search: query, item_count: 10 }, function(data) {
        // API 응답 데이터를 처리하는 코드 작성
      });
    }
  });
});