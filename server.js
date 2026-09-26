const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const MIME_TYPES = {
  '.zab': 'application/octet-stream',
  '.zip': 'application/zip',
  '.png': 'image/png',
  '.html': 'text/html',
  '.json': 'application/json'
};

const server = http.createServer((req, res) => {
  console.log('[' + new Date().toISOString() + '] ' + req.method + ' ' + req.url + ' User-Agent: ' + req.headers['user-agent']);

  let filePath = path.join(__dirname, req.url === '/' ? 'installer.html' : req.url.split('?')[0]);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
    return;
  }

  const stat = fs.statSync(filePath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  const headers = {
    'Content-Type': contentType,
    'Content-Length': stat.size,
    'Access-Control-Allow-Origin': '*',
    'Accept-Ranges': 'bytes',
    'Cache-Control': 'no-cache'
  };

  if (req.method === 'HEAD') {
    res.writeHead(200, headers);
    res.end();
    return;
  }

  res.writeHead(200, headers);
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('Watchface Local Server running at http://0.0.0.0:' + PORT + '/');
});
