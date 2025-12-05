import { describe, it, expect } from 'vitest'; 
import titleCase from '../helper/titleCase';

describe('titleCase', () => {
    it('debe retornar un string', () => {   
        // Compruebo si la ejecución de la función titleCase pasándole cualquier
        // valor de string me devuelve un string
        const result = titleCase('Un valor');
        expect(typeof result).toBe('string');
    });

    it('debe retornar el string transformado', () => {
        const result = titleCase('es una string chiquitita');
        expect(result).toBe('Es Una String Chiquitita');
    });

    it('debe retornar un string vacío si recibe un string vacío', () => {
        const result = titleCase('');
        expect(result).toBe('');
    });
});