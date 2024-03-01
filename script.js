document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let counter = 0;

    function updateSlider() {
        const offset = -counter * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        counter += 1;
        updateSlider();
    }

    // Ganti gambar setiap 3 detik
    setInterval(nextSlide, 2500);

    // Inisialisasi posisi awal dan kalkulasi jumlah slide yang akan muncul
    updateSlider();
});

document.addEventListener('DOMContentLoaded', function () {
    const messageForm = document.getElementById('message-form');
    const messagesDiv = document.getElementById('messages');

    messageForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const messageInput = document.getElementById('message');

        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        if (name !== '' && message !== '') {
            displayMessage(name, message);

            // Reset form fields
            nameInput.value = '';
            messageInput.value = '';
        } else {
            alert('Nama dan pesan tidak boleh kosong!');
        }
    });

    function displayMessage(name, message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.innerHTML = `<strong>${name}</strong>: ${message}`;
        messagesDiv.appendChild(messageDiv);
    }
});
