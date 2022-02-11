
var email = document.getElementById("email");
var emailerror = document.getElementById("emailerror");
var password = document.getElementById("password");
var passworderror = document.getElementById("passworderror");

var Regex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

   
function loginvalidate(){

    if(email.value.match(Regex)){
        emailerror.innerHTML = 'Valid';
        email.style.border = '2px solid #07b510';
        emailerror.style.color="#07b510";
        // return true;
    }
    else if (email.value == "")
    {
        emailerror.innerHTML = 'Email cannot be blank';
        emailerror.style.color="#FF0000";
        email.style.border = '2px solid #FF0000';
        return false;
    }
    else{
        emailerror.innerHTML = 'Enter Valid Email id';
        emailerror.style.color="#FFA500";
        email.style.border = '2px solid #FFA500';
        return false;
        
        
    }

    if(password.value.match(passwordRegex)){
        passworderror.innerHTML = 'Valid';
        password.style.border = '2px solid #07b510';
        passworderror.style.color="#07b510";
        // return true;
    }
    else if (password.value == "")
    {
        passworderror.innerHTML = 'Password cannot be blank';
        passworderror.style.color="#FF0000";
        password.style.border = '2px solid #FF0000';
        return false;
    }
    else{
        passworderror.innerHTML = 'Password should be of minimum 8 characters,at least 1 uppercase,1 lower case, must contain at least 1 number and 1 special character';
        passworderror.style.color="#FFA500";
        password.style.border = '2px solid #FFA500';
        return false;
      
    }
};

var uname = document.getElementById("uname");
var unameerror = document.getElementById("unameerror");
var semail = document.getElementById("semail");
var semailerror = document.getElementById("semailerror");
var phone = document.getElementById("phone");
var phoneerror = document.getElementById("phoneerror");
var spassword = document.getElementById("spassword");
var spassworderror = document.getElementById("spassworderror");
var confirmpassword = document.getElementById("confirmpassword");
var confirmpassworderror = document.getElementById("confirmpassworderror");

function signupvalidate()
{   

    var semailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    //username validation
    if ((uname.value)==null || (uname.value)=="")
    {  
        unameerror.innerHTML = 'User name cannot be blank';
        unameerror.style.color="#FF0000";
        uname.style.border = '2px solid #FF0000'; 
        return false;  
    } 
    else{
        unameerror.innerHTML = 'Valid';
        uname.style.border = '2px solid #07b510';
        unameerror.style.color="#07b510";
    } 
    //email validation 
    if(semail.value.match(semailRegex)){
        semailerror.innerHTML = 'Valid';
        semail.style.border = '2px solid #07b510';
        semailerror.style.color="#07b510";
    }
    else if (semail.value == "")
    {
        semailerror.innerHTML = 'Email cannot be blank';
        semailerror.style.color="#FF0000";
        semail.style.border = '2px solid #FF0000';
        return false;
    }
    else{
        semailerror.innerHTML = 'Enter Valid Email id';
        semailerror.style.color="#FFA500";
        semail.style.border = '2px solid #FFA500';
        return false;
    }
    // phone validation
    if(phone.value.match(phoneRegex)){
        phoneerror.innerHTML = 'Valid';
        phone.style.border = '2px solid #07b510';
        phoneerror.style.color="#07b510";
    }
    else if (phone.value == "")
    {
        phoneerror.innerHTML = 'Phone number cannot be blank';
        phoneerror.style.color="#FF0000";
        phone.style.border = '2px solid #FF0000';
        return false;
    }
    else{
        phoneerror.innerHTML = 'Enter valid format. Formats: XXX-XXX-XXXX or XXX.XXX.XXXX or XXX XXX XXXX';
        phoneerror.style.color="#FFA500";
        phone.style.border = '2px solid #FFA500';
        return false;
    }
    //password validation
    if(spassword.value.match(passwordRegex)){
        spassworderror.innerHTML = 'Strong';
        spassworderror.style.backgroundColor="#07b510";
        spassworderror.style.color="#000000";
        spassword.style.border = '2px solid #07b510';
    }
    else if (spassword.value == "")
    {
        spassworderror.innerHTML = 'Poor';
        spassworderror.style.backgroundColor="#FF0000";
        spassworderror.style.color="#000000";
        spassword.style.border = '2px solid #FF0000';
        return false;
    }
    else{
        spassworderror.innerHTML = 'Weak';
        spassworderror.style.backgroundColor ="#FFA500";
        spassworderror.style.color="#000000";
        spassword.style.border = '2px solid #FFA500';
        return false;
      
    }
    //confirm password
    if(spassword.value!=confirmpassword.value)
    {
        confirmpassworderror.innerHTML = 'Passwords Doesnot Match';
        confirmpassworderror.style.color="#FF0000";
        confirmpassword.style.border = '2px solid #FF0000';
        return false;
    }
    else{
        confirmpassworderror.innerHTML = 'Password Match';
        confirmpassword.style.border = '2px solid #07b510';
        confirmpassworderror.style.color="#07b510";
        return true;
    
    }
 };




(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });


  /**
   * Initiate thingstodo lightbox 
   */
  const thingstodoLightbox = GLightbox({
    selector: '.thingstodo-lightbox'
  });


})()
