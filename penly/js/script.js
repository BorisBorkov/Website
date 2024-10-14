// This variable keeps track of the currently displayed testimonial's index. It starts at 0, which corresponds to the first testimonial.
let currentIndex = 0;

// This function takes an index as an argument and displays the corresponding testimonial while hiding the others.
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

// Initial display
showTestimonial(currentIndex);