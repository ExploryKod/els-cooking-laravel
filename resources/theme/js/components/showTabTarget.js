export const showTabTarget = () => {
  const tabs = document.querySelectorAll('.project .js-tab-pill');

  function showTabContent(clickedTab) {
    const contents = document.querySelectorAll('.project .js-content__text');
    const tabId = clickedTab.getAttribute('data-tab');

    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    clickedTab.classList.add('active');

    contents.forEach(content => {
      const contentId = content.getAttribute('data-content');
      if (contentId === tabId) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => showTabContent(tab));
  });

  document.addEventListener('keydown', event => {
    const activeTab = document.querySelector('.project .js-tab-pill.active');
    const index = Array.from(tabs).indexOf(activeTab);

    if (event.key === 'ArrowRight') {
      const nextTab = tabs[(index + 1) % tabs.length];
      showTabContent(nextTab);
    } else if (event.key === 'ArrowLeft') {
      const prevTab = tabs[(index - 1 + tabs.length) % tabs.length];
      showTabContent(prevTab);
    }
  });
};

