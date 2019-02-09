const productAddressService = require('./ProductAddressService');
const {connectionRelease} = require('./KnexService');

describe('update', () => {

    it.skip('should not throw error, should update both Products and Address table', async () => {
        const product = {
            productCode: 'CEG',
            name: 'Pencil 2B',
            quantity: 3300,
            price: 0.95
        };
        const address = {code: '3333', line1: '2/34 Chestnut', line2: 'Carnegie, VIC'};
        await productAddressService.updateProductAddress(product, address);
        expect(true).toBe(true);
    });

    it('should throw error and not update both Products and Address table', async () => {
        const product = {
            productCode: 'CEG',
            name: 'Pencil 2B',
            quantity: 3300,
            price: 0.95
        };
        const address = {code1: '3333', line1: '2/34 Chestnut', line2: 'Carnegie, VIC'};

        try {
            await productAddressService.updateProductAddress(product, address);
            expect('should not come at this point').toBe(true);
        } catch (e) {
            expect('should throw error').toBe('should throw error');
        }
    });

    afterAll(() => {
        connectionRelease();
    })
});
