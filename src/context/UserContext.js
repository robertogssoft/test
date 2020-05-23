import React, {createContext, useState} from 'react';

let UserContext = createContext();
let {Provider, Consumer} = UserContext;

function UserProvider({children}) {
    const [user, setUser] = useState(null);
    const [credito, setCredito] = useState({
        id: 5,
        clientId: 8,
        monto: 30000,
        estatus: 'sin_solicitud',
    }); 

    function loginUser(us) {
        setUser(us);
    }

    function logoutUser() {
        setUser(null);
    }

    function cambiarEstatus(step) {
        let c = {...credito};

        c.estatus = step;
        setCredito(c);
    }

    function descontar(monto) {
        let u = {...user};
        let c = {...credito};

        if(u.id === c.clientId){
            u.saldo = parseFloat(u.saldo) + parseFloat(monto);
            c.monto = parseFloat(c.monto) - parseFloat(monto);
            c.estatus = 'dispersado';
            setCredito(c);
            setUser(u);
        }
    }

    return (
        <Provider value={{user, loginUser, logoutUser, descontar, credito, cambiarEstatus}}>
            {children}
        </Provider>
    );
}

export {UserProvider, Consumer as UserConsumer, UserContext}