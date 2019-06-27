import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import 'jest-dom/extend-expect'


import Dashboard from './Dashboard.js'

describe('the test suite for Dashboard component', () => {
    xit('should render the component', () => {
        render(<Dashboard />)
    })

    it('should render the strike button and change message on click', () => {
        const { getByText } = render(<Dashboard />)
        const strike = getByText(/strike/i)
        
        fireEvent.click(strike)
        getByText(/strike!!/i)
    })

    xit('should render the ball button and change message on click', () => {
        const { getByText } = render(<Dashboard />)
        const ball = getByText(/ball/i)
        
        fireEvent.click(ball)
        getByText(/ball!!/i)
    })

    xit('should render the foul button and change message on click', () => {
        const { getByText } = render(<Dashboard />)
        const foul = getByText(/foul/i)
        
        fireEvent.click(foul)
        getByText(/foul ball!!/i)
    })

    xit('should render the hit button and change message on click', () => {
        const { getByText } = render(<Dashboard />)
        const hit = getByText(/hit/i)
        
        fireEvent.click(foul)
        getByText(/hit!!/i)
    })





})