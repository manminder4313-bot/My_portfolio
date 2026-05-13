// Mouse Follower for Background Blobs
document.addEventListener('mousemove', (e) => {
    const blobs = document.querySelectorAll('.blob');
    const x = e.clientX;
    const y = e.clientY;

    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 0.05;
        const dx = (x - window.innerWidth / 2) * speed;
        const dy = (y - window.innerHeight / 2) * speed;
        
        blob.style.transform = `translate(${dx}px, ${dy}px)`;
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission (Visual Only)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Message Sent! ✨';
        btn.style.background = '#10b981';
        form.reset();
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = '';
        }, 3000);
    });
}
