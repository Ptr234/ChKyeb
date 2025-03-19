  <script>
        document.addEventListener("DOMContentLoaded", function () {
            console.log("Website Loaded Successfully");

            // Function to sanitize user input to prevent XSS
            function sanitizeInput(input) {
                return input.replace(/[&<>"'/]/g, function(char) {
                    return {
                        '&': '&amp;',
                        '<': '&lt;',
                        '>': '&gt;',
                        '"': '&quot;',
                        "'": '&#39;',
                        "/": '&#x2F;'
                    }[char];
                });
            }

            // Example: Sanitize any user input fields (if applicable)
            // let userInputField = document.getElementById("user-input");
            // userInputField.value = sanitizeInput(userInputField.value);
        });
    </script>
