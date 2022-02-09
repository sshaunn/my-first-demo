import { response } from "express";
import { db, storage } from "../Config/firebase";

type Image = {
    uid: string,
    name: string,
    mimetype: string,
    size: number,
    url: string
}

type Request = {
    body: Image,
    params: {
        id: string
    }
}

async function addImage(req: Request, res: Response) {
    const {name, mimetype, size, url} = req.body;
    try {
        const images = db.collection("images").doc();
        const imageObject = {
            id: images.id,
            name,
            mimetype,
            size,
            url
        }
        await images.set(imageObject);
        res.status(200).send({
            status: "success",
            message: "Image uploaded Successfully...",
            data: imageObject,
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export {
    addImage,
}