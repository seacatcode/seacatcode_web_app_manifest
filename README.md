# seacatcode_web_app_manifest


### install
```
npm install --save git+https://github.com/seacatcode/seacatcode_web_app_manifest
```

### example (Nodejs)
```
const { WebAppManifest } = require('seacatcode_web_app_manifest');

const manifest = new WebAppManifest();
manifest.setName('seacatcode', 'ko', 'ltr');

console.log(String(manifest));
```

### example (Typescript)
```
import { WebAppManifest } from 'seacatcode_web_app_manifest';

const manifest = new WebAppManifest();
manifest.setName('seacatcode', 'ko', 'ltr');

console.log(String(manifest));
```

MIT License