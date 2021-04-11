$(function() {
    $(window).scroll(function() {
        let navbar = $('.navbar');
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled')
        } else {
            navbar.removeClass('scrolled')
        }
    })

    // Deal with Tabs section

    $('.tabs-section .list-unstyled li').click(function() {
        $(this).addClass('selected').siblings().removeClass('selected')
        $('.tabs-section .tabs-info > div').hide()
        $( '.' + $(this).data('name')).show();
    })
    // Scroll to top button 
    $(window).scroll(function() {
        var scrollTop = $('.scroll-top');
        $(this).scrollTop() >= 1000 ? scrollTop.fadeIn() :  scrollTop.fadeOut(200)
        console.log($(window).scrollTop())
    });
    // Click on button function
   $('.scroll-top').click(function() {
    $('html,body').animate({
        scrollTop: 0
    }, 1000)
        
});
   // click on navbar links
   $('.navbar-nav li a').click(function() {
       $(this).addClass('active').parent().siblings().children('a').removeClass('active')
       
   })
   // create loading screen
   $(window).load(function() {
       $(".spinner-loading").remove()
   })
   // Click on home linl
   $('.navbar-nav .home').click(function() {
       $('html, body').animate({
           scrollTop: 0
       }, 1000)
   })
});
// click on navbar links
let navbarLinks = document.querySelectorAll('.nav-link');
navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth' 
        })
        e.target.style.color = '#c1c0c0'
    })
})