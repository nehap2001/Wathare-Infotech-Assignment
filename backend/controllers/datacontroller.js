const Data=require('../model/DataModel')



//get all data

const getAllData = async(req,res)=>{
    try{
        const data= await Data.find({})
        res.status(200).json(data)
        console.log("data found")
      //  console.log(data)
    } catch(error){
            console.log(error)
            res.status(400).json({error: error.message})
    }

    
}





//get a single data
 const createData= async(req,res)=>{



    const{ts,machine_status,vibration}=req.body
    try{
        const data= await Data.create({ts,machine_status,vibration})
        res.status(200).json(data)

    } catch(error){
            console.log(error)
            res.status(400).json({error: error.message})
    }

 }



//create a new data





//delete a  data

const deleteData= async(req,res)=>{
    //  const result = await collection.deleteMany({});
    
    try{
        const result= await Data.deleteMany({})
        res.status(200).json({ deletedCount: result.deletedCount });
        console.log("deleted")
}
    catch(error){
        console.log(error)
        res.status(400).json({error: error.message})
    }
}





//UPDATE a data






module.exports ={
    createData,
    getAllData,
    deleteData

}