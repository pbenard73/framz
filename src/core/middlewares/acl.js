import aclManager from "./../managers/acl"
import createError from "http-errors"

export default roleName => (req, res, next) => {
    if (aclManager.isGranted(req, roleName) === true) {
        return next()
    }

    return next(createError(401, "You are not allowed to access this area"))
}
