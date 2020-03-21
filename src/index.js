const markdown = require('markdown').markdown;
const content = require('./index.md');
document.getElementById('content').innerHTML = markdown.toHTML(content);
