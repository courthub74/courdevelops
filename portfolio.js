// Query the Whole Squares (to light up the top border)
let port_sq_one = document.getElementById('portfolio_square_one');
let port_sq_two = document.getElementById('portfolio_square_two');
let port_sq_three = document.getElementById('portfolio_square_three');

// Query the Logos (for pressing the button)
let port_logo_one = document.getElementById('workflow_app');
let port_logo_two = document.getElementById('create_collab');
let port_logo_three = document.getElementById('luminex_solutions');

// Query the WHOLE SECTION to expand when button pressed
let port_section = document.getElementById('portfolio_section_id');


// Query the Content (what pops up when dropped down)
let port_content_one = document.getElementById('workflow_app_content');
let port_content_two = document.getElementById('create_collab_content');
let port_content_three = document.getElementById('luminex_content');

// Query the Close button (to close the square)
let port_close_one = document.getElementById('port_close_one');
let port_close_two = document.getElementById('port_close_two');
let port_close_three = document.getElementById('port_close_three');

// MOBILE

// SQUARE ONE

port_logo_one.addEventListener('pointerdown', () => {
    console.log("Box One Pressed");
    port_sq_one.classList.add('tapped');
    port_logo_one.classList.add('tapped');
    port_content_one.classList.add('tapped');
    port_section.classList.add('tapped');
});

// Close button to click off
port_close_one.addEventListener('pointerdown', () => {
    port_sq_one.classList.remove('tapped');
    port_logo_one.classList.remove('tapped');
    port_content_one.classList.remove('tapped');
    port_section.classList.remove('tapped');
});

// SQUARE TWO
port_logo_two.addEventListener('pointerdown', () => {
    console.log("Box Two Pressed");
    port_sq_two.classList.add('tapped');
    port_logo_two.classList.add('tapped');
    port_content_two.classList.add('tapped');
    port_section.classList.add('tapped');
});

// Close button to click off
port_close_two.addEventListener('pointerdown', () => {
    port_sq_two.classList.remove('tapped');
    port_logo_two.classList.remove('tapped');
    port_content_two.classList.remove('tapped');
    port_section.classList.remove('tapped');
});

// SQUARE THREE

// Close button to click off
port_logo_three.addEventListener('pointerdown', () => {
    console.log("Box Three Pressed");
    port_sq_three.classList.add('tapped');
    port_logo_three.classList.add('tapped');
    port_content_three.classList.add('tapped');
    port_section.classList.add('tapped');
});

// Close button to click off
port_close_three.addEventListener('pointerdown', () => {
    port_sq_three.classList.remove('tapped');
    port_logo_three.classList.remove('tapped');
    port_content_three.classList.remove('tapped');
    port_section.classList.remove('tapped');
});


// DESKTOP

// For any screen larger than the average tablet
let widthMatchPortfolio = window.matchMedia("(min-width: 1180px)");

if(widthMatchPortfolio.matches) {

    // SQUARE ONE
    port_sq_one.addEventListener('mouseover', () => {
        console.log("Square One");
        // Make Logo dissapear
        port_logo_one.classList.add('hover');
        // Make content appear
        port_content_one.classList.add('hover');
        // Light the top of Square
        port_sq_one.classList.add('hover');
    });

    port_sq_one.addEventListener('mouseout', () => {
        // Make Logo ReAppear
        port_logo_one.classList.remove('hover');
        // Make content ReDissapear
        port_content_one.classList.remove('hover');
        // UnLight the top of Square
        port_sq_one.classList.remove('hover');
    });

    // SQUARE TWO
    port_sq_two.addEventListener('mouseover', () => {
        console.log("Square Two");
        // Make Logo dissapear
        port_logo_two.classList.add('hover');
        // Make content appear
        port_content_two.classList.add('hover');
        // Light the top of Square
        port_sq_two.classList.add('hover');
    });

    port_sq_two.addEventListener('mouseout', () => {
        console.log("Square Two");
        // Make Logo dissapear
        port_logo_two.classList.remove('hover');
        // Make content appear
        port_content_two.classList.remove('hover');
        // Light the top of Square
        port_sq_two.classList.remove('hover');
    });

    // SQUARE THREE
    port_sq_three.addEventListener('mouseover', () => {
        console.log("Square Three");
        // Make Logo dissapear
        port_logo_three.classList.add('hover');
        // Make content appear
        port_content_three.classList.add('hover');
        // Light the top of Square
        port_sq_three.classList.add('hover');
    });

    port_sq_three.addEventListener('mouseout', () => {
        // Make Logo dissapear
        port_logo_three.classList.remove('hover');
        // Make content appear
        port_content_three.classList.remove('hover');
        // Light the top of Square
        port_sq_three.classList.remove('hover');
    });
}