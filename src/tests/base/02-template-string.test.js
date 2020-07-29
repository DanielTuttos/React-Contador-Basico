import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar Hola Daniel', () => {
        const nombre = 'Daniel';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);

    });

    // getSaludo debe de retornar Hola Carlos si no hay argumentos en nombre

    test('getSaludo sin enviar nombre debe de retornar Hola Carlos', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos');
    })



})