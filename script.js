// Fungsi untuk tombol selamat datang
document.getElementById('welcomeBtn').addEventListener('click', function() {
    alert('Selamat datang di website sederhana kami! Terima kasih telah berkunjung.');
});

// Fungsi untuk form kontak
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ambil nilai form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validasi sederhana
    if(name && email && message) {
        alert(`Terima kasih ${name}! Pesan Anda telah diterima. Kami akan menghubungi Anda melalui email ${email} segera.`);
        document.getElementById('contactForm').reset();
    } else {
        alert('Harap isi semua field!');
    }
});

// Smooth scrolling untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: 'smooth'
        });
    });
});