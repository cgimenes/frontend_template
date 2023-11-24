import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from "../src/app/page"

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByText('Get started by editing')

    expect(heading).toBeInTheDocument()
  })
})