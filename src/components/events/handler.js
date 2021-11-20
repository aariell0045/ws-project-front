export const handleTextRenderer = (val, set) => set(val);

export async function postNewEvent(body) {
  const response = await fetch(
    `${process.env.React_App_HEROKU_SERVER_URL}/event`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...body,
      }),
    }
  );

  const event = await response.json();
  return event;
}

export async function deleteEvent(body) {
  await fetch(`${process.env.React_App_HEROKU_SERVER_URL}/event`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...body,
    }),
  });
}

export function filterEvents(item, target) {
  if (item._id === target._id) {
    return false;
  } else {
    return true;
  }
}
