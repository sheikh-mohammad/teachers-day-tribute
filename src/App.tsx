import { Nav } from './components/Nav'
import { Hero } from './sections/Hero'
import { Chapter } from './sections/Chapter'
import { Letter } from './sections/Letter'
import { Bloom } from './sections/Bloom'
import { Closing } from './sections/Closing'
import './app.css'

export default function App() {
  return (
    <>
      <Nav />

      <main id="top">
        <Hero />

        <Chapter
          id="cards"
          flip
          scene="cards"
          title="There are things we never said out loud."
          body="So we wrote them down, one per card, and left them face-down for a while. Turn them over when you have a minute — they are less awkward in writing."
          note="Hover, or tap a card to turn it."
        />

        <Bloom />

        <Letter />
      </main>

      <Closing />
    </>
  )
}