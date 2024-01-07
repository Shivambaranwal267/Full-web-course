const toggler = document.querySelector('#toggler');  
const navlinks = document.querySelector('#nav-links');  
 
toggler.addEventListener('click', () => {
    navlinks.classList.toggle('active');
})