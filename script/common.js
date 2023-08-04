//header, footer js
//header  전체메뉴 스크립트 flow
//1. open-nav 초기 숨기기
//2. 햄버거메뉴(nav)클릭 시 open-nav 출력
//3. open-nav 안 X버튼(nav_close) 클릭 시 open-nav 숨기기
//변수생성
const nav = document.querySelector('#nav');//nav버튼
const open_nav = document.querySelector('#open_nav');//nav클릭
const nav_close = document.querySelector('#nav_close');// x닫기
console.log(nav, open_nav, nav_close);
//1. open-nav 초기 숨기기 #open_nav {transform:translateX(?)}
open_nav.style.transform = 'translateX(100%)';
// css 상태에 따라 변경이 일어날 경우 애니메이션 transition
open_nav.style.transition = 'transform 1s ease';
//2. 햄버거메뉴(nav)클릭 시 open-nav 출력
nav.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(0)';
    //open-nav.style.display = 'block'
    //display:none으로 숨긴대상을 다시 보이게 할 경우
    // 기존 디자인css에서 flex로 정렬한 대상이면 display='flex'
    // 기존 디자인css에서 flex 설정이 없었다면 display='block'
})
//3. open-nav 안 X버튼(nav_close) 클릭 시 open-nav 숨기기
nav_close.addEventListener('click',function(){
    open_nav.style.transform = 'translateX(100%)';
})

// swiper-silde open-nev 광고영역 //스와이퍼 페이지에서 확인!
const nav_adver = new Swiper('#nav_adver',{
    direction:'horizontal',
    autoplay:{delay:1000},
    loop: true,
    navigation: {
        nextEl: '#nav_abver .swiper-button-next',
        prevEl: '#nav_abver .swiper-button-prev',
    },
})