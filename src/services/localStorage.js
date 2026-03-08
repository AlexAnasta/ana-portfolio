// Service for managing sessionStorage
const localSession = {
  // Set a value in sessionStorage
  set: (key, value) => {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting sessionStorage key "${key}":`, error);
    }
  },

  // Get a value from sessionStorage
  get: (key) => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error getting sessionStorage key "${key}":`, error);
      return null;
    }
  },

  // Remove a value from sessionStorage
  remove: (key) => {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing sessionStorage key "${key}":`, error);
    }
  },

  // Clear all sessionStorage
  clear: () => {
    try {
      sessionStorage.clear();
    } catch (error) {
      console.error('Error clearing sessionStorage:', error);
    }
  }
};

export default localSession;