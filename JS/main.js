// JavaScriptの記述例
document.addEventListener("DOMContentLoaded", function() {
  // 例: ナビゲーションのリンクをクリックした際にスムーススクロールする
  const navLinks = document.querySelectorAll(".header-nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });
});
