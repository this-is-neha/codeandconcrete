// service.js

const sendingModel=require("./model")
class SendingService {

      transformRegisterData=(req)=>{
        try{
            let payload = req.body;
            payload.name = payload.name.trim();
            payload.email = payload.email.trim();
            payload.message = payload.message.trim();
            return payload
        }
        catch(exception){
   throw (exception)
        }
    }

    createUser=async (data)=>{
        try{
   const user=new sendingModel(data);
   return await user.save()
        }
        catch(exception){
            throw exception
        }
    }
}
const sendSvc=new SendingService()
module.exports=sendSvc