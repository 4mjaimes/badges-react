import React from "react";
import api from "../api";
import Loader from "../components/Loader";
import PageError from "../components/PageError";
import BadgeDetails from "./BadgeDetails";

class BadgeDetailsContainer extends React.Component {
  badId = this.props.match.params.badgeId;
  state = {
    modalIsOpen: false,
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.badId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleOpenModal = () => {
    this.setState({ modalIsOpen: true });
  };

  handleOnDeleteBadge = async () => {
    this.setState({ loading: true, error: null });
    try {
      await api.badges.remove(this.badId);
      this.props.history.push("/badges");
    } catch (error) {
      console.log(error);
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <BadgeDetails
        onOpenModal={this.handleOpenModal}
        onCloseModal={this.handleCloseModal}
        onDeleteBadge={this.handleOnDeleteBadge}
        modalIsOpen={this.state.modalIsOpen}
        badge={this.state.data}
      />
    );
  }
}

export default BadgeDetailsContainer;
