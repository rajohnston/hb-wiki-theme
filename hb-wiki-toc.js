/* HB Wiki — Auto-generated Table of Contents
   Builds a collapsible TOC from h2/h3 headings in .report article.
   Central source: github.com/rajohnston/hb-wiki-theme */

(function() {
  var article = document.querySelector('.report');
  var tocNav = document.getElementById('toc-nav');
  if (!article || !tocNav) return;
  var headings = article.querySelectorAll('h2, h3');
  if (headings.length === 0) {
    var toc = document.getElementById('toc');
    if (toc) toc.style.display = 'none';
    return;
  }
  var list = document.createElement('ul');
  headings.forEach(function(h, i) {
    if (!h.id) h.id = 'section-' + i;
    var li = document.createElement('li');
    if (h.tagName === 'H3') li.style.paddingLeft = '1em';
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    li.appendChild(a);
    list.appendChild(li);
  });
  tocNav.appendChild(list);
})();
