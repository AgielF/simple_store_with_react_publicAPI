import React from 'react'
import { useLogin } from '../hooks/useLogin'

function ProfilePage() {
    const username=useLogin()



  return (
    <div>
      <h1>profile</h1>
      username:{username}
    </div>
  )
}

export default ProfilePage
