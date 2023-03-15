import { useState } from "react"
import { useDispatch } from "react-redux"
import {createChore} from '../features/chores/choreSlice'

function ChoreForm() {
    const [text, setText] = useState('')

const dispatch = useDispatch();

const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createChore({text}))
    setText('')
}
  return ( 
  <section className="form">
    <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="text">Chore</label>
            <input type="text" name="text" id="text" value={text} onChange={e => setText(e.target.value)}/>
        </div>
        <div className="form-group">
            <button className="btn btn-block" type="submit">Add Chore</button>
        </div>
    </form>
  </section>
  )
}

export default ChoreForm