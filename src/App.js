import React from "react";
import "./styles.css";
import JobOffer from "./components/jobOffer";
import Header from "./components/header";
import Filter from "./components/filter";
import dataJson from "./components/filterJSON";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: dataJson,
      filters: [],
    };
    this.addFilter = this.addFilter.bind(this);
    this.removeFilters = this.removeFilters.bind(this);
    this.clearAllFilters = this.clearAllFilters.bind(this);
  }

  // Add Filter

  addFilter(e) {
    const { filters, jobs } = Object.assign([], this.state);
    let search = e.target.value;

    if (!filters.includes(search)) {
      filters.push(search);
    }
    const filtered = jobs.filter((job) => job.features.includes(search));

    this.setState({ jobs: filtered, filters: filters });
  }

  // Remove Filter

  removeFilters(index) {
    const filters = Object.assign([], this.state.filters);
    const allJobs = dataJson;

    filters.splice(index, 1);

    const jobs = allJobs.filter((job) =>
      filters.every((filter) => job.features.includes(filter))
    );
    this.setState({ filters, jobs });
  }

  // Clear All Filters

  clearAllFilters() {
    this.setState({ filters: [], jobs: dataJson });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Filter
            filter={this.state.filters}
            removeFilter={this.removeFilters}
            clearFilters={this.clearAllFilters}
          />
          {this.state.jobs.map((job) => {
            return (
              <JobOffer filterJob={this.addFilter} key={job.id} data={job} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
