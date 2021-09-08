import './App.css';
import Sidebar from './components/sidebar/Sidebar.component';
import Home from './components/home/Home.component';
import GroupsList from "./components/groups-list/groups-list.component"
import { Route } from 'react-router-dom';
import AddGroup from './components/add-group/AddGroup.component';
import MessagesStock from './components/messages-stock/messages-stock.component';
import SendMessagePart2 from './components/send-message-part-2/send-message-part-2.component';

import SendMessagePart1 from './components/send-message-part-1/send-message-part-1.component';
import SendMessagePart3 from './components/send-message-part-3/send-message-part-3.component';

function App() {
  return (
    <div className="App">
      <div id='background' ></div>
      <div className='sidebar'></div>
      <Sidebar />
      <Route exact path='/Home' render={() => {
        return (
          <Home />
        )
      }} />
      <Route exact path='/Groups' render={() => {
        return (
          <GroupsList />
        )
      }} />

      <Route exact path='/AddGroup' render={() => {
        return (
          <AddGroup />
        )
      }} />
      <Route exact path='/MessagesStock' render={() => {
        return (
          <MessagesStock />
        )
      }} />

      <Route exact path='/SendMessagePart2' render={() => {
        return (
          <SendMessagePart2 />
        )
      }} />

      <Route exact path='/SendMessagePart1' render={() => {
        return (
          <SendMessagePart1 />
        )
      }} />
      <Route exact path='/SendMessagePart3' render={() => {
        return (
          <SendMessagePart3 />
        )
      }} />


      </div>
      
  );
}

export default App;
