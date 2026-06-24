import app from './src/app.js';
import config from './src/configs/env.config.js';

const serverStart = async () => {
    try {
        const port = config.port || 5555;

        app.listen(port, () => {
            console.log(`server running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('server cannot run properly', error.message);
    }
};

serverStart();
