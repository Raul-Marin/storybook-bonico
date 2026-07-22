import { Button } from './components/Button'

export default function App() {
  return (
    <main className="app">
      <h1>Bonico</h1>
      <p>Button from Figma · Storybook</p>
      <div className="app__row">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </main>
  )
}
