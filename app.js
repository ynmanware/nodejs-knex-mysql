const productService = require('./src/service/ProductService');

productService.get().then((result) => {
    console.info(result);
});
