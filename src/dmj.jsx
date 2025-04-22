import DMJLogo from './assets/DMJLogo.svg'

export default function dmj() {
  return (
      <div id ='dmj' className="min h-screen bg-black text-white flex flex-col justify-center items-center">
      <div className='flex flex-col md:flex-row items-center'>
        <div>
        <h1 className='text-2xl  md:text-4xl font-bold text-white text-left ml-4'>Netlab DMJ</h1>
        <div className='bg-gray-900 rounded-lg p-4 m-4'>
          <p className='text-md md:text-lg text-white max-w-4xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate neque beatae molestias adipisci, perferendis architecto optio blanditiis! Rerum
          </p>
          <p className='text-md md:text-lg text-white max-w-4xl'>porro esse quis recusandae eveniet consequatur doloribus cum harum, fuga facere odio! Dolores voluptatibus, animi quos voluptatum officiis doloremque aperiam.
          </p>
        </div>
        </div>
        <img src={DMJLogo} alt="dmj-logo" className='h-66 w-64 ml-4'/>
      </div>
    </div>
  )
}