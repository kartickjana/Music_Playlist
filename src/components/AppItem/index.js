import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const AppItem = props => {
  const {details, deleteSong} = props
  const {id, name, imageUrl, genre, duration} = details

  const onClickDeleteSong = () => {
    deleteSong(id)
  }

  return (
    <li className="appList">
      <div className="playList">
        <div className="genreCom">
          <img src={imageUrl} alt="track" className="image" />
          <div>
            <p className="name">{name}</p>
            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="deleteContainer">
          <p className="duration">{duration}</p>
          <button
            className="button"
            data-testid="delete"
            type="button"
            onClick={onClickDeleteSong}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </li>
  )
}

export default AppItem
