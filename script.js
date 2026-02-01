// เลือกตัวปุ่ม 3 ขีด และ ตัวเมนู
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// เมื่อกดปุ่ม
hamburger.addEventListener("click", () => {
    // ให้สลับ Class เพื่อเปิด/ปิด
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// (แถม) เมื่อกดลิงก์ในเมนูแล้ว ให้หุบเมนูเก็บอัตโนมัติ
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));