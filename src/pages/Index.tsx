import React, { useState, useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonMenu, IonRouterOutlet, IonButton, IonGrid, IonRow, IonButtons, IonRadio, IonRadioGroup, IonListHeader, IonCheckbox } from '@ionic/react';
import ContactosContext from '../data/contacto-context';

export const Index: React.FC = () => {
    const history = useHistory();
    const ContactosCtxt = useContext(ContactosContext);
    //const [toastMsg, setToastMsg] = useState<string>('');

    const nombreInput = useRef<HTMLIonInputElement>(null);
    const direcionInput = useRef<HTMLIonInputElement>(null);
    const sexoInput = useRef<HTMLIonSegmentElement>(null);

    const addContacto = () => {
        const nombre = nombreInput.current?.value as string;
        const direccion = direcionInput.current?.value as string;
        const sexo = sexoInput.current?.value as string;
        if (nombre && direccion && sexo) {
            ContactosCtxt.addContacto(nombre, direccion, sexo);
            //setToastMsg('La actividad ha sido guardada');
            history.replace('/all-activities');
        }
    }

    // [Nombre, setNombre] = useState<string>();
    //const [Direc, setDirec] = useState<string>();
    const [selected, setSelected] = useState<number>();
    const [checked, setChecked] = useState(false);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>

                    <IonTitle>IonInput Examples</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItemDivider>Contactos</IonItemDivider>
                    <IonItem>
                        <IonLabel position="floating">Nombre: </IonLabel>
                        <IonInput ref={nombreInput}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Direccion: </IonLabel>
                        <IonInput ref={direcionInput}></IonInput>
                    </IonItem>
                    <IonRadioGroup value={sexoInput} >
                        <IonListHeader>
                            <IonLabel>Sexo</IonLabel>
                            <IonItem>
                                <IonLabel>Hombre</IonLabel>
                                <IonRadio slot="start" value="Hombre" />
                            </IonItem>
                            <IonItem>
                                <IonLabel>Mujer</IonLabel>
                                <IonRadio slot="start" value="Mujer" />
                            </IonItem>
                        </IonListHeader>
                    </IonRadioGroup>
                    <IonItem>
                        <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
                        <IonCheckbox checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
                        <IonItemDivider>Estudiante</IonItemDivider>

                    </IonItem>
                    <IonGrid>
                        <IonRow>
                            <IonButton color="success" onClick={addContacto}>Agregar</IonButton>
                            <IonButton color="danger">Cancelar</IonButton>
                        </IonRow>
                    </IonGrid>
                </IonList>
            </IonContent>
        </IonPage>
    );
};
export default Index;