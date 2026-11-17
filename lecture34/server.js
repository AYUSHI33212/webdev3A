const jwt=require('jsonwebtoken');
const data={
    _id:"123abc"
}
const token=jwt.sign(data,'secret_key',{expiresIn:'1h'});
console.log("token:", token);
