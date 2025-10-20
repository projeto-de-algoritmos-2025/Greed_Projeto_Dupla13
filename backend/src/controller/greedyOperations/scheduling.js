import fs from 'node:fs/promises';

async function scheduling(req, res){
    try{
        const data = await fs.readFile('data.json', 'utf8');
        const object = JSON.parse(data);
        object.sort((a, b) => {
            const endA = new Date(a.end);
            const endB = new Date(b.end);
            return endA.getTime() - endB.getTime();
        })
        
        let last_ended = null;

        const scheduled = object.filter((task) => {
            const startTime = new Date(task.start);
            if (!last_ended || startTime >= last_ended) {
                last_ended = new Date(task.end);
                return true;
            };
            return false;
        });


        const jsonString = JSON.stringify(scheduled, null, 2);
        fs.writeFile('scheduled.json', jsonString);
        return res.status(200).json({message: "Agendamento bem sucedido.", tasks: scheduled})
    }catch(error){
        console.error(error.message);
        return res.status(500).json({message: "Erro no agendamento."})
    };
};

export default scheduling;