// Import server here and start the application
import server from './api/server.js';
import cors from 'cors';



const port = 4000;


server.use(
    cors({
        origin : '*',
        methods : '*',
        credentials: true,
    })
)
server.listen(port,() => {console.log(`listening ${port}`);})

