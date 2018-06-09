import { Router, Request, Response } from 'express';
import { Car } from '../model/car';

const router: Router = Router();
let cars = [new Car('Suzuki', 'Swift'), new Car('Ford', 'Ecosport')];

router.get('/', (req: Request, res: Response) => {
    res.send(cars);
});

router.post('/', (req: Request, res, Response) => {
    console.log(req.body);
    console.log("before: "+cars);
    cars.push(req.body);
    console.log("after: "+cars);
    res.status(200).send(req.body);
});

// Export the express.Router() instance to be used by server.ts
export const CarController: Router = router;