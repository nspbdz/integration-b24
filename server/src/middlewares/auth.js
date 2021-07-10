const jwt = require('jsonwebtoken')

exports.auth = (req, res, next) => {
    try {

        let header = req.header("Authorization")

        //jika token tidak dimasukan
        if (!header) {
            return res.send({
                status: 'failed',
                message: 'Access Failed'
            })
        }

        // agar bearer di pindahkan
        let token = header.replace("Bearer ", "") 


        // const secretKey = "process.env.SECRET_KEY"
        // diambil dari .env
        const secretKey = process.env.SECRET_KEY


        const verified = jwt.verify(token, secretKey, (error, decoded) => {
            if (error) {
                return res.send({
                    status: 'failed',
                    message: 'user not verified'
                })
            } else {
                return decoded
            }
        })

        req.idUser = verified.id

        next()

    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}