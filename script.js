function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const header = document.querySelector('header');

    sidebar.classList.toggle('active');
    header.classList.toggle('active'); // Add or remove 'active' class to header

    // Adjust the position of sidebar icon
    const navToggle = document.querySelector('.nav-toggle');
    if (sidebar.classList.contains('active')) {
        navToggle.style.left = '270px';
    } else {
        navToggle.style.left = '20px';
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        toggleSidebar();
    }
}