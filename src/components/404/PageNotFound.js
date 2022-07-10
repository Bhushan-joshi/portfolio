import './404.css'
import Scarecrow from '../../assets/Scarecrow.png'
import { useEffect } from 'react';

const PageNotFound = () => {
  useEffect(() => {
    document.title = "404 NOT FOUND";  
  }, []);
  
  return (
    <>
    <div className = "title">
     <p className="title__text">404 NOT FOUND</p>
   </div>

     <div className="main__image">
      <img className='img' src={Scarecrow} alt="Scary Crow" />
     </div>
     <div className="main__text">     
       <p className="main__text--heading">I have bad news for you</p>
       <p className="main__text--description">The page you are looking for might be removed or is temporarily unavailable</p>
       <a className='a' href='/'>LET'S GO HOME</a>
     </div>
   </>
  )
}

export default PageNotFound