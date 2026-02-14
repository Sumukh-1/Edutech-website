// DARK MODE
const darkBtn = document.getElementById("darkModeBtn");
if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// SEARCH
const searchInput = document.getElementById("search");
if (searchInput) {
    const courses = document.querySelectorAll(".course-card");

    searchInput.addEventListener("keyup", function () {
        let filter = searchInput.value.toLowerCase();

        courses.forEach(course => {
            let title = course.dataset.title || "";
            course.style.display = title.includes(filter) ? "block" : "none";
        });
    });
}

// TABS FILTER
const tabs = document.querySelectorAll(".tab");
const courses = document.querySelectorAll(".course-card");

if (tabs.length > 0) {
    tabs.forEach(tab => {
        tab.addEventListener("click", function () {

            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            let category = this.dataset.category;

            courses.forEach(course => {
                if (category === "all" || course.dataset.category === category) {
                    course.style.display = "block";
                } else {
                    course.style.display = "none";
                }
            });
        });
    });
}

// ENROLL + PROGRESS
document.querySelectorAll(".enroll").forEach(button => {
    button.addEventListener("click", function () {

        button.innerText = "Enrolled ✓";
        button.disabled = true;

        let progress = button.nextElementSibling.querySelector(".progress");
        let width = 0;

        let interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
            } else {
                width += 5;
                progress.style.width = width + "%";
            }
        }, 100);
    });
});
// CONTACT FORM
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        contactForm.reset();
    });
}
