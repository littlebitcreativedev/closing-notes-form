// src/utils/browser-check.js or browserStorage.js

// Make isBrowser a constant instead of a function for better performance
export const isBrowser = typeof window !== 'undefined'

// Add session storage handling and type checking
export const storage = {
  local: {
    getItem: (key) => {
      if (isBrowser) {
        try {
          const item = window.localStorage.getItem(key)
          return item ? JSON.parse(item) : null
        } catch (error) {
          console.warn(`Error reading localStorage key "${key}":`, error)
          return null
        }
      }
      return null
    },

    setItem: (key, value) => {
      if (isBrowser) {
        try {
          window.localStorage.setItem(key, JSON.stringify(value))
          return true
        } catch (error) {
          console.warn(`Error setting localStorage key "${key}":`, error)
          return false
        }
      }
      return false
    },

    removeItem: (key) => {
      if (isBrowser) {
        try {
          window.localStorage.removeItem(key)
          return true
        } catch (error) {
          console.warn(`Error removing localStorage key "${key}":`, error)
          return false
        }
      }
      return false
    },

    clear: () => {
      if (isBrowser) {
        try {
          window.localStorage.clear()
          return true
        } catch (error) {
          console.warn('Error clearing localStorage:', error)
          return false
        }
      }
      return false
    }
  },

  session: {
    getItem: (key) => {
      if (isBrowser) {
        try {
          const item = window.sessionStorage.getItem(key)
          return item ? JSON.parse(item) : null
        } catch (error) {
          console.warn(`Error reading sessionStorage key "${key}":`, error)
          return null
        }
      }
      return null
    },

    setItem: (key, value) => {
      if (isBrowser) {
        try {
          window.sessionStorage.setItem(key, JSON.stringify(value))
          return true
        } catch (error) {
          console.warn(`Error setting sessionStorage key "${key}":`, error)
          return false
        }
      }
      return false
    },

    removeItem: (key) => {
      if (isBrowser) {
        try {
          window.sessionStorage.removeItem(key)
          return true
        } catch (error) {
          console.warn(`Error removing sessionStorage key "${key}":`, error)
          return false
        }
      }
      return false
    },

    clear: () => {
      if (isBrowser) {
        try {
          window.sessionStorage.clear()
          return true
        } catch (error) {
          console.warn('Error clearing sessionStorage:', error)
          return false
        }
      }
      return false
    }
  }
}

// Keep your existing functions for backward compatibility
export const getStorageItem = storage.local.getItem
export const setStorageItem = storage.local.setItem
export const removeStorageItem = storage.local.removeItem

// Add a utility function to check storage availability
export const isStorageAvailable = (type) => {
  if (!isBrowser) return false
  
  try {
    const storage = window[type]
    const x = '__storage_test__'
    storage.setItem(x, x)
    storage.removeItem(x)
    return true
  } catch (e) {
    return false
  }
}