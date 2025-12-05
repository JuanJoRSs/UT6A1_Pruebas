import { describe, it, expect } from 'vitest';
import divide from '../helper/divide';

describe('divide', () => {
    // I. Comprobar que el tipo que devuelve es un número
    it('debe devolver un resultado de tipo número', () => {
        const result = divide(10, 2);
        expect(typeof result).toBe('number');
    });

    // II. Comprobar que si entra una string te devuelve null
    it('debe devolver null si entra un string', () => {
        const result = divide("10", 2);
        expect(result).toBe(null);
    });

    // III. Comprobar que realiza la división de 10 y 2
    it('debe realizar la división de 10 y 2', () => {
        const result = divide(10, 2);
        expect(result).toBe(5);
    });

    // IV. Comprobar que realiza la división de 10 y 4
    it('debe realizar la división de 10 y 4', () => {
        const result = divide(10, 4);
        expect(result).toBe(2.5);
    });

    // V. Comprobar que la división de cualquier número y 0 te devuelve null
    it('debe devolver null si se divide por 0', () => {
        const result = divide(5, 0);
        expect(result).toBe(null);
    });
});