import PropTypes from 'prop-types'
import { useState } from 'react';
import TaskListItem from "./task-list-item";

const TaskList = (props) => {

    const {data, onFinish, onDelete} = props

    const [isCheck, setIsCheck] = useState(false)

    const handleFinish = (id) => {
        onFinish(id)
    }

    const handleDelete = (id) => {
        onDelete(id)
    }

    const onCheckBoxChange = () => {
        setIsCheck(!isCheck)
    }

    const dataJSX = data.map(
        task => {
            if ((isCheck && !task.isFinish) || (!isCheck)) {
                return <TaskListItem key={task.id} {...task} onFinish={handleFinish} onDelete={handleDelete}/>
            }
        }
    )

    return(
        <>
            <div>
                <label>Cocher pour cacher les tâches terminer</label>
                <input type="checkbox" id="finish-filter" checked={isCheck} onChange={onCheckBoxChange}/>
            </div>
            {dataJSX}
        </>
    )
}

TaskList.propTypes = {
    data : PropTypes.array
}

TaskList.defaultProps = {
    data : []
}

export default TaskList;