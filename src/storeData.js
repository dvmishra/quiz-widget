export const storeData = (storageKey, data) => {
  const values = localStorage.getItem(storageKey);
  if (values !== null) {
    const updateScores = JSON.parse(values);
    updateScores.push({
      ...data,
    });
    localStorage.setItem(storageKey, JSON.stringify(updateScores));
  } else {
    const newScores = [{ ...data }];
    localStorage.setItem(storageKey, JSON.stringify(newScores));
  }
  return JSON.parse(localStorage.getItem(storageKey));
};

export const clearData = (storageKey) => {
  const values = localStorage.getItem(storageKey);
  if(values !== null){
    localStorage.removeItem(storageKey);
    return true;
  }
  return false;
}
