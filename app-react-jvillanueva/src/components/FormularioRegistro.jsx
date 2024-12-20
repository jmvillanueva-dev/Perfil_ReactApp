import React, { useState } from 'react';
import './FormularioRegistro.css';

const FormularioRegistro = () => {
// Estados para manejar los valores de cada campo
const [nombre, setNombre] = useState('');
const [correo, setCorreo] = useState('');
const [carrera, setCarrera] = useState('');
const [materia, setMateria] = useState('');
const [fecha, setFecha] = useState('');
const [creditos, setCreditos] = useState('');
const [docente, setDocente] = useState('');
const [mensaje, setMensaje] = useState('');

// Función para manejar el envío del formulario
const handleSubmit = (e) => {
e.preventDefault();
setMensaje(
    `¡Gracias, ${nombre}!
    Tus datos han sido registrados.
    Materia: ${materia}
    Fecha: ${fecha}
    Créditos: ${creditos}
    Docente: ${docente}`
);
};

return (
<section className="formulario-registro">
    <h2 className="form-title">Registro de Estudiante</h2>
    <div className="form-container">
        <h3 className="form-title">Formulario Registro</h3>
        <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
            required
            />
        </div>

        <div className="form-group">
            <label htmlFor="correo">Correo electrónico:</label>
            <input
            id="correo"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Ingresa tu correo"
            required
            />
        </div>

        <div className="form-group">
            <label htmlFor="carrera">Carrera:</label>
            <input
            id="carrera"
            type="text"
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
            placeholder="Ingresa tu carrera"
            required
            />
        </div>

        <div className="form-group">
            <label htmlFor="materia">Materia:</label>
            <input
            id="materia"
            type="text"
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            placeholder="Ingresa la materia"
            required
            />
        </div>

        <div className="form-group">
            <label htmlFor="fecha">Fecha de inscripción:</label>
            <input
            id="fecha"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
            />
        </div>

        <div className="form-group">
            <label htmlFor="creditos">Número de créditos:</label>
            <input
            id="creditos"
            type="number"
            value={creditos}
            onChange={(e) => setCreditos(e.target.value)}
            placeholder="Ingresa el número de créditos"
            required
            />
        </div>

        <div className="form-group">
            <label htmlFor="docente">Docente:</label>
            <input
            id="docente"
            type="text"
            value={docente}
            onChange={(e) => setDocente(e.target.value)}
            placeholder="Ingresa el nombre del docente"
            required
            />
        </div>

        <button type="submit" className="submit-btn">Registrar</button>
        </form>

        {mensaje && (
        <div className="confirmation-message">
            {mensaje}
        </div>
        )}
    </div>
</section>

);
};

export default FormularioRegistro;