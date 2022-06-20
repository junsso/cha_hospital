const popup = document.querySelectorAll('[data-popup]');
for(const targetPopup of popup){
    targetPopup.addEventListener('click', function(e){
        let popupName = this.getAttribute('data-popup');
        document.querySelector('html').classList.add('active-popup');
        document.getElementById(`${popupName}Popup`).classList.add('show');
    });
}

const popupClose = document.querySelectorAll('.overlay, .close-btn');
for(const targetPopupClose of popupClose){
    targetPopupClose.addEventListener('click', function(e){
        document.querySelector('html').classList.remove('active-popup');
        document.querySelector('.layerpop.show')?.classList.remove('show');
    });
}