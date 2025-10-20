import fs from 'node:fs/promises';

async function removeTask(req, res){
    const { task_title } = req.body;
    if(task_title == '' | !task_title | typeof(task_title) != 'string'){
        return res.status(400).json({message: 'Título enviado inválido.'});
    };
    try{
        const data = await fs.readFile('data.json', 'utf8');
        const object = JSON.parse(data);
        const newData = object.filter((task) => task.title != task_title);
        const jsonString = JSON.stringify(newData, null, 2);
        await fs.writeFile('data.json', jsonString);

        return res.status(200).json({message: "Sucesso ao apagar dados."})
    }catch(error){
        console.error(error.message);
        res.status(500).json({message: 'Erro ao apagar dados.'});
    };
};

export default removeTask;