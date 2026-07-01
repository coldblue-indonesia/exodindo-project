function scrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
});

async function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: e.target[0].value,
        email: e.target[1].value,
        phone: e.target[2].value,
        message: e.target[3].value
    };

    try {
        const response = await submitContact(formData);
        if (response.success) {
            alert('✅ Pesan Anda telah terkirim!');
            e.target.reset();
        } else {
            alert('❌ Terjadi kesalahan. Silakan coba lagi.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('❌ Gagal mengirim pesan.');
    }
}

console.log('🚀 EXODINDO Website Loaded Successfully');