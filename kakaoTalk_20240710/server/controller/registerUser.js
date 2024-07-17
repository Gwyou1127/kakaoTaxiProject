import UserModel from '../models/UserModel.js'

async function registerUser(request,response){
    const {name, email, password, profile_pic} = request.body;
    const checkEmail = await UserModel.findOne({email})
    if (checkEmail){
        return response.status(400).json({
            message: "이미 등록된 사용자에요 다른것으로 골라주세요.",
            error: true
        })
    }
    const payload = {
        name, email, password, profile_pic
    }
    const user = new UserModel(payload)
    const userSave = await user.save()

    return response.status(201).json({
        message: "사용자 등록에 성공하였습니다."
    })
}

export default registerUser