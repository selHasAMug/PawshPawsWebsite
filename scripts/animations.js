const images = document.querySelectorAll('.scroller img');
const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow-right');
let x = 0;

function updateScale() {
    const center = window.innerWidth / 2;

    images.forEach(img => {
        const rect = img.getBoundingClientRect();
        const imgCenter = rect.left + rect.width / 2;
        const distance = Math.abs(center - imgCenter);
        img.style.opacity = 1 - (distance ** 3 * 0.0000000043);

        const scale = Math.max(0.75, 1.15 - distance / 2000);
        img.style.transform =  `translateX(${x}px) scale(${scale})`
    });

    requestAnimationFrame(updateScale);
}

updateScale();

function moveImages(direction) {
    x += 240 * direction;
    x = Math.min(800, Math.max(x, -800))
    images.forEach(img => {
        img.style.transform = `translateX(${x}px)`;
    });
}

left.addEventListener('click', () => moveImages(1));
right.addEventListener('click', () => moveImages(-1));