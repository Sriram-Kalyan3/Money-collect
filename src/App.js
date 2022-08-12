import {useState} from 'react';

function HeaderTile(){
  return (
    <header className="text-3xl h-16 bg-blue-500 m-1 p-1 underline">
      Money collect portal
    </header>
  )
}

function InputContainer(){
  var clearData = {
    name : '',
    place : '',
    amount : ''
  }
  let [formData, setFormData] = useState(clearData)
  
  function storeInDb(){
    console.log(formData)
    setFormData(clearData)
  }
  return (
    <div className='m-1 bg-red-300 p-1'>
      <div className='m-1 '>
          <label htmlFor="personName" >Name of person : </label>
          <input type="text" id="personName" placeholder="Name of person" required
            value={formData.name}
            onChange={(event)=>{setFormData({...formData,name : event.target.value.trim()})}}/>
      </div>
    
      <div className='m-1 '>
          <label htmlFor="place">Place : </label>
          <input type="text" id="place" placeholder="Place" 
            value={formData.place}
            onChange={(event)=>{setFormData({...formData,place : event.target.value.trim()})}}/>
      </div>
      
      <div className='m-1 '>
          <label htmlFor="amount">Amount : </label>
          <input type="text" id="amount" placeholder="Amount" required
            value={formData.amount}
            onChange={(event)=>{
              setFormData({...formData,amount : event.target.value.trim()})}}
            onKeyUp ={(event)=>{
              if(event.key === 'Enter'){
                storeInDb()
              }
            }}              
          />
            
      </div>

      <div>
        <button className='m-1 bg-blue-400 p-1 rounded'
          onClick={storeInDb}>
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
