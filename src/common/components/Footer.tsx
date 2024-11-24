import { Facebook, Twitch, Youtube, Instagram } from "iconsax-react"

export const Footer = () => {
  return (
    <>
      <hr />
      <footer className="footer">
        
        <p>Síguenos en nuestras redes sociales</p>
        
        <div className="footer__social">
          <button className="footer__social--button"><a href="#"><Instagram size={30}/></a></button>
          <button className="footer__social--button"><a href="#"><Facebook className="i" size={30}/></a></button>
          <button className="footer__social--button"><a href="#"><Youtube size={30}/></a></button>
          <button className="footer__social--button"><a href="#"><Twitch size={30}/></a></button>
        </div>

        <p>&copy; 2024 Market Viva Natura. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}
