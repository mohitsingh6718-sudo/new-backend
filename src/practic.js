import bcrypt from "bcrypt";

const password = "123456";

const hashedPassword = await bcrypt.hash(password, 10); //salt rounds

console.log(hashedPassword);

const isMatch = await bcrypt.compare("1234567", hashedPassword);

console.log(isMatch);
