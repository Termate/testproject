import React, { Component } from "react";
import PeopleTable from "./peopleTable";
import { peopleList } from "../services/people-list";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

class People extends Component {
  state = {
    peoples: peopleList(),
    pageSize: 5,
    currentPage: 1
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.peoples;
    const { pageSize, currentPage, peoples: allPeople } = this.state;

    const peoples = paginate(allPeople, currentPage, pageSize);

    return (
      <div>
        <p>searching</p>
        <PeopleTable peoples={peoples} onSort={this.handleSort} />
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default People;
