import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const EjercicioComponent = ({year}) => {
  const [ yearNow, setYear ] = useState(year);
  const changeYear = (e, action) => {
    action == "last" ? setYear(yearNow - 1) : setYear(yearNow + 1);
  }

  const nextYear = e => {
    setYear(yearNow + 1)
  }

  const changeYearInput = e => {
    let yearValue = parseInt(e.target.value);
    Number.isInteger(yearValue) ? setYear(yearValue) : setYear(year);
  }

  return (
    <div>
      <h2>Ejercicio con Eventos y useState</h2>
      <button onClick={e => changeYear(e, "last")}>Last Year</button>
      &nbsp;
      <strong className='label label--green'>
        {yearNow}
      </strong>
      &nbsp;
      <button onClick={ nextYear }>Next Year</button>
      <br/>
      <p>Change year: <input placeholder='Enter the year' onChange={changeYearInput}/></p>
    </div>
  )
}

EjercicioComponent.propTypes = {
  year: PropTypes.number.isRequired
}
