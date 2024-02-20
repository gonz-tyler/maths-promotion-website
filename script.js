const toggleButton = document.getElementById('dark-mode-toggle');
const lightModeStylesheet = document.getElementById('light-mode-stylesheet');
const darkModeStylesheet = document.getElementById('dark-mode-stylesheet');

// Check if a theme preference is stored in localStorage
const storedTheme = localStorage.getItem('theme');

// If a theme preference is stored, apply it
if (storedTheme === 'dark') {
  lightModeStylesheet.disabled = true;
  darkModeStylesheet.disabled = false;
}

toggleButton.addEventListener('click', () => {
  // Toggle the theme
  lightModeStylesheet.disabled = !lightModeStylesheet.disabled;
  darkModeStylesheet.disabled = !darkModeStylesheet.disabled;

  // Store the current theme preference in localStorage
  const currentTheme = lightModeStylesheet.disabled ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
});

document.getElementById("featureCardPhysics").addEventListener('click', function() {
  window.location.href = 'landing.html';
});
document.getElementById("featureCardChemistry").addEventListener('click', function() {
  window.location.href = 'landing.html';
});
document.getElementById("featureCardEngineering").addEventListener('click', function() {
  window.location.href = 'landing.html';
});
document.getElementById("featureCardBiology").addEventListener('click', function() {
  window.location.href = 'landing.html';
});
document.getElementById("featureCardComputerScience").addEventListener('click', function() {
  window.location.href = 'landing.html';
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
