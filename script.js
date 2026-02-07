/* ============================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   Interactive functionality and utilities
   ============================================ */

// ============ NAVIGATION ============

/**
 * Toggle mobile navigation menu
 */
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when a nav link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// ============ PROJECT IMAGE GALLERY ============

/**
 * Store project gallery state
 * Structure: { 'project-id': { images: [], currentIndex: 0 } }
 */
const projectGalleries = {
    'project-1': {
        images: ['assets/project-1-1.jpg', 'assets/project-1-2.jpg', 'assets/project-1-3.jpg'],
        currentIndex: 0
    },
    'project-2': {
        images: ['assets/project-2-1.jpg', 'assets/project-2-2.jpg'],
        currentIndex: 0
    },
    'project-3': {
        images: ['assets/project-3-1.jpg', 'assets/project-3-2.jpg', 'assets/project-3-3.jpg', 'assets/project-3-4.jpg'],
        currentIndex: 0
    },
    'project-4': {
        images: ['assets/project-4-1.jpg', 'assets/project-4-2.jpg'],
        currentIndex: 0
    },
    'project-5': {
        images: ['assets/project-5-1.jpg', 'assets/project-5-2.jpg', 'assets/project-5-3.jpg'],
        currentIndex: 0
    }
};

/**
 * Change project image in gallery
 * @param {Event} event - Click event from gallery button
 * @param {String} projectId - The project ID (e.g., 'project-1')
 * @param {Number} index - Index of image to show
 */
function changeProjectImage(event, projectId, index) {
    event.preventDefault();

    if (!projectGalleries[projectId]) {
        console.warn(`Project ${projectId} not found in galleries`);
        return;
    }

    const gallery = projectGalleries[projectId];
    gallery.currentIndex = index;

    // Update image
    const projectCard = event.target.closest('.project-card');
    if (!projectCard) return;

    const projectImage = projectCard.querySelector('.project-image');
    projectImage.src = gallery.images[index];
    projectImage.alt = `${projectId} - Image ${index + 1}`;

    // Update active button
    const buttons = projectCard.querySelectorAll('.gallery-btn');
    buttons.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

/**
 * Initialize project galleries on page load
 * Sets the first gallery button as active
 */
function initializeProjectGalleries() {
    document.querySelectorAll('.project-card').forEach(card => {
        const buttons = card.querySelectorAll('.gallery-btn');
        if (buttons.length > 0) {
            buttons[0].classList.add('active');
        }

        // Add click handlers to project images for modal view
        const projectImage = card.querySelector('.project-image');
        if (projectImage) {
            projectImage.addEventListener('click', function () {
                openImageModal(this.src, this.alt);
            });
        }
    });

    // Initialize 2D art gallery
    initializeArtGallery();

    // Initialize breakdown gallery
    initializeBreakdownGallery();
}

/**
 * Initialize 2D art gallery - add click handlers for modal view
 */
function initializeArtGallery() {
    const artItems = document.querySelectorAll('.art-image');
    artItems.forEach(image => {
        image.addEventListener('click', function () {
            openImageModal(this.src, this.alt);
        });
        image.style.cursor = 'pointer';
    });
}

/**
 * Initialize breakdown gallery - add click handlers for modal view
 */
function initializeBreakdownGallery() {
    const breakdownItems = document.querySelectorAll('.breakdown-image');
    breakdownItems.forEach(image => {
        image.addEventListener('click', function () {
            const caption = this.closest('.breakdown-item').querySelector('.breakdown-caption').textContent;
            openImageModal(this.src, caption);
        });
        image.style.cursor = 'pointer';
    });
}

// ============ IMAGE MODAL ============

/**
 * Open full-size image modal
 * @param {String} imageSrc - Source of image to display
 * @param {String} altText - Alt text for image
 */
function openImageModal(imageSrc, altText) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');

    modal.style.display = 'block';
    modalImage.src = imageSrc;
    caption.textContent = altText;
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

/**
 * Close image modal
 */
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

/**
 * Handle modal close on outside click
 */
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                closeImageModal();
            }
        });
    }
});

/**
 * Handle keyboard navigation in modal
 * ESC key closes modal
 */
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeImageModal();
    }
});

// ============ PROJECT BREAKDOWN EXPANSION ============

/**
 * Toggle project breakdown expansion
 * @param {Event} event - Click event from expand button
 * @param {String} projectId - The project ID (e.g., 'project-1')
 */
function toggleProjectBreakdown(event, projectId) {
    // Don't toggle if clicking the play button or a link
    if (event.target.classList.contains('play-btn') || 
        event.target.closest('.play-btn') ||
        event.target.tagName === 'A') {
        return;
    }

    event.preventDefault();
    event.stopPropagation();

    const button = event.target;
    const projectCard = button.closest('.project-card');
    if (!projectCard) return;

    const breakdownDiv = document.getElementById(projectId + '-breakdown');
    const isExpanded = projectCard.classList.contains('expanded');

    if (isExpanded) {
        // Collapse
        projectCard.classList.remove('expanded');
        breakdownDiv.style.display = 'none';
        const expandBtn = projectCard.querySelector('.expand-btn');
        if (expandBtn) {
            expandBtn.textContent = 'View Breakdown ↓';
        }
    } else {
        // Expand
        // First, close all other expanded projects
        document.querySelectorAll('.project-card.expanded').forEach(card => {
            card.classList.remove('expanded');
            const cardId = card.dataset.projectId;
            const cardBreakdown = document.getElementById(cardId + '-breakdown');
            if (cardBreakdown) {
                cardBreakdown.style.display = 'none';
            }
            const expandBtn = card.querySelector('.expand-btn');
            if (expandBtn) {
                expandBtn.textContent = 'View Breakdown ↓';
            }
        });

        // Expand this project
        projectCard.classList.add('expanded');
        breakdownDiv.style.display = 'block';
        const expandBtn = projectCard.querySelector('.expand-btn');
        if (expandBtn) {
            expandBtn.textContent = 'Hide Breakdown ↑';
        }

        // Scroll to the expanded card
        setTimeout(() => {
            projectCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

// ============ INITIALIZATION ============

/**
 * Initialize all interactive features on page load
 */
document.addEventListener('DOMContentLoaded', function () {
    initializeProjectGalleries();
    console.log('Portfolio website initialized successfully');
});

// ============ UTILITY FUNCTIONS ============

/**
 * Smooth scroll to section (used by navigation)
 * @param {String} sectionId - ID of section to scroll to
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {Boolean} - True if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Add fade-in animation to elements as they enter viewport
 * (Optional enhancement for future development)
 */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Uncomment the following to enable scroll animations
    // document.querySelectorAll('section').forEach(section => {
    //     section.style.opacity = '0';
    //     section.style.transform = 'translateY(20px)';
    //     section.style.transition = 'all 0.6s ease';
    //     observer.observe(section);
    // });
}

/**
 * Log browser console message
 * Useful for debugging and user feedback
 */
console.log('%cPortfolio of Evidence – MSc Technical Art & Visual Effects', 'color: #3498db; font-size: 16px; font-weight: bold;');
console.log('%cMade with vanilla HTML, CSS, and JavaScript', 'color: #ecf0f1; font-size: 12px;');
