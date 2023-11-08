import React from 'react'

const TimerControl = ({onReset,timerOn, onStart, onStop, onLap}) => {
  return (
    <div className='timer-control'>
        {!timerOn && <button onClick={onStart}>Iniciar</button>}
        {timerOn && <button onClick={onStop}>Parar</button>}
        {timerOn && <button onClick={onLap}>Volta</button>}
        <button onClick={onReset}>Zerar</button>
    </div>
  )
}

export default TimerControl