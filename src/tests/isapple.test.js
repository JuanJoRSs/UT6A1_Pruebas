import { describe, it, expect } from 'vitest';
import isapple from '../helper/isapple';

describe('isapple', () => {
    // I. Comprobar que la función devuelva un resultado de tipo boolean
    it('debe devolver un resultado de tipo boolean', () => {
        const result = isapple('manzana');
        expect(typeof result).toBe('boolean');
    });

    // II. Comprobar que si entra la string manzana devuelve true
    it('debe devolver true si entra la string manzana', () => {
        const result = isapple('manzana');
        expect(result).toBe(true);
    });

    // III. Comprobar que si entra una string que no sea manzana devuelve false
    it('debe devolver false si entra una string que no sea manzana', () => {
        const result = isapple('pera');
        expect(result).toBe(false);
    });
});