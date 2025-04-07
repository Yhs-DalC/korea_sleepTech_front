import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
  const {username} = useParams<{username: string}>();
  return (
    <div>{username}님의 프로필</div>
  )
}

export default Profile