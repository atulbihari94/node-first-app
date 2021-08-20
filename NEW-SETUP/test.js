const db = require('./util/database');
db.execute('SELECT * FROM wfabric.products')
.then((result) => {
console.log('result=>', result[0], result[1])
})
.catch((err) => {
console.log('err', err);
});