export const getUltimos = async () => {
  const resp = await fetch("http://localhost:3005/ultimos");
  const data = await resp.json();

  return data;
};
