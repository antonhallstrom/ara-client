import { useState, useEffect } from 'react'
const ChatAPI = {
  subscribeToFriendStatus: (id, cb) => {
    return cb({ isOnline: true })
  },
  unsubscribeFromFriendStatus: (id, cb) => {
    return cb({ isOnline: false })
  },
}

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null)

  function handleStatusChange(status) {
    setIsOnline(status.isOnline)
  }

  useEffect(
    () => {
      // Will be different on every render.
      ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange)

      return () =>
        ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange)
    },
    [friendID]
  )

  return isOnline
}

export default useFriendStatus
