// Estudiante: Jhonny Villanueva M.

import React, { useState } from 'react';
import './FormularioRegistro.css';

// Define el componente funcional FormularioRegistro
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
e.preventDefault(); // Evita que la página se recargue al enviar el formulario
setMensaje( // Actualiza el estado del mensaje con los datos ingresados
    `¡Gracias, ${nombre}!
    Tus datos han sido registrados.
    Materia: ${materia}
    Fecha: ${fecha}
    Créditos: ${creditos}
    Docente: ${docente}`
);
};

// Renderiza el formulario y el mensaje de confirmación
return (
<section className="formulario-registro">
    <h2 className="form-title">Registro de Estudiante</h2>
    <div className="form-container">
        <h3 className="form-title">Formulario Registro</h3>
        <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
            {/* Campo de nombre */}
            <label htmlFor="nombre">Nombre:</label>
            <input
            id="nombre"
            type="text"
            value={nombre} // Valor del campo controlado por el estado 'nombre'
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
            required
            />
        </div>

        <div className="form-group">
            {/* Campo de correo */}
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
            {/* Campo de carrera */}
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
            {/* Campo de materia */}
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
            {/* Campo de fecha */}
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
            {/* Campo para número de créditos */}
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
            {/* Campo ingreso de docente */}
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

        {/* Botón de envío del formulario */}
        <button type="submit" className="submit-btn">Registrar</button>
        </form>

        {/* Muestra el mensaje de confirmación si 'mensaje' no está vacío */}
        {mensaje && (
        <div className="confirmation-message">
            {mensaje}
        </div>
        )}
    </div>
</section>

);
};

export default FormularioRegistro; // Exporta el componente para su uso en otros archivos