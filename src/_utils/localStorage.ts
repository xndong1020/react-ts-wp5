import { isNil } from 'lodash'
import { AnyObject } from 'yup/lib/types'

/**
 *
 * @param key
 * @param state
 * @ Set data into local storage
 */
export const setItem = (key: string, state: AnyObject | string): void => {
  try {
    const serializedState =
      typeof state === 'string' ? state : JSON.stringify(state)
    localStorage.setItem(key, serializedState)
  } catch (e) {}
}

/**
 *
 * @param key
 * @returns local storage key value
 */

export const getItem = <T>(key: string): T | null => {
  try {
    const serializedState = localStorage.getItem(key)
    if (isNil(serializedState)) return null
    try {
      return JSON.parse(serializedState) as T
    } catch {
      return null
    }
  } catch (e) {
    return null
  }
}

/**
 *
 * @param key
 * @ remove item from localstorage
 */

export const removeItem = (key: string): void => {
  localStorage.removeItem(key)
}
