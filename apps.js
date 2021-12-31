const container = document.querySelector('.container');

for(i = 0; i <= 100; i++) {
    const hearts = document.createElement('div');
    hearts.classList.add('heart')
    container.appendChild(hearts)
}

function animateHearts(){
    anime({
        targets: '.heart',

        translateX: function(){
            return anime.random(-700,700)
        },
        translateY: function(){
            return anime.random(-500,500)
        },
        scale: function(){
            return anime.random(1,5)
        },
        zIndex: function(){
            return anime.random(0,1)
        },
        rotate: 45,
        duration: 3000,
        easing: 'easeInOutBack',
        delay: anime.stagger(10),
        complete: animateHearts
    })
}

animateHearts()

function animateTitle (){
    anime({
        targets:('h2'),
        scale: 1.7,
        rotate: 360,
        duration:5000,
    })
}
animateTitle ()