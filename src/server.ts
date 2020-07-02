import { green } from "chalk";
import app from "./app";

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${green(port)}`));
