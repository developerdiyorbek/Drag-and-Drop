import { useDraggable } from "@dnd-kit/core";

function TaskCard({ task }) {
  const { attributes, setNodeRef, listeners, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="cursor-grab rounded-lg bg-neutral-600 p-4 shadow-sm hover:shadow-md"
    >
      <p className="font-medium text-neutral-100">{task.title}</p>
    </div>
  );
}

export default TaskCard;
