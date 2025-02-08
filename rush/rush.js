function showResume(resumeId) {
    if (resumeId === 'null') {
        document.querySelectorAll('.resume-section').forEach(section => section.style.display = 'none');
        current_state = null;
    } else {
        document.querySelectorAll('.resume-section').forEach(section => section.style.display = 'none');
        document.getElementById(resumeId).style.display = 'block';
        const id = resumeId.replace(/\D/g, "");
        current_state = id;
    }
}

function scrollToSection(sectionId) {
    sectionId = sectionId + current_state;
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 50,
            behavior: 'smooth'
        });
    }
}

let dropdownItems = document.querySelectorAll(".dropdown-item");

    // Add click event to each dropdown item
    dropdownItems.forEach(item => {
        item.addEventListener("click", function () {
            let navbarCollapse = document.querySelector(".navbar-collapse");

            // Collapse the navbar only if it's open
            if (navbarCollapse.classList.contains("show")) {
                let bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: true
                });
            }
        });
    });

let current_state = null