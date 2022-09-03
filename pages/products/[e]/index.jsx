import { useRouter } from "next/router"
import Navbar from "../../../components/Navbar";





function UserId(){
    
    const router=useRouter();
    const e=router.query.e
    const handleClick=(()=>{
        alert('Added to the cart')
    })
    return <>
    <Navbar/>
      <div id='product-d'>
          <div id='img-box'>
            <img height='100%' width='100%' src="https://images.pexels.com/photos/1254502/pexels-photo-1254502.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
          </div>
          <div id='btn-cart'> <button className='cart' onClick={handleClick}>Add to cart</button>  </div>
         
      </div>
    </>
}

export default UserId;
