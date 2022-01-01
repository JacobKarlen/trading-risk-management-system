import { Schema, model, Document } from "mongoose";
// import { bcrypt } from "bcrypt";

export interface User {
    first_name: string,
    last_name: string,
    email: string,
    password: string
}

export interface UserDoc extends Document, User {}; // type that queries of UserModel will return

const userSchema = new Schema<User>({
    "first_name": { type: String , required: true },
    "last_name": { type: String , required: true },
    "email": { type: String , required: true },
    "password": { type: String, required: true }
});

// userSchema.pre('save', (error, doc, next) => {

//     if (!doc.isModified('password')) return next();

// })

export const UserModel = model<User>('User', userSchema);