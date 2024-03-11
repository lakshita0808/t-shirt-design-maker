// JavaScript for image zooming
const zoomImages = document.querySelectorAll('.template img');

zoomImages.forEach(image => {
    image.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = image.getBoundingClientRect();
        const x = (e.clientX - left) / width * 100;
        const y = (e.clientY - top) / height * 100;

        image.style.transformOrigin = `${x}% ${y}%`;
        image.style.transform = 'scale(1.2)';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});
