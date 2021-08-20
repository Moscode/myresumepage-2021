
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phoneNumber = document.getElementById("number");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");
    let feedback = document.getElementById("feedback");

    const formData = {
        name: name.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        subject: subject.value,
        message: message.value
    }

    const httpRequest = new XMLHttpRequest()
    httpRequest.open("POST", "/");
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.onload = function(){
        console.log(httpRequest.responseText);
        if(httpRequest.responseText = "success"){
            feedback.innerHTML = `Thanks for reaching out to me, I will get back to you soon through ${email.value}`;
            name.value = " ";
            email.value = " ";
            phoneNumber.value = " ";
            subject.value = " ";
            message.value = " ";
        }else{
            feedback.innerHTML = "Something went wrong try again or call my number";
        }
    }
    
    httpRequest.send(JSON.stringify(formData));
})