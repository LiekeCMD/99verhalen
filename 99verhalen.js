/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

console.log('hoi');

var filter = document.querySelector('header > form:first-of-type');
// thema

var themeButton = filter.querySelector('button:first-of-type');
var themeFieldset = filter.querySelector('fieldset:first-of-type');

// volgorde

var sortButton = filter.querySelector('button:nth-of-type(2)');
var sortFieldset = filter.querySelector('fieldset:nth-of-type(2)');

// opslaan knop
var saveButton = filter.querySelector('button:last-of-type');

//reageer knop

var commentButton = document.querySelector('button');

var comments = document.querySelector('section');

// thema's uitklappen
themeButton.addEventListener('click', showThemeFieldset);

function showThemeFieldset(e) {
    e.preventDefault();
    themeFieldset.classList.toggle('active');
    saveButton.classList.add('active');
}

//volgorde uitklappen
sortButton.addEventListener('click', showSortFieldset);

function showSortFieldset(e) {
    e.preventDefault();
    sortFieldset.classList.toggle('active');

    saveButton.classList.add('active');
}

// comments uitklappen

commentButton.addEventListener('click', comments);

function comments(e) {
    e.preventDefault();
    comments.classList.toggle('active');

}
