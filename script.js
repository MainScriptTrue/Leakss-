function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("message");

    // Simple login check
    if (user === "gen" && pass === "12345") {
        document.getElementById("login").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        msg.textContent = "Invalid username or password.";
        msg.style.color = "red";
    }
}


function openSettings() {
    document.getElementById("settingsWindow").style.display = "block";
}

function closeSettings() {
    document.getElementById("settingsWindow").style.display = "none";
}

function logout() {
    alert("Logging out...");
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("message").textContent = "";
    // Add your logout code here
}
