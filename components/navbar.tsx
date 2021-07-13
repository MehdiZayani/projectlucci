import Link from 'next/link'
import navbarcss from '../../styles/navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {faUserCircle} from '@fortawesome/free-regular-svg-icons';

export default function nav(){
    const titleweb="Lucci Design"
 return(
   <div className='Navbara'>
       <nav className={navbarcss.nav}>
       <Link href='../homepage/homepage'className={navbarcss.links}><h1 className={navbarcss.titleweb}>{titleweb}</h1></Link>
     
      <div className={navbarcss.navbar}>
          
      <Link href='../homepage/homepage' className={navbarcss.Link}><p className={navbarcss.links}>Cuisine</p></Link>
      <Link href='../index' className={navbarcss.Link}><p className={navbarcss.links}>Rangement</p></Link>
      <Link href='../index' className={navbarcss.Link}><p className={navbarcss.links}>Chaises</p></Link>
      <Link href='../index' className={navbarcss.Link}><p className={navbarcss.links}>Tables</p></Link>
      <Link href='../salon/salon' className={navbarcss.Link}><p className={navbarcss.links}>Salon</p></Link>
      <Link href='../index' className={navbarcss.Link}><p className={navbarcss.links}>Décoration</p></Link>
      <Link href='../index' className={navbarcss.Link}><p className={navbarcss.links}>Autres</p></Link>
      <Link href='../index' className={navbarcss.Link}><p className={navbarcss.links}>Notre vision</p></Link> 
      <form>
        <input type="search" placeholder="Rechercher"/>
      </form>
      <Link href='../index' className={navbarcss.Link}><FontAwesomeIcon icon={faUserCircle} className={navbarcss.links} className={navbarcss.iconnav}/></Link>
      <Link href='../index' className={navbarcss.Link}><FontAwesomeIcon icon={faShoppingCart} className={navbarcss.links} className={navbarcss.iconnav}/></Link>
       
     </div>
     </nav>
    </div>
 )
}
