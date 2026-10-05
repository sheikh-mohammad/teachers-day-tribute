import { Nav } from './components/Nav'
import { Hero } from './sections/Hero'
import { CardsChapter } from './sections/CardsChapter'
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
        <CardsChapter />
        <Bloom />
        <Letter />
      </main>

      <Closing />
    </>
  )
}