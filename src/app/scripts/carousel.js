document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('homeCarousel');
    if (!carousel) return;

    const mobileCaptions = document.querySelectorAll('.carousel-mobile-caption');
    
    carousel.addEventListener('slide.bs.carousel', function(e) {
        mobileCaptions.forEach(caption => {
            caption.classList.add('d-none');
            if (caption.dataset.slide === e.to.toString()) {
                caption.classList.remove('d-none');
            }
        });
    });
});
