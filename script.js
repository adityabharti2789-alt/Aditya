// ================= ABOUT POPUP =================

function openAbout() {
    document.getElementById("aboutPopup").style.display = "flex";
}

function closeAbout() {
    document.getElementById("aboutPopup").style.display = "none";
}


// ================= IMAGE POPUP =================

function openImage() {
    document.getElementById("imagePopup").style.display = "flex";
}

function closeImage() {
    document.getElementById("imagePopup").style.display = "none";
}


// ================= ACHIEVEMENT POPUP =================

function openAchievement() {
    document.getElementById("achievementPopup").style.display = "flex";
}

function closeAchievement() {
    document.getElementById("achievementPopup").style.display = "none";
}


// ================= CLOSE POPUP OUTSIDE =================

window.addEventListener("click", function (event) {

    const aboutPopup = document.getElementById("aboutPopup");
    const achievementPopup = document.getElementById("achievementPopup");
    const imagePopup = document.getElementById("imagePopup");

    if (event.target === aboutPopup) {
        aboutPopup.style.display = "none";
    }

    if (event.target === achievementPopup) {
        achievementPopup.style.display = "none";
    }

    if (event.target === imagePopup) {
        imagePopup.style.display = "none";
    }

});


// ================= NAVBAR ACTIVE LINK =================

const sections = document.querySelectorAll(
    "#home, #about, #skills, #projects, #contact"
);

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "home";

    sections.forEach(section => {

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ================= SCROLL ANIMATION =================

const hiddenElements = document.querySelectorAll(".hidden");

const hiddenObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

hiddenElements.forEach(element => {
    hiddenObserver.observe(element);
});


// ================= TYPEWRITER EFFECT =================

const roles = [
    "Web Developer",
    "C++ Programmer",
    "Frontend Developer",
    "B.Tech CSE Student"
];

let roleIndex = 0;
let charIndex = 0;

const heading = document.querySelector(".hero-content h2");

function typeEffect() {

    if (!heading) return;

    if (charIndex < roles[roleIndex].length) {

        heading.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 90);

    } else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        heading.textContent =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 45);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeEffect, 300);

    }

}

if (heading) {

    heading.textContent = "";

    typeEffect();

}


// ================= SKILL BAR ANIMATION =================

const skillBars = document.querySelectorAll(".fill");

const skillObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const bar = entry.target;

                bar.style.width = bar.dataset.width;

            }

        });

    },
    {
        threshold: 0.5
    }
);

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});


// ================= PERCENTAGE COUNTER =================

const percentages = document.querySelectorAll(".percent");

const percentObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const percent = entry.target;

                const target =
                    Number(percent.dataset.target);

                let count = 0;

                const updateCount = () => {

                    if (count <= target) {

                        percent.innerText = count + "%";

                        count++;

                        setTimeout(updateCount, 20);

                    }

                };

                updateCount();

                percentObserver.unobserve(percent);

            }

        });

    },
    {
        threshold: 0.5
    }
);

percentages.forEach(percent => {
    percentObserver.observe(percent);
});