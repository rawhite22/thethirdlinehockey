import { RequestContext } from '../context/RequestsContext'
import { useContext } from 'react'

export const useRequestContext = () => {
  const context = useContext(RequestContext)
  if (!context) {
    throw new Error('useRequest must be used inside an RequestContextProvider')
  }
  return context
}
