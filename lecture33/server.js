const bcrypt=require('bcrypt');
const password = 'mysecretpassword';
const password2 = 'mysecretpassword';

const hashpassword=async(password)=>{
    const salt = await bcrypt.genSalt(10);
    console.log(`Salt: ${salt}`);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(`Hashed Password: ${hashedPassword}`);

    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log(`Is Match: ${isMatch}`);
};

hashpassword(password);
hashpassword(password2);