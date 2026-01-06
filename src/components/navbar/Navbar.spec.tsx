import { describe, expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { Navbar } from './Navbar'

describe('NavBar test suite', () => {
  test('should display page title', async () => {
    const screen = await render(<Navbar />)

    const navTitle = screen.getByText(/ui vault/i)

    await expect.element(navTitle).toBeInTheDocument()
  })
})
