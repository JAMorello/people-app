export const fetchData = async (link) => {
  const response = await window.fetch(link);
  if (!response.ok) {
    throw new Error("NO DATA");
  } else {
    return await response.json();
  }
};
