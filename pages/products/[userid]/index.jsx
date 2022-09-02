import { useRouter } from "next/router"





function UserId(){
    const router=useRouter();
    const userId=router.query.userid
    return <>
    <h1>User with user Id {userId}</h1>
    </>
}

export default UserId;
