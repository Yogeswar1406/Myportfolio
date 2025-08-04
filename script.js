const animatedElements = document.querySelectorAll('.fade-in, .fade-left, .fade-right');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // 👈 re-hide when out of view
    }
  });
}, {
  threshold: 0.1
});

animatedElements.forEach(el => {
  observer.observe(el);
});


function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.right = sidebar.style.right === '0px' ? '-250px' : '0px';
}

function closeSidebar() {
    document.getElementById('sidebar').style.right = '-250px';
}
