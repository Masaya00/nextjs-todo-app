import fetch from "node-fetch";

// 全てのタスクを取得している
export async function getAllTaskData() {
  const res = await fetch (
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/list-task`)
  );
  const tasks = await res.json();
  const staticfilteredTasks = tasks.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  return staticfilteredTasks
}

// 全てのタスクのidを取得している
export async function getAllTaskIds() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/list-task`)
  );
  const tasks = await res.json();
  return tasks.map((task) => {
    return {
      params: {
        id: String(task.id),
      }
    }
  })
}

// 個別のタスクを取得している
export async function getTaskData(id) {
  const res = await fetch(new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/detail-task/${id}/`));
  const task = await res.json();
  return task;
}
