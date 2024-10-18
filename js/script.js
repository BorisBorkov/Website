// This variable keeps track of the currently displayed testimonial's index. It starts at 0, which corresponds to the first testimonial.
let currentIndex = 0;

// This function takes an index as an argument and displays the corresponding testimonial while hiding the others.
function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;

    // Hide all testimonials
    testimonials.forEach(testimonial => {
        testimonial.style.transform = `translateX(-${index * 102.4}%)`; // Default 100
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

// Deprecated
// const cards = document.querySelectorAll('.card');

// cards.forEach(card => {
//     card.addEventListener('mouseover', () => {
//         card.classList.add('hover');
//     });

//     card.addEventListener('mouseout', () => {
//         card.classList.remove('hover');
//     });
// });

// Initial display
showTestimonial(currentIndex);

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

    // Redirect to the home section
    window.location.hash = 'home';

    return false; // Prevent form submission
}
