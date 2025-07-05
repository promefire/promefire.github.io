<link rel="stylesheet" class="aplayer-secondary-style-marker" href="/assets/css/APlayer.min.css"><script src="/assets/js/APlayer.min.js" class="aplayer-secondary-script-marker"></script>// 在主题的footer注入脚本
document.querySelectorAll('.timeline-title').forEach(title => {
    title.addEventListener('click', function() {
      const card = this.closest('.timeline-card');
      card.classList.toggle('toggle-active');
      
      // 自动关闭其他展开项
      document.querySelectorAll('.timeline-card').forEach(item => {
        if(item !== card) item.classList.remove('toggle-active');
      });
    });
  });