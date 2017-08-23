import { AppContainer } from 'react-hot-loader';

export default class HotLoadSupport extends React.Component {
    render() {
        let { children } = this.props;

        return (
            <AppContainer>
                { children }
            </AppContainer>
        );
    }
}
