import './App.css';
import Sidebar from './components/sidebar/Sidebar.component';
import Home from './components/home/Home.component';
import GroupsList from './components/groups-list/Groups-list.component';
import { Route } from 'react-router-dom';
import Group from './components/group/Group.component';
import AddGroup from './components/add-group/AddGroup.component';
import MessagesStock from './components/messages-stock/messages-stock.component';
import SendMessagePart2 from './components/send-message-part-2/send-message-part-2.component';
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

      <Route exact path='/Group' render={() => {
        return (
          <Group />
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
      </div>
      
  );
}

export default App;
