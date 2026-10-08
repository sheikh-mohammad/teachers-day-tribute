type Phrase = {
  code: string
  name: string
  text: string
  lead?: boolean
}

const phrases: Phrase[] = [
  { code: 'en', name: 'English', text: 'Happy Teachers’ Day', lead: true },
  { code: 'hi', name: 'हिन्दी', text: 'शिक्षक दिवस की शुभकामनाएँ' },
  { code: 'ur', name: 'اردو', text: 'استاد دن مبارک' },
  { code: 'ar', name: 'العربية', text: 'عيد المعلم سعيد' },
  { code: 'bn', name: 'বাংলা', text: 'শিক্ষক দিবসের শুভেচ্ছা' },
  { code: 'es', name: 'Español', text: 'Feliz Día del Maestro' },
  { code: 'fr', name: 'Français', text: 'Bonne Fête des enseignants' },
  { code: 'de', name: 'Deutsch', text: 'Alles Gute zum Lehrertag' },
  { code: 'pt', name: 'Português', text: 'Feliz Dia do Professor' },
  { code: 'it', name: 'Italiano', text: 'Buona festa degli insegnanti' },
]

export function Languages() {
  return (
    <section className="u-shell lang" id="languages">
      <div className="lang__head">
        <p className="kicker">Happy Teachers&rsquo; Day</p>
        <h2 className="headline headline--section">Three words, every classroom.</h2>
        <p className="body">
          Say it in the language you were taught in. It lands exactly the same.
        </p>
      </div>

      <ul className="lang__grid">
        {phrases.map((phrase) => (
          <li className="lang__cell" key={phrase.code}>
            <p
              className={`lang__phrase${phrase.lead ? ' lang__phrase--lead' : ''}`}
              lang={phrase.code}
            >
              {phrase.text}
            </p>
            <p className="lang__name" lang={phrase.code}>
              {phrase.name}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
