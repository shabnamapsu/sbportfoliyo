import mongoose from 'mongoose'
export const DBconection=()=>{
 mongoose.connect(process.env.mongo_url).then(()=>{
    console.log("dbconection coneccted successfully")
 }).catch((err)=>{
    console.log(err)
 })
}