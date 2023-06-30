import express from 'express';
import cors from "cors";

const app = express();

app.use(cors());

app.get('/api/v1/users', (req, res) =>{
      try {
        const users = [
          { id: 1, name: "John Doe" },
          { id: 2, name: "Jane Doe" },
        ];

        return res.status(200).json({ users });
      } catch (error) {
        throw error;
      }

})

app.listen(5000, () => console.log('App listening on port 5000!'));