
        const loginForm = document.getElementById("loginForm");
        const message = document.getElementById("message");
        const validEmail = "ramesh@gmail.com";
        const validPassword = "Ramesh123";

        loginForm.addEventListener("submit", function(event) {

             
                  event.preventDefault(); // stop the browser default action
          try {

             const email = document.getElementById("email").value.trim();
                const password = document.getElementById("password").value.trim();
                    
                 // Check empty fields
                 if (email === "" || password === "") {
                     throw new Error("Email and password are required");
            }

             // Check email formate
                if (!email.includes("@")) {
                throw new Error("Please enter a valid email");
                 }

               // Check password length
               if (password.length < 6) {
                throw new Error( "Password must contain at least 6 characters");
                 }

            // Demo login credentials
              if (email !== validEmail || password !== validPassword) {
              throw new Error("Invalid email or password");
               }
                 // Successful login
               message.innerText = "Login successful!"
            }catch (error) {
       // Handle errors
      message.innerText = error.message;
 }
 finally {
 console.log("Login process completed");
 }
 });