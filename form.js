$(document).ready(function () {
    $("#myForm").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            },
            phone: {
                required: true,
                pattern: /^\d{3}-\d{3}-\d{4}$/
            }
        },
        messages: {
            name: "Please enter your name",
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please enter a password",
                minlength: "Password must be at least 6 characters long"
            },
            phone: {
                required: "Please enter a phone number",
                pattern: "Please enter a valid US phone number (e.g., 123-456-7890)"
            }
        }
    });
});