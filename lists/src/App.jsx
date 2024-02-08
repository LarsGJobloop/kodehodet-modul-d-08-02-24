import './App.css'
import { weekdays } from './data'
import { DayCard } from './components/DayCard/DayCard'

function App() {
  const filterList = weekdays.filter((day) => day.name.includes("ø"))

  return (
    <div>

      <div>
        {
          [
            (<section key={1}>1</section>),
            (<section key={2}>2</section>),
            (<section key={3}>3</section>),
            (<section key={4}>4</section>),
            (<section key={5}>5</section>),
          ]
        }
      </div>

      <DayCard primary data={{ id: 4, name: "Not A day" }} />
      <DayCard data={{ id: 4, name: "Not A day" }} />

      <ul>
        {filterList.map((day, index) => {
          return (
            <li key={day.name}>
              <DayCard primary={index % 2 === 0} data={day} />
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default App
