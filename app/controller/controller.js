const RecordData = require("../model/model.js");

module.exports.creater = async (req, res, next) => {
   
    try {
      const newData = {
       name: req.body.name,
       email: req.body.email,
       date: req.body.date,
       placeofbirth: req.body.placeofbirth,
       jobRole: req.body.jobRole,
       cv: req.file.originalname
    }
      // const validateEmail = await RecordData.findOne({email: req.body.email});
      // if (validateEmail){
      //   return res.send({
      //   status: "failure",
      //   message: "Found Duplicate",
      //   });
      // }


      const result = await RecordData.create(newData); //W are saving data we have taken as input in the db
      // const resultData = await newData.save();
      res.send({
        result,
        status: "success",
        message: "Record Created Successfully",
      });
      console.log(result);
    } catch (error) {
      console.log(error);
      return res.send({
        status: "Submission Failed",
        message: error,
      });
    }
  }
/*get cv listing api*/
module.exports.getData = async(req, res) => {
  const dataList = await RecordData.find({})
  const count  = await RecordData.find({}).count()
  if(dataList){
    return res.send({
      count: count,
      resopnse: dataList,
      message: "Get data Successfully",
      status: true
    })
  }
};
/*get cv listing api*/
/*delete api of cv*/
module.exports.deleteData = async (req, res) =>{
  try{
    console.log("dsbdbbdshjds",req.body.id)
    const deleteData = await RecordData.deleteOne({_id: req.body._id})
  const data = await RecordData.find({}).count();
    if(deleteData){
    return res.status(200).json({
      count: data,
      status: true,
      message: "Successfully delete Job application",
    })
    }
  }catch(err){
    return res.status(401).json({
      status: false,
      message: err.message
    })
  }
}
/*delete api of cv*/