const crypto = require("crypto")

class Crypter {
    #secret = null

    setSecret(secret) {
        this.#secret = secret
    }

    encrypt(string) {
        return crypto.createHmac("sha256", this.#secret).update(string).digest("hex")
    }
}

const crypter = new Crypter()

export default crypter
