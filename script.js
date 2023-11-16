// Function to toggle dark mode and change icon
        function toggleDarkMode() {
            const body = document.body;
            body.classList.toggle('dark-mode');

            // Save the user's preference to local storage for persistence
            const isDarkMode = body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);

            // Toggle between moon and sun icon based on dark mode status
            const darkModeToggle = document.getElementById('dark-mode-toggle');
            if (darkModeToggle) {
                const icon = darkModeToggle.querySelector('i');
                if (isDarkMode) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            }
        }

        // Function to load content or perform actions when the page loads
        function onPageLoad() {
            // Check if the user previously set dark mode preference and apply it
            const savedDarkMode = localStorage.getItem('darkMode');
            const body = document.body;
            if (savedDarkMode === 'true') {
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
            }

            // Additional initialization logic can be added here
            // Fetching data, setting up event listeners, etc.
        }

        const darkModeToggle = document.getElementById('dark-mode-toggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', toggleDarkMode);
        }

        // Call the onPageLoad function when the page loads
        onPageLoad();