(() => {
  'use strict';
  const themes = {
    gold: { name: '黄金大亨', color: '#fff9e9' },
    cream: { name: '奶油极简', color: '#f7f3ed' },
    candy: { name: '糖果小镇', color: '#fff0f6' },
    forest: { name: '森林储蓄屋', color: '#eff5e8' },
    star: { name: '星光梦想城', color: '#101a37' }
  };
  const buttons = document.querySelectorAll('[data-theme-choice]');
  const screenshot = document.querySelector('#theme-screenshot');
  const artwork = document.querySelector('#hero-artwork');
  const status = document.querySelector('#theme-status');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const key = button.dataset.themeChoice;
      const theme = themes[key];
      if (!theme) return;
      document.documentElement.dataset.theme = key;
      buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      if (artwork) { artwork.src = `assets/art-${key}.png`; artwork.alt = `${theme.name}原创小镇与存钱吉祥物插画`; }
      if (screenshot) { screenshot.src = `assets/home-${key}.png`; screenshot.alt = `${theme.name}主题首页，实际 iPhone 模拟器截图，使用演示账单数据`; }
      document.querySelector('meta[name="theme-color"]').setAttribute('content', theme.color);
      if (status) status.textContent = `已切换为${theme.name}主题。配色与实际应用截图已更新。`;
    });
  });
})();
