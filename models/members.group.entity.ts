import mongoose,{Schema} from "mongoose";

export default mongoose.model("userFriendsandGroups",new Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    type:{
        type:1|0,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    member:{
        type:[String],
        required:true
    },
    date:{
        type:Date,
        required:Date.now
    }
}));