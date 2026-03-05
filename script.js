// Form submission
document
  .getElementById("paymentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Participant Info
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const year = document.getElementById("year").value;

    // Event Participation
    const activities = [];
    document
      .querySelectorAll('input[name="activities"]:checked')
      .forEach((el) => activities.push(el.value));

    // Accommodation
    const accommodation = document.querySelector(
      'input[name="accommodation"]:checked',
    )?.value;

    // Ticket & Payment
    const ticket = document.getElementById("ticket").value;
    const payment = document.getElementById("payment").value;
    const agree = document.getElementById("agree").checked;

    if (!agree) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    // Display confirmation
    alert(
      `Thank you ${name}!\n` +
        `Email: ${email}\nPhone: ${phone}\nGraduation Year: ${year}\n` +
        `Activities: ${activities.join(", ") || "None"}\n` +
        `Accommodation: ${accommodation}\n` +
        `Ticket: ${ticket}\nPayment: ${payment}\n\n` +
        `You have successfully registered for the alumni event!`,
    );

    // Reset forms
    document.getElementById("registrationForm").reset();
    document.getElementById("participationForm").reset();
    document.getElementById("accommodationForm").reset();
    document.getElementById("paymentForm").reset();
  });
