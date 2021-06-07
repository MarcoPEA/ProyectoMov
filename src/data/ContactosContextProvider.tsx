import React, { useState } from 'react';
import ContactosContext, { Contacto, ContactoContextModel } from './contacto-context';


const ContactosContextProvider: React.FC = (props) => {

    const [contactos, setcontactos] = useState<Contacto[]>([
        {
            id: Math.random.toString(),
            nombre: 'marco',
            direccion: 'Chihuahua',
            sexo: 'Hombre',
            isCompleted: false
        },
        {
            id: Math.random.toString(),
            nombre: 'mario',
            direccion: 'otro',
            sexo: 'Hombre',
            isCompleted: false
        }
    ]);

    const addContacto = (nombre: string, direccion: string, sexo: string) => {
        const newContacto: Contacto = {
            id: Math.random.toString(),
            nombre,
            direccion,
            sexo,
            isCompleted: false
        };

        setcontactos(currContactos => {
            return [...currContactos, newContacto]
        })
    };
    const completeActivity = (contactoId: string) => {
        setcontactos(currContactos => {
            const updatedContactos = [...currContactos];
            const selectedContactoIndex = contactos.findIndex(act => act.id === contactoId);
            const updatedActivity = {...updatedContactos[selectedContactoIndex], isCompleted: true};
            updatedContactos[selectedContactoIndex] = updatedActivity;
            return updatedContactos;
        });
    };
    const contactosContext: ContactoContextModel = {
        contactos,
        addContacto,
        completeActivity
    };
    return(<ContactosContext.Provider value={contactosContext}>
        {props.children}
    </ContactosContext.Provider>);
};
export default ContactosContextProvider;
