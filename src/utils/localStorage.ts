export const loadFromLocalStorage = (key: string) => {
  try {
    const storedData = localStorage.getItem(key);

    if (!storedData) {
      return null;
    }

    const paresedData = JSON.parse(storedData);

    return paresedData;
  } catch (error: any) {
    console.error('Failed to load data from localStorage:', error);

    return null;
  }
};

export const updateLocalStorage = (key: string, data: any) => {
  try {
    const preparedData = JSON.stringify(data);

    localStorage.setItem(key, preparedData);
  } catch (error: any) {
    console.error('Failed to update localStorage:', error);
  }
};

export const removeFromLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error: any) {
    console.error('Failed to remove data from localStorage:', error);
  }
};
