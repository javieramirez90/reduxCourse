import React, { Component } from 'react'
import {connect} from 'react-redux'
import { updateUserData, removeUserData } from '../redux/actions/userActions'

class Profile extends Component{
  
    state = {
      name: "Xavier Ramírez",
      email: "hola@xavierramirez.dev",
      bio: "A darle loco perro!!!",
      editing: false

  }

  render(){
    let {editing} = this.state
    //consumir los props directamente es la forma correcta de hacerlo
    let {name, email, bio} = this.props
    return(
      <div>
        <section>
          <h2>Foto</h2>
        </section>
        { !editing ?
        <section>
        <h2>{name}</h2>
        <h3>{email}</h3>
        <p>{bio}</p>
        <button onClick={() => this.setState({editing: true})}>Editar</button>
      </section> :
        <section>
          <h2>Tus datos</h2>
          <form action="">
            <p>
              Tu nombre: 
              <input value={name} type="text" name="name" id=""/>
            </p>
            <p>
              Tu email: 
              <input value={email} type="email" name="email" id=""/>
            </p>
            <p>
              Tu Bio: 
              <input value={bio} type="text" name="bio" id=""/>
            </p>
            <button onClick={() => this.setState({editing: false})}>Guardar</button>
          </form>
        </section>
        }
        <section>
          <h2>Feed</h2>
        </section>
        
      </div>
    )
  }
}

// export default Profile

//Así le pido la data a redux
function mapStateToProps(state) {
  //se encarga lo que hay en él store
  return {
    name: state.users.current.name,
    email: state.users.current.email,
    bio: state.users.current.bio,
  };
}

let actions = {
  updateUserData, 
  removeUserData
}

//Para que connect ponga todo en los props
export default connect( mapStateToProps, actions)(Profile);