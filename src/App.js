import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';
import DeleteNote from './pages/DeleteNote';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="text-3xl font-bold underline">Note Taking App</h1>
        </header>
        <main className="container mx-auto">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={CreateNote} />
            <Route path="/edit/:id" component={EditNote} />
            <Route path="/delete/:id" component={DeleteNote} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;