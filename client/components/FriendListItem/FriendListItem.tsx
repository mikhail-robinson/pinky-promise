import { FriendNames } from '../../../models/friends_models'

interface Props {
  friend: FriendNames
}

function FriendListItem(props: Props) {
  const { friend } = props

  return (
    <>
      <div className="flex justify-center flex-col gap-4 mt-4 items-center">
        <div className="text-slate-50 flex-grow bg-slate-950 bg-opacity-25 rounded-l-lg flex items-center justify-between w-80 mb-4 pt-4 pb-4">
          <li>
            <p className="ml-4">{friend.friendName}</p>
          </li>
        </div>
      </div>
    </>
  )
}

export default FriendListItem
