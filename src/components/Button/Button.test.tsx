import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('buttonタグがレンダリングされる', () => {
    const label = 'LABEL'
    render(<Button label={label} onClick={() => alert('クリック')} bgcolor={'red'} />)
    const element = screen.getByRole('button')
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent(label)
  })
})
