import { MdDeleteForever } from "react-icons/md";

const ShowTasks = ({ tasks }) => {
  return (
    <div className="task">
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <h3>{task.task} </h3>
            <h3>{task.day} </h3>
            <MdDeleteForever />
          </div>
        );
      })}
    </div>
  );
};

export default ShowTasks;
