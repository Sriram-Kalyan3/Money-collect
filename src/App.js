import './App.css'

function HeaderTile(){
  return (
    <header className="App text-3xl h-16 bg-blue-500 m-1 p-1 underline">
      Money collect portal
    </header>
  )
}

function InputContainer(){
  return (
    <div className='m-1 bg-red-300 p-1'>
      <div className='m-1 '>
          <label htmlFor="personName" >Name of person : </label>
          <input type="text" id="personName" placeholder="Name of person" />
      </div>
    
      <div className='m-1 '>
          <label htmlFor="place">Place : </label>
          <input type="text" id="place" placeholder="Place" />
      </div>
      
      <div className='m-1 '>
          <label htmlFor="amount">Amount : </label>
          <input type="text" id="amount" placeholder="Amount" />
      </div>

      <div>
        <button className='m-1 bg-blue-400 p-1 rounded'
          >
          Submit
          </button>
      </div>
  
    </div>
  )
}

export default function App() {
  return (
    <>
    <HeaderTile />
    <InputContainer />
    </>
  )
}
