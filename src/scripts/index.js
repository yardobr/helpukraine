(function() {
    var isClosed = localStorage.getItem('helpUA-closed');
    if (isClosed) return;

    var node = document.createElement('iframe');
    node.src = 'https://cdn.jsdelivr.net/gh/yardobr/helpukraine@0.0.1/src/templates/footer.html';
    node.width = '100%';
    node.height = '48px';
    node.style = 'position:fixed; bottom: 0; height: 48px; border: none;z-index: 10000;'
    document.body.appendChild(node);
})();