import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import TextBox2 from "../components/TextBox2"; 

describe('TextBox2 componente', () => {

    let box;
    let button;

    beforeEach(() => {
        render(<TextBox2 />); 
        // Buscamos la caja por su rol 'caja' (definido en tu componente)
        box = screen.getByRole('caja', { name: 'es una caja' });
        // Buscamos el botón por su nombre (texto visible)
        button = screen.getByRole('button', { name: 'Pulsa para modificar el color del texto' });
    });

    // i) Comprobar que se renderiza la caja
    it('la caja de texto se encuentra en el documento', () => {
        expect(box).toBeInTheDocument();
    });

    // ii) Comprobar que se renderiza el botón
    it('el botón se encuentra en el documento', () => {
        expect(button).toBeInTheDocument();
    });

    // Test opcional: Comprobar color inicial
    it('la caja tiene el color de texto inicial rosa', () => {
        // rgb(255, 192, 203) es el color rosa inicial
        expect(box).toHaveStyle({
            color: 'rgb(255, 192, 203)'
        });
    });

    // iii) Comprobar interacción: al picar cambia el color del TEXTO
    it('comprobar si al pulsar el botón cambia el color del texto', async () => {
        // Hacemos clic en el botón
        fireEvent.click(button);

        // Ahora el color del texto debe ser negro (rgb(0,0,0))
        expect(box).toHaveStyle({
            color: 'rgb(0, 0, 0)'
        });
    });
});