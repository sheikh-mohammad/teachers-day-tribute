const slots = [
  { time: '07:40', what: 'The gate queue, a tie straightened by a stranger, the first bell.' },
  { time: '08:00', what: 'Assembly. You waited out the anthem before you said a word.' },
  { time: '10:20', what: 'The long second period, and the question you answered three ways.' },
  { time: '13:00', what: 'Lunch on your desk: our noise, your sandwich, your patience.' },
  { time: '15:30', what: 'The last bell. You stayed behind. You always stayed behind.' },
]

export function SchoolDay() {
  return (
    <section className="u-shell day" id="day">
      <div className="day__head">
        <p className="kicker">Happy Teachers&rsquo; Day</p>
        <h2 className="headline headline--section">The day we still know by heart.</h2>
        <p className="body">
          Nobody keeps the syllabus. Everybody keeps the timetable — the five minutes
          where a teacher decided the room was worth walking into.
        </p>
      </div>

      <ol className="day__list">
        {slots.map((slot) => (
          <li className="day__row" key={slot.time}>
            <span className="day__time">{slot.time}</span>
            <p className="day__what">{slot.what}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
