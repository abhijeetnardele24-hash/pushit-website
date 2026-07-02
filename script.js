document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Theme Toggle Logic
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  // Check for saved theme in localStorage
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      
      // Save user preference
      let theme = 'dark';
      if (document.body.classList.contains('light-theme')) {
        theme = 'light';
      }
      localStorage.setItem('theme', theme);
    });
  }

  // 2. Copy to Clipboard Logic
  const copyBtn = document.getElementById('copy-btn');
  const commandText = "npm install -g pushit-cli";

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(commandText);
        
        // Visual feedback
        const iconContainer = copyBtn.querySelector('.copy-icon');
        const originalSvg = iconContainer.innerHTML;
        
        iconContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
        
        setTimeout(() => {
          iconContainer.innerHTML = originalSvg;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    });
  }
  
  // Note: Spotlight hover effect removed to favor strict, 
  // clean glassmorphism state transitions defined in CSS.
});
