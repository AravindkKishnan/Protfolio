
   (function(){
      emailjs.init("service_ue8l7fb"); // Replace with your EmailJS public key
   })();


   document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("service_ue8l7fb", "template_di5561e", this)
    .then(function() {
      alert("Message sent successfully!");
    }, function(error) {
      alert("Failed to send message: " + JSON.stringify(error));
    });
});
