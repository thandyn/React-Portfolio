import React, { useState } from "react";
import ProjectCard from "../ProjectCard";

function Project() {
  const [projects] = useState([
    {
      name: "Text-Editor-PWA",
      description:
        "A text editor project built as a Progressive Web App (PWA) can be a user-friendly tool that allows users to create, edit, and save text documents in their web browser. It should have a minimalist interface, work offline, save and load files, and potentially allow for sharing and collaboration.",
      link: "https://tranquil-caverns-71777.herokuapp.com/",
      repo: "https://github.com/thandyn/Text-Editor-PWA",
      image: "https://i.imgur.com/y595H6R.png",
    },
    {
      name: "Note-Taker",
      description:
        "A note taker project built with Express is a web application that enables users to create, edit, and delete notes. It involves a backend API using Express, a frontend interface, data storage, routing for handling user requests, and may include authentication and authorization features.",
      link: "https://serene-river-32076.herokuapp.com/",
      repo: "https://github.com/thandyn/Note-Taker",
      image: "https://i.imgur.com/iGSQzEo.png",
    },
    {
      name: "Hotels-on-Demand",
      description:
        "This application will help the user that is traveling find a hotel for their desired location. This application will also allow the user to see what the best food options are near that hotel. For this application we incorporated two API's with one used to find a hotel by city and the second used to find nearby resturants to that hotel. The user will be able to find where they can stay and where they can eat in this one application.",
      link: "https://thandyn.github.io/Hotels-on-Demand/",
      repo: "https://github.com/thandyn/Hotels-on-Demand",
      image: "https://i.imgur.com/C4lY56i.png",
    },
    {
      name: "Sneaks",
      description:
        "This application is a platform where users can share their passion and love for shoes. Our application's first step is for users to signup and/or login into their accounts so they can post shoes and see a feed of shoes. Each user will have their own collection and they can update their shoe collection everytime they post. When the user post/updates their collection, the post will be shared in a global feed where other users will be able to view the post.",
      link: "https://fathomless-lake-56395.herokuapp.com/",
      repo: "https://github.com/Quailll/project-2",
      image: "https://i.imgur.com/gOBboim.png",
    },
    {
      name: "Weather-Dashboard",
      description:
        "A weather dashboard project demonstrating API usage is a web application that retrieves weather data for a location using a weather API, displays it on a frontend interface with data visualization libraries, and converts location data into coordinates using a geocoding API",
      link: "https://thandyn.github.io/Weather-dashboard/",
      repo: "https://github.com/thandyn/Weather-dashboard",
      image: "https://i.imgur.com/twjYsVU.png",
    },
    {
      name: "Work-Day-Schedule-Planner",
      description:
        "A work day planner project built using jQuery can be a web application that helps users plan their work day by providing a visual representation of the hours in a day and allowing users to schedule tasks within those hours.",
      link: "https://thandyn.github.io/Day-Planner/",
      repo: "https://github.com/thandyn/Day-Planner",
      image: "https://i.imgur.com/FgtFAoR.png",
    },
  ]);

  return (
    <div>
      <div className="m-3 flex-row d-flex flex-wrap justify-content-evenly">
        {projects.map((project, idx) => (
          <ProjectCard project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Project;
