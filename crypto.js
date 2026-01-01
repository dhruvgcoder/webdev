const crypto = require("crypto")

const input = "prefixstring"


for(i=0;i<99999;i++){
    const hash = crypto.createHash('SHA-256').update(input).digest(hex)

}
    