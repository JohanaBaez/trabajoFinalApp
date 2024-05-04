import express from 'express';
const app = express();


app.use(express.json());




const data: Array<{}> = [
   {
       id: "1",
       profilePicture:
           "https://scontent.fmga3-1.fna.fbcdn.net/v/t39.30808-1/421878086_3662415144076963_6469529258262461884_n.jpg?stp=c0.0.480.480a_dst-jpg_p480x480&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qL5OvfVhHukAb54Unf_&_nc_ht=scontent.fmga3-1.fna&oh=00_AfArKZm8hyKXYTPP3Nr0Y_SMXfHXE_czgoPSp3_a5x3hjg&oe=662C58DE",
       userName: "Johana",
       country: "Nicaragua",
       city: "Managua",
   },
];


const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));






app.get('/', async (req, res) => {
   await wait(3000);
   res.json(data);
});




app.post('/posts', (req, res) => {
   const data = req.body;


   data.push(data);


   res.json(data);
});




app.listen(3000, () => {
   console.log('Server is running on port 3000');
});
