const setTheme = theme => document.documentElement.className = theme;

let contactForm = document.getElementById("myForm");
console.log(contactForm);

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  if (contactForm){
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
      
        let firstname = document.getElementById("fname");
        let emailid = document.getElementById("emailid");
        //validateEmail(emailid.value);
        if (firstname.value == "" || emailid.value == "") {
          alert("Ensure you input a value in both fields!");
        }else if (validateEmail(emailid.value)){
          alert("Ensure you input a value in both fields!");
        } 
        else {
          // perform operation with form input
          alert("This form has been successfully submitted!");
          console.log(
            `This form has a firstname of ${firstname.value} and emailid of ${emailid.value}`
          );
      
          firstname.value = "";
          emailid.value = "";
        }
      });
  }

