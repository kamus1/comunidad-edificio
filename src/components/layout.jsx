import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//aqui importar el archivo de las paginas
import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'
import PagarGastosCuentas from '../pages/pagar_gastos_cuentas'
import VerNoticias from '../pages/ver_noticias_page'
import RealizarReservas from '../pages/realizar_reservas'
import InscribirVisitas from '../pages/inscribir_visitas'


import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>

        {/* <h1 className='layout__title'>Comunidad Edificio</h1>*/}

        <NavBar />
        <div className='layout__page'>
          {/* esto es solo un router de los archivos de las paginas a un url */}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
            <Route path='/pagar-gastos-cuentas' element={<PagarGastosCuentas />} />
            <Route path='/ver-noticias' element={<VerNoticias />} />
            <Route path='/realizar-reservas' element={<RealizarReservas />} />
            <Route path='/inscribir-visitas' element={<InscribirVisitas />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout