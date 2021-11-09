import React, { Component } from "react";

import MainMenuItem from "./MainMenuItem";

import styles from "./MainMenu.module.scss";

class MainMenu extends Component {

  render() {
    const { items } = this.props;
    return (
      <ul className={styles.menu}>
        {items.map((item) => {
          return <MainMenuItem key={item.id} {...item} />;
        })}
      </ul>
    );
  }
}

export default MainMenu;
