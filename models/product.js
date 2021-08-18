const fs = require('fs');
const path = require('path');

// const products = [];
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
    );

const getProductsFromFile = (cb) => {

    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
            return [];
        }
        return cb(JSON.parse(fileContent));
    })
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        // products.push(this);
 
        // const p = path.join(
        //     path.dirname(process.mainModule.filename),
        //     'data',
        //     'products.json'
        //     );
 
        // console.log('p', p);

        getProductsFromFile(products =>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
        // fs.readFile(p, (err, fileContent) => {
        //     // let products = [];
        //     // if(!err) {
        //     //     products = JSON.parse(fileContent);
        //     //     // console.log('err', err);
        //     //     // console.log('fileContent', fileContent);
        //     // }
        // })
    }

    static fetchAll(cb) {
        getProductsFromFile(cb)
        // return products;
    }
}