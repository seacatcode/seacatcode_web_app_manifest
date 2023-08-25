const { WebAppManifest } = require('../dist/index');

const manifest = new WebAppManifest();

// console.log(String(manifest));

manifest.setName('TestName');
manifest.setName('TestName', 'ko', 'ltr');

manifest.setShortName('Test');

manifest.appendIcon({
    src: '/android-chrome-192x192.png',
    sizes: '192x192',
    type: 'image/png'
});

manifest.appendIcon({
    src: '/android-chrome-512x512.png',
    sizes: '512x512',
    type: 'image/png'
});

manifest.setId('?source=pwa');

manifest.setStartUrl('/?source=pwa');

manifest.setThemeColor('#209CEE');

manifest.setBackgroundColor('#FFFFFF');

manifest.setDisplay('standalone');

manifest
    .appendDisplayOverride('standalone')
    .appendDisplayOverride('fullscreen')
    .appendDisplayOverride('minimal-ui')
    .appendDisplayOverride('browser')
    .appendDisplayOverride('window-controls-overlay');

manifest.setDescription('test description description description');

manifest.setOrientation('any');

manifest.appendScreenshots({
    "src": "screen_shot.png",
    "type": "image/png",
    "sizes": "1280x720",
    "form_factor": "wide"
});

console.log(String(manifest));