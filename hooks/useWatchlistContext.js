import { WatchlistContext } from '../context/WatchlistContext'
import { useContext } from 'react'

export const useWatchlistContext = () => {
  const context = useContext(WatchlistContext)
  if (!context) {
    throw new Error(
      'useWatchList must be used inside an WatchlistContextProvider'
    )
  }
  return context
}
