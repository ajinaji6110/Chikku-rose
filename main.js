window.onload = () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('I LOVE U Sothe..').split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 300ms delay
      }
    }

    appendTitle();

    // Second title animation
    setTimeout(() => {
      const titles2 = ('Ajwwwnn want to tell a paragraph. Tap to see. ').split('');
      const titleElement2 = document.getElementById('title2');
      let index2 = 0;

      function appendTitle2() {
        if (index2 < titles2.length) {
          titleElement2.innerHTML += titles2[index2]; // Fixed element reference
          index2++;
          setTimeout(appendTitle2, 100); // 300ms delay
        }
      }

      appendTitle2();
    }, titles.length * 200 + 1000); // Start after first animation completes
  }, 1000);
};
