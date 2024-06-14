// Query the outer Circle
let html_skill_circle = document.getElementById('html_skill');
let python_skill_circle = document.getElementById('python_skill');
let css_skill_circle = document.getElementById('css_skill');
let sass_skill_circle = document.getElementById('sass_skill');
let react_skill_circle = document.getElementById('react_skill');
let native_skill_circle = document.getElementById('native_skill');
let figma_skill_circle = document.getElementById('figma_skill');
let javascript_skill_circle = document.getElementById('javascript_skill');
let django_skill_circle = document.getElementById('django_skill');
let firebase_skill_circle = document.getElementById('firebase_skill');
// Marked as Heroku but I've changed the display to Postgre
let heroku_skill_circle = document.getElementById('heroku_skill');
let aws_skill_circle = document.getElementById('aws_skill');

// Query the inner Circle
// let html_inner_circle = document.getElementById('inner_circle_html');
// let css_inner_circle = document.getElementById('inner_circle_css');

// Query the Line
let line_html = document.getElementById('line_html');
let line_python = document.getElementById('line_python');
let line_css = document.getElementById('line_css');
let line_sass = document.getElementById('line_sass');
let line_react = document.getElementById('line_react');
let line_native = document.getElementById('line_native');
let line_figma = document.getElementById('line_figma');
let line_javascript = document.getElementById('line_javascript');
let line_django = document.getElementById('line_django');
let line_firebase = document.getElementById('line_firebase');
// Marked as Heroku but I've changed the display to Postgre
let line_heroku = document.getElementById('line_heroku');
let line_aws = document.getElementById('line_aws');

// Query the Logo
let python_skill = document.getElementById('python');
let html_skill = document.getElementById('html');
let css_skill = document.getElementById('css');
let sass_skill = document.getElementById('sass');
let react_skill = document.getElementById('react');
let native_skill = document.getElementById('native');
let figma_skill = document.getElementById('figma');
let javascript_skill = document.getElementById('javascript');
let django_skill = document.getElementById('django');
let firebase_skill = document.getElementById('firebase');
// Marked as Heroku but I've changed the display to Postgre
let heroku_skill = document.getElementById('heroku');
let aws_skill = document.getElementById('aws');

// Query the Description
let python_description = document.getElementById('python_description');
let html_description = document.getElementById('html_description');
let css_description = document.getElementById('css_description');
let sass_description = document.getElementById('sass_description');
let react_description = document.getElementById('react_description');
let native_description = document.getElementById('native_description');
let figma_description = document.getElementById('figma_description');
let javascript_description = document.getElementById('javascript_description');
let django_description = document.getElementById('django_description');
let firebase_description = document.getElementById('firebase_description');
// Marked as Heroku but I've changed the display to Postgre
let heroku_description = document.getElementById('heroku_description');
let aws_description = document.getElementById('aws_description');

// Mobile

// Here is where we apply click event listener

// HTML CIRCLE
html_skill_circle.addEventListener('pointerdown', () => {
    html_skill_circle.classList.add('tapped');
    line_html.classList.add('tapped');
    html_skill.classList.add('tapped');
    html_description.classList.add('tapped');
    // add a function that resets the circle
    function reset_html() {
        html_skill_circle.classList.remove('tapped');
        line_html.classList.remove('tapped');
        html_skill.classList.remove('tapped');
        html_description.classList.remove('tapped');
    }
    // set the timer to reset it
    setTimeout(reset_html, 3500);
});

// CSS CIRCLE
css_skill_circle.addEventListener('pointerdown', () => {
    css_skill_circle.classList.add('tapped');
    line_css.classList.add('tapped');
    css_skill.classList.add('tapped');
    css_description.classList.add('tapped');
    // css_inner_circle.classList.add('tapped');
    function reset_css() {
        css_skill_circle.classList.remove('tapped');
        line_css.classList.remove('tapped');
        css_skill.classList.remove('tapped');
        css_description.classList.remove('tapped');
        css_inner_circle.classList.remove('tapped');
    }
    setTimeout(reset_css, 3500);
});

// SASS CIRCLE
sass_skill_circle.addEventListener('pointerdown', () => {
    sass_skill_circle.classList.add('tapped');
    line_sass.classList.add('tapped');
    sass_skill.classList.add('tapped');
    sass_description.classList.add('tapped');
    // sass_inner_circle.classList.add('tapped');
    function reset_sass() {
        sass_skill_circle.classList.remove('tapped');
        line_sass.classList.remove('tapped');
        sass_skill.classList.remove('tapped');
        sass_description.classList.remove('tapped');
        sass_inner_circle.classList.remove('tapped');
    }
    setTimeout(reset_sass, 3500);
});

// REACT CIRCLE
react_skill_circle.addEventListener('pointerdown', () => {
    react_skill_circle.classList.add('tapped');
    line_react.classList.add('tapped');
    react_skill.classList.add('tapped');
    react_description.classList.add('tapped');
    // react_inner_circle.classList.add('tapped');
    function reset_react() {
        react_skill_circle.classList.remove('tapped');
        line_react.classList.remove('tapped');
        react_skill.classList.remove('tapped');
        react_description.classList.remove('tapped');
        react_inner_circle.classList.remove('tapped');
    }
    setTimeout(reset_react, 3500);
});
// NATIVE CIRCLE
native_skill_circle.addEventListener('pointerdown', () => {
    native_skill_circle.classList.add('tapped');
    line_native.classList.add('tapped');
    native_skill.classList.add('tapped');
    native_description.classList.add('tapped');
    function reset_native() {
        native_skill_circle.classList.remove('tapped');
        line_native.classList.remove('tapped');
        native_skill.classList.remove('tapped');
        native_description.classList.remove('tapped');
    }
    setTimeout(reset_native, 3500);
});
// FIGMA CIRCLE
figma_skill_circle.addEventListener('pointerdown', () => {
    figma_skill_circle.classList.add('tapped');
    line_figma.classList.add('tapped');
    figma_skill.classList.add('tapped');
    figma_description.classList.add('tapped');
    function reset_figma() {
        figma_skill_circle.classList.remove('tapped');
        line_figma.classList.remove('tapped');
        figma_skill.classList.remove('tapped');
        figma_description.classList.remove('tapped');
    }
    setTimeout(reset_figma, 3500);
});
// JAVASCRIPT CIRCLE
javascript_skill_circle.addEventListener('pointerdown', () => {
    javascript_skill_circle.classList.add('tapped');
    line_javascript.classList.add('tapped');
    javascript_skill.classList.add('tapped');
    javascript_description.classList.add('tapped');
    function reset_javascript () {
        javascript_skill_circle.classList.remove('tapped');
        line_javascript.classList.remove('tapped');
        javascript_skill.classList.remove('tapped');
        javascript_description.classList.remove('tapped');
    }
    setTimeout(reset_javascript, 3500);
})
// PYTHON CIRCLE 
python_skill_circle.addEventListener('pointerdown', () => {
    python_skill_circle.classList.add('tapped');
    line_python.classList.add('tapped');
    python_skill.classList.add('tapped');
    python_description.classList.add('tapped');
    function reset_python () {
        python_skill_circle.classList.remove('tapped');
        line_python.classList.remove('tapped');
        python_skill.classList.remove('tapped');
        python_description.classList.remove('tapped');
    }
    setTimeout(reset_python, 3500);
});
// DJANGO CIRCLE
django_skill_circle.addEventListener('pointerdown', () => {
    django_skill_circle.classList.add('tapped');
    line_django.classList.add('tapped');
    django_skill.classList.add('tapped');
    django_description.classList.add('tapped');
    function reset_django () {
        django_skill_circle.classList.remove('tapped');
        line_django.classList.remove('tapped');
        django_skill.classList.remove('tapped');
        django_description.classList.remove('tapped');
    }
    setTimeout(reset_django, 3500);
});
// FIREBASE CIRCLE
firebase_skill_circle.addEventListener('pointerdown', () => {
    firebase_skill_circle.classList.add('tapped');
    line_firebase.classList.add('tapped');
    firebase_skill.classList.add('tapped');
    firebase_description.classList.add('tapped');
    function reset_firebase () {
        firebase_skill_circle.classList.remove('tapped');
        line_firebase.classList.remove('tapped');
        firebase_skill.classList.remove('tapped');
        firebase_description.classList.remove('tapped');
    }
    setTimeout(reset_firebase, 3500);
});
// POSTGRE/HEROKU CIRCLE
heroku_skill_circle.addEventListener('pointerdown', () => {
    heroku_skill_circle.classList.add('tapped');
    line_heroku.classList.add('tapped');
    heroku_skill.classList.add('tapped');
    heroku_description.classList.add('tapped');
    function reset_heroku () {
        heroku_skill_circle.classList.remove('tapped');
        line_heroku.classList.remove('tapped');
        heroku_skill.classList.remove('tapped');
        heroku_description.classList.remove('tapped');
    }
    setTimeout(reset_heroku, 3500);
});
// AWS CIRCLE
aws_skill_circle.addEventListener('pointerdown', () => {
    aws_skill_circle.classList.add('tapped');
    line_aws.classList.add('tapped');
    aws_skill.classList.add('tapped');
    aws_description.classList.add('tapped');
    function reset_aws () {
        aws_skill_circle.classList.remove('tapped');
        line_aws.classList.remove('tapped');
        aws_skill.classList.remove('tapped');
        aws_description.classList.remove('tapped');
    }
    setTimeout(reset_aws, 3500);
});


////////////////////////////////////////////////
////////////////////////////////////////////////
// Desktops

// For any screen larger than the average tablet
let widthSkills = window.matchMedia("(min-width: 1180px)");

if(widthSkills.matches) {

    // ALL OF THE CIRCLES
    // HTML
    html_skill_circle.addEventListener('mouseover', () => {
        html_skill_circle.classList.add('hover');
        line_html.classList.add('hover');
        html_skill.classList.add('hover');
        html_description.classList.add('hover');
    })
    html_skill_circle.addEventListener('mouseout', () => {
        html_skill_circle.classList.remove('hover');
        line_html.classList.remove('hover');
        html_skill.classList.remove('hover');
        html_description.classList.remove('hover');
    });
    // CSS 
    css_skill_circle.addEventListener('mouseover', () => {
        css_skill_circle.classList.add('hover');
        line_css.classList.add('hover');
        css_skill.classList.add('hover');
        css_description.classList.add('hover');
    });
    css_skill_circle.addEventListener('mouseout', () => {
        css_skill_circle.classList.remove('hover');
        line_css.classList.remove('hover');
        css_skill.classList.remove('hover');
        css_description.classList.remove('hover');
    });
    // SASS
    sass_skill_circle.addEventListener('mouseover', () => {
        sass_skill_circle.classList.add('hover');
        line_sass.classList.add('hover');
        sass_skill.classList.add('hover');
        sass_description.classList.add('hover');
    });
    sass_skill_circle.addEventListener('mouseout', () => {
        sass_skill_circle.classList.remove('hover');
        line_sass.classList.remove('hover');
        sass_skill.classList.remove('hover');
        sass_description.classList.remove('hover');
    });
    // REACT
    react_skill_circle.addEventListener('mouseover', () => {
        react_skill_circle.classList.add('hover');
        line_react.classList.add('hover');
        react_skill.classList.add('hover');
        react_description.classList.add('hover');
    });
    react_skill_circle.addEventListener('mouseout', () => {
        react_skill_circle.classList.remove('hover');
        line_react.classList.remove('hover');
        react_skill.classList.remove('hover');
        react_description.classList.remove('hover');
    });
    // NATIVE
    native_skill_circle.addEventListener('mouseover', () => {
        native_skill_circle.classList.add('hover');
        line_native.classList.add('hover');
        native_skill.classList.add('hover');
        native_description.classList.add('hover');
    });
    native_skill_circle.addEventListener('mouseout', () => {
        native_skill_circle.classList.remove('hover');
        line_native.classList.remove('hover');
        native_skill.classList.remove('hover');
        native_description.classList.remove('hover');
    });
    // FIGMA
    figma_skill_circle.addEventListener('mouseover', () => {
        figma_skill_circle.classList.add('hover');
        line_figma.classList.add('hover');
        figma_skill.classList.add('hover');
        figma_description.classList.add('hover');
    });
    figma_skill_circle.addEventListener('mouseout', () => {
        figma_skill_circle.classList.remove('hover');
        line_figma.classList.remove('hover');
        figma_skill.classList.remove('hover');
        figma_description.classList.remove('hover');
    });
    // JAVASCRIPT
    javascript_skill_circle.addEventListener('mouseover', () => {
        javascript_skill_circle.classList.add('hover');
        line_javascript.classList.add('hover');
        javascript_skill.classList.add('hover');
        javascript_description.classList.add('hover');
    });
    javascript_skill_circle.addEventListener('mouseout', () => {
        javascript_skill_circle.classList.remove('hover');
        line_javascript.classList.remove('hover');
        javascript_skill.classList.remove('hover');
        javascript_description.classList.remove('hover');
    });
    
    // PYTHON
    // add Event listener to the circle
    python_skill_circle.addEventListener('mouseover', () => {
        python_skill_circle.classList.add('hover');
        line_python.classList.add('hover');
        python_skill.classList.add('hover');
        python_description.classList.add('hover');
    });
    python_skill_circle.addEventListener('mouseout', () => {
        python_skill_circle.classList.remove('hover');
        line_python.classList.remove('hover');
        python_skill.classList.remove('hover');
        python_description.classList.remove('hover');
    });

    // DJANGO
    django_skill_circle.addEventListener('mouseover', () => {
        django_skill_circle.classList.add('hover');
        line_django.classList.add('hover');
        django_skill.classList.add('hover');
        django_description.classList.add('hover');
    });
    django_skill_circle.addEventListener('mouseout', () => {
        django_skill_circle.classList.remove('hover');
        line_django.classList.remove('hover');
        django_skill.classList.remove('hover');
        django_description.classList.remove('hover');
    });
    // FIREBASE
    firebase_skill_circle.addEventListener('mouseover', () => {
        firebase_skill_circle.classList.add('hover');
        line_firebase.classList.add('hover');
        firebase_skill.classList.add('hover');
        firebase_description.classList.add('hover');
    });
    firebase_skill_circle.addEventListener('mouseout', () => {
        firebase_skill_circle.classList.remove('hover');
        line_firebase.classList.remove('hover');
        firebase_skill.classList.remove('hover');
        firebase_description.classList.remove('hover');
    });
    // HEROKU
    heroku_skill_circle.addEventListener('mouseover', () => {
        heroku_skill_circle.classList.add('hover');
        line_heroku.classList.add('hover');
        heroku_skill.classList.add('hover');
        heroku_description.classList.add('hover');
    });
    heroku_skill_circle.addEventListener('mouseout', () => {
        heroku_skill_circle.classList.remove('hover');
        line_heroku.classList.remove('hover');
        heroku_skill.classList.remove('hover');
        heroku_description.classList.remove('hover');
    });
    // AWS
    aws_skill_circle.addEventListener('mouseover', () => {
        aws_skill_circle.classList.add('hover');
        line_aws.classList.add('hover');
        aws_skill.classList.add('hover');
        aws_description.classList.add('hover');
    });
    aws_skill_circle.addEventListener('mouseout', () => {
        aws_skill_circle.classList.remove('hover');
        line_aws.classList.remove('hover');
        aws_skill.classList.remove('hover');
        aws_description.classList.remove('hover');
    });
}