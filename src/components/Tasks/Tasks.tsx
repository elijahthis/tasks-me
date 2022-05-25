import Task from "./Task";
import "./styles.scss";

const Tasks = () => {
    const taskList = [
        { title: "Work Time", startTime: "09:00", endTime: "15:30" },
        { title: "Break", startTime: "12:00", endTime: "12:30" },
        { title: "Meet with Elvis", startTime: "14:20", endTime: "15:20" },
    ];
    return (
        <div className="Tasks">
            <div className="Tasks__header">
                <h2>Saturday, 20th May 2022</h2>
            </div>
            <div className="Tasks__body">
                {taskList.map((task) => (
                    <Task task={task} />
                ))}
            </div>
        </div>
    );
};

export default Tasks;
