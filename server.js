const express = require('express');

const projectRouter = require('./routes/projects');
const resourceRouter = require('./routes/resources');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/api/projects', projectRouter);
app.use('/api/resources', resourceRouter);


// app.get('/api/resources', async (req, res) => {
//     try {
//         const placeholder = await atable.something();
//         res.json(placeholder);
//     }
//     catch(exc) {
//         const handledException = exc.code ? exc : {code: 503, message: 'Something Went Wrong'}
//         res.status(handledException.code).json(handledException);
//     }
// });

// app.get('/api/tasks', async (req, res) => {
//     try {
//         const placeholder = await atable.something();
//         res.json(placeholder);
//     }
//     catch(exc) {
//         const handledException = exc.code ? exc : {code: 503, message: 'Something Went Wrong'}
//         res.status(handledException.code).json(handledException);
//     }
// });

// app.post('/api/projects', async (req, res) => {
//     try {
//         const placeholder = await atable.something();
//         res.json(placeholder);
//     }
//     catch(exc) {
//         const handledException = exc.code ? exc : {code: 503, message: 'Something Went Wrong'}
//         res.status(handledException.code).json(handledException);
//     }
// });

// app.post('/api/projects', async (req, res) => {
//     try {
//         const placeholder = await atable.something();
//         res.json(placeholder);
//     }
//     catch(exc) {
//         const handledException = exc.code ? exc : {code: 503, message: 'Something Went Wrong'}
//         res.status(handledException.code).json(handledException);
//     }
// });

app.listen( PORT, () => console.log(`Listening on port: ${PORT}`));