import './style.scss'

export function UserCard({id, name, email, register, onClick}) {
  return (
    <div className="card-container" key={id}> 
    <div className="main-info">
      <b>
        {name}
      </b>
      {
        register ? (
          <span className="approved">
          </span>
        ) :
        <span className="rejected">  
        </span>
      }
    </div>
      <p>
        {email}
      </p>
      <button onClick={onClick}>Excluir</button>
    </div>
  )
}