import fs from 'node:fs/promises';

async function readTask(req, res){
    try{
        const data = await fs.readFile('./src/data.json', 'utf8');

        return res.status(200).json(data);
    }catch(error){
        console.error(error.message);
        res.status(500).json({message: 'Erro ao ler dados.'});
    }
}

export default readTask;