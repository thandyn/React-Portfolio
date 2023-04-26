import React from "react";

function Nav(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  return (
    <ul className="menu align-center">
      {pages.map((page) => (
        <li className={`${currentPage.name === page.name}`} key={page.name}>
          <span onClick={() => setCurrentPage({ name: page.name })}>
            {page.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
