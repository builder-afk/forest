const https = require('https');
const fs = require('fs');
const path = require('path');

const flavors = [
  { id: 'chocolate', url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&auto=format&fit=crop&q=80' },
  { id: 'coffee', url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80' },
  { id: 'vanilla', url: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&auto=format&fit=crop&q=80' },
  { id: 'rasmalai', url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80' },
  { id: 'kesar-pista', url: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80' },
  { id: 'malai-kulfi', url: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?w=600&auto=format&fit=crop&q=80' },
  { id: 'cookies-cream', url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80' },
  { id: 'butterscotch', url: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&auto=format&fit=crop&q=80' },
  { id: 'mango', url: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&auto=format&fit=crop&q=80' },
  { id: 'caramel', url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&auto=format&fit=crop&q=80' },
  { id: 'strawberry', url: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&auto=format&fit=crop&q=80' },
  { id: 'blueberry', url: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&auto=format&fit=crop&q=80' },
];

const destDir = path.join(__dirname, 'public/images/flavors');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

function download(item) {
  return new Promise((resolve) => {
    const dest = path.join(destDir, `${item.id}.jpg`);
    const file = fs.createWriteStream(dest);
    https.get(item.url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        https.get(res.headers.location, (redirRes) => {
          redirRes.pipe(file);
          file.on('finish', () => { file.close(); console.log(`✓ ${item.id}`); resolve(); });
        });
      } else {
        res.pipe(file);
        file.on('finish', () => { file.close(); console.log(`✓ ${item.id}`); resolve(); });
      }
    }).on('error', (err) => {
      console.error(`✗ ${item.id}:`, err.message);
      resolve();
    });
  });
}

(async () => {
  for (const f of flavors) {
    await download(f);
  }
  console.log('All downloads done!');
})();
