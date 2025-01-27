import { describe, expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { Sidebar } from './Sidebar'

describe('Sidebar:', () => {
  test('should display proper content', async () => {
    const screen = await render(<Sidebar />)

    const content = screen.getByText(/sidebar item/i)

    await expect.element(content).toBeInTheDocument()
  })
})
