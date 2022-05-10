import Character from './components/Character';
import Characters from './views/Characters';
import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Switch>
      <Route path="/:id">
        <Character />
      </Route>
      <Route path="/">
        <Characters />
      </Route>
    </Switch>
  );
}
