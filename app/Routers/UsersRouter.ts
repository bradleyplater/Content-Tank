import { UserDocument } from 'app/Models/User';
import express, { Request, Response } from 'express';
import UserService from '../Services/UserService';

const service = UserService.getInstance();

const router = express.Router();

router.get('/api/user', [], (req: Request, res: Response) => {
    const { username } = req.body;
    service.getUserByUsername(username).then((response: UserDocument) => {
        if (response) {
            res.send(response);
        }
    });
});

export { router as UserRouter };
