
const navbar = () => {
    const x = document.getElementById('mylinks');
    if(x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }

}

icon.addEventListener('click',navbar);
