import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Consumer } from '../../context'

class Contact extends Component {
    state={
            showContactInfo: false
        }
    
    async onDeleteClick(id, dispatch){
       await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

        dispatch({
            type:'DELETE_CONTACT',
            payload:id
        })

        
    }



    render() {
        
        const {id,name,email,phone} = this.props.contact
        const {showContactInfo}=this.state

        return (
            <Consumer>
                {value =>{
                    const {dispatch}=value
                    return(
                        <div className="card card-body mb-3">
                        <h3>{name} {' '}
                        <i 
                        onClick={()=>this.setState({
                         showContactInfo: !this.state.showContactInfo
                         })} 
                        className="fas fa-caret-down" style={{cursor:'pointer'}}/>


                        <i className="fas fa-times" style={{cursor: 'pointer', float:'right', color:'red'}} 
                        onClick={this.onDeleteClick.bind(this,id, dispatch)}
                        />

                        <Link to={`contact/edit/${id}`}>
                            <i 
                            className="fas fa-pencil-alt"
                            style={{
                                cursor : 'pointer',
                                float:'right',
                                color:'black',
                                marginRight:'1rem',
                            }}
                            ></i>
                        </Link>

                        </h3>
                        {showContactInfo ? ( <ul className="list-group">
                            <li className="list-group-item"> Email: {email}</li>
                            <li className="list-group-item">Phone: {phone}</li>
                        </ul>) : null}
                       
                    </div>
                    )
                }}
            </Consumer>
        )
    }
}
// Contact.defaultProps={
//     name : "John Doe",
//     email:"jdoe@gmail.com",
//     phone : "12345678"
// }

Contact.propTypes ={
    contact:PropTypes.object.isRequired
}
export default Contact
