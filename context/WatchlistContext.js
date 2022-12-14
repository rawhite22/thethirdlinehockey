import { createContext, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import axios from 'axios'
export const WatchlistContext = createContext()
export const WatchlistContextReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WL':
      return { ...state, watchlist: action.payload }
    case 'ADD_PLAYER':
      return { ...state, watchlist: [...state.watchlist, action.payload] }
    case 'REMOVE_PLAYER':
      return { ...state, watchlist: action.payload }
    case 'WATCHLIST_FULL':
      return { ...state, watchlistError: 'Watchlist is limited to five spots' }
    case 'RESET_WATCHLIST_ERROR':
      return { ...state, watchlistError: null }
    default:
      return state
  }
}
export const WatchlistContextProvider = ({ children, component }) => {
  const { data: session } = useSession()
  const [state, dispatch] = useReducer(WatchlistContextReducer, {
    watchlist: [],
    watchlistError: null,
  })
  const { events } = useRouter()
  useEffect(() => {
    const getWL = async () => {
      const res = await axios.get('/api/watchlist')
      dispatch({ type: 'SET_WL', payload: res.data })
    }
    if (session) {
      getWL()
    }
  }, [session])
  return (
    <WatchlistContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WatchlistContext.Provider>
  )
}
