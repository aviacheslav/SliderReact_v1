import React, {useState} from 'react';
import ImportantMessages from '../ImportantMessages';
import Message from '../Message';
import styles from './style.module.scss';

const messagesData = [
  {
    id: 1,
    text: 'Message 1 text (unimportant)',
    author: 'Author 1',
    isImportant: false,
  },
  {
    id: 2,
    text: 'Message 2 text (important)',
    author: 'Author 2',
    isImportant: true,
  },
  {
    id: 3,
    text: 'Message 3 text (important)',
    author: 'Author 3',
    isImportant: true,
  },
  {
    id: 4,
    text: 'This is new',
    author: 'Author 4',
    isImportant: false,
  },
];

function  MessageDashboard (props) {
    const [messages, setMessages] =useState({
        messages=structuredClone(messagesData)
    });
    const [isDirectSort, setIsDirectSort]=useState({
        isDirectSort=true
    });

    /*this.state = {
      messages: structuredClone(messagesData),
      isDirectSort: true,\*/

};
  

const sortMessages = () => {
    //const { messages, isDirectSort } = this.state;
    setIsDirectSort(isDirectSort)

    /*
      1. взяти масив с даними
      2. відсортувати його
      3. оновити стан
    */

    //const copy = structuredClone(messages);
    setMessages(structuredClone(messages));

    copy.sort((a, b) => {
      if (isDirectSort) {
        // якщо треба айді по спаданню
        return b.id - a.id;
      }

      // якщо треба айді по зростанню
      return a.id - b.id;
    });

    this.setState({
      messages: copy,
      isDirectSort: !isDirectSort,
    });
  };

  mapMessages = (message, index, arr) => (
    <Message
      key={message.id}
      {...message}
      makeImportant={this.makeImportant}
    />
  );

  makeImportant = (id) => {
    const { messages } = this.state;

    const newMessages = [];

    for (let i = 0; i < messages.length; i++) {
      const message = structuredClone(messages[i]);

      if (message.id === id) {
        message.isImportant = true;
      }

      newMessages.push(message);
    }

    this.setState({
      messages: newMessages,
    });
  };

  filterImportantMessages = (message) => message.isImportant;

  render() {
    const { messages, isDirectSort } = this.state;
    const importantMessagesArr = messages.filter(this.filterImportantMessages);
    const messagesArray = messages.map(this.mapMessages);

    return (
      <>
        <div>
          <p className={styles.display}>
            Sort order is {isDirectSort ? 'direct' : 'reversed'}
          </p>
          <button className={styles.btn} onClick={this.sortMessages}>
            Reverse order
          </button>
        </div>
        <div>
          <ImportantMessages messages={importantMessagesArr} />
        </div>
        {messagesArray}
      </>
    );
  }
}

export default MessageDashboard;
