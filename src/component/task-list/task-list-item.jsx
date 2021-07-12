import style from './task-list-item.module.css'

const TaskListItem = (props) => {

    const { id, name, description, priority, isFinish, onFinish, onDelete } = props

    const handleFinish = () => {
        onFinish(id)
    }

    const handleDelete = () => {
        onDelete(id)
    }

    return(
        <ul>
            <div>
                <div> 
                    <label className={style.margin}>{name} </label>

                    <button onClick={handleFinish} disabled={isFinish}>Terminer</button>
                    <button onClick={handleDelete}>Supprimer</button>
                </div>
                
                <div> 
                    <label>{description}</label>
                </div>

                <div> 
                    <label>{priority}</label>
                </div>

                <div> 
                    {
                        (isFinish) ?

                        <label>Fini</label> 

                        :

                        <label>Pas fini</label>
                    }
                </div>    
            </div>   
        </ul>
    )
}

export default TaskListItem;