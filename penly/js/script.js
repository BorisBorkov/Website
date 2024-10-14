let currentIndex = 0;

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;

    // Hide all testimonials
    testimonials.forEach(testimonial => {
        testimonial.style.transform = `translateX(-${index * 100}%)`;
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

// Event listeners for carousel buttons
document.querySelector('.arrow.right').addEventListener('click', nextTestimonial);
document.querySelector('.arrow.left').addEventListener('click', previousTestimonial);

// Auto rotate testimonials every 5 seconds
// setInterval(nextTestimonial, 5000);

// Initial display
showTestimonial(currentIndex);