const path=require('path')
console.log(path.join('a','b','c'))
console.log(path.normalize('/a//b////c'))
console.log(path.resolve('/a','\g','\j'))
console.log(path.relative('\a\b','\d\b\n'))