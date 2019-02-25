import React from "react";
import AppPresenter from "./AppPresenter";

interface IProps {}

class AppContainer extends React.Component<IProps> {
  constructor(props: any) {
    super(props);
  }
  public componentDidMount() {}
  public render() {
    return <AppPresenter />;
  }
}

export default AppContainer;
