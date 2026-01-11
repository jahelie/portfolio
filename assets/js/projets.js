// REF : https://www.youtube.com/watch?v=uKVVSwXdLr0&t=346s + pas mal de chatgpt

document.addEventListener('DOMContentLoaded', () => {

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    const boxes = Array.from(document.querySelectorAll('.box'));
    let currentIndex = 0;
    let currentContainer = null;

    function openProject(index) {
        currentIndex = index;

        const box = boxes[currentIndex];
        const parentCol = box.parentElement;
        const content = parentCol.querySelector('.project-content');
        if (!content) return;

        lightbox.classList.add('active');
        lightbox.style.opacity = '1';
        lightbox.innerHTML = '';

        /* === CONTENEUR === */
        const container = document.createElement('div');
        currentContainer = container;

        container.style.background = '#fff';
        container.style.width = '80vw';
        container.style.height = '80vh';
        container.style.overflowY = 'auto';
        container.style.padding = '2em';
        container.style.borderRadius = '6px';
        container.style.position = 'relative';
        container.style.boxSizing = 'border-box';

        /* animation ouverture */
        container.style.transform = 'scale(0.95)';
        container.style.opacity = '0';
        container.style.transition = 'transform 0.25s ease, opacity 0.25s ease';

        /* ✅ CLONAGE DU CONTENU (styles Alpha OK) */
        const clone = content.cloneNode(true);
        container.appendChild(clone);

        /* bouton fermeture ✕ */
        const closeBtn = document.createElement('button');
        closeBtn.textContent = '✕';
        Object.assign(closeBtn.style, {
            position: 'absolute',
            top: '0.5em',
            right: '0.5em',
            fontSize: '1.5em',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer'
        });
        closeBtn.addEventListener('click', e => {
            e.stopPropagation();
            closeLightbox();
        });
        container.appendChild(closeBtn);

        container.addEventListener('click', e => e.stopPropagation());
        lightbox.appendChild(container);

        /* === FLÈCHES NAVIGATION (hors conteneur) === */
        const prevArrow = document.createElement('button');
        prevArrow.textContent = '❮';
        Object.assign(prevArrow.style, {
            position: 'fixed',
            left: '1em',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '3em',
            color: '#fff',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            zIndex: '1001'
        });
        prevArrow.addEventListener('click', e => {
            e.stopPropagation();
            navigate(-1);
        });

        const nextArrow = document.createElement('button');
        nextArrow.textContent = '❯';
        Object.assign(nextArrow.style, {
            position: 'fixed',
            right: '1em',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '3em',
            color: '#fff',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            zIndex: '1001'
        });
        nextArrow.addEventListener('click', e => {
            e.stopPropagation();
            navigate(1);
        });

        lightbox.appendChild(prevArrow);
        lightbox.appendChild(nextArrow);

        requestAnimationFrame(() => {
            container.style.transform = 'scale(1)';
            container.style.opacity = '1';
        });
    }

    function navigate(direction) {
        let newIndex = currentIndex + direction;
        if (newIndex < 0) newIndex = boxes.length - 1;
        if (newIndex >= boxes.length) newIndex = 0;
        openProject(newIndex);
    }

    function closeLightbox() {
        if (!currentContainer) return;

        currentContainer.style.transform = 'scale(0.95)';
        currentContainer.style.opacity = '0';
        lightbox.style.opacity = '0';

        setTimeout(() => {
            lightbox.classList.remove('active');
            lightbox.style.opacity = '';
            lightbox.innerHTML = '';
            currentContainer = null;
        }, 250);
    }

    /* ouverture */
    boxes.forEach((box, index) => {
        box.addEventListener('click', () => openProject(index));
    });

    /* fermeture fond */
    lightbox.addEventListener('click', closeLightbox);

    /* clavier */
    document.addEventListener('keydown', e => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') navigate(1);
        if (e.key === 'ArrowLeft') navigate(-1);
    });

});


