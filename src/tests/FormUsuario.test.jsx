import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; 
import { describe, test, expect } from "vitest";
import FormUsuario from "../components/FormUsuario"; 

describe('FormUsuario componente', () => {

    // a) Comprueba que se renderiza el botón
    test('el botón se encuentra en el documento', () => {
        render(<FormUsuario />);
        // Buscamos el botón por su texto "Submit" (según tu código)
        const button = screen.getByRole('button', { name: /submit/i });
        expect(button).toBeInTheDocument();
    });

    // b) Comprueba que se renderiza el campo de texto
    test('el campo de texto se encuentra en el documento', () => {
        render(<FormUsuario />);
        // En MUI, los TextField se encuentran por su Label ("Nombre")
        const textField = screen.getByLabelText(/nombre/i);
        expect(textField).toBeInTheDocument();
    });

    // c) Comprueba que se renderiza la cabecera de nivel 2
    test('la cabecera h2 se encuentra en el documento', () => {
        render(<FormUsuario />);
        // Buscamos un encabezado (heading) de nivel 2
        const header = screen.getByRole('heading', { level: 2, name: /rellena el formulario/i });
        expect(header).toBeInTheDocument();
    });

    // d) Comprueba la interacción: Escribir -> Click -> Borrar
    test('al escribir el nombre y pulsar el botón el campo de texto se borra', async () => {
        // 1. Inicializar el userevent
        const user = userEvent.setup();
        
        render(<FormUsuario />);
        
        // Localizamos los elementos
        const textField = screen.getByLabelText(/nombre/i);
        const button = screen.getByRole('button', { name: /submit/i });

        // 2. Simular que el usuario borra el campo (por si acaso tuviera algo)
        await user.clear(textField);

        // 3. Simular que el usuario escribe su nombre
        await user.type(textField, 'Mi Nombre');
        
        // (Opcional: Comprobamos que se ha escrito correctamente antes de borrar)
        expect(textField).toHaveValue('Mi Nombre');

        // 4. Simular que el usuario pica el botón
        await user.click(button);

        // Resultado esperado: El campo debe estar vacío de nuevo
        expect(textField).toHaveValue('');
    });
});