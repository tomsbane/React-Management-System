import { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
 {
    'id': 1,
    'image': 'https://picsum.photos/64/64',
    'name':'김진일',
    'birthday': '960614',
    'gender': '남자',
    'job': '대학생'
 },

 {
    'id': 2,
    'image': 'https://picsum.photos/64/64',
    'name':'나동빈',
    'birthday': '961222',
    'gender': '여자',
    'job': '대학원생'
 },
 {
    'id': 3,
    'image': 'https://picsum.photos/64/64',
    'name':'김진빈',
    'birthday': '960815',
    'gender': '남자',
    'job': '대학교수'
 }
]

class App extends Component{
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
            )
          })
        }
      </div>
    )
  }
}
export default App;
