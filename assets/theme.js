(() => {
  'use strict';
  const themes = {
    cream: { name: '素白留光', color: '#fcfdfc' },
    auspicious: { name: '吉祥如意', color: '#fffcfa' },
    golden: { name: '金币辉煌', color: '#fefcf8' }
  };
  const buttons = document.querySelectorAll('[data-theme-choice]');
  const screenshot = document.querySelector('#theme-screenshot');
  const artwork = document.querySelector('#hero-artwork');
  const status = document.querySelector('#theme-status');
  buttons.forEach(button => button.addEventListener('click', () => {
    const key = button.dataset.themeChoice;
    const theme = themes[key];
    if (!theme) return;
    document.documentElement.dataset.theme = key;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    if (artwork) { artwork.src = `assets/v10-art-${key}.png`; artwork.alt = `${theme.name}主题原创存钱插画`; }
    if (screenshot) { screenshot.src = `assets/v10-home-${key}.png`; screenshot.alt = `${theme.name}主题首页，2026年10月9日实际模拟器截图，使用演示数据`; }
    document.querySelector('meta[name="theme-color"]').setAttribute('content', theme.color);
    if (status) status.textContent = `已切换为${theme.name}主题。`;
  }));
})();
