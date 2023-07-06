//Password Check
const confirm_password = document.querySelector("#confirm-password");


confirm_password.addEventListener("change", function(event) {
    const main_container = document.querySelector(".password")
    const password = document.querySelector("#password");
     if (password.value !== confirm_password.value) {
        this.style.borderColor = "red";
        const div = document.createElement("div");
        div.className = "alert";
        const alert = document.createTextNode("Passwords: Don't Match!");
        div.appendChild(alert);
        div.style.color = "red";
        document.querySelector(".password").appendChild(div);
    }
    else {
        this.style.borderColor = "green";
        if (document.querySelector(".alert")) {
            main_container.removeChild(document.querySelector(".alert"));
        }
    }
});