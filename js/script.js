const resumeBtns = document.querySelectorAll('.resume-btn')

resumeBtns.forEach(btn, idx) => {
    btn.addEventListener('click', () => {
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');

        });
        btn.classList.add('active');
    });
});