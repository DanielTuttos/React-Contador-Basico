import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas para el counter app', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);

    });

    test('debe de mostrar <CounterApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar el valor por defecto de 100', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value} />);

        const valor = wrapper.find('p').text();

        expect(Number(valor)).toBe(value);
    });

    test('debe de incrementar con el boton de +1', () => {

        wrapper.find('button').at(0).simulate('click');

        const valor = wrapper.find('p').text();

        expect(valor).toBe('11');

    });

    test('debe de decrementar con el boton de -1', () => {

        wrapper.find('button').at(2).simulate('click');

        const valor = wrapper.find('p').text();

        expect(valor).toBe('9');

    });

    test('debe de resetear el valor por defecto con el btn reset', () => {
        const value = 115;
        const wrapper = shallow(<CounterApp value={value} />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const valor = wrapper.find('p').text();

        // console.log(valor);
expect(valor).toBe(`${value}`)
    });




});
