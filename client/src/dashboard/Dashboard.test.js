import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import 'jest-dom/extend-expect'


import Dashboard from './Dashboard.js'

describe('the test suite for Dashboard component', () => {
    it('should render the component', () => {
        render(<Dashboard />)
    })
})