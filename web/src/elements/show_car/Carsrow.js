import React from 'react'

class Carsrow extends React.Component {
  render() {
    return(
        <div class="h-16 border-gray-400 border-b-2 pl-5">
          <div class="absolute">
            <p class="font-serif text-gray-500 text-sm pt-2">{this.props.car}</p>
            <p class="font-serif text-gray-200 text-lg ">{this.props.plates}</p>
          </div>
            <button class="font-serif text-xl text-white float-right mt-4 mr-10 outline none">X</button>
        </div>
    )
  }
}
export default Carsrow