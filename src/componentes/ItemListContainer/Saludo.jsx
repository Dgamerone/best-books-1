import React, {Fragment} from 'react'

const Saludo = ({saludos}) => {


  return (
    <Fragment>
    <h3 className='mensaje'>{saludos.mensaje}</h3>
    <h5 className='promocion'>{saludos.promocion}</h5>

    </Fragment>
   
  )
}

export default Saludo