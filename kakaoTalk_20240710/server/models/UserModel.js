import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: [true, "성명"]},
    email: {type: String, required: [true, '이메일'], unique: true},
    password: {type: String, required: [true, '비밀번호']},
    profile_pic: {type: String, default: ""},
},{
    timestamp: true
})

const UserModel = mongoose.model("User", userSchema, "User")

export default UserModel;