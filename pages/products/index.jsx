import {useRouter} from 'next/router'
import Navbar from '../../components/Navbar';
import SingleProduct from '../../components/SingleProduct';



function Products({users}){
    const router=useRouter()
    const array=[1,2,3,4,5,6,7,7,7,8,8,8,5];
    const handleClick=((e)=>{
          router.push(`/products/${e.id}`)
    })
    return <><div>
        <Navbar/>
             <h1 className='heading-p'>Our top products</h1>
            <div style={{display:"flex",flexWrap:"wrap",marginLeft:"200px"}}>
                {array?.map((e)=>{
                    return <div onClick={((e)=>{handleClick(e)})}>
                        {e}
                        <SingleProduct  />
                    </div>
                })}
            </div>
        
        </div></>
}



export default Products;

