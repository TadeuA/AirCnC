const multer = require('multer');
const path = require('path'); 

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..','..','uploads'),
        //para evitar erro de caminho em quaisquer OS o path.resolve encontra o caminho correto passando como paramentos os nomes de cada pasta entre aspas ou apostrofos
        //__dirname = variavel global para indicar a pasta que se encontra
        filename: (req, file, cb)=>{
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            cb(null,`${name}-${Date.now()}${ext}`);
        },
    }),
};