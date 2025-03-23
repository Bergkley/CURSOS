// Testes unitários


describe('UsersService', () => {
    it('should be define users service', () => {
        const numero1 = 150;
        const numero2 = 100;

        const conta = numero1 - numero2

        expect(conta).toBe(50);
        expect(conta).toBeGreaterThan(10);
    })
})