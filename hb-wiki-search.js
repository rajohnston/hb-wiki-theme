/* HB Wiki — In-page search (highlight + scroll)
   Used on individual report pages.
   Central source: github.com/rajohnston/hb-wiki-theme */

(function() {
  var input = document.getElementById('page-search');
  if (!input) return;
  var article = document.querySelector('.report');
  if (!article) return;
  var original = null;

  input.addEventListener('input', function() {
    var query = input.value.trim();

    // Restore before re-highlighting
    if (original !== null) {
      article.querySelectorAll('mark[data-hb-search]').forEach(function(m) {
        m.replaceWith(m.textContent);
      });
      article.normalize();
    }

    if (!query) { original = null; return; }
    original = true;

    var walker = document.createTreeWalker(article, NodeFilter.SHOW_TEXT);
    var matches = [];
    var node;
    var re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');

    while (node = walker.nextNode()) {
      if (node.parentElement.closest('script, style, .nav-search')) continue;
      if (re.test(node.textContent)) matches.push(node);
    }

    matches.forEach(function(textNode) {
      var parts = textNode.textContent.split(re);
      if (parts.length <= 1) return;
      var frag = document.createDocumentFragment();
      parts.forEach(function(part) {
        if (re.test(part)) {
          var mark = document.createElement('mark');
          mark.setAttribute('data-hb-search', '');
          mark.style.background = 'color-mix(in srgb, var(--accent) 25%, transparent)';
          mark.style.color = 'inherit';
          mark.style.padding = '1px 3px';
          mark.style.borderRadius = '3px';
          mark.textContent = part;
          frag.appendChild(mark);
        } else {
          frag.appendChild(document.createTextNode(part));
        }
      });
      textNode.parentNode.replaceChild(frag, textNode);
    });

    var first = article.querySelector('mark[data-hb-search]');
    if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
})();
