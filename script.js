document.addEventListener('DOMContentLoaded', function() {
    const adminControls = document.getElementById('admin-controls');
    const healthBar = document.getElementById('health');
    let health = 100;

    // 簡單的權限管理示例
    const isAdmin = prompt('請輸入訪問密碼:') === 'admin';

    if (isAdmin) {
        adminControls.style.display = 'block';
        adminControls.addEventListener('click', function() {
            health -= 10;
            if (health < 0) health = 0;
            healthBar.style.width = health + '%';
        });
    }
});