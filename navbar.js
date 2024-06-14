// Query the Desktop Nav
let home_desktop_nav = document.getElementById('home_desktop_nav');

// Query the Menu and List (to make go away)
let menu_and_list = document.getElementById('menu_and_list');

// Query the Mobile Burger
let mobile_nav_burger = document.getElementById('mobile_nav_button');
console.log(mobile_nav_burger);

// Query the Sections (for when navbar is sticky)
// About Section
let about_section_click = document.getElementById('about_section_click');
// Portfolio Section
let portfolio_section_click = document.getElementById('portfolio_section_click');

// eventlisteners

// Burger
mobile_nav_burger.addEventListener('pointerdown', () => {
    console.log("Mobile Log");
    mobile_nav_burger.classList.add('tapped');
    home_desktop_nav.classList.add('tapped');
});

// Section
// in the eventlistener write a function to timeout the 'tapped' css class

// About
about_section_click.addEventListener('pointerdown', () => {
    function menu_time_out () {
        console.log("Timed Out Happened");
        mobile_nav_burger.classList.remove('tapped');
        home_desktop_nav.classList.remove('tapped');
        menu_and_list.classList.add('dissapear');
    }
    setTimeout(menu_time_out, 2000);
});

// Portfolio
portfolio_section_click.addEventListener('pointerdown', () => {
    function menu_time_out () {
        console.log("Timed Out Happened");
        mobile_nav_burger.classList.remove('tapped');
        home_desktop_nav.classList.remove('tapped');
        menu_and_list.classList.add('dissapear');
    }
    setTimeout(menu_time_out, 2000);
});

// NEXT STEPS
// Position the list and burger properly
// settle the tapping order
// STOP the body scroll when menu list is on
// add a close button to the menu list
// Then upon Scroll up bring the NavBar back