let exampleMiddleware =(req,res,next)=>{
    req.user={'firstName':'Aditya','lastName':'Kumar'}
    next();
}
module.exports={
    exampleMiddleware:exampleMiddleware
}