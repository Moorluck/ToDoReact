import PropTypes from 'prop-types'
import TaskListItem from "./task-list-item";

const TaskList = (props) => {

    const {data, onFinish, onDelete} = props

    const handleFinish = (id) => {
        onFinish(id)
    }

    const handleDelete = (id) => {
        onDelete(id)
    }

    const dataJSX = data.map(
        task => <TaskListItem key={task.id} {...task} onFinish={handleFinish} onDelete={handleDelete}/>
    )

    return(
        <>
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