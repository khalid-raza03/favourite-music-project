import Card from './Card'

function Cards({ users, handleRemoveData }) {
  return (
    <div className='w-full h1-full max-h-96 overflow-auto scrollbar-hide  bg-purple-300 px-8 py-4 rounded-2xl flex gap-6 justify-center  flex-wrap items-center mt-12'>
   
      {users.length === 0 && <h2 className='text-white font-bold text-xl md:text-2xl lg:text-3xl'>No Songs Added</h2>}
      {users.map((item, index) => (
        <Card key={index} user={item} handleRemoveData={() => handleRemoveData(index)} />
      ))}
    </div>
  )
}
  
export default Cards
