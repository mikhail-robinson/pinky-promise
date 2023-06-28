import { FormEvent, useState } from 'react'
import { user_draft } from '../../models/user_models'
import UserProfileForm from './UserProfileForm'

// interface Props {
//   loadWidgets: () => void
// }

function UserProfilePage() {
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    bio: '',
  } as user_draft)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    //add api function for posting info to db e.g. addUser
    //either use useNavigate to go to user home page or link
  }

  return (
    <>
      <UserProfileForm />
    </>
  )
}

export default UserProfilePage
