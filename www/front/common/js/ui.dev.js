const hasClass = (el, className) => el.classList.contains(className);

// window.scroll 영역
function set_floating(){
    let fset = document.querySelector('footer').getBoundingClientRect();
    let floating = document.querySelector('.floating');
    if(floating == null) return false;

    let wh = window.innerHeight;
    let dh = document.documentElement.getBoundingClientRect().height;
    let fh = fset.height;
    let st = document.scrollingElement.scrollTop;
    let cal_size = dh - wh - fh + (floating.querySelector('button')?.getBoundingClientRect().height * 2);

    if(st >= cal_size){
        floating.classList.add('active');
    }
    else{
        floating.classList.remove('active');
    }
}

const el_header = document.querySelector('nav');
let navoffset = el_header.getBoundingClientRect();
window.addEventListener('scroll', function(){
    if ( document.scrollingElement.scrollTop > navoffset.top ) {
        el_header.classList.add('active');
    }
    else {
        el_header.classList.remove('active');
    }
    set_floating();
});

// 사이트 전체 드롭다운 메뉴 컨트롤 (마크업 구조가 모두 같아야 합니다.)
const classNameDD = 'drop-down';
const classNameDV = 'view';
const classNameDB = 'drp-down-box';
const classNameSD = 'slide-down';
const classNameAC = 'active';
const listDD = [].slice.call(document.querySelectorAll(`.${classNameDD}`));
listDD.filter(function(el, index){
    el.id = `ui-js-dropdown${index+1}`;
})

const btnDV = document.querySelectorAll(`.${classNameDD} .${classNameDV}`);
let attrIdDD = null;
for(const targetDV of btnDV){
    targetDV.addEventListener("click", function(e){
        let dd_p = this.closest(`.${classNameDD}`);
        if(dd_p.id !== attrIdDD){
            document.getElementById(attrIdDD)?.classList.remove(classNameAC);
            document.getElementById(attrIdDD)?.querySelector(`.${classNameSD}`)?.classList.remove(classNameSD);
            attrIdDD = dd_p.id;
        }
        dd_p.classList.toggle(classNameAC);
        dd_p.querySelector(`.${classNameDB}`).classList.toggle(classNameSD);
    });
}

document.querySelector("body").addEventListener("click", function(e){
    let find_slide = document.querySelector(`.${classNameSD}`);
    if(!find_slide) return false;

    if(!e.target.closest(`.${classNameDD}`)){
        find_slide.closest(`.${classNameDD}`).classList.remove(classNameAC);
        find_slide.classList.remove(classNameSD);
    }
});

//gnb 1depth 클릭시
const menuGNB = document.querySelectorAll('.navi .item');
for(const targetGNB of menuGNB){
    targetGNB.addEventListener('mouseover', function(e){
        this.querySelector('.sub-gnb')?.classList.add('active');
    });
    targetGNB.addEventListener('mouseout', function(e){
        this.querySelector('.sub-gnb')?.classList.remove('active');
    });
}

//mobile hamberger 클릭시
document.querySelector('.hamberger').addEventListener('click', function(){
    document.querySelector('.fixed-navi').classList.add('active');
    document.querySelector('html').classList.add('active');
});
document.querySelector('.fixed-navi .close-btn').addEventListener('click', function(){
    document.querySelector('.fixed-navi').classList.remove('active');
    document.querySelector('html').classList.remove('active');
    document.querySelector('.fixed-navi .menu .item').classList.remove('active');
    document.querySelector('.lang-box').classList.remove('active');
    document.querySelector('.lang-ch-area').classList.remove('active');
});

//mobile sub NAVI  클릭시 토글
const mobileGNB = document.querySelectorAll('.fixed-navi .menu .item .depth-1');
for(const targetMoGNB of mobileGNB){
    targetMoGNB.addEventListener('click', function(e){        
        let thisParent = this.closest('.item');
        thisParent.classList.toggle('active');
        thisParent.previousElementSibling?.classList.remove('active');
        thisParent.nextElementSibling?.classList.remove('active');
    });
}

//mobile 언어선택 
function set_resize_lang(){
    let totalWidth = 0;
    let set = document.querySelectorAll('.lang-ch-area .inn .item');
    for(const targetSet of set){
        totalWidth = totalWidth + targetSet.clientWidth;
    }
    document.querySelector('.lang-ch-area .inn').style.width = `${totalWidth+1}px`;
    set_floating();
}
document.addEventListener("DOMContentLoaded", set_resize_lang);
window.addEventListener("resize", set_resize_lang);

document.querySelector('.lang-box .view').addEventListener('click', function(){
    document.querySelector('.lang-box').classList.toggle('active');
    document.querySelector('.lang-ch-area').classList.toggle('active');

    //lang-ch-area가 active 클래스를 가졌을때 middle영역에 padding-bottom: 46px 추가
    if(document.querySelector('.lang-ch-area').classList.contains('active')){
        document.querySelector('.fixed-navi .middle').classList.add('height');
    }
    else{
        document.querySelector('.fixed-navi .middle').classList.remove('height');
    }
});

//top버튼 클릭시 위로
document.querySelector('.top-button button')?.addEventListener('click', function(){
    window.scrollTo({top:0, behavior: 'smooth'});
    return false;
});

// 날짜선택 및 시간선택 화면 ID: FR-PT-0001-02
const datePicker = document.querySelectorAll('.date-picker .ui-js-open-target');
for(const targetDatePicker of datePicker){
    targetDatePicker.addEventListener('click', function(e){  
        this.closest('.form-wrap').querySelector('.ui-js-open-layer').classList.toggle('active');
        if(!!this.closest('.form-wrap').classList.contains('date')){
            this.closest('.form-wrap').nextElementSibling.querySelector('.active')?.classList.remove('active');
        }
        else{
            this.closest('.form-wrap').previousElementSibling.querySelector('.active')?.classList.remove('active');
        }
    });
}
document.querySelector("body").addEventListener("click", function(e){
    if(!e.target.closest('.date-picker')){
        document.querySelector('.date-picker')?.querySelector('.active')?.classList.remove('active');
    }
});

// 시간 및 분 클릭시 화면 ID: FR-PT-0001-02
const timerHour = document.querySelectorAll('.date-picker .timer .hour p, .minute p');
for(const targetTimerHour of timerHour){
    targetTimerHour.addEventListener('click', function(e){  
        this.parentElement.querySelector('.active')?.classList.remove('active');
        this.classList.add('active');
    });
}

// 의료진 선택 팝업 > 의료진 목록 클릭시 active 화면 ID: FR-PT-0001-02
const dcItem = document.querySelectorAll('.dc-choice-box .item');
for(const targetDcItem of dcItem){
    targetDcItem.addEventListener('click', function(e){  
        this.parentElement.querySelector('.active')?.classList.remove('active');
        this.classList.add('active');
    });
}

//tab 화면 ID: FR-PT-0002-03-01
const tabMenu = document.querySelectorAll('.ui-js-tab li');
for(const targetTabMenu of tabMenu){
    targetTabMenu.addEventListener('click', function(e){  
        const tabCurrent = this.closest('.tab-area')?.querySelectorAll('.current');
        for(const TargetTabCurrent of tabCurrent) TargetTabCurrent.classList.remove('current');

        let tab_id = this.getAttribute('data-tab');
        this.classList.add('current');
        document.getElementById(tab_id).classList.add('current');
    });
}

//의료진 상세보기 toggle 화면 ID: FR-PT-0002-03-01
const sltBox = document.querySelectorAll('.slt-box');
for(const targetSltBox of sltBox){
    targetSltBox.addEventListener('click', function(e){
        let items = this.closest('.pro-profile').querySelectorAll('.item');
        let thisIndex = Array.from(items).indexOf(this.closest('.item'));
        let activeIndex = Array.from(items).indexOf(this.closest('.pro-profile').querySelector('.item.active'));
        if(thisIndex != activeIndex) this.closest('.pro-profile').querySelector('.active')?.classList.remove('active');
        this.closest('.item').classList.toggle('active');
    });
}

//로그인 비밀번호 가리기/보이기 화면 ID: FR-PT-011
document.querySelector('.btn-toggle')?.addEventListener('click', function(){
    this.classList.toggle('active');
    if(this.classList.contains('active')){
        this.closest('.password').querySelector('input').setAttribute('type','text');
    }
    else{
        this.closest('.password').querySelector('input').setAttribute('type','password');
    }
});

//마이페이지 > 내 진료기록 > 상담상세내역 - 상담정보,의료정보,사전문진표 토글 화면 ID: FR-PT-0100-02-01-02
const toggleBox = document.querySelectorAll('.toggle-box .toggle-title');
for(const targetToggleBox of toggleBox){
    targetToggleBox.addEventListener('click', function(e){
        this.closest('.toggle-box').classList.toggle('active');
    });
}

//마이페이지 > 내 의료정보 파일 - 구분값 클릭시 화면 ID: FR-PT-0100-03-01
const toggleState = document.querySelectorAll('.toggle-state .btns');
for(const targetToggleState of toggleState){
    targetToggleState.addEventListener('click', function(e){
        let items = this.closest('tbody').querySelectorAll('.toggle-state');
        let thisIndex = Array.from(items).indexOf(this.closest('.toggle-state'));
        let activeIndex = Array.from(items).indexOf(this.closest('tbody').querySelector('.toggle-state.active'));
        if(thisIndex != activeIndex) this.closest('tbody').querySelector('.active')?.classList.remove('active');
        this.closest('.toggle-state').classList.toggle('active');
    });
}


//메인 visual 화면 ID: main
function fadeIn(target){
    let level = 0;
    let inTimer = null;
    inTimer = setInterval(function(){
        level = fadeInAction(target, level, inTimer);
    },100);
}
function fadeInAction(target, level, inTimer){
    level += level + 0.1;
    changeOpacity(target, level);
    if(level > 1) clearInterval(inTimer);
    return level;
}
function fadeOut(target){
    let level = 1;
    let outTimer = null;
    outTimer = setInterval(function(){
        level = fadeOutAction(target, level, outTimer);
    },50);
}
function fadeOutAction(target, level, outTimer){
    level -= 0.1;
    changeOpacity(target, level);
    if(level < 0) clearInterval(outTimer);
    return level;
}
function changeOpacity(target,level){
    target.style.opacity = level;
    target.style.MozOpacity = level;
    target.style.KhtmlOpacity = level;
    target.style.MsFilter = "'progid: DXImageTransform.Microsoft.Alpha(Opacity="+(level * 100)+")'";
    target.style.filter = "alpha(opacity="+(level * 100)+");";
}

const mainVisual = document.querySelectorAll('.main-visual .img-box');
changeOpacity(mainVisual[0],1);
if(mainVisual !== null){
    setInterval(function(){
        let activeIndex = Array.from(mainVisual).indexOf(document.querySelector('.main-visual .img-box.active'));
        fadeOut(mainVisual[activeIndex]);
        mainVisual[activeIndex].classList.remove('active');
        if(mainVisual[activeIndex+1] == null) activeIndex = -1;
        mainVisual[activeIndex+1].classList.add('active');
        fadeIn(mainVisual[activeIndex+1]);
    }, 8000);
}
/*
let activeIndex = Array.from(items).indexOf(document.querySelector('.main-visual .img-box.active'));
console.log (activeIndex);
*/