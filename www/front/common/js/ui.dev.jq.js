
//flag 영역 토글
const flagParents = document.querySelector('.ui-js-dropdown');
const flagTarget = document.querySelector('.ui-js-dropdown .view');
const flagToggle = document.querySelector('.ui-js-dropdown .drp-down-box');


$(flagTarget).on('click',function(){
    $(this).parents(flagTarget).find(flagToggle).slideToggle();
});

//flag 영역 이외 클릭시 닫힘
//용목팀장님 헬프요! 요거 자꾸 오류나요...
/*$(document).on('mouseup',function (e){
    if(calender.has(e.target).length === 0){
      calender.removeClass('active');
    }
  });*/


//gnb scroll
var navoffset = $('nav').offset();
$(window).scroll(function(){
    var position = $(window).scrollTop();
    if ( $( document ).scrollTop() > navoffset.top ) {
        $('nav').addClass('active');
    }
    else {
        $('nav').removeClass('active');
    }
});


//lnb dropDown
$('.ui-js-dropdown2 .view').on('click',function(){
    $(this).parents('.ui-js-dropdown2').toggleClass('active');
    $(this).parents('.ui-js-dropdown2').find('.drp-down-box').slideToggle();
    $(this).parents('.col').siblings('.col').find('.ui-js-dropdown2').removeClass('active');
    $(this).parents('.col').siblings('.col').find('.drp-down-box').slideUp();
});

//lnb 영역 이외 클릭시 닫힘
//용목팀장님 헬프요!


//gnb 마이페이지 dropDown
$('.ui-js-dropdown3').on('click',function(){
    $(this).siblings('.drop-down-box').slideToggle();
});
//gnb 영역 이외 클릭시 닫힘
//용목팀장님 헬프요! 


//gnb 1depth 클릭시
$('.navi .item').on('mouseover',function(){
    $(this).find('.sub-gnb').addClass('active');
    $(this).siblings('.item').find('.sub-gnb').removeClass('active');
});
$('.navi .item').on('mouseleave',function(){
    $(this).find('.sub-gnb').removeClass('active');
});


//mobile hamberger 클릭시
$('.hamberger').on('click', function(){
    $('.fixed-navi').addClass('active');
    $('html').addClass('active');
});
$('.fixed-navi .close-btn').on('click', function(){
    $('.fixed-navi').removeClass('active');
    $('html').removeClass('active');
    //닫기버튼 클릭시 열려있던 navi메뉴 초기화
    $('.fixed-navi .menu .item').removeClass('active');
    $('.fixed-navi .menu .m-sub-gnb').slideUp();
    $('.lang-box').removeClass('active');
    $('.lang-ch-area').removeClass('active');
});


//mobile sub NAVI  클릭시 토글
$('.fixed-navi .menu .item .depth-1').on('click', function(){
    $(this).parents('.item').toggleClass('active');
    $(this).parents('.item').siblings('.item').removeClass('active');
    $(this).siblings('.m-sub-gnb').slideToggle();
    $(this).parents('.item').siblings('.item').find('.m-sub-gnb').slideUp();
});


//mobile 언어선택 
$(document).ready(function (e) {

    var totalWidth = 0;
    var set = $('.lang-ch-area .inn .item');   
    set.each(function(){
        totalWidth = totalWidth + $(this).outerWidth(true);
    })
    //console.log(totalWidth);    
    $('.lang-ch-area .inn').css('width', totalWidth);

});

$('.lang-box .view').on('click', function(){
    $('.lang-box').toggleClass('active');
    $('.lang-ch-area').toggleClass('active');

    //lang-ch-area가 active 클래스를 가졌을때 middle영역에 padding-bottom: 46px 추가
    if($('.lang-ch-area').hasClass('active') === true) {
        $('.fixed-navi .middle').addClass('height');
    } else { 
        $('.fixed-navi .middle').removeClass('height');
    }
});

//top버튼 클릭시 위로
$('.top-button button').on('click', function(){
    $('html, body').animate({
        scrollTop : 0
    }, 400);
    return false;
});

// 날짜선택 및 시간선택 화면 ID: FR-PT-0001-02
$('.date-picker .ui-js-open-target').on('click',function(){
    $(this).siblings('.ui-js-open-layer').toggleClass('active');
    $(this).parents('.form-wrap').siblings().find('.ui-js-open-layer').removeClass('active');
});
// 목록 이외 클릭시 닫힘 
//용목팀장님 헬프요! (뿌잉)

// 시간 및 분 클릭시 화면 ID: FR-PT-0001-02
$('.date-picker .timer .hour p').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');    
});
$('.date-picker .timer .minute p').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');    
});

// 의료진 선택 팝업 > 의료진 목록 클릭시 active 화면 ID: FR-PT-0001-02
$('.dc-choice-box .item').on('click', function(){
    $(this).addClass('active');
    $('.dc-choice-box .item').not($(this)).removeClass('active');
});

//tab 화면 ID: FR-PT-0002-03-01
$('.ui-js-tab li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.tab li').removeClass('current');
    $('.ui-js-tab-conts').removeClass('current');

    $('.ui-js-tab').addClass('current');			
    $(this).addClass('current');		
    $("#"+tab_id).addClass('current');
    return false;
});

//의료진 상세보기 toggle 화면 ID: FR-PT-0002-03-01
$('.slt-box').on('click',function(){
    $(this).parents('.item').toggleClass('active');
    $(this).parents('.item').siblings().removeClass('active');
});


//로그인 비밀번호 가리기/보이기 화면 ID: FR-PT-011
$('.btn-toggle').on('click',function(){
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
        $(this).parents('.password').find('input').attr('type',"text");
    }else{
        $(this).parents('.password').find('input').attr('type',"password");
    }
});


//마이페이지 > 내 진료기록 > 상담상세내역 - 상담정보,의료정보,사전문진표 토글 화면 ID: FR-PT-0100-02-01-02
$('.toggle-box .toggle-title').on('click',function(){
    $(this).parents('.toggle-box').toggleClass('active');
});


//마이페이지 > 내 의료정보 파일 - 구분값 클릭시 화면 ID: FR-PT-0100-03-01
$('.toggle-state .btns').on('click',function(){
    $(this).parents('.toggle-state').toggleClass('active');
    $(this).parents('tr').siblings().find('.toggle-state').removeClass('active');
});

var now = 0;
  var img = 2;
  $('.img-box').eq(0).siblings().hide();

  function slide(){
    if (now == img){
        $('.main-visual .img-box').eq(now).fadeOut(4000);
        $('.main-visual .img-box').eq(0).fadeIn(4000);
        $('.main-visual .img-box').removeClass('active');
      now = 0;
    }
    else{
        $('.main-visual .img-box').eq(now).fadeOut(4000);
        $('.main-visual .img-box').eq(now+1).fadeIn(4000);
        $('.main-visual .img-box').addClass('active');
      now++;
    }
  }

  setInterval(slide, 6000);