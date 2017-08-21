var Index = () => {
    return (
        <div>
          <h1>hello Go!</h1>

        </div>
    );
};

var About = () => {
        return (
            <div>
              <h1>hello about!</h1>
              <Link to='/index'>Index</Link>
            </div>
        );
    };

export default class App extends React.Component{
    render() {
        return (
            <h2>hello -- world</h2>
        );
    }
}
