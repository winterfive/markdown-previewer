const userInput = `

### Headers

# header1
## header2
### header3

`

class MyApp extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        text: userInput
      }
    }
  
    render() {
        return (
          <div>
            <h1>Markdown Previewer</h1>
            <div className="leftArea">
              <textarea id="editor" />
            </div>
            <div className="rightArea">
              <p id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.text)}} />
            </div>
          </div>
          
        )
    }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
