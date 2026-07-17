const fs = require('fs');
let code = fs.readFileSync('packages.json', 'utf8');

code = code.replace(/"variant"/, '"variant",\n        "js-bigints",\n        "js-date",\n        "yoga-tree"');

fs.writeFileSync('packages.json', code);
