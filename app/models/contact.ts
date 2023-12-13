import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    name: {
        type:String,
        required:[true, "Name is required"],
        minlength:[2, "Name must be larger than 2 characters"],
        maxlength:[50, "Name must be less the 50 characters"],
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/],
    },
    subject: {
        type:String,
        required:[true, "Subject is required"],
        minlength:[2, "Subject must be larger than 2 characters"],
        maxlength:[50, "Subject must be less the 50 characters"],
    },
    message: {
        type:String,
        required:[true, "Message is required"],
        minlength:[2, "Message must be larger than 2 characters"],
    },
    date:{
        type:Date,
        default:Date.now,
    }
    

});
const Contact = mongoose.models.Contact || mongoose.model("Contact",contactSchema)
export default Contact