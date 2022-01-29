

  /**
   * Validations 
   */
   const form = document.querySelector("form");
   emailField = form.querySelector(".email"),
   emailInput = emailField.querySelector("input"),
   passwordField = form.querySelector(".password"),
   passwordInput = passwordField.querySelector("input");
   
   form.onsubmit = (e)=>{
     e.preventDefault(); //preventing from form submitting
     //if email and password is blank then add shake class in it else call specified function
     (emailInput.value == "") ? emailField.classList.add("shake", "error") : checkEmail();
     (passwordInput.value == "") ? passwordField.classList.add("shake", "error") : checkPass();
   
     setTimeout(()=>{ //remove shake class after 500ms
       emailField.classList.remove("shake");
       passwordField.classList.remove("shake");
     }, 500);
   
     emailInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
     passwordInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup
   
     function checkEmail(){ //checkEmail function
       let pattern = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/; //pattern for validate email
       if(!emailInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
         emailField.classList.add("error");
         emailField.classList.remove("valid");
         let errorTxt = emailField.querySelector(".error-txt");
         //if email value is not empty then show please enter valid email else show Email can't be blank
         (emailInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
       }else{ //if pattern matched then remove error and add valid class
         emailField.classList.remove("error");
         emailField.classList.add("valid");
       }
     }
   
     function checkPass(){ //checkPass function
        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
        let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
   
       if(passwordInput.value == ""){ //if pass is empty then add error and remove valid class
         passwordField.classList.add("error");
         passwordField.classList.remove("valid");
       }
       else if(!passwordInput.value.match(strongPassword))
       {
           passwordField.classList.add("error");
           passwordField.classList.remove("valid");
           let errorTxt = pField.querySelector(".error-txt");
           
         //if email value is not empty then show please enter valid email else show Email can't be blank
         (passwordInput.value != "") ? errorTxt.innerText = "Weak" : errorTxt.innerText = "Password can't be blank";
       
       }
       else if(!passwordInput.value.match(mediumPassword))
       {
           passwordField.classList.add("error");
           passwordField.classList.remove("valid");
           let errorTxt = passwordField.querySelector(".error-txt");
         //if email value is not empty then show please enter valid email else show Email can't be blank
         (passwordInput.value == mediumPassword) ? errorTxt.innerText = "Medium" : errorTxt.innerText = "Password can't be blank";
       
       }
       else{ //if pass is empty then remove error and add valid class
         passwordField.classList.remove("error");
         passwordField.classList.add("valid");
       }
     }
   
     //if eField and pField doesn't contains error class that mean user filled details properly
     if(!emailField.classList.contains("error") && !passwordField.classList.contains("error")){
       window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
     }
   }



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
