function App(){
  const title = 'Blog Post'

  const body = 'This is my blog post. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, numquam.'
  
  const comments = [
    { id: 1, text: 'Comment 1'},
    { id: 2, text: 'Comment 2'},
    { id: 3, text: 'Comment 3'}
  ]

  const loading = false
  if(loading) return <h1>Loading...</h1>

  const showComments = true

  const commentBlock = (
    <>
      <h3>Comments - ({comments.length})</h3>
      <ul>
        {comments.map(( comment, index) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </>
  )


  return (
    <>
      <h1>Hello again from the app component</h1>
      <p>JSX elements need a parent element</p>

      <h2>{title.toUpperCase()}</h2>
      <p>{body}</p>
      <p>{ 5 + 5}</p>

      {/* {showComments ? 'Yes, show comments': 'No, dont show comments'}  */}

      {/* If showComments is true, display comments */}
      {showComments && commentBlock} 
    </>
  )
}

export default App

/*
Variations on Conditional

{showComments ? (
  <>
    <h3>Comments - ({comments.length})</h3>
    <ul>
      {comments.map(( comment, index) => (
        <li key={comment.id}>{comment.text}</li>
      ))}
    </ul>
  </>
): `No, Do not show comments!`} 

{showComments ? (
  <>
    <h3>Comments - ({comments.length})</h3>
    <ul>
      {comments.map(( comment, index) => (
        <li key={comment.id}>{comment.text}</li>
      ))}
    </ul>
  </>
): null } 
*/