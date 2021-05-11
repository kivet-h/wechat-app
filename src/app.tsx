import { Component } from 'react';
import { Provider } from 'react-redux';
import dva from '@/utils/dva';
import models from '@/utils/model';
import './app.less';

const app = dva.createApp({
  models,
  initialState: {},
  enableLog: true,
  onError(e) {
    console.error('===appError===', e);
  },
});

const store = app.getStore();

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
