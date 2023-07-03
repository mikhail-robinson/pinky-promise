import { FriendNames } from '../../../models/friends_models'

interface Props {
  friend: FriendNames
}

function FriendListItem(props: Props) {
  const { friend } = props

  return (
    <>
      <li>
        <p>{friend.friendName}</p>
      </li>
    </>
  )
}

export default FriendListItem
