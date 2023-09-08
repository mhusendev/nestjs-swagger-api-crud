const fs = require('fs');
const files = ['node_modules/@nestjsx/crud/lib/decorators/parsed-request.decorator.js', 'node_modules/@nestjsx/crud/lib/crud/reflection.helper.js'];
fs.writeFileSync(files[0], fs.readFileSync(files[0]).toString().replace(/return req\[([^\]]*)]/, 'return req.switchToHttp().getRequest()[$1]'));
fs.writeFileSync(files[1], fs.readFileSync(files[1]).toString().replace('req[paramtype]', 'req.switchToHttp().getRequest()[paramtype]'));