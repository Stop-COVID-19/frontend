const markdown = require('markdown').markdown;
const content = require('./index.md');
console.log('the content, required from markdown', content);
const convertedContent = markdown.toHTML(content);
console.log('the content, converted from markdown', convertedContent);
document.getElementById('content').innerHTML = convertedContent;
