
import { Link } from "react-router-dom"
import Logo from "./Images/logo.png"
import cartlogo from "./Images/cartlogo.png"
import { useContext } from "react"
import { CartContext } from "./pages/CartContext"



const Navigation = () => {
    const cartStyle = {
        background :"orange",
        display:"flex",
        padding: "6px 12px",
        borderRadius:"50px"
    }
    const {cart} = useContext(CartContext)
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        
            <Link style={{textDecoration:"none"}} to="/">
                <img style={{height:"45px"}} src={Logo} alt="Logo" />
               
            </Link>
            <ul className="flex items-center">
                <li style={{listStyle:"none"}} ><Link style={{textDecoration:"none"}} to="/">Home</Link></li>
                <li style={{listStyle:"none"}} className="ml-6"><Link style={{textDecoration:"none"}} to="/products">Products</Link></li>
                <li style={{listStyle:"none"}} className="ml-8"><Link to="/cart" style={{textDecoration:"none"}}> 
                    <div style={cartStyle}>
                        <span className="text-black mt-2">{cart.totalItems}</span>
                        <img className="ml-4" style={{height:"32px"}} src={cartlogo} alt="cart-icon" />
                    </div>
                    </Link></li>
            </ul>
    


      </nav>
    </>
  )
}

export default Navigation
