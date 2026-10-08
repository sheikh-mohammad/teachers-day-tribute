import { Nav } from './components/Nav'
import { Hero } from './sections/Hero'
import { Ribbon } from './sections/Ribbon'
import { Wishes } from './sections/Wishes'
import { Bloom } from './sections/Bloom'
import { SchoolDay } from './sections/SchoolDay'
import { Board } from './sections/Board'
import { ReportCard } from './sections/ReportCard'
import { Languages } from './sections/Languages'
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
        <SchoolDay />
        <Ribbon />
        <Board />
        <ReportCard />
        <Languages />
        <Letter />
      </main>

      <Closing />
    </>
  )
}