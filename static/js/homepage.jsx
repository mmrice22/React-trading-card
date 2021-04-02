"use strict";

function Homepage() {
  return (
    <div>
      <h2>Welcome to our Page</h2>
      <a href= "/cards">Go to our Cards page</a>
      <img src = "/static/img/balloonicorn.jpg"/>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
/* 1. First parameter <Homepage />  the component
you want to render using JSX syntax 
 2. the second parameter document.querySelector('#app') 
 is where we want to mount the component. This should be
 a HTMLElement object. In this case we are grabing the element
 with the id 'app'*/

 /* to edit the homepage component, you must edit the return
 value of the above function Homepage() */