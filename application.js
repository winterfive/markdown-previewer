const userInput = `

### Headers

# Header1
## Header2
### Header3
#### Header4
##### Header5
###### Header6

### Lists

- one
- two
- three
  - one
  - two

1. one
2. two
3. three

### Text Styling

**bold**
__bold__
*italic*
_italic_

### Blcok Quote

> For every action, there is an equal and opposite criticism.
> Steven Wright

### Images

![Image of Cat Loaf](https://www.dropbox.com/s/dxc1f7ij5ek9epp/catLoaf.jpg?dl=1 'Cat Loaf')

### Links

[GitHub](www.github.com)
[LeeGainer.com](www.leegainer.com)

### Inline Code

\`const x = something;\`

### Code Block

\`\`\`
const x = stuff;
let y = things;
\`\`\`
`

marked.setOptions({
  breaks: true
})

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: userInput
    };
  }
  
  handleChange = event => this.setState({ text: event.target.value })

  render() {
    return (
      <div>
        <p id="header">Markdown Preview</p>
        <div className="container">          
          <div id="leftArea">
            <textarea id="editor" value={this.state.text} onChange={this.handleChange} placeholder="type here"/>
          </div>
          <div id="rightArea">
            <p
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked(this.state.text) }}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
