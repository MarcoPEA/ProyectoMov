import React, { useState, useContext } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonSearchbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonButton, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ContactoContext, { Contacto } from '../../data/contacto-context';
import ContactosContext from '../../data/contacto-context';
export const Lista: React.FC = () => {

    const [Nombre, setText] = useState<string>();
    const [number, setNumber] = useState<number>();
    const ContactoCtxt = useContext(ContactosContext);
    return (
        <React.Fragment>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>IonInput Examples</IonTitle>
                        <IonSearchbar value={Nombre} onIonChange={e => setText(e.detail.value!)}></IonSearchbar>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    {ContactoCtxt.contactos.map(contacto => (
                        <IonRow key={contacto.id}>
                            <IonCol className="ion-text-center">
                                <IonCard>
                                    <IonCardHeader>
                                        <IonCardSubtitle>Nombre</IonCardSubtitle>
                                        <IonCardTitle>Direccion</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                    <p>{contacto.nombre}</p>
                                    <p>{contacto.direccion}</p>
                                    <IonButton></IonButton>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    ))}
                </IonGrid>
            </IonPage>
        </React.Fragment>
    );
};
export default Lista;