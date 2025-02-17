import express, { Request, Response, NextFunction } from 'express';
import {UserRequest} from "./types";

const router = express.Router();

router.get('/username/:name', (req: UserRequest, res: Response) => {
    let name = req.params.name;
    let user = req.users?.filter(us => us.username === name);
    return res.send(user);
});

// a route that sends the usernames of the users to the client
router.get('/usernames', (req: UserRequest, res: Response) => {
    let usernames = req.users?.map((user) => {
        return { id: user.id, username: user.username };
    });
    res.send(usernames);
});

export default router;
