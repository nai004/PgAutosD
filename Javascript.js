$(document).ready(function() {
    $("#login-form").on("submit", function(e) {
        e.preventDefault();
        
    

        var username = $("#username").val();
        var password = $("#password").val();

        if (username === "Nai" && password === "naiatGemini28") {
            window.location.href = "principal.html";
        } else {
            $("#error-message").show();
        }
    });
});

