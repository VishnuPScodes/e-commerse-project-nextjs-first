import {useRouter} from 'next/router'



function Products({users}){
    const router=useRouter()
    const handleClick=((e)=>{
          router.push(`/products/${e.id}`)
    })
    return <><div>
            
            <div style={{display:"flex",flexWrap:"wrap"}}>
                {users.map((e)=>{
                    return <div onClick={(()=>{handleClick(e)})} style={{height:"100px",width:"100px",margin:"20px",backgroundColor:"white",color:"black"}}>{e.first_name}</div>
                })}
            </div>
        
        </div></>
}

export async function getStaticProps(){
    const response=await fetch('https://reqres.in/api/users?page=2');
    const data=await response.json();
    return {
        props:{
            users:data.data
        }
    }
}

export default Products;

