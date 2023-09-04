const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

// Dark or light images 
const imageMode = color => {
    image1.src = `img/undraw_appreciation_hhh7${color}.svg`
    image2.src = `img/undraw_fun_moments_2vha${color}.svg`
    image3.src = `img/undraw_shopping_bags_o8ee${color}.svg`
}

const toggleLightDarkMode = isLight => {
    nav.style.backgroundColor = isLight ? "rgb(0 0 0 / 50%" : "rgb(255 255 255 / 50%";
    textBox.style.backgroundColor = isLight ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";
    toggleIcon.children[0].textContent = isLight ? "Dark Mode" : "Light Mode";
    isLight ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon") : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
    isLight ? imageMode(DARK_THEME) : imageMode(LIGHT_THEME);
}

// Switch theme dynamically
const switchTheme = e => {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", DARK_THEME);
        toggleLightDarkMode(true);
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", LIGHT_THEME);
        toggleLightDarkMode(false);
    }
}

// Check local storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === DARK_THEME) {
        toggleSwitch.checked = true;
        toggleLightDarkMode(true)
    }
}


// Event listener 
toggleSwitch.addEventListener("change", switchTheme);