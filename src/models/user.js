import BaseModel from "./../core/database/baseModel"

class User extends BaseModel {
    name = "user"
    fields = {
        username: {
            type: "text",
            uniq: true,
            length: 250,
        },
        password: {
            type: "text",
            length: 500,
        },
    }
}

export default User
