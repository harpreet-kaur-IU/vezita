import Sidebar from "../modules/Sidebar"

const Base = (props) => {
  return (
    <div className="d-flex">
        <Sidebar></Sidebar>
        <main className="main-class">
          {props.children}
        </main>
    </div>
  )
}

export default Base