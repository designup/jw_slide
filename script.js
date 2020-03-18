// 변수 지정
var slideWrapper = document.querySelector('.container');
var slideContainer  = document.querySelector('.slider-container'),
	slides = document.querySelectorAll('.slide'),
	slideCount = slides.length,
	currentIndex = 0,
	topHeight = 0,
	navPrev = document.querySelector('.prev'),
	navNext =  document.querySelector('.next');




//슬라이드의 높이 확인하여 부모의 높이로 지정하기

for (var i=0;i<slides.length;i++){
    if(slides[i].offsetHeight > topHeight){
        topHeight = slides[i].offsetHeight;   
       }
}

slideWrapper.style.height = topHeight + "px";
slideContainer.style.height = topHeight + "px";





// 슬라이드가 있으면 가로로 배열하기
if (slideCount > 0) {		
	for (var i = 0; i < slideCount; i++) {
	slides[i].style.left = 100 * i + "%";
        
	}
}




// 슬라이드 이동 함수


// 버튼기능 업데이트 함수

// 버튼을 클릭하면 슬라이드 이동시키기

//첫번째 슬라이드 먼저 보이도록 하기