// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50,  // Adjust to avoid header overlap
            behavior: 'smooth'
        });
    });
});

// Optional: Alert when "Beli Sekarang" is clicked (for testing)
document.querySelector('.btn-secondary').addEventListener('click', function (e) {
    e.preventDefault();  // Prevent default link behavior
    alert("Terima kasih telah membeli ebook! Anda akan segera diarahkan.");
    window.location.href = this.href;  // Proceed with the WhatsApp link
});
