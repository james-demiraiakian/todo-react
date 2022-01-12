import { checkError, client } from './client';

export async function fetchToDos() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}

export async function createToDo(task) {
  const resp = await client.from('todos').insert([{ task: task, user_id: client.auth.user().id }]);
  return checkError(resp);
}

export async function toggleComplete(id, is_complete) {
  const resp = await client.from('todos').update({ is_complete }).eq('id', id);
  return checkError(resp);
}

export async function deleteToDo(id) {
  const resp = await client.from('todos').delete().eq('id', id);
  return checkError(resp);
}
