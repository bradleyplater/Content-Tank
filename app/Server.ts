import express, { Express, Request, Response } from 'express';
import path from 'path';

export class Server {
    private app: Express;

    constructor(app: Express) {
        this.app = app;

        this.app.use(express.static(path.resolve('./') + '/build/frontend'));

        this.app.get('/api', (req: Request, res: Response): void => {
            res.send('You have reached the api');
        });

        this.app.get('*', (req: Request, res: Response): void => {
            res.sendFile(path.resolve('./') + '/build/frontend/index.html');
        });
    }

    public start(port: number): void {
        this.app.listen(port, () =>
            console.log(`server listening on port ${port}!`)
        );
    }
}
