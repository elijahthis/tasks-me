interface TaskObjType {
    title: string;
    startTime?: string;
    endTime?: string;
    allDay?: boolean;
}

interface TaskProps {
    task: TaskObjType;
}

const Task = ({ task }: TaskProps): JSX.Element => {
    return (
        <div className="Task">
            <div>
                <p>{task.title}</p>
                <p>{task.startTime}</p>
            </div>
            <div></div>
        </div>
    );
};

export default Task;
