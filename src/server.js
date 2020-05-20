// require("dotenv").config();
// require("@/config/database");
import 'dotenv/config';

import app from './app';

app.listen(process.env.PORT);
