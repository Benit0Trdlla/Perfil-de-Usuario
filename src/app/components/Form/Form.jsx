'use client'
import styles from "./form.module.css";
import { useState } from 'react';
export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;
        const validationErrors = {};

        if (!name) {
            validationErrors.name = 'El nombre es requerido';
        }

        if (!email) {
            validationErrors.email = 'El email es requerido';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            validationErrors.email = 'El email no es válido';
        }

        if (!message) {
            validationErrors.message = 'El mensaje es requerido';
        }

        if (Object.keys(validationErrors).length === 0) {
            setSuccessMessage(true);
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } else {
            setErrors(validationErrors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };
    return (
        <>
            <h4 className={styles.title}>Ponte en contacto</h4>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" name="name" placeholder="Nombre*" value={formData.name} onChange={handleChange} className={errors.name ? 'error' : ''} />
                {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}

                <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} className={errors.email ? 'error' : ''} />
                {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}

                <textarea name="message" placeholder="Tu Mensaje*" value={formData.message} onChange={handleChange} className={errors.message ? 'error' : ''} />
                {errors.message && <p className={styles.errorMessage}>{errors.message}</p>}
                {successMessage && <p className={styles.successMessage}>Gracias por contactarme!</p>}
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}