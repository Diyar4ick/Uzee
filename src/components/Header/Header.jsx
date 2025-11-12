import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'
import vk from '../../assets/images/vk.svg'
import whatsapp from '../../assets/images/whatsapp.svg'
import youtube from '../../assets/images/youtube.svg'
import search from '../../assets/images/search.svg'
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="header__promo">
        <div className="container">
              <div className="header__promo-media">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={vk} alt="" />
            <img src={whatsapp} alt="" />
            <img src={youtube} alt="" />
            
        </div>
        <div className="header__promo-address">
           <p className="header__promo-text"><span>Наш адрес:</span> 100076, г. Ташкент ул.М.Ашрафи 1 пер.,дом 9</p>
           <p className="header__promo-text"><span>Тел:</span>+998 555200404 <span>Электронная почта:</span> info@uzee.uz</p>
        </div>
        <div className="header__promo-search">
            <input type="text" placeholder='Поиск'/>
            <button type='submit'><img src={search} alt="" /></button>
        </div>
        <div className="header__promo-languages">
        <img src="" alt="RU" />  
        <img src="" alt="EN" />  
        <img src="" alt="UZ" />  
        </div> 
        </div>
      </div>
      <div className="header__nav">
        <div className="container">
          <NavLink to="/"> <img src={logo} alt="" className="logo" /></NavLink>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#" >Об организации
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.685 3.43591C9.972 3.14891 9.972 2.68291 9.685 2.39591C9.398 2.10891 8.932 2.10891 8.645 2.39591L5.449 5.59091C5.32 5.69091 5.162 5.74691 4.997 5.74691C4.832 5.74691 4.673 5.69091 4.545 5.59091L1.356 2.40191C1.069 2.11491 0.603 2.11491 0.316 2.40191C0.029 2.68891 0.029 3.15491 0.316 3.44191L4.477 7.60291C4.615 7.74091 4.802 7.81791 4.997 7.81791C5.192 7.81791 5.379 7.74091 5.517 7.60291L9.685 3.43591Z" fill="black" />
            </svg> </a> 
            </li>
            <li className="header__nav-item">
              <a href="#" >Корпоративное управление
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.685 3.43591C9.972 3.14891 9.972 2.68291 9.685 2.39591C9.398 2.10891 8.932 2.10891 8.645 2.39591L5.449 5.59091C5.32 5.69091 5.162 5.74691 4.997 5.74691C4.832 5.74691 4.673 5.69091 4.545 5.59091L1.356 2.40191C1.069 2.11491 0.603 2.11491 0.316 2.40191C0.029 2.68891 0.029 3.15491 0.316 3.44191L4.477 7.60291C4.615 7.74091 4.802 7.81791 4.997 7.81791C5.192 7.81791 5.379 7.74091 5.517 7.60291L9.685 3.43591Z" fill="black" />
            </svg> </a> 
            </li>
            <li className="header__nav-item">
              <a href="#" >Законодательство
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.685 3.43591C9.972 3.14891 9.972 2.68291 9.685 2.39591C9.398 2.10891 8.932 2.10891 8.645 2.39591L5.449 5.59091C5.32 5.69091 5.162 5.74691 4.997 5.74691C4.832 5.74691 4.673 5.69091 4.545 5.59091L1.356 2.40191C1.069 2.11491 0.603 2.11491 0.316 2.40191C0.029 2.68891 0.029 3.15491 0.316 3.44191L4.477 7.60291C4.615 7.74091 4.802 7.81791 4.997 7.81791C5.192 7.81791 5.379 7.74091 5.517 7.60291L9.685 3.43591Z" fill="black" />
            </svg> </a> 
            </li>
            <li className="header__nav-item">
              <a href="#" >Интерактивные услуги
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.685 3.43591C9.972 3.14891 9.972 2.68291 9.685 2.39591C9.398 2.10891 8.932 2.10891 8.645 2.39591L5.449 5.59091C5.32 5.69091 5.162 5.74691 4.997 5.74691C4.832 5.74691 4.673 5.69091 4.545 5.59091L1.356 2.40191C1.069 2.11491 0.603 2.11491 0.316 2.40191C0.029 2.68891 0.029 3.15491 0.316 3.44191L4.477 7.60291C4.615 7.74091 4.802 7.81791 4.997 7.81791C5.192 7.81791 5.379 7.74091 5.517 7.60291L9.685 3.43591Z" fill="black" />
            </svg> </a> 
            </li>
            <li className="header__nav-item">
              <NavLink to="/contacts">Контакты</NavLink> 
            </li>
          </ul>   
        </div>
      </div>
    </header>
  )
}

export default Header
