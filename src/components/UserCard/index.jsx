import './style.scss'

export function UserCard({name, email, register, onClick}) {
  return (
    <div className="card-container"> 
    <div className="main-info">
      <b>
        {name}
      </b>
          <span className={register ? "approved" : "rejected"}>
          </span>
    </div>
      <p>
        {email}
      </p>
      <button onClick={onClick}>Excluir</button>
    </div>
  )
}