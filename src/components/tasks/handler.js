export async function fetchTasks(userId) {
	const response = await fetch(`${process.env.React_App_HEROKU_SERVER_URL}/task/${userId}`);
	const allTasks = await response.json();
	return allTasks;
}

export async function postNewTask(body) {
	console.log(body);
	const response = await fetch(`${process.env.React_App_HEROKU_SERVER_URL}/task`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body),
	});
	console.log(response);
	const newTask = await response.json();
	return newTask;
}

export async function removeTask(body) {
	await fetch(`${process.env.React_App_HEROKU_SERVER_URL}/task`, {
		method: "DELETE",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body),
	});
}

export const inputRenderer = (val, set) => set(val);
export const textAreaRenderer = (val, set) => set(val);
export const clearState = (type, set) => set(type);
