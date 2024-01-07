

const ifScrolled = (event) => {
    const nav = document.querySelector('#nav-bar');
    if(nav.style.background-color=== "red")
    console.log(event);
    

    }

navbar.addEventListener('click',ifScrolled);