setTimeout(function() {
    console.log('i am late');
}, 0);

function func1() {
    console.log('some value');
}

function func2() {
    console.log('some other value');
}

function func3() {
    console.log('still other value');
}

setTimeout(() => {
    
}, 0);
window.addEventListener('load', () => {
    console.log('Window has loaded');
    const myBtn = document.querySelector('#my-btn');
    myBtn.addEventListener('click', () => {
        console.log('click');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM has loaded');
    const myBtn = document.querySelector('#my-btn');
    myBtn.addEventListener('click', () => {
        console.log('click');
    });
})

//document.querySelector('#my-btn');

func1();
func2();
func3();