import Header from "./components/Header"

function App(){
  return (
    <>
      
      <Header bgColor='red' textColor='white'/> {/* Takes value from defaultProps*/}
      
      <Header text="Feedback UI - Prop"/>
      
      <div className="container">
        <h1>Feedback UI - App</h1>
      </div>
      
    </>
  )
}

export default App
