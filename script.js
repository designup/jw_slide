// 변수 지정
const slideWrapper = document.querySelector('.container'),
    slideContainer  = document.querySelector('.slider-container'),
	slides = document.querySelectorAll('.slide'),
    firstClone = slides[0].cloneNode(true),
    lastClone = slides[slides.length-1].cloneNode(true),
	navPrev = document.querySelector('#prev'),
	navNext =  document.querySelector('#next');

let	currentIndex = 0,
	topHeight = 0,
    slideCount = slides.length;


//처음,마지막 노드복사 
slideContainer.appendChild(firstClone);
slideContainer.insertBefore(lastClone, slideContainer.firstElementChild);

//복사된 전체 리스트 가져오기
const slidesClone = document.querySelectorAll('.slide');
slideCount = slidesClone.length;

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
	slidesClone[i].style.left = 100 * i + "%";
        
	}
}


// 슬라이드 이동 함수
function nextMoving(){
    if (currentIndex >= slideCount-1) return; //빨리 버튼누를때 오작동 되는 현상 막기
    currentIndex++;
    slideContainer.style.transition = 'transform .3s ease-in';
    slideContainer.style.transform ='translateX('+ -currentIndex*100+'%)';
    
};
function prevMoving(){
    if (currentIndex <= 0) return; //빨리 버튼누를때 오작동 되는 현상 막기
    currentIndex--;
    slideContainer.style.transition = 'transform .3s ease-in';
    slideContainer.style.transform ='translateX('+ -currentIndex*100+'%)';
    
};



// 끝으로 이동시 처음으로 돌아가기
slideContainer.addEventListener('transitionend',()=>{
   if(currentIndex==slideCount-1){
       currentIndex=1;
       slideContainer.style.transition = 'none';
       slideContainer.style.transform ='translateX('+ -currentIndex*100+'%)';
       
   }else if(currentIndex==0){
       currentIndex=slideCount-2;
       slideContainer.style.transition = 'none';
       slideContainer.style.transform ='translateX('+ -currentIndex*100+'%)';
       
   }
});

// 버튼기능 업데이트 함수

navNext.addEventListener("click", function(){nextMoving(currentIndex)});
navPrev.addEventListener("click", function(){prevMoving(currentIndex)});




//첫번째 슬라이드 먼저 보이도록 하기
(function () { 
    currentIndex=1;
    slideContainer.style.transition = 'none';
    slideContainer.style.transform ='translateX('+ -currentIndex*100+'%)';
})();

