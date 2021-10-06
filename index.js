import { config } from 'dotenv';

import Express from './src/infra/http/Express.js';
import Routes from './src/infra/http/Routes.js';

config();
const http = new Express();
const routes = new Routes(http.app);
routes.build();
http.listen(3000);
