const WHITELIST = new Set([
  'BODY',
  'H1', 'H2', 'H3', 'H4', 'H5', 'H6',
  'UL', 'OL', 'LI',
  'TABLE', 'TR', 'TH', 'TD', 'TBODY', 'TFOOT',
  'STRONG', 'EM', 'B', 'I',
  'FORM', 'INPUT', 'LABEL',
  'DIV',
  'CENTER',
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

const OPEN_QUOTE = '“';
const CLOSE_QUOTE = '”';

function findWords(text) {
  const indices = [];
  const wordRegex = /[\w\’\'\-\,\.]+/g;
  let match;
  while (match = wordRegex.exec(text)) {
    indices.push([match.index, match.index + match[0].length]);
  }
  return indices;
}

function addQuotes(text, intensity) {
  // we iterate backwards so modifying the string doesn't mess up the indices
  const words = findWords(text).reverse();
  const threshold = intensity / 100;
  words.forEach(([start, end]) => {
    if (Math.random() < threshold) {
      text = text.slice(0, start) + OPEN_QUOTE + text.slice(start, end) + CLOSE_QUOTE + text.slice(end);
    }
  });
  return text;
}

function filterNodes(node) {
  if (WHITELIST.has(node.parentNode.tagName)) {
    return NodeFilter.FILTER_ACCEPT;
  } else {
    return NodeFilter.FILTER_REJECT;
  }
}

function traverseNodes(node, intensity) {
  const walker = document.createTreeWalker(
    node,
    NodeFilter.SHOW_TEXT,
    { acceptNode: filterNodes },
    false,
  );

  let curr;
  while ((curr = walker.nextNode())) {
    curr.nodeValue = addQuotes(curr.nodeValue, intensity);
  }
}

loadSettings((settings) => {
  if (!settings.paused) {
    traverseNodes(document.body, settings.intensity);
  }
});
