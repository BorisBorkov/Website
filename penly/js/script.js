let currentIndex = 0;

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;

    // Hide all testimonials
    testimonials.forEach(testimonial => {
        testimonial.style.transform = `translateX(-${index * 102.4}%)`; // Default 100
    });

    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('active', dotIndex === index);
    });
}

function nextTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial');
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

function previousTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial');
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
}

function generateDots() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dotsContainer = document.querySelector('.dots-container');
    dotsContainer.innerHTML = ''; // Clear any existing dots

    testimonials.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => showTestimonial(index));
        dotsContainer.appendChild(dot);
    });
}

// Event listeners for carousel buttons
document.querySelector('.arrow.right').addEventListener('click', nextTestimonial);
document.querySelector('.arrow.left').addEventListener('click', previousTestimonial);

// Initial display
document.addEventListener('DOMContentLoaded', () => {
    generateDots();
    showTestimonial(currentIndex);
});

// Form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the notification
    const notification = document.getElementById('notification');
    notification.style.display = 'block';

    // Hide the notification after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);

    // Clear the form fields
    document.getElementById('contact-form').reset();
}