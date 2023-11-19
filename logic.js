// ==== Header Toggle START ==== //
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', () =>{
    document.querySelector('body').classList.toggle('menuActive')
    MenuBtn.classList.toggle('fa-xmark')
})

// ==== Header Toggle END ==== //

// <===================------------------=================> //

//  ===== Typing Animation START ===== //
let type = new Typed('.auto-input', {
    strings: [' Freelancer..!',' UI / UX Designer..!', 'Digital Marketer..!',  'Front-End Developer..!'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
})
//  ===== Typing Animation END ===== //

// <==========================================---------------------------------------------=======================================> //

// ========== Skill Section Animation START ========== //

// Get All The Progress Bars
const progressBars = document.querySelectorAll('.inner-line');

window.addEventListener('scroll', function() {
    // Loop through each progress bar
    progressBars.forEach(function(progress) {
        // Get the bounding Rectangle of the progress bar
        const rect = progress.getBoundingClientRect();

        // Check if progress bar is visible on the screen
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            // Get the width of progress bar from data-width attribute
            const width = progress.getAttribute('data-width');

            // Animate the progress bar
            progress.style.width = width + '%';
        }
    });
});

// ========== Skill Section Animation END ========== //

// <==========================================---------------------------------------------=======================================> //

// ===== Active Link STATE on Scroll START ====== //

// Get all Link 
let navLinks = document.querySelectorAll('header nav ul li a')
// Get all section
let section = document.querySelectorAll('section')

window.addEventListener('scroll', ()=>{
    const scrollPos = window.scrollY + 10
    section.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active')
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });
});
// ===== Active Link STATE on Scroll END ====== //

function showBlueBox(link) {
    if (window.innerWidth <= 500) {
        const blueBox = document.createElement('div');
        blueBox.className = 'blue-box';
        blueBox.innerHTML = '<p>Under Construction</p>';
        document.body.appendChild(blueBox);

        // Add click event listener to the blue box
        blueBox.addEventListener('click', function () {
            window.location.href = link; // Open the link when the blue box is clicked
        });
    }
}