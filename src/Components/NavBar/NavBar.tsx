import './NavBar.css'
import { useNavigate } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar'
import { NavBarProp } from '../../Interfaces/Interfaces';
import { buttonclass } from '../../Style/Clases/Clases';


export default function NavBar({ setShowModal, setcreateProduct,seteditProduct }: NavBarProp) {
    const navigate = useNavigate();

    const handleHome = () => {
        // home.current?.scrollIntoView({behavior: 'smooth'});
        navigate('/')
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    const handleCreate = () => {
        seteditProduct(false)
        setcreateProduct(true)
        setShowModal(true)
    }
    return (
    <>
        
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" onClick={handleHome} className="flex items-center">
            <img width={150} src='http://www.occohelados.com.ar/_nuxt/img/logo.18d63ee.png' alt='LOGO'></img>
        </a>
        <SearchBar/>
        <div className="flex md:order-2">
            <button onClick={handleCreate} type="button" className={buttonclass}>Crea tu pedido</button>
        </div>

        </div>
        </nav>

    </>  
)
}

{/* <nav className="pedidos-navbar-conteiner">
            <header>
                <button onClick={handleHome}><img width={150} src='http://www.occohelados.com.ar/_nuxt/img/logo.18d63ee.png' alt='LOGO'></img></button>
                <div>
                    <h1>DIETA</h1>
                </div>
                <SearchBar></SearchBar>
                <div className='pedidos-navbar-buttons'>
                   
                    <button onClick={handleCreate}> Crear Producto </button>
                </div>
                </header>
            </nav> */}