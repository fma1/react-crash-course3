import '../App.css';

function App() {
  return (
    <>
      {/*
      <h1>Hello Conner</h1>
      <h1>Hello Chris</h1>
      */}
      {/*
      <Hello name="Conner" />
      <Hello name="Clement" />
      <Hello />
      */}
      <Comment username="Conner" time={(new Date()).toString()}>
        <h1>Hello World</h1>
        <p>This is a comment</p>
      </Comment>
    </>
  );
}

function Hello({name = 'User'}) {
  return <h1>Hello {name}</h1>;
}

// Very uncommon but same as {name = 'User'}
/*
Hello.defaultProps = {
  name: 'User'
};
*/

function Comment({username, time, children}) {
  return (
    <section>
      <p>{username} commented at {time}</p>
      <blockquote>
        {children}
      </blockquote>
    </section>
  );
}

export default App;
