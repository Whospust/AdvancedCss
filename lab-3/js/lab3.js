document.addEventListener('DOMContentLoaded', () => {
    // Select all the tab links and all the tab panels
    const tabs = document.querySelectorAll('.tabs li[role="tab"] a');
    const tabPanels = document.querySelectorAll('.tabs div[role="tabpanel"]');

    // Set the first tab and panel as active by default when the page loads
    if (tabs.length > 0) {
        tabs[0].parentElement.classList.add('active');
        tabPanels[0].classList.add('active');
    }

    //Loop through each tab link to add a click event listener
    tabs.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent the default anchor link behavior (jumping to the top of the page)
            e.preventDefault();

            // Remove the 'active' class from ALL tabs and ALL panels
            tabs.forEach(t => t.parentElement.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            // Add the 'active' class to the specific tab that was just clicked
            this.parentElement.classList.add('active');

            //Get the href attribute to find the matching panel
            const targetId = this.getAttribute('href');
            const targetPanel = document.querySelector(targetId);

            // Add the 'active' class to that specific matching panel
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
});