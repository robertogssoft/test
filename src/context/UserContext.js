import React, {createContext, useState} from 'react';

let UserContext = createContext();
let {Provider, Consumer} = UserContext;

function UserProvider({children}) {
    let [user, setUser] = useState(null);

    function loginUser(us) {
        setUser(us);
    }

    function logoutUser() {
        setUser(null);
    }

    function descontar(monto) {
        let u = {...user};
        u.credito = parseFloat(u.credito) - parseFloat(monto);
        u.saldo = parseFloat(u.saldo) + parseFloat(monto);
        setUser(u);
    }

    return (
        <Provider value={{user, loginUser, logoutUser, descontar}}>
            {children}
        </Provider>
    );
}

export {UserProvider, Consumer as UserConsumer, UserContext}