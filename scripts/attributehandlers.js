var pages = {
    'index': {
        colorClass: 'yellow',
        template: '<h1>Homepage</h1>',
    },
    'tools': {
        colorClass: 'red',
        template: '<h1>Toolzpage</h1>',
    },
    'settings': {
        colorClass: 'green',
        template: '<h1>Settings page</h1>',
    },
    'about': {
        colorClass: 'purple',
        template: '<h1>ALL ABOUT MEEEE!!!</h1>',
    },
}

const loadPage = (pageIndex) => {
    const {colorClass, template} = pages[pageIndex];
    document.querySelector('.js-content').innerHTML = template;
    document.body.classList.remove('green');
    document.body.classList.remove('yellow');
    document.body.classList.remove('red');
    document.body.classList.remove('purple');
    document.body.classList.add(colorClass);
    let currentNav = document.querySelector(`#${pageIndex}`);
    for (let nav of document.querySelectorAll('.top_nav')) {
        nav.classList.remove('selected');
    }
    currentNav.classList.add('selected');
}
loadPage('index');
const navbar = document.createElement("nav");