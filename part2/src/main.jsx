import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/*
const promise = axios.get('http://localhost:3001/notes')
console.log(promise)

//const promise2 = axios.get('http://localhost:3001/foobar')
//console.log(promise2)

promise.then(response => {
  console.log(response)
})

axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  console.log(notes)
})

axios
.get('http://localhost:3001/notes')
.then(response => {
  const notes = response.data
  console.log(notes);
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App/>
  </StrictMode>,
)

axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
})
*/

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
