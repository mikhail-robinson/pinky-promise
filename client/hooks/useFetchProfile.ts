import { useQuery } from 'react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { getUser } from '../apis/user'

function useFetchUser() {
  const { user, getAccessTokenSilently } = useAuth0()

  const { data, isLoading } = useQuery({
    queryKey: 'getUser',
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      if (user && user.sub) {
        const response = await getUser(accessToken)
        return response
      }
    },
  })

  return { data, isLoading }
}

export default useFetchUser
