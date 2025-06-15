document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }

    // Card hover effect enhancement
    const cards = document.querySelectorAll('.episode-card, .platform-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Video modal functionality
    const episodeCards = document.querySelectorAll('.episode-card');
    episodeCards.forEach(card => {
        card.addEventListener('click', function() {
            // In a real implementation, this would open a modal with the episode player
            alert('Now playing: ' + this.querySelector('h3').textContent);
        });
    });

    // Platform card interaction
    const platformCards = document.querySelectorAll('.platform-card');
    platformCards.forEach(card => {
        card.addEventListener('click', function() {
            const platform = this.querySelector('p').textContent;
            alert('Redirecting to ' + platform + ' to listen to The Weekend Podcast');
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(0, 0, 0, 0.9)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)';
                navbar.style.boxShadow = 'none';
            }
        });
    }

    // Search functionality
    const searchIcon = document.querySelector('.search-container i');
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            const searchInput = document.createElement('input');
            searchInput.type = 'text';
            searchInput.placeholder = 'Search episodes...';
            searchInput.classList.add('search-input');
            
            const searchContainer = this.parentElement;
            searchContainer.innerHTML = '';
            searchContainer.appendChild(searchInput);
            searchInput.focus();
            
            searchInput.addEventListener('blur', function() {
                searchContainer.innerHTML = '<i class="fas fa-search"></i>';
            });
            
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    alert('Searching for: ' + this.value);
                    // In a real implementation, this would filter episodes
                }
            });
        });
    }
});