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

  onChanges = e => {
    let user = {
      name: this.props.name,
      email: this.props.email,
      bio: this.props.bio
    }
    user[e.target.name] = e.target.value
    this.props.updateUserData(user)
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
              <input onChange={this.onChanges} value={name} type="text" name="name" id=""/>
            </p>
            <p>
              Tu email: 
              <input onChange={this.onChanges} value={email} type="email" name="email" id=""/>
            </p>
            <p>
              Tu Bio: 
              <input onChange={this.onChanges} value={bio} type="text" name="bio" id=""/>
            </p>
            
          </form>
          <button onClick={() => this.setState({editing: false})}>Guardar</button>
          <button onClick={this.props.removeUserData}>Borrar Registro</button>
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