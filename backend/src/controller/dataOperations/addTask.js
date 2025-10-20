import fs from 'node:fs/promises';

async function addTask(req, res){
    const { task } = req.body;
    if(task.title == '' | !task.title | typeof(task.title) != 'string'){
        return res.status(400).json({message: 'Título enviado inválido.'});
    }
    if9
    try{
        const dateStart = new Date(task.start);
        const dateEnd = new Date(task.end);
        if (dateEnd.getTime() < dateStart.getTime()) {
            throw new Error('Data de fim antecede data de início');
        }
        const data = await fs.readFile('data.json', 'utf8');
        const object = JSON.parse(data);
        object.tasks.push(task);
        const jsonString = JSON.stringify(object);
        await fs.writeFile('data.json', jsonString);

    }catch(error){
        console.error(error.message);
        res.status(500).json({message: 'Erro ao salvar dados.'});
    }
}