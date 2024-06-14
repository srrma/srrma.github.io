document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
    if (elementUnderCursor && elementUnderCursor.closest('p, h1, h2, h3, h4, h5, h6, span, a')) {
        const textElement = elementUnderCursor.closest('p, h1, h2, h3, h4, h5, h6, span, a');
        const fontSize = window.getComputedStyle(textElement).fontSize;
        cursor.classList.add('text-cursor');
        cursor.style.height = fontSize;
    } else {
        cursor.classList.remove('text-cursor');
        cursor.style.height = '30px'; // Reset to default size
    }
});