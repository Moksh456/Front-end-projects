 const quetion = document.querySelector('.feq-box');
 quetion.forEach((quetion) => {
    quetion.addEventListener('click', () => {
        const answere = quetion.nextElementSibling; 
        answere.style.display = answere.style.display === 'block' ? 'none' : 'block'})
} );
