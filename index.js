document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username ==="sumanth"){
      if(password === "4753"){
        window.location.href ="home.html";
      }
      else{
        if (password ===""){
          document.getElementById("error-msg").innerText = "Enter Your Password ";
        }
        else{
          document.getElementById("error-msg").innerText = "Enter Correct Password ";
        }
      }
    }
    else{
      if (username ===""){
        document.getElementById("error-msg").innerText = "Enter Your usernamne ";
        
      }
      else{
        document.getElementById("error-msg").innerText = "Enter Correct usernamne ";
      }
      return username;
    }
    if(username === "sumanth" & password ==="4753"){
      document.getElementById("error-msg").innerText = "";
      document.getElementById("sucess").innerText = "Success";
    }
  
  });



  




    
  