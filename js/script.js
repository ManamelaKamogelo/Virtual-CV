const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x"); // changes icon to 'X' when open
  navbar.classList.toggle("active");
});

const activePage = () => {
  const header = document.querySelector("header");
  const barsBox = document.querySelector(".bars-box");

  header.classList.remove("active");
  setTimeout(() => {
    header.classList.add("active");
  }, 1100);

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  barsBox.classList.remove("active");
  setTimeout(() => {
    barsBox.classList.add("active");
  }, 1100);

  sections.forEach((section) => {
    section.classList.remove("active");
  });

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

navLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    if (!link.classList.contains("active")) {
      activePage();

      link.classList.add("active");

      setTimeout(() => {
        sections[idx].classList.add("active");
      }, 1100);
    }
  });
});

logoLink.addEventListener("click", () => {
  if (!navLinks[0].classList.contains("active")) {
    activePage();

    navLinks[0].classList.add("active");

    setTimeout(() => {
      sections[0].classList.add("active");
    }, 1100);
  }
});

const resumeBtns = document.querySelectorAll(".resume-btn");

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const resumeDetails = document.querySelectorAll(".resume-detail");

    resumeBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    resumeDetails.forEach((detail) => {
      detail.classList.remove("active");
    });
    resumeDetails[idx].classList.add("active");
  });
});

const arrowRight = document.querySelector(
  ".portfolio-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portfolio-box .navigation .arrow-left"
);

let index = 0;

const activePortfolio = () => {
  const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
  const portfolioDetails = document.querySelectorAll(".portfolio-detail");

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${
    index * 2
  }rem))`;

  portfolioDetails.forEach((detail) => {
    detail.classList.remove("active");
  });
  portfolioDetails[index].classList.add("active");
};

arrowRight.addEventListener("click", () => {
  if (index < 3) {
    index++;
    arrowLeft.classList.remove("disabled");
  } else {
    index = 4;
    arrowRight.classList.add("disabled");
  }

  activePortfolio();
});

arrowLeft.addEventListener("click", () => {
  if (index > 3) {
    index--;
    arrowRight.classList.remove("disabled");
  } else {
    index = 0;
    arrowLeft.classList.add("disabled");
  }

  activePortfolio();
});

// EmailJS Configuration and Contact Form Handler
(function () {
  // Initialize EmailJS with your public key
  emailjs.init("tD9Eu4EUpfDHjUo6X"); // Replace with your actual EmailJS public key
})();

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show sending status
    formStatus.textContent = "Sending message...";
    formStatus.style.color = "#00abf0";

    // Get form data
    const templateParams = {
      from_name: contactForm.from_name.value,
      from_email: contactForm.from_email.value,
      phone: contactForm.phone.value,
      subject: contactForm.subject.value,
      message: contactForm.message.value,
      to_email: "lethabokmanamela@gmail.com",
    };

    // Send email using EmailJS
    emailjs.send("service_c88lhvp", "template_gbixu65", templateParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        formStatus.textContent =
          "Message sent successfully! I'll get back to you soon.";
        formStatus.style.color = "#0ef";
        contactForm.reset();

        // Clear status message after 5 seconds
        setTimeout(() => {
          formStatus.textContent = "";
        }, 5000);
      },
      function (error) {
        console.log("FAILED...", error);
        formStatus.textContent =
          "Failed to send message. Please try again or email me directly.";
        formStatus.style.color = "#ff0000";

        // Clear error message after 5 seconds
        setTimeout(() => {
          formStatus.textContent = "";
        }, 5000);
      }
    );
  });
}
