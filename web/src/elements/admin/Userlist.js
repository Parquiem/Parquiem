import React from 'react'
import Userow from './Userow'

class Userlist extends React.Component {
  render() {
    return (
        <div id="info" class="float-left border-r-2 border-gray-400 w-1/5 h-screen overflow-scroll inline-block pt-12 pb-5">
        {
          this.props.listado.map((usuario) => {
            return <Userow name={ usuario.name }
            />
          })
        }
      </div>
    )
  }
}
export default Userlist