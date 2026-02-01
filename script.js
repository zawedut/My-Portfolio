/* --- 1. Hamburger Menu --- */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) { // เช็คว่ามีปุ่มไหมก่อนทำงาน
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
}

/* --- 2. Dark Mode Toggle --- */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// โหลดค่าธีมเดิม
if (localStorage.getItem('theme') === 'dark-mode') {
    body.classList.add('dark-mode');
    if(themeToggle) themeToggle.textContent = '☀️';
}

if (themeToggle) { // เช็คว่ามีปุ่มเปลี่ยนธีมในหน้านั้นไหม
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'dark-mode');
        } else {
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'light-mode');
        }
    });
}

/* --- 3. Typewriter Effect (ทำงานเฉพาะหน้าที่มี class .typing-effect) --- */
if (document.querySelector('.typing-effect')) {
    var typed = new Typed('.typing-effect', {
        strings: ["Future Tech.", "AI Solutions.", "Web Apps.", "IoT Systems."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
}

/* --- 4. Scroll Animations (AOS) --- */
// เช็คว่าโหลด AOS มาหรือยัง เพื่อกัน Error
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
}

/* --- 5. Back to Top Button --- */
const backToTopBtn = document.getElementById("back-to-top");

if (backToTopBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    backToTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}