//splash screen

// const splash = document.querySelector('.splash');

// document.addEventListener('DOMContentLoaded', (e)=>{
//     setTimeout((()=>{
//         splash.classList.add('display-none');
//     }), 2000);
// })

// function fade(element) {
//   var op = 1;  // initial opacity
//   var timer = setInterval(function () {
//       if (op <= 0.1){
//           clearInterval(timer);
//           element.style.display = 'none';
//       }
//       element.style.opacity = op;
//       element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//       op -= op * 0.1;
//   }, 50);
// }

// function unfade(element) {
// var op = 0.01;  // initial opacity
// element.style.display = 'block';
// var timer = setInterval(function () {
//     if (op >= 1){
//         clearInterval(timer);
//     }
//     element.style.opacity = op;
//     element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//     op += op * 0.1;
// }, 10);
// }

document.addEventListener('DOMContentLoaded', function() {
  // Check if the splash screen has been shown before in this session
  if (!sessionStorage.getItem('splashScreenShown')) {
      // Show the splash screen
      document.getElementById('splash-screen').classList.remove('display-none');

      // Set the flag indicating that the splash screen has been shown in this session
      sessionStorage.setItem('splashScreenShown', true);

      // Fade out the splash screen after 3 seconds (adjust as needed)
      setTimeout(function() {
          document.getElementById('splash-screen').classList.add('fade-out');
          setTimeout(function() {
              document.getElementById('splash-screen').classList.add('display-none');
          }, 1000); // Adjust the duration of the fade out animation
      }, 3000); // Adjust the duration of the splash screen display
  } else {
      // Hide the splash screen
      document.getElementById('splash-screen').classList.add('display-none');
  }
});

//theme change

const toggleButton = document.getElementById('dark-mode-toggle');
const toggleButtonMobile = document.getElementById('dark-mode-toggle-mobile');
const lightModeStylesheet = document.getElementById('light-mode-stylesheet');
const darkModeStylesheet = document.getElementById('dark-mode-stylesheet');

// Check if a theme preference is stored in localStorage
const storedTheme = localStorage.getItem('theme');

// If a theme preference is stored, apply it
if (storedTheme === 'dark') {
  lightModeStylesheet.disabled = true;
  darkModeStylesheet.disabled = false;
  toggleButton.checked = true
  toggleButtonMobile.checked = true
}

toggleButton.addEventListener('click', () => {
  // Toggle the theme
  lightModeStylesheet.disabled = !lightModeStylesheet.disabled;
  darkModeStylesheet.disabled = !darkModeStylesheet.disabled;

  // Store the current theme preference in localStorage
  const currentTheme = lightModeStylesheet.disabled ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
  toggleButtonMobile.checked ^=1;
});

toggleButtonMobile.addEventListener('click', () => {
  // Toggle the theme
  lightModeStylesheet.disabled = !lightModeStylesheet.disabled;
  darkModeStylesheet.disabled = !darkModeStylesheet.disabled;

  // Store the current theme preference in localStorage
  const currentTheme = lightModeStylesheet.disabled ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
  toggleButton.checked ^=1;
});

// page navigation

document.getElementById("featureCardPhysics").addEventListener('click', function() {
  window.location.href = 'physics.html';
});
document.getElementById("featureCardChemistry").addEventListener('click', function() {
  window.location.href = 'chemistry.html';
});
document.getElementById("featureCardEngineering").addEventListener('click', function() {
  window.location.href = 'engineering.html';
});
document.getElementById("featureCardBiology").addEventListener('click', function() {
  window.location.href = 'biology.html';
});
document.getElementById("featureCardComputerScience").addEventListener('click', function() {
  window.location.href = 'computerscience.html';
});

document.getElementById("physics").addEventListener('click', function() {
  window.location.href = 'landing.html';
});
document.getElementById("chemistry").addEventListener('click', function() {
  window.location.href = 'landing.html';
});
document.getElementById("engineering").addEventListener('click', function() {
  window.location.href = 'landing.html';
});
document.getElementById("biology").addEventListener('click', function() {
  window.location.href = 'landing.html';
});
document.getElementById("computerScience").addEventListener('click', function() {
  window.location.href = 'landing.html';
});


// JavaScript to toggle the visibility of the mobile menu and change the button icon
document.addEventListener('DOMContentLoaded', function() {
  var menuButton = document.getElementById('menu-button');
  var mobileMenu = document.getElementById('mobile-menu');
  var desktopMenu = document.getElementById('desktop-menu');

  menuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
      menuButton.classList.toggle('close-icon');
  });

  window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
          mobileMenu.classList.remove('open');
          menuButton.classList.remove('close-icon');
      }
  });
});

function toggleOverlay(x) {
  x.classList.toggle("change");
  var mobileNav = document.getElementById("mobile-nav");
  if (mobileNav.style.width === "100%") {
    mobileNav.style.width = "0%";
  } else {
    mobileNav.style.width = "100%";
  }
}

document.getElementById("scroll-button").addEventListener("click", function() {
  var section = document.getElementById("content");
  section.scrollIntoView({ behavior: "smooth" });
});
