import React from "react";
import About from "../About Me";
import Project from "../Project";
import ContactMe from "../Contact Me";
import Resume from "../Resume";
import PageContent from "../PageContent";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "About Me":
        return <About />;
      case "Project":
        return <Project />;
      case "Contact Me":
        return <ContactMe />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <section>
      <h2>{currentPage.name}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
