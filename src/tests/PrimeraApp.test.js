import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimerApp';


describe('Puebas en <PrimeraApp />', () => {
    // test('demostrar el mensaje "Hola, soy Daniel"', () => {
    //     const saludo = 'Hola, soy Daniel';

    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);

    //     expect(getByText(saludo)).toBeInTheDocument();
    // });

    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, soy Daniel';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();

    });

    test('debe enviar el subtitulo enviado por props', () => {
        const saludo = 'Hola, soy Daniel';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();

        // console.log(textoParrafo);

        expect(textoParrafo).toBe(subtitulo);

    });



});
