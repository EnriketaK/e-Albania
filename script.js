document.addEventListener("DOMContentLoaded", function () {
    const content = document.querySelector('.permission');
    const btn = document.querySelector('.permission__info');

    //SBEN PREJ POPUP, BLOCKS EVERYTHING, REMOVE DAT
    btn.addEventListener('click', () => {
        content.style.display = "none";
    })

})