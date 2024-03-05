import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use('/public', express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/create", (req, res) => {
    res.render("create");
});

app.post("/submit", (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    res.render("submit", { title: title, content: content });
});


app.post("/edit", (req, res) => {
    res.render("edit");
});

app.get("/edit", (req, res) => {
    res.render("edit");
});

app.post("/delete", (req, res) => {
    res.render("delete");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
