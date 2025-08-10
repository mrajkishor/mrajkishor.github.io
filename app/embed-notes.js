// embed-notes.js
const fs = require('fs-extra');
const path = require('path');

const src = path.join(__dirname, 'notes', 'build');
const dest = path.join(__dirname, 'public', 'notes');

(async () => {
    try {
        await fs.remove(dest); // clean old
        await fs.copy(src, dest);
        console.log('✅ Notes app copied to /public/notes');
    } catch (err) {
        console.error('❌ Failed to copy notes build:', err);
    }
})();
