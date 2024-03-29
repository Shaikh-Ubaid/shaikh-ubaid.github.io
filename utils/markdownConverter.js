import { marked } from 'marked';
import hljs from 'highlight.js';
import DOMPurify from 'isomorphic-dompurify';

// Set options
// `highlight` example uses https://highlightjs.org
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

const mdConverter = (markdown) => DOMPurify.sanitize(marked.parse(markdown));
export default mdConverter;
