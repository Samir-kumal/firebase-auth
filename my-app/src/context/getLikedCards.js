export const getLikedItems = async () => {
  try {
    const likedItems = await AsyncStorage.getItem('likedItems');
    return likedItems !== null ? JSON.parse(likedItems) : [];
  } catch (error) {
    console.error('Error retrieving liked items:', error);
    return [];
  }
};