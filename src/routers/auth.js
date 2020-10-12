import { Router } from "express"
import notValid from "./../responses/notValid"
import authManager from "./../core/managers/auth"

let router = new Router()

router.post("/login", (req, res, next) => {
    if (authManager.loginMethod !== null) {
        return authManager.loginMethod(req, res, next)
    }

    authManager
        .login(req)
        .then(user => {})
        .catch(error => {})
})

router.get("/logout", (req, res, next) => {})

export default router
