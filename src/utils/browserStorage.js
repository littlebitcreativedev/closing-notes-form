// src/utils/browserStorage.js
export const isBrowser = () => typeof window !== 'undefined'

export const getStorageItem = (key) => {
  if (isBrowser()) {
    try {
      return JSON.parse(window.localStorage.getItem(key))
    } catch {
      return null
    }
  }
  return null
}

export const setStorageItem = (key, value) => {
  if (isBrowser()) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch {
      return false
    }
  }
  return false
}

export const removeStorageItem = (key) => {
  if (isBrowser()) {
    try {
      window.localStorage.removeItem(key)
      return true
    } catch {
      return false
    }
  }
  return false
}