const WHITELIST = new Set([
  'BODY',
  'H1', 'H2', 'H3', 'H4', 'H5', 'H6',
  'UL', 'OL', 'LI',
  'TABLE', 'TR', 'TH', 'TD',
  'STRONG', 'EM', 'B', 'I',
  'FORM', 'INPUT', 'LABEL',
  'DIV',
  'SPAN',
  'P',
  'A',
  'BUTTON',
  'ARTICLE',
  'ASIDE',
  'CITE',
  'DETAILS',
  'FIGCAPTION',
  'FOOTER',
  'HEADER',
  'MAIN',
  'MARK',
  'NAV',
  'SECTION',
  'SUMMARY',
  'TIME',
]);

function injectQuotes(node) {
  console.log(node.nodeValue);
}

function traverseNodes(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    if (node.nodeValue && node.nodeValue.trim().length > 1) {
      injectQuotes(node);
    }
  } else {
    if (node.tagName && !WHITELIST.has(node.tagName)) {
      return;
    }
    for (let i = 0; i < node.childNodes.length; i++) {
      traverseNodes(node.childNodes[i]);
    }
  }
}

traverseNodes(document.body);
