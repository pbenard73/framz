import BaseModel from "./../core/database/baseModel"

class User extends BaseModel {
    name = "user"
    url="users"
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
	token: {
            type: "text",
            length: 500,
	},
	tokenExpiresAt: {
            type: "datetime",
            length: 500,
	},
	refreshToken: {
            type: "text",
            length: 500,
	},
	registrationToken:{
            type: "text",
            length: 500,
	},
	registrationTokenExpiresAt:{
            type: "datetime",
            length: 500,
	},
	registered: {
            type: "boolean",
	},
	active: {
            type: "boolean",
	}
    }
}

export default User
