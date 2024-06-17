// Query the .desktop_nav
let top_nav = document.getElementById('desktop_nav');

// set a last scroll
let lastScroll = 0;

// window scroll detect
window.addEventListener('scroll', () => {
    // set a current scroll
    let currentScroll = window.scrollY;
    // compare current scroll to last scroll
        // then compare to greater than zero
        // SO if it's anywhere below the top
            // It detects
        if (currentScroll - lastScroll > 0) {
            // Make Navbar dissapear
            top_nav.classList.add('dissapear');
            console.log('Scrolling Now');
        } else {
            top_nav.classList.remove('dissapear');
        }
        // set the current scroll to the last scroll
        lastScroll = currentScroll;
});