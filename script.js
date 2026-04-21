// Navbar scroll effect
window.addEventListener('scroll', function() {
  document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 30);
});

// Booking Form Handling
document.addEventListener('DOMContentLoaded', function() {
  const bookingForm = document.getElementById('bookingForm');
  
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show success message
      const btn = bookingForm.querySelector('.btn-submit');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="bi bi-check-lg"></i> Sent Successfully!';
      btn.style.background = '#25D366';
      
      // Reset form after 2 seconds
      setTimeout(() => {
        bookingForm.reset();
        btn.innerHTML = originalText;
        btn.style.background = '';
      }, 2000);
    });
  }
  
  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
