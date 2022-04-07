(function() {
    var node = document.createElement('iframe');
    node.src = 'https://storage.googleapis.com/helpua/footer.html';
    node.width = '100%';
    node.height = '48px';
    node.style = 'position:fixed; bottom: 0; height: 48px; border: none;'
    document.body.appendChild(node);
})();