import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import 'jest-dom/extend-expect'

import Display from './Display.js';

describe('the test suite for Display component', () => {
    it('should render the component', () => {
        render(<Display />)
    })
})