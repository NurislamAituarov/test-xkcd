export async function getRandomComicId() {
  const random = Math.floor(Math.random() * 2784);
  const apiUrl = `https://xkcd.com/${random}/info.0.json`;
  const res = await fetch(apiUrl).then((res) => res.json());

  return res;
}
export async function getComicId(id) {
  const apiUrl = `https://xkcd.com/${id}/info.0.json`;
  const res = await fetch(apiUrl).then((res) => res.json());

  return res;
}
