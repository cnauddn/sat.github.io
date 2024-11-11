// 스크롤 이벤트 처리
window.addEventListener('scroll', () => {
    const posts = document.querySelectorAll('.post-card');
    
    posts.forEach(post => {
        const postTop = post.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (postTop < windowHeight * 0.8) {
            post.style.opacity = '1';
            post.style.transform = 'translateY(0)';
        }
    });
});

// 네비게이션 스무스 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
