import jwt from 'jsonwebtoken';

export const auth = async (req, res, next) => {
    let token = req.header('token');

    //decoded -> extract information from valid jwt token payload
    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
        if (err) {
            res.json('invalid token');
        } else {
            next();
        }
    });
};
