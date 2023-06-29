import Promise from './Promise'

function PromiseDetailPage() {
  const promise = {
    promiseName: 'name',
    promiseDescription: 'text',
    userId: '1',
    friendUserId: '3',
    status: 'pending',
    
  }

  return <Promise props={promise} />
}

export default PromiseDetailPage
