(function() {
    var isClosed = localStorage.getItem('helpUA-closed');
    if (isClosed) return;

    var node = document.createElement('iframe');
    node.id = 'helpua-frame'
    node.src = 'http://volunteer.terapiya.space/assets/footer.html';
    node.width = '100%';
    node.height = '48px';
    node.style = `position: fixed;
                  bottom: 0;
                  height: 48px;
                  border: none;
                  z-index: 10000;
                  @media screen and (max-width: 742px) {
                      #helpua-frame { height: 92px; }
                  }`
    document.body.appendChild(node);
})();