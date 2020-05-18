import React from 'react';
import {withRouter} from 'react-router-dom';
import api from '../helpers/api'

class Users extends React.Component{

    state = {
        users: []
    }

    async componentDidMount(){
        try{
            const userList = await api.get('/users')
            this.setState({users: userList.data})
        } catch(err){
            console.log(err)
        }
    }

    render(){
        return(
            <div>
                {this.state.users.map((user, i) => {
                    return <div><p>{user.username} from {user.department}</p></div>
                })}
            </div>
        )
    }
}

export default withRouter(Users)