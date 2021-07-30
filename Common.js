window.onload = function () {
 //header script
 document
  .getElementById("header")
  .insertAdjacentHTML(
   "afterbegin",
   '<div class="header-bar">\
    <div class="header-logo">\
    <img onclick="logo()" src="./media/u-tec.png" alt="Logo" id="utec-logo"/>\
    <img src="./media/IQNet.png" alt="IQNet" />\
    <img src="./media/Qualityaustria.png" alt="Qualityaustria" />\
    </div>\
    <div id="main-nav-bar">\
     <a href="./About College.html" class="main-nav">About</a>\
     <a href="./Courses.html" class="main-nav">Courses</a>\
     <a href="./Admission.html" class="main-nav">Admission</a>\
    </div>\
    <div id="hamburger">\
     <div id="hamburger-menu" onclick="menu()">\
      <span></span>\
      <span></span>\
      <span></span>\
      <span></span>\
     </div>\
    </div>\
  </div>\
  <div id="nav">\
   <div class="nav-links">\
    <a href="./Home.html" class="html-link" id="logo-home"><img class="home-logo" src="./media/transparent logo.png"></a>\
    <hr />\
    <a href="./About College.html" class="html-link">About College</a>\
    <a href="./About College.html#general-info" class="tab-link">General Information</a>\
    <a href="./About College.html#msg-bod" class="tab-link">Message from BOD</a>\
    <a href="./About College.html#student-view" class="tab-link">Students View</a>\
    <a href="./About College.html#location" class="tab-link">Location</a>\
    <hr />\
    <a href="./Courses.html" class="html-link">Courses</a>\
    <a href="./Courses.html#civil" class="tab-link">B.E. Civil</a>\
    <a href="./Courses.html#elec" class="tab-link">B.E. E&E</a>\
    <a href="./Courses.html#computer" class="tab-link">B.E. Computer</a>\
    <a href="./Courses.html#cm" class="tab-link">M.Sc. CM</a>\
    <hr />\
    <a href="./Admission.html" class="html-link">Admission</a>\
    <a href="./Admission.html#admission-info" class="tab-link">Admission Information</a>\
    <a href="./Admission.html#online-form" class="tab-link">Apply Form</a>\
    <hr />\
    <a href="./Examination.html" class="html-link">Examination</a>\
    <a href="./Examination.html#evaluation" class="tab-link">Evaluation System</a>\
    <hr />\
    <a href="./Facilities.html" class="html-link">Facilities</a>\
    <a href="./Facilities.html#general-facility" class="tab-link">General Facilities</a>\
    <a href="./Facilities.html#schoolarship-facility" class="tab-link">Schoolarship Facility</a>\
    <hr />\
    <a href="./Members.html" class="html-link">Members</a>\
    <a href="./Members.html#bod" class="tab-link">Board of Directors</a>\
    <a href="./Members.html#faculty" class="tab-link">Faculty Members</a>\
    <a href="./Members.html#admin" class="tab-link">Administrative Members</a>\
    <hr />\
    <a href="./More.html" class="html-link">More</a>\
    <a href="./More.html#gallery" class="tab-link">Gallery</a>\
    <a href="./More.html#events" class="tab-link">Events</a>\
    <a href="./More.html#research-and-pub" class="tab-link">Research and Publications</a>\
   </div>\
  </div>'
  );
 //footer script
 document
  .getElementById("footer")
  .insertAdjacentHTML(
   "afterbegin",
   '<div class="footer-container">\
   <div class="left-col">\
   <div class="footer-logo">\
   <img src="./media/transparent logo.png" class="logo" />\
   <span class="logo-des">United Technical College | Bharatpur-11, Chitwan</span></div>\
   <div class="social-media">\
    <a href="https://www.facebook.com/utecchitwan"><span class="material-icons">facebook</span></a>\
    <a href="#"><span class="material-icons"></span></a>\
   </div>\
   <p class="rights-text">\
    &copy;2021 Created By Ashish All Rights Reserved.\
   </p>\
  </div>\
  <div class="right-col">\
   <h1>Our Newsletter</h1>\
   <div class="border"></div>\
   <p>Enter Your Email to get our news and updates.</p>\
   <form action="" class="newsletter-form">\
    <input type="text" class="txtb" placeholder="Enter your Email" />\
    <input type="submit" class="btn" value="submit" />\
   </form>\
  </div>\
 </div>'
  );

 //tabs script
 //to open tab upon click
 const tabs = document.querySelectorAll(".tab");
 const contents = document.querySelectorAll(".content");

 tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
   tabs.forEach((tab) => tab.classList.remove("active"));
   tab.classList.add("active");
   contents.forEach((c) => c.classList.remove("active"));
   contents[index].classList.add("active");
  });
 });
 // to open first tab by default
 tabs[0].click();
 // to specify tab from external links
 var hash = window.location.hash.substr(1);
 document.getElementById(hash).click();
};

//turn header bar white on scroll
window.onscroll = function () {
 var navbar = document.querySelector(".header-bar");
 if (window.pageYOffset > 0) {
  navbar.classList.add("scrolled");
 } else {
  navbar.classList.remove("scrolled");
 }
};

//menu bar
function menu() {
 document.getElementById("hamburger-menu").classList.toggle("open");
 document.getElementById("nav").classList.toggle("open");
 document.getElementById("main-nav-bar").classList.toggle("close");
}

function logo() {
 document.getElementById("logo-home").click();
}
