const fs = require('fs');
const path = require('path');
const pathFile = path.resolve(__dirname,"../static/notes/notes.json");

const notesController = {
    getNotes: async (req, res) => {
        const data = fs.readFileSync(pathFile, 'utf8');
        res.send(data);
    },
    addNotes: async (req, res)=>{

    }
}

module.exports = notesController;