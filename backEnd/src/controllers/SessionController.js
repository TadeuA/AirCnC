/**Metodos do controler
 * index, show, store, update, destroy
 * index = criar metodo que retorna uma listagem de controles
 * show = listar uma unic seção
 * store = criar uma ceção
 * update = alterar uma seção
 * destroy = excluir uma seção
 */
const User = require('../models/User');
module.exports = {
    async store(req, res){
        const { email } = req.body;
        //{ destruturação } = busca de arquivos de dentro de uma variavel que tenha seja de nome identico
         //await aguarda uma instrução ser executada
        let user = await User.findOne({email});
        if(!user){
            user = await User.create({email});
        }
        
       

        return res.json(user);
    }

};