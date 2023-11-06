const accordian = document.querySelectorAll(".accordian");

accordian.forEach(acc => {
    const icons = acc.querySelector(".icons");
    const answer = acc.querySelector(".answer");
    acc.addEventListener('click', () => {
        // icons.classList.toggle('active')
        // answer.classList.toggle('active');

        if(icons.classList.contains('active')){
            icons.classList.remove('active');
            answer.style.maxHeight = null;
        }
        else{
            icons.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});