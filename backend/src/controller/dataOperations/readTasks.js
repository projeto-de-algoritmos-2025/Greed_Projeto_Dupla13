import fs from 'node:fs/promises';

async function readTask(req, res){
    try{
        const data = await fs.readFile('data.json', 'utf8');
        const object = JSON.parse(data);
        return res.status(200).json(object);
    }catch(error){
        console.error(error.message);
        res.status(500).json({message: 'Erro ao ler dados.'});
    }
}

export default readTask;