// Mengatur background Navbar saat di-scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 15, 19, 1)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'rgba(15, 15, 19, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Interaksi saat tombol Beli ditekan
const buyButtons = document.querySelectorAll('.btn-buy');

buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Mengambil nama game dari atribut data-game di HTML
        const gameName = this.getAttribute('data-game');
        
        // Menampilkan alert simpel
        alert(`Berhasil! ${gameName} telah ditambahkan ke keranjang belanja Anda.`);
    });
});