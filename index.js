      document.addEventListener("DOMContentLoaded", () => {
        const professionalsModal = document.getElementById(
          "professionals-modal"
        );
        const bookingModal = document.getElementById("booking-modal");
        const viewButtons = document.querySelectorAll(".view-btn");
        const closeProfessionalsBtn = document.getElementById(
          "close-professionals-btn"
        );
        const closeBookingBtn = document.getElementById("close-booking-btn");
        const bookingForm = document.getElementById("booking-form");
        const contactForm = document.getElementById("contact-form");
        const professionalsList = document.getElementById("professionals-list");
        const professionalsTitle = document.getElementById(
          "professionals-title"
        );
        const bookingProfessionalName = document.getElementById(
          "booking-professional-name"
        );
        const messageBox = document.getElementById("message-box");
        const messageText = document.getElementById("message-text");
        const messageIcon = document.getElementById("message-icon");
        const professionalsData = {
          Doctors: [
            {
              name: "Dr. John Smith",
              specialty: "General Practitioner",
              rating: 4.8,
            },
            {
              name: "Dr. Emily Carter",
              specialty: "Dermatologist",
              rating: 4.9,
            },
            {
              name: "Dr. Michael Chen",
              specialty: "Pediatrician",
              rating: 4.7,
            },
          ],
          Saloon: [
            { name: "Maria Rodriguez", specialty: "Hair Stylist", rating: 4.9 },
            { name: "David Lee", specialty: "Barber", rating: 4.8 },
            { name: "Chloe Davis", specialty: "Nail Technician", rating: 5.0 },
          ],
          "Home Cleaning": [
            {
              name: "Clean Sweep Team",
              specialty: "Deep Cleaning",
              rating: 4.7,
            },
            {
              name: "Spotless Homes",
              specialty: "Regular Service",
              rating: 4.9,
            },
            {
              name: "Eco-Clean Solutions",
              specialty: "Green Cleaning",
              rating: 4.6,
            },
          ],
          "Teachers / Tutors": [
            {
              name: "Sarah Miller",
              specialty: "Math Tutor (K-12)",
              rating: 4.9,
            },
            {
              name: "Ben Thompson",
              specialty: "English Language Arts",
              rating: 4.7,
            },
            {
              name: "Elena Petrova",
              specialty: "Piano Instructor",
              rating: 5.0,
            },
          ],
          Plumbers: [
            {
              name: "Mike's Plumbing",
              specialty: "Emergency Repairs",
              rating: 4.9,
            },
            {
              name: "AquaFix Solutions",
              specialty: "Pipe Installation",
              rating: 4.8,
            },
            { name: "Drain Doctors", specialty: "Drain Cleaning", rating: 4.7 },
          ],
          "Household Services": [
            { name: "Handy Harry", specialty: "General Handyman", rating: 4.8 },
            {
              name: "Sparky Electricians",
              specialty: "Electrical Repairs",
              rating: 4.9,
            },
            {
              name: "Creative Carpentry",
              specialty: "Custom Furniture",
              rating: 4.6,
            },
          ],
        };
        function showMessage(message, type = "success") {
          messageText.textContent = message;
          messageBox.classList.remove("bg-green-500", "bg-red-500", "hidden");

          if (type === "success") {
            messageBox.classList.add("bg-green-500");
            messageIcon.innerHTML = `<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />`;
          } else {
            messageBox.classList.add("bg-red-500");
            messageIcon.innerHTML = `<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />`;
          }

          setTimeout(() => {
            messageBox.classList.add("hidden");
          }, 3000);
        }
        function renderProfessionals(serviceType) {
          professionalsList.innerHTML = "";
          const professionals = professionalsData[serviceType] || [];

          if (professionals.length > 0) {
            professionals.forEach((professional) => {
              const card = document.createElement("div");
              card.classList.add(
                "professional-card",
                "bg-white",
                "p-6",
                "rounded-xl",
                "shadow-md",
                "flex",
                "flex-col",
                "justify-between"
              );
              card.innerHTML = `
                            <div>
                                <h3 class="text-xl font-bold text-gray-800">${professional.name}</h3>
                                <p class="text-gray-500 text-sm mb-2">${professional.specialty}</p>
                                <div class="flex items-center text-yellow-400 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.62-.921 1.92 0l1.847 5.698a1 1 0 00.95.691h6.002c.969 0 1.371 1.24.588 1.81l-4.858 3.535a1 1 0 00-.364 1.118l1.847 5.698c.3.921-.755 1.688-1.54 1.118l-4.858-3.535a1 1 0 00-1.176 0l-4.858 3.535c-.785.57-1.84-.197-1.54-1.118l1.847-5.698a1 1 0 00-.364-1.118L2.05 9.126c-.783-.57-.381-1.81.588-1.81h6.002a1 1 0 00.95-.691l1.847-5.698z" />
                                    </svg>
                                    <span class="text-gray-600 font-bold">${professional.rating}</span>
                                </div>
                            </div>
                            <button data-professional="${professional.name}" class="book-now-btn w-full cta-button text-white font-medium py-2 px-4 rounded-lg">Book Now</button>
                        `;
              professionalsList.appendChild(card);
            });
          } else {
            professionalsList.innerHTML = `<p class="text-center text-gray-500 text-lg">No professionals available for this service yet. Please check back later!</p>`;
          }
        }
        viewButtons.forEach((button) => {
          button.addEventListener("click", () => {
            const serviceType = button.getAttribute("data-service");
            professionalsTitle.innerHTML = `Available <span class="text-blue-600">${serviceType}</span>`;
            renderProfessionals(serviceType);
            professionalsModal.classList.remove("hidden");
          });
        });

        closeProfessionalsBtn.addEventListener("click", () => {
          professionalsModal.classList.add("hidden");
        });

        closeBookingBtn.addEventListener("click", () => {
          bookingModal.classList.add("hidden");
        });
        professionalsList.addEventListener("click", (event) => {
          const button = event.target.closest(".book-now-btn");
          if (button) {
            const professionalName = button.getAttribute("data-professional");
            bookingProfessionalName.textContent = professionalName;
            professionalsModal.classList.add("hidden");
            bookingModal.classList.remove("hidden");
          }
        });
        bookingForm.addEventListener("submit", (event) => {
          event.preventDefault();

          const professionalName = bookingProfessionalName.textContent;
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const date = document.getElementById("date").value;

          console.log(`Booking for: ${professionalName}`);
          console.log(`Submitted by: ${name}`);
          console.log(`Email: ${email}`);
          console.log(`Date: ${date}`);

          showMessage(
            `Booking with ${professionalName} successful!`,
            "success"
          );

          bookingForm.reset();
          bookingModal.classList.add("hidden");
        });
        contactForm.addEventListener("submit", (event) => {
          event.preventDefault();

          const name = document.getElementById("contact-name").value;
          const email = document.getElementById("contact-email").value;
          const subject = document.getElementById("contact-subject").value;
          const message = document.getElementById("contact-message").value;

          console.log(`Contact Form Submission:`);
          console.log(`Name: ${name}`);
          console.log(`Email: ${email}`);
          console.log(`Subject: ${subject}`);
          console.log(`Message: ${message}`);

          showMessage(
            "Thank you for your message! We will get back to you shortly.",
            "success"
          );

          contactForm.reset();
        });
      });
    