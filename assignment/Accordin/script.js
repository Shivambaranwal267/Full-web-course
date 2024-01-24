const quesBoxes = document.querySelectorAll('#ques-box');

quesBoxes.forEach(quesBoxes => {
    quesBoxes.addEventListener('click', ()=> {
        quesBoxes.parentNode.classList.toggle('active')
    })
})