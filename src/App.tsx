import React, { FormEvent, useEffect, useState } from 'react';
import { idText } from 'typescript';
import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import Greet from './components/Greet';
import { Input } from './components/input';
import Person from './components/Person';
import { PersonList } from './components/PersonList';
import { Counter } from './components/State/Counter';
import { ThemeContextProvider } from './components/context/ThemeContxt';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { DomRef } from './components/Ref/DomRef';
import { MutableRef } from './components/Ref/MutableRef';
import ClassCounter from './components/class/ClassCounter';
import { Private } from './components/auth/Private';
import { profile } from 'console';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNum';
import { Toast } from './components/templateLiterals/Toast';



function App() {
  const   personName={
    first: 'bruce',
    last : 'wayne'
  }

  const nameList =[
    {
      first: 'bruce',
    last : 'wayne'
    },
    {
      first: 'clark',
    last : 'kent'
    },
    {
      first: 'princess',
    last : 'diana'
    }

  ]

  return (
    <div className="App">
      <Greet name='pravin' email='prp@gmail.com' msg={0} IsActive={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Button handleClick={(event, id) =>{
        console.log('button clicked',event, id);
        
      }} />
      <Input value='' handleChange={event => console.log(event)}/>
      <Container styles={{border :'1px solid black', padding:'1rem'}} />
      <Counter />
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <UserContextProvider>
        <User/>
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <ClassCounter message='the count value is ' />
      {/* <List items={['batman','superman','wonderWomen']} onClick={(item) => console.log(item)} />
      <List items={[1,2,3]} onClick={(item) => console.log(item)} /> */}
      {/* <List items={[
    {
      id: 1,
      first: 'bruce',
    last : 'wayne'
    },
    {
      id: 2,
      first: 'clark',
    last : 'kent'
    },
    {
      id: 3,
      first: 'princess',
    last : 'diana'
    }

  ]} onClick={(item) => console.log(item)} /> */}
  {/* <RandomNumber value={-} isPositive/> */}
  <Toast position="center-bottom"/>
    </div>
  );
}

export default App;
