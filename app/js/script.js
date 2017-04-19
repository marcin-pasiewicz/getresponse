window.onload = function() {
    'use strict';

    var btnMainNav = document.querySelector('.js-btn-nav');
    var mainNav = document.querySelector('.main-nav');

    btnMainNav.addEventListener('click', function(event) {
        event.preventDefault();
        mainNav.classList.toggle('show');
    });


    var counterWeek = 7;
    var weekLength = 12;
    var counterWeekContainer = document.querySelector('.counter');
    var btnNextWeek = document.querySelector('.btn-next');
    var btnPrevWeek = document.querySelector('.btn-prev');
    var breadCrumbList = document.querySelector('.breadcrumbs');

    function describeNumberWeek() {
        counterWeekContainer.innerHTML = counterWeek;
    }

    function incrementCounter(event) {
        event.preventDefault();
        counterWeek += 1;
        describeNumberWeek();
        breadCrumbList.children[counterWeek-2].classList.add("ok");
        breadCrumbList.children[counterWeek-2].classList.remove("active");
        breadCrumbList.children[counterWeek-1].classList.add("active");

        btnPrevWeek.classList.contains('disabled') ? btnPrevWeek.classList.remove('disabled') : '';

        if(counterWeek >= weekLength) {
            btnNextWeek.classList.add('disabled');
        }
    }

    function decrementCounter(event) {
        event.preventDefault();
        counterWeek -= 1;
        describeNumberWeek();
        breadCrumbList.children[counterWeek-1].classList.remove("ok");
        breadCrumbList.children[counterWeek-1].classList.add("active");
        breadCrumbList.children[counterWeek].classList.remove("active");


        btnNextWeek.classList.contains('disabled') ? btnNextWeek.classList.remove('disabled') : '';

        if(counterWeek <= 1) {
            btnPrevWeek.classList.add('disabled');
        }
    }

    describeNumberWeek();
    btnNextWeek.addEventListener('click', incrementCounter);
    btnPrevWeek.addEventListener('click', decrementCounter);

    var proteinList = document.querySelectorAll('.list-proteins li a');

    [].slice.apply(proteinList).forEach( function(protein) {
        protein.addEventListener('click', function(event) {
            event.preventDefault();
            var sourceIcon = protein.childNodes[0].src;
            var isIconGreen = (sourceIcon.indexOf('green') !== -1) ? sourceIcon.replace("green", "grey") : sourceIcon.replace("grey", "green");
            protein.childNodes[0].src = isIconGreen;
        });

    });
};
