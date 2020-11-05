const db = new Dexie('MyDatabase');

db.version(1).stores({
	ctrlKms: '++id, protocolo, entradas'
});

const getAll = async () => {
    return await db.ctrlKms.toArray()
}

const save = async (protocolo, entradas) => {
    return await db.ctrlKms.add({
		protocolo: protocolo,
		entradas: entradas
	})
}

const deletar = async (id) => {
    return await db.ctrlKms.delete(id)
}

const find = async (key, value) => {
    return await db.ctrlKms.where(key).equals(value).toArray()
}

const update = async (id, protocolo, entradas) => {
    return await db.ctrlKms.update( id,{
        protocolo: protocolo, 
        entradas: entradas
    })
}

const adicionarRegistro = async (protocolo, entrada) => {
    let result = await find('protocolo', protocolo)


    if(await result.length > 0){
        console.log('entrou')
        let arr = result[0].entradas
        arr.push(entrada)

        console.log(arr)
        await update(result[0].id, result[0].protocolo, arr)
    } else {
        await save(protocolo, [ entrada ])
    }
}