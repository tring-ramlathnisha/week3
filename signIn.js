// Toggle Password Visibility
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const form = document.querySelector("form");
const emailInput = document.getElementById("email");

togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.innerHTML ='<i class="fa fa-eye-slash"></i>' ; // Change to "hide" icon
    } else {
        passwordInput.type = "password";
        togglePassword.innerHTML = '<i class="fa fa-eye"></i>'; //change to show
       
    }
    togglePassword.style.color="rgba(254,254,254,1)";
});

// Form Validation on Submit
submit-btn.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "" || password === "") {
        alert("Please fill in both fields.");
    } else {
        alert("Login successful! Redirecting...");
        window.location.href = "landingpage.html"; // Redirect to landing page
    }
});

// Tab Switching (Sign In / Sign Up)
const signInTab = document.querySelector(".tabs button:nth-child(1)");
const signUpTab = document.querySelector(".tabs button:nth-child(2)");

signInTab.addEventListener("click", () => {
    signInTab.classList.add("active");
    signUpTab.classList.remove("active");
});

signUpTab.addEventListener("click", () => {
    signInTab.classList.remove('active');
    signUpTab.classList.add('active');
});
