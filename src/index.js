const markdown = require('markdown').markdown;
const content = require('./index.md');
console.log('the content, required from markdown', content);
document.getElementById('content').innerHTML = markdown.toHTML(content);
