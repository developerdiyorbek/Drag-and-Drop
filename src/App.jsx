import { useState } from "react";
import { COLUMNS, INITIALTASKS } from "./constants";
import Column from "./components/Column";
import { DndContext } from "@dnd-kit/core";

export default function App() {
  const [tasks, setTasks] = useState(INITIALTASKS);

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) return;
    const taskId = active.id;
    const newStatus = over.id;

    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }

  return (
    <div className="p-4">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex gap-8">
          {COLUMNS.map((column) => (
            <Column
              key={column.id}
              column={column}
              tasks={tasks.filter((task) => task.status === column.id)}
            />
          ))}
        </div>
      </DndContext>
    </div>
  );
}
