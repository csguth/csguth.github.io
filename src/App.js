import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link> (<a href="mailto:csguth@gmail.com">csguth &lt;at&gt; gmail &lt;dot&gt; com</a>)
            </li>
            <li>
              <Link to="/employment">Employment</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/music">Music</Link>
            </li>
            <li>
              <Link to="/social">Social</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/employment">
            <Employment />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
          <Route path="/social">
            <Social />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section>
      <h2>Home</h2>
      <p>Hi,</p>
      <p>My name is Chrystian Guth and I am a master in Computer Science. C++ is the programming language I'm most confortable of working with, however every now and then I challenge myself on trying new tools.</p>
      <p>I currently live in <a href="https://goo.gl/maps/43V6QZXBvirCwfABA" target="blank">Florianópolis</a> but soon I'll be moving to <a href="https://goo.gl/maps/43V6QZXBvirCwfABA">Eindhoven</a> to work for <a href="https://www.yer.com/" target="blank">YER</a>.</p>
      <p>Besides Computer Science, I'm also interested in listening to and making music (electric guitar is my main instrument), playing online games and travelling.</p>
      <p>Although you can reach me on any of my social network profiles, you'll certainly find me at GMail.</p>
      <p>I'll try to keep this page updated. My resume can be downloaded <a href="resume.pdf">in this link</a>.</p>
    </section>
  );
}

function mapping(x) {
  let roles = x.roles.map(function(y){
    return (
      <li>
        <p>{y.title}</p>
        <p>{y.start} - {y.end}</p>
      </li>
    );
  });
  return (<li>
    <p><strong>{x.company}</strong></p>
    <p>{x.location}</p>
    <ol>{roles}</ol>
    </li>
  );
}

function Employment() {
  let employment_data = [
    {
      company: "Communication Security Group (CSG)",
      location: "Florianópolis - Brazil",
      roles: [
        {
          title:  "Senior Software Engineer",
          start: "May 2019",
          end: "Jun 2020"
        },
        {
          title:  "Software Engineer",
          start: "Sep 2017",
          end: "Apr 2019"
        }
      ]
    },
    {
      company: "Cadence Design Systems",
      location: "Cambridge - United Kingdom",
      roles: [
        {
          title: "Software Engineering Intern",
          start: "Jan 2017",
          end: "Jun 2017"
        }
      ]
    },
    {
      company: "Communication Security Group (CSG)",
      location: "Florianópolis - Brazil",
      roles: [
        {
          title:  "Software Engineer",
          start: "Aug 2016",
          end: "Dec 2016"
        }
      ]
    },
    {
      company: "Universidade Federal de Santa Catarina",
      location: "Florianópolis - Brazil",
      roles: [
        {
          title:  "Researcher",
          start: "Jul 2016",
          end: "Feb 2016"
        },
        {
          title:  "Researcher",
          start: "Jan 2014",
          end: "Dec 2015"
        },
        {
          title:  "Research Assistant",
          start: "Mar 2011",
          end: "Dec 2013"
        }
      ]
    }
  ].map(mapping);
  return (
    <section>
      <h2>Employment</h2>
      <ol>
        {employment_data}
      </ol>
    </section>
  );
}

function Education() {
  let education_data = [
    {
      company: "Universidade Federal de Santa Catarina (UFSC)",
      location: "Florianópolis - Brazil",
      roles: [
        {
          title:  "Ph.D. Computer Science",
          start: "2017",
          end: "2017 (Interrupted)"
        },
        {
          title:  "M.Sc. Computer Science",
          start: "2014",
          end: "2016"
        },
        {
          title:  "B.Sc. Computer Science",
          start: "2010",
          end: "2016"
        }
      ]
    }
  ].map(mapping);
  return (
    <section>
      <h2>Education</h2>
      <ol>
        {education_data}
      </ol>  
    </section>
  );
}

function Social() {
  let social_data = [
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/csguth/"
    },
    {
      name: "Github",
      href: "https://github.com/csguth"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/chrystianguth/"
    },
    {
      name: "Steam",
      href: "https://steamcommunity.com/id/csguth"
    }
  ].map(function(x){
    return <li><a href={x.href} target="blank">{x.name}</a></li>
  });
  return (
  <section>
    <h2>Social</h2>
    <ul>
      {social_data}
    </ul>
  </section>
  )
}

function Music() {
  let bands_data = [
    {
      name: "Bad News Bad News",
      role: "Guitarist",
      start: "2019",
      end: "2020",
      link: "https://g.co/kgs/YpgaUy"
    },
    {
      name: "Hope of Fools",
      role: "Guitarist",
      start: "2013",
      end: "2015",
      link: "https://g.co/kgs/bFRS84"
    }
  ].map(function(x){
    return (
      <li><a href={x.link} target="blank">{x.name} - {x.role} ({x.start}-{x.end})</a></li>
    );
  });
  return (
    <section>
      <h2>Music</h2>
      <section>
        <h3>Bands I was part of</h3>
        <ol>
          {bands_data}
        </ol>
      </section>
    </section>
  );
}