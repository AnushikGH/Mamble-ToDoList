import "./App.scss"

export default function Modal({onModal}) {
   
  return (
    <div className='modal'>
      <h2>Are you sure you want to delete?</h2>
      <button onClick={()=>onModal(true)}>Yes</button>
      <button onClick={()=>onModal(false)}>No</button>
    </div>
  )
}
