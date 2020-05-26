import React from 'react';


class UserForm extends React.Component{

    render(){
        return(
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name'/>
                <button class="ui blue basic button">Submit</button>
            </div>
        )
    }
}


export default UserForm;