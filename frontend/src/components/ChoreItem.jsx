import { useDispatch } from "react-redux"
import {deleteChore} from "../features/chores/choreSlice"

function ChoreItem({chore}) {

    const dispatch = useDispatch()
  return (
    <div className="chore">
        <div>
            {new Date(chore.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{chore.text}</h2>
        <button className="close" onClick={() => dispatch(deleteChore(chore._id))}>X</button>
    </div>
  )
}

export default ChoreItem