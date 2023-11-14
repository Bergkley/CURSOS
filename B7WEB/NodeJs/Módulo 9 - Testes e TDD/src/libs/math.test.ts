import {Math} from './Math';

describe('Testing Math library', () => {
    test('should sum two number correctly', () => {
        const response = Math.sum(5,10);
        expect(response).toBe(15)
    });
    
    test('should subtract two number correctly', () => {
        const response = Math.sub(4,2);
        expect(response).toBe(2)
    });
    
    test('should multiply two number correctly', () => {
        const response = Math.mut(5,10);
        expect(response).toBe(50)
    
        const response2 = Math.mut(0,3);
        expect(response2).toBe(0)
    });
    
    test('should sum two number correctly', () => {
        const response = Math.sum(5,10);
        expect(response).toBe(15)
    });
    
    test('should sum two number correctly', () => {
        const response = Math.div(10,2);
        expect(response).toBe(5)
    });
})
