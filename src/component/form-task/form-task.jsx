
import { nanoid } from 'nanoid'
import { useState } from "react";
import style from "./form-task.module.css"

const FormTask = (props) => {

    const {onSubmitTask} = props;

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("moy")

    const onSelectChange = (e) => {
        setPriority(e.target.value)
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        if (name !== "" && description !== "") {
            onSubmitTask(
                {
                    id: nanoid(),
                    name: name,
                    description: description,
                    priority: priority,
                    isFinish: false
                }
            )
        }
        else {
            alert("Remplir tous les champs !")
        }

        setName("")
        setDescription("")
        setPriority("moy")
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nom </label>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            <div>
                <label>Description </label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
            </div>
            <div>
                <label>Priorité </label>
                <select onChange={onSelectChange} value={priority}>
                    <option value="urg">Urgent</option>
                    <option value="moy">Moyenne</option>
                    <option value="bas">Basse</option>
                </select>
            </div>
            <div>
                <button type="submit">Ajouter</button>
            </div>
        </form>
    )
}

export default FormTask;