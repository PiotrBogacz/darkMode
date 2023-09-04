const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Dark or light images 
const imageMode = color => {
    image1.src = `img/undraw_appreciation_hhh7${color}.svg`
    image2.src = `img/undraw_fun_moments_2vha${color}.svg`
    image3.src = `img/undraw_shopping_bags_o8ee${color}.svg`
}

// Dark mode function
const darkMode = () => {
    nav.style.backgroundColor = "rgb(0 0 0 / 50%";
    textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
    imageMode("dark");
}

// Light mode function
const lightMode = () => {
    nav.style.backgroundColor = "rgb(255 255 255 / 50%";
    textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
    imageMode("light");
}

// Switch theme dynamically
const switchTheme = e => {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        darkMode();
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        lightMode();
    }
}

// Event listener 
toggleSwitch.addEventListener("change", switchTheme);