import Pledge from '../Pledge/Pledge'

function PromiseDetailPage() {
  const pledge = {
    promiseName: 'name',
    promiseDescription: 'text',
    userId: '1',
    friendUserId: '3',
    status: 'pending',
  }

  return <Pledge promise={pledge} />
}

export default PromiseDetailPage
