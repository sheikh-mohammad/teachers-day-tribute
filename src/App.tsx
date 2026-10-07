import { Nav } from './components/Nav'
import { Hero } from './sections/Hero'
import { Wishes } from './sections/Wishes'
import { Bloom } from './sections/Bloom'
import { Letter } from './sections/Letter'
import { Closing } from './sections/Closing'
import './app.css'

export default function App() {
  return (
    <>
      <Nav />

      <main id="top">
        <Hero />
        <Wishes />
        <Bloom />
        <Letter />
      </main>

      <Closing />
    </>
  )
}