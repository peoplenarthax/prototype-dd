import * as ReactDOM from 'react-dom'
import React, { useContext } from 'react'
import { AuthenticationContext, AuthenticationProvider } from './providers/authentication'

const Main = () => {
    const { user, authenticate } = useContext(AuthenticationContext)

    return (<main>
        <p>{user ? user.user.displayName : 'Nobody'}</p>
        <button onClick={authenticate}>Authenticate Me!</button>
        </main>)
}

ReactDOM.render(<AuthenticationProvider><Main /></AuthenticationProvider>
,  document.getElementById('app'))
