type Mark = {
  subject: string
  note: string
  grade: string
}

const marks: Mark[] = [
  { subject: 'Patience', note: 'Never once made a slow question feel slow.', grade: 'A+' },
  { subject: 'Names', note: 'Ours, in the second week, before we earned it.', grade: 'A+' },
  { subject: 'Explaining', note: 'Three ways, until one of them landed.', grade: 'A+' },
  { subject: 'Fairness', note: 'Marked the work in front of you, not the mood.', grade: 'A' },
  { subject: 'Punctuality', note: 'Started on time. Stayed far past it.', grade: 'A+' },
  { subject: 'Sarcasm', note: 'Rare, dry, and always deserved.', grade: 'B' },
]

export function ReportCard() {
  return (
    <section className="u-shell report" id="report">
      <div className="report__head">
        <p className="kicker">Happy Teachers&rsquo; Day</p>
        <h2 className="headline headline--section">Our report card, written years late.</h2>
      </div>

      <div className="report__sheet">
        <p className="report__caption">Marked by everyone you taught</p>

        <table className="report__table">
          <tbody>
            {marks.map((mark) => (
              <tr key={mark.subject}>
                <th scope="row" className="report__subject">
                  {mark.subject}
                </th>
                <td className="report__note">{mark.note}</td>
                <td className="report__grade">{mark.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
