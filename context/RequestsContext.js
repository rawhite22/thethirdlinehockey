import { createContext, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export const RequestContext = createContext()
export const RequestContextReducer = (state, action) => {
  switch (action.type) {
    case 'PAGE_TRANSITION_STARTED':
      return { ...state, pageTransition: true }
    case 'PAGE_TRANSITION_COMPLETED':
      return { ...state, pageTransition: false }
    default:
      return state
  }
}
export const RequestContextProvider = ({ children, component }) => {
  const { data: session } = useSession()
  const [state, dispatch] = useReducer(RequestContextReducer, {
    pageTransition: false,
  })
  const { events } = useRouter()
  useEffect(() => {
    const handleStart = () => {
      dispatch({ type: 'PAGE_TRANSITION_STARTED' })
    }
    const handleComplete = () => {
      dispatch({ type: 'PAGE_TRANSITION_COMPLETED' })
    }

    events.on('routeChangeStart', handleStart)
    events.on('routeChangeComplete', handleComplete)
  }, [session])
  return (
    <RequestContext.Provider value={{ ...state, dispatch }}>
      {children}
    </RequestContext.Provider>
  )
}
