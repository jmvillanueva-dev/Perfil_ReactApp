import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Header() {
return (
<header className="bg-indigo-600 text-white p-6 flex items-center space-x-6">
    <img
    src="/placeholder.svg?height=120&width=120"
    alt="Foto de perfil"
    className="w-24 h-24 rounded-full border-4 border-white"
    />
    <div>
    <h1 className="text-2xl font-bold">Tu Nombre</h1>
    <div className="mt-2 space-y-1">
        <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> Tu Dirección</p>
        <p className="flex items-center"><FaPhone className="mr-2" /> Tu Teléfono</p>
        <p className="flex items-center"><FaEnvelope className="mr-2" /> tu.email@ejemplo.com</p>
    </div>
    </div>
</header>
)
}

