// Toggle Password Visibility
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.innerHTML ='<i class="fa fa-eye-slash"></i>' ; // Change to "hide" icon
        togglePassword.style.color="rgba(254,254,254,1)";
    } else {
        passwordInput.type = "password";
        togglePassword.innerHTML = '<i class="fa fa-eye"></i>'; //change to show
        togglePassword.style.color="rgba(254,254,254,1)";
    }
});

// Form Validation on Submit
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value.trim();

    if (email === "" || password === "") {
        alert("Please fill in both fields.");
        event.preventDefault(); // Prevent form submission
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
