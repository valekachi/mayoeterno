import React, {useState} from 'react'
import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    updateDoc,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';
import estilos from './itemcount.module.css';
import estilo from './item.module.css';



const Form = ({ cart, total, clearCart, handleId }) => {
    
        const [nombre, setNombre] = useState('');
        const [apellido, setApellido] = useState('');
    
        const handleSubmit = (event) => {
            event.preventDefault();
            const order = {
                buyer: { nombre: nombre, apellido: apellido },
                items: cart,
                total: total,           
                date: serverTimestamp(),
            };
            const ordersCollection = collection(db, 'orders');
            

            addDoc(ordersCollection, order).then((res) => {
                handleId(res.id);
                clearCart();
                updateprod();
            });
        };
        const handleChangeNombre = (event) => {
            setNombre(event.target.value);
        };
    
        const handleChangeApellido = (event) => {
            setApellido(event.target.value);
        };

const updateprod = () => {
                const orderDoc = doc(db, 'orders', 'A29yVRkpjasoaRfEo3G5');
                updateDoc(orderDoc, { total: 100 });
}

return (
    <div className={estilos.btn}>
                <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre..."
                    name="nombre"
                    value={nombre}
                    className={estilo.card}
                    onChange={handleChangeNombre}
                />
                <input
                    type="text"
                    placeholder="Apellido..."
                    name="apellido"
                    value={apellido}
                    className={estilo.card}
                    onChange={handleChangeApellido}
                />
                <button onClick={handleSubmit} className={estilos.btn}>TERMINAR MI COMPRA</button>
            </form>
    </div>
)}


export default Form;