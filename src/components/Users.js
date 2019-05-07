import React from 'react'
import {connect} from 'react-redux'


 function Users({users, fetched}) {
  return (
    <div>
      <h2>Lita de usuarios</h2>
      {!fetched && <img src="https://loading.io/spinners/typing/lg.-text-entering-comment-loader.gif" alt="" /> } 
      <ul>
        {fetched && users.map((item, index) => <img key={index} alt={index} src={item.image} />)}
      </ul>
    </div>
  )
}

//Así le pido la data a redux
function mapStateToProps(state) {
  //se encarga lo que hay en él store
  return {
    users: state.users.array,
    fetched: state.users.array.length > 1
  };
}


//Para que connect ponga todo en los props
export default connect(mapStateToProps)(Users);