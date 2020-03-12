import React from 'react'

class Userow extends React.Component {
  render() {
    return(
        <div class="h-24 border-gray-400 border-b-2">
            <img src="images/default-user-300x300.png" class="rounded-full absolute w-16 ml-4 mt-4" alt="imagen usuario"/>
            <p class="font-serif text-gray-500 text-sm pl-24 pt-6">{this.props.name}</p>
            <p class="font-serif text-gray-800 text-lg pl-24">EFE-420-69</p>
            <p class="font-serif text-gray-900 text-xs pl-56 ">14:28</p>
            </div>
    )
  }
}
export default Userow