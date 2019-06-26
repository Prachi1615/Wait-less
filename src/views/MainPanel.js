import React from "react";
import Button from "@enact/moonstone/Button";
//import kind from "@enact/core/kind";
import { Panel, Header } from "@enact/moonstone/Panels";
//import PropTypes from "prop-types";
//import { NavigateToMenu } from "../actions";

class MainPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  // selectedDish = dish => {
  //   this.props.getorderInfo(dish);
  //   this.props.NavigateToMenu(dish);
  // };

  render() {
    const { ...props } = this.props;

    return (
      <Panel {...props}>
        <Header title="Welcome to bla bla" />
        <div>SELECT YOUR TABLE NUMBER</div>
        <br />
        <Button>Table 1</Button>
        <br />
        <br />
        <Button>Table 2</Button>
        <br />
        <br />
        <Button>Table 3</Button>
      </Panel>
    );
  }
}

export default MainPanel;
