import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";

const ShowTasks = ({ tasks, setTasks }) => {
  const [done, setDone] = useState(true);

  const handleClick = (e) => {
    if (done) {
      e.target.classList.add("done");
      setDone(!done);
    } else {
      e.target.classList.remove("done");
      setDone(!done);
    }
  };

  const handleDelete = (e) => {
    setTasks(tasks.filter((item) => item.id !== e));
  };
  return (
    <div>
      <div className="task" onClick={handleClick}>
        {tasks?.map((item) => {
          const { id, task, day } = item;
          return (
            <div key={id} className="task-div">
              <h3>{task} </h3>
              <h3>{day} </h3>
              <MdDeleteForever
                size={25}
                color="red"
                onClick={() => handleDelete(id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowTasks;
