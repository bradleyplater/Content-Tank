import mongoose from 'mongoose';
import IUser from './IUser';

export interface UserDocument extends mongoose.Document {
    username: string;
    description: string;
}

interface UserModelInterface extends mongoose.Model<UserDocument> {
    build(attr: IUser): UserDocument;
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema.statics.build = (attr: IUser) => {
    return new User(attr);
};

const User = mongoose.model<UserDocument, UserModelInterface>(
    'User',
    userSchema
);

export { User };
