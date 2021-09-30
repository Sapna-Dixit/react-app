import React from 'react'

export default class User extends React.Component
{

    render()
    {
        console.warn("User component check rerendering")
        return(
            <div>
                <h1>User component{this.props.count}</h1>
                
            </div>
        )

    }
}