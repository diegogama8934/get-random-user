import { ToastContainer } from 'react-toastify';
import UserPage from './pages/UserPage';

function App() {



  return (
    <>
      {/* Coloco el ToastContainer de manera global para evitar errores por algún desmonte de componentes */}
      <ToastContainer />

      {/* Aqui pondría mis rutas en una aplicación real */}
      <UserPage />
    </>
  )
}

export default App
