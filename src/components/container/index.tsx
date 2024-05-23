import {children} from '@globalinterface'

function Index({children}:children) {
  return (
    <div className=' max-w-[1200px] mx-auto'>
        {children}
    </div>
  )
}

export default Index