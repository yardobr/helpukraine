(function () {
  var isClosed = localStorage.getItem('helpUA-closed');
  if (isClosed) return;

  let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(stateCheck);
      main();
    }
  }, 1000);

  function getHeight(matchesMedia) {
    return matchesMedia.matches ? '92px' : '48px';
  }

  function recalculateStyles(frame, placeholder) {
    matchesMedia = window.matchMedia('(max-width: 742px)');
    frame.style.height = getHeight(matchesMedia);
    placeholder.style.height = getHeight(matchesMedia);
  }

  function incrementVisits() {
    fetch('https://api.countapi.xyz/hit/helpukraine/visits')
      .catch(err => {
        console.error('Helpukraine: cannot increment counter');
      });
  }

  function main() {
    var matchesMedia = window.matchMedia('(max-width: 742px)');

    var frame = document.createElement('iframe');
    frame.id = 'helpua-frame'
    frame.src = 'https://betster.io/help-ua/footer.html';
    frame.width = '100%';
    frame.style = `
        position: fixed;
        bottom: 0;
        border: none;
        z-index: 10000;
    `;

    var placeholder = document.createElement('div');
    placeholder.id = 'helpua-placeholder';
    placeholder.style.height = getHeight(matchesMedia);

    recalculateStyles(frame, placeholder);

    window.onresize = function () { recalculateStyles(frame, placeholder) };

    document.body.appendChild(frame);
    document.body.appendChild(placeholder);

    incrementVisits();

    window.onmessage = function(e) {
      if (e.data == 'helpua-close') {
        helpuaClose();
      }
    }
  }

  function helpuaClose() {
    localStorage.setItem('helpUA-closed', true);
    document.querySelector('#helpua-frame').remove();
  }
})()
