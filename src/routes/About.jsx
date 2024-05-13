function About() {
  return (
    <main className="about">
      <h2>About the Zoo Application</h2>
      <h3>Information about the project:</h3>
      <p>
        This is a school project to learn React Basic. BCH (Business College
        Helsinki) has given us this project so that we can learn react basic.
        What I have learned from this project work.
      </p>
      <ol>
        <li> Learn to make function components</li>
        <li> How to import own modules third party modules</li>
        <li>Usage of React Router, Link, NavLink </li>
      </ol>

      <h3>How to use the app: </h3>
      <p>
        <ol>
          <li> Select a Zoo category on the home page</li>
          <li>
            {' '}
            Click +(plus Icon) to increase likes or - icon to decrease likes
          </li>
          <li> Click See more button to see the detail page</li>
        </ol>
      </p>
    </main>
  );
}

export default About;
