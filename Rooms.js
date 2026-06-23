

function toggleAmenities(headerElement) {
    // Only on mobile
    if (window.innerWidth <= 768) {
        const content = headerElement.nextElementSibling;
        const icon = headerElement.querySelector('.toggle-icon');

        content.classList.toggle('show');
        icon.classList.toggle('open');
    }
}

// Open all amenities on desktop view
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.querySelectorAll('.amenities-content').forEach(content => {
            content.classList.add('show');
        });
    }
});
