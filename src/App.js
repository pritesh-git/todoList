const App = () => {
  const [val, setVal] = useState('')
  const [list, setList] = useState([])

  const handleSubmit = evnt => {
    if (val !== '') {
      setList(prevValue => {
        return [...prevValue, val]
      })
      setVal('')
    }
  }
  const itemEvent = event => {
    setVal(event.target.value)
  }

  const handleRemove = evnt => {
    var temp = list
    temp.splice(evnt.target.id, 1)
    setList([...temp])
  }

  return (
    <div className="main">
      <div className="form">
        <input type="text" value={val} onChange={itemEvent} />
        <button onClick={handleSubmit}> + </button>
      </div>
      <ol>
        {list.map((val, i) => (
          <li id={i}>
            <button id={i} onClick={handleRemove}>
              X
            </button>
            {val}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default App
