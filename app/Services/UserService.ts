import { UserDocument, User } from '../Models/User';
import Service from './Service';

export default class UserService<T> extends Service<T> {
    private static instance: UserService<UserDocument>;
    constructor() {
        super();
    }

    public async getUserByUsername(username: string) {
        return await User.findOne({ username: username }).exec();
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new UserService<UserDocument>();
        return this.instance;
    }
}
