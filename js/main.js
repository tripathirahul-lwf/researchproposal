
(function () {



    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        var logo = document.querySelector('.navbar-brand img')
        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
            logo.src = 'images/logo/logo.svg';
        } else {
            header_navbar.classList.remove("sticky");
            logo.src = 'images/logo/white-logo.svg';
        }

        // // show or hide the back-top-top button
        // var backToTo = document.querySelector(".scroll-top");
        // if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        //     backToTo.style.display = "flex";
        // } else {
        //     backToTo.style.display = "none";
        // }
    };



    // // section menu active
    // function onScroll(event) {
    //     var sections = document.querySelectorAll('.page-scroll');
    //     var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    //     for (var i = 0; i < sections.length; i++) {
    //         var currLink = sections[i];
    //         var val = currLink.getAttribute('href');
    //         var refElement = document.querySelector(val);
    //         var scrollTopMinus = scrollPos + 73;
    //         if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
    //             document.querySelector('.page-scroll').classList.remove('active');
    //             currLink.classList.add('active');
    //         } else {
    //             currLink.classList.remove('active');
    //         }
    //     }
    // };

    // window.document.addEventListener('scroll', onScroll);

    // for menu scroll 
    "use strict";

    const navEl = document.querySelector("#nav");
    const mainEl = document.querySelector("#main");

    const STATE = {
        currentTab: null
    };

    const targetsContainer = document.querySelector(".targets");
    const triggers = Array.from(document.querySelectorAll(".trigger"));
    const targets = [];
    const triggerSpec = document.querySelector(".trigger-spec");
    triggerSpec.style.width = `${100 / triggers.length}%`;

    triggers.forEach((trigger, ind) => {
        targets.push(document.querySelector(trigger.dataset.target));
        trigger.addEventListener("click", () => {
            STATE.currentTab = deactivateTab(STATE.currentTab);
            STATE.currentTab = activateTab(ind);
        });
    });

    STATE.currentTab = activateTab(0);

    function activateTab(ind) {
        if (ind == null) return ind;
        const trigger = triggers[ind];
        trigger.classList.add("active");
        const target = targets[ind];
        target.classList.add("active");
        targetsContainer.style.transform = `translateX(-${ind}00%)`;
        triggerSpec.style.transform = `translateX(${ind}00%)`;
        return ind;
    }

    function deactivateTab(ind) {
        if (ind == null) return ind;
        const trigger = triggers[ind];
        trigger.classList.remove("active");
        const target = targets[ind];
        target.classList.remove("active");
        return null;
    }



    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });


})();