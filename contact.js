// We are going to make the 'Message Me' element flash 
    // when Contact button clicked

// Query the message text area
let message_me = document.getElementById('message_text');
let name_contact = document.getElementById('name_text');
let email_contact = document.getElementById('email_address');

// Query the submit button
let submit_button = document.getElementById('email_button');

// Query the contact buttons
let contact_button = document.getElementById('contact');
let contact_about = document.getElementById('contact_about');
let contact_portfolio = document.getElementById('contact_portfolio');
let contact_skills = document.getElementById('contact_skills');
let contact_experience = document.getElementById('contact_experience');

// Query the contact placeholder
let place_holder = document.querySelector('placeholder');

// NOW change the color, eventually add a timer so it flashes
    // when Contact is clicked
contact_button.addEventListener('click', () => {
    submit_button.classList.add('contact');
    message_me.classList.add('contact');
    name_contact.classList.add('contact');
    email_contact.classList.add('contact');
    // Add a function that times the color out
    function color_back() {
        submit_button.classList.remove('contact');
        message_me.classList.remove('contact');
        name_contact.classList.remove('contact');
        email_contact.classList.remove('contact');
    }
    setTimeout(color_back, 2000);
});

// ABOUT PAGE
contact_about.addEventListener('click', () => {
    submit_button.classList.add('contact');
    message_me.classList.add('contact');
    name_contact.classList.add('contact');
    email_contact.classList.add('contact');
    // Add a function that times the color out
    function color_back() {
        submit_button.classList.remove('contact');
        message_me.classList.remove('contact');
        name_contact.classList.remove('contact');
        email_contact.classList.remove('contact');
    }
    setTimeout(color_back, 2000);
});

// PORTFOLIO PAGE
contact_portfolio.addEventListener('click', () => {
    submit_button.classList.add('contact');
    message_me.classList.add('contact');
    name_contact.classList.add('contact');
    email_contact.classList.add('contact');
    // Add a function that times the color out
    function color_back() {
        submit_button.classList.remove('contact');
        message_me.classList.remove('contact');
        name_contact.classList.remove('contact');
        email_contact.classList.remove('contact');
    }
    setTimeout(color_back, 2000);
});

// SKILLS PAGE
contact_skills.addEventListener('click', () => {
    submit_button.classList.add('contact');
    message_me.classList.add('contact');
    name_contact.classList.add('contact');
    email_contact.classList.add('contact');
    // Add a function that times the color out
    function color_back() {
        submit_button.classList.remove('contact');
        message_me.classList.remove('contact');
        name_contact.classList.remove('contact');
        email_contact.classList.remove('contact');
    }
    setTimeout(color_back, 2000);
});

// EXPERIENCE PAGE
contact_experience.addEventListener('click', () => {
    submit_button.classList.add('contact');
    message_me.classList.add('contact');
    name_contact.classList.add('contact');
    email_contact.classList.add('contact');
    // Add a function that times the color out
    function color_back() {
        submit_button.classList.remove('contact');
        message_me.classList.remove('contact');
        name_contact.classList.remove('contact');
        email_contact.classList.remove('contact');
    }
    setTimeout(color_back, 2000);
});