document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var guests = document.getElementById("guests").value;
  
    // You can perform further validation here if needed
  
    // Display booking information
    alert("Booking Details:\nName: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nDate: " + date + "\nTime: " + time + "\nGuests: " + guests);
  });
  
   
    
        

        

        