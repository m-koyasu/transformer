// ページ内リンクなどのスムーススクロールなどを実装する例
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href').substr(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 70, // ヘッダー分調整
          behavior: 'smooth'
        });
      }
    });
  });
});
