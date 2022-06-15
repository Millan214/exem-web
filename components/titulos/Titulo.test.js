import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Titulo from './Titulo'

test('prueba de renderizado', () => {
    const component = render( <Titulo>pepe</Titulo> )
    component.getByText('pepe')
})

