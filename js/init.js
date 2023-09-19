// init.js
document.addEventListener("DOMContentLoaded", function () {
    /* JavaScript code for your website goes here */
  
    // Initially highlight "Home"
    const homeLink = document.querySelector('.nav a[href="#home"]');
    homeLink.style.color = "#04dff7"; // Highlight "Home" initially
  
    // Change navigation color and background based on section
    const sections = document.querySelectorAll("section");
    const navWrap = document.getElementById("nav-wrap");
    const navLinks = document.querySelectorAll(".nav a");
  
    window.addEventListener("scroll", function () {
      const currentSectionId = getCurrentSectionId(sections);
      navLinks.forEach((link) => {
        if (link.hash === "#home" && currentSectionId === "") {
          link.style.color = "#04dff7"; // Highlight "Home" when at the top of the page
        } else {
          link.style.color = link.hash === `#${currentSectionId}` ? "#04dff7" : "#fff";
        }
      });

      h = document.querySelector("header").offsetHeight;
      y = this.window.scrollY;
        if (y > h*.2 && y < h){
            navWrap.style.opacity = 0;
        }else{
            navWrap.style.opacity = 1;
        }
  
      // Handle navigation background color
      if (currentSectionId === "home") {
        navWrap.style.background = "transparent"; // Transparent background at "Home"
      } else {
        navWrap.style.background = "rgb(29, 14, 68)"; // Gray background for other sections
        navWrap.style.opacity = 1;

      }
    });
  
    function getCurrentSectionId(sections) {
      let currentSectionId = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSectionId = section.id;
        }
      });
      return currentSectionId;
    }
  
    /* Example: Change background color of the header on click */
    const header = document.querySelector("header");
    header.addEventListener("click", function () {
      this.style.backgroundColor = "red";
    });
  });