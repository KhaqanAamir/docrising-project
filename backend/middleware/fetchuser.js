const jwt=require('jsonwebtoken');
const JWT_SECRET='KhaqanAamir';

const fetchuser=(request,response,next)=>{
    //Get the user from jwt token and append id
    const token=request.header("auth-token")
    if(!token){
        console.log(token)
        response.status(402).send({error:'this user doesnt have a valid token'})
    }
    try{
        const data=jwt.verify(token,JWT_SECRET)
        request.user=data.user;
        next()
    }
    catch(error){
        response.status(401).send({error:'this user doesnt have a valid token'})
    }
}

module.exports=fetchuser;