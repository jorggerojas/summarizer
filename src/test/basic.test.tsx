
import { render, axe } from '@test-utils'

describe('Accordion test', () => {
  test('Should work', () => {
    expect(true).toBe(true)
  })
  test('Should have no accessibility violations', async () => {
    const { container } = render(<div>Test</div>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
