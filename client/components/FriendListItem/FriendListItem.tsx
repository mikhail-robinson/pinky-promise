import { FriendNames } from '../../../models/friends_models'

interface Props {
  friend: FriendNames
}

function FriendListItem(props: Props) {
  const { friend } = props

  return (
    <>
      <div className="flex justify-center flex-col gap-4 mt-4 items-center mx-auto w-4/5">
        <div className="text-slate-50 flex-grow bg-slate-950 bg-opacity-50 rounded-lg flex items-center justify-between pt-4 pb-4 w-full">
          <li>
            <p className="ml-4 font-sans font-bold text-bold text-lg">
              {friend.friendName}
            </p>
          </li>
        </div>
      </div>
    </>
  )
}

export default FriendListItem
