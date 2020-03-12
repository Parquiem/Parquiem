import React from 'react'
import Carsrow from './Carsrow'

class Carslist extends React.Component {
  render() {
    return (
        <div id="info" class="overflow-scroll w-full h-full border-2 border-gray-400">
        {
          this.props.listado.map((car) => {
            return <Carsrow plates={ car.plates }
                            car={ car.carModel }
                            color={ car.color }
            />
          })
        }
      </div>
    )
  }
}
export default Carslist