const fs = require('fs');
const path = require('path');
const pathImage = path.resolve(__dirname,"../static/images");

const imagesController = {
    getImages: async (req, res) => {
        const data = fs.readdirSync(pathImage).map((file)=>{
            return "/images/"+file;
        })
        res.send(JSON.stringify(data));
    }
}

module.exports = imagesController;