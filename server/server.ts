import express from 'express';

const app = express();

app.use(express.json());


const data: Array<{}> = [
    {
        id: "1",
        profilePicture:
            "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-1/302899535_1243389203080396_8459184593115578454_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Lv7BBW2HCeAAb7A_P0-&_nc_ht=scontent-mia3-1.xx&oh=00_AfC9qs4YAVWYMmAodmVRPMR6eBSsugeFMg64qtqeZIURDw&oe=661F9E99",
        image: "computer.png",
        profileName: "Eliseo",
    },

];

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));



app.get('/', async (req, res) => {
    await wait(3001);
    res.json(data);
});


app.post('/posts', (req, res) => {
    const { profilePicture = "",  profileName = "" } = req.body;

    data.push({
        id: data.length.toString(),
        profilePicture,
        profileName,
    });

    console.log("Nuevo post recibido:");
    console.log("Profile Picture:", profilePicture);
   //  console.log("Image:", image);
    console.log("Profile Name:", profileName);

    res.json(data);
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
