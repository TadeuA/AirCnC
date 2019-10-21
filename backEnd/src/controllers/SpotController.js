const User = require('../models/User');

const Spot = require('../models/Spot');


module.exports = {
    async index(req, res){
        const {tech} = req.query;

        const spots = await Spot.find({techs: tech});

       
        return res.json(spots);
    },


    async store(req, res){
        const {filename} = req.file;
        const {company, techs, price} = req.body;
        const { user_id} = req.headers;

        const user = await User.findById(user_id);
        if(!user){
            return res.status(400).json({error: 'User does not exists'});
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company: company,
            techs : techs.split(',').map(tech=> tech.trim()),
            /**transforma a string em um array de strig
             * split busca o separador de uma string a outra que se passa como parametro o separador
             * map mapeia a strig
             * e a função tech.trim retira todos os espaços da string
             * 
             */
            price,
        })

        return res.json(spot)
    }
};