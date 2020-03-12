import React from 'react'
import Carsrow from './Carsrow'

class Carslist extends React.Component {
  render() {
    return (
        <div id="info" class="overflow-scroll w-full h-full inline-block border-2 border-gray-400">
        {
          this.props.listado.map((car) => {
            return <Carsrow plates={ car.plates }
                            car={ car.carModel }
                            color={ car.color }
                            id={ car._id }
            />
          })
        }
      </div>
    )
  }
}
export default Carslist