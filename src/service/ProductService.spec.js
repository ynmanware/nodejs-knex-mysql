const productService = require('./ProductService');
const {connectionRelease} = require('./KnexService');

describe('products', () => {
    it('should return all products from the Products table without any error', async () => {
        try {
            const result = await productService.get();
            console.log(result);
        } catch (e) {
            //console.error(e);
            expect(true).toBe(false);
        }
    });

    it.skip('should add a product to the table', async () => {
        try {
            const result = await productService.insert({
                productCode: 'GEC',
                name: 'Pencil 2G',
                quantity: 4000,
                price: 0.87
            });
            console.log(result[0]);
        } catch (e) {
            //console.error(e);
            expect(true).toBe(false);
        }
    });

    it.skip('should delete a product from the table', async () => {
        try {
            const result = await productService.del(1019);
            console.log(result);
        } catch (e) {
            //console.error(e);
            expect(true).toBe(false);
        }
    });


    it.skip('should update a product from the table', async () => {
        try {
            const result = await productService.update(1018, {name: 'for test'});
            console.log(result);
        } catch (e) {
            //console.error(e);
            expect(true).toBe(false);
        }
    });


    afterAll(() => {
        connectionRelease();
    })
});
