import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class Home extends Component {
  state = {
    searchInput: '',
    isFirstEmpty: true,

    listOfChars: [],
  }

  onAdd = () => {
    this.setState(prevState => ({
      isFirstEmpty: false,

      searchInput: '',
      listOfChars: [
        ...prevState.listOfChars,
        {
          value: prevState.searchInput,
          length: prevState.searchInput.length,
        },
      ],
    }))
  }

  onType = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, isFirstEmpty, listOfChars} = this.state
    return (
      <div className="bg-cont">
        <div className="content-cont">
          <div className="first-cont">
            <div className="text-cont">
              <h1 className="txt">Count the characters like a Boss...</h1>
            </div>
            {isFirstEmpty ? (
              <img
                className="main-img"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            ) : (
              <ul className="list-cont">
                {listOfChars.map(each => (
                  <li key={uuidv4()}>
                    <p className="counter">
                      {each.value}: {each.length}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="second-cont">
            <h1 className="title">Character Counter</h1>
            <form className="input-cont">
              <input
                type="text"
                className="input"
                onChange={this.onType}
                value={searchInput}
                placeholder="Enter the Characters here"
              />
              <button
                type="button"
                className="btn"
                data-testid="add"
                onClick={this.onAdd}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
