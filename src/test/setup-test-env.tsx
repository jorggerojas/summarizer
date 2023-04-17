/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import React, { ReactElement } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { toHaveNoViolations, configureAxe } from 'jest-axe'

const AllTheProviders = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  return <>{children}</>
}

const jestAxe = configureAxe({
  impactLevels: ['critical', 'serious', 'moderate']
})

const Render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult<typeof import('../../node_modules/@testing-library/dom/types/queries'), HTMLElement, HTMLElement> => render(ui, { wrapper: AllTheProviders, ...options })

expect.extend(toHaveNoViolations)

export * from '@testing-library/react'
export { Render }
export { jestAxe as axe }
