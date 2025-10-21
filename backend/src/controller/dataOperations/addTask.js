import fs from 'node:fs/promises';

async function addTask(req, res){
    const { task } = req.body;
    if(task.title == '' | !task.title | typeof(task.title) != 'string'){
        return res.status(400).json({message: 'Título enviado inválido.'});
    };
    if(task.start == '' | !task.start | typeof(task.start) != 'string'){
        return res.status(400).json({message: 'Data de início enviada inválida.'});
    };
    if(task.end == '' | !task.end | typeof(task.end) != 'string'){
        return res.status(400).json({message: 'Data de fim enviada inválida.'});
    };
    try{
        const dateStart = new Date(task.start);
        const dateEnd = new Date(task.end);
        if (dateEnd.getTime() < dateStart.getTime()) {
            throw new Error('Data de fim antecede data de início');
        }
        const data = await fs.readFile('data.json', 'utf8');
        const object = JSON.parse(data);
        object.push(task);
        const jsonString = JSON.stringify(object, null, 2);
        await fs.writeFile('data.json', jsonString);

        return res.status(200).json({message: "Sucesso ao salvar dados.", tasks: object})
    }catch(error){
        console.error(error.message);
        res.status(500).json({message: 'Erro ao salvar dados.'});
    };
};

export default addTask;