import React from "react";

function JobOffer(props) {
  return (
    <div
      id={props.id}
      className={props.data.featured ? "job-offer job-featured" : "job-offer"}
    >
      <div className="company">
        <div className="company-logo">
          <img src={props.data.logo} alt="company-logo" />
        </div>
        <div className="about-company">
          <div className="company-info">
            <span className="company-name">{props.data.company}</span>
            <span className={props.data.new ? "new" : ""}>
              {props.data.new ? "NEW!" : null}
            </span>
            <span className={props.data.featured ? "featured" : " "}>
              {props.data.featured ? "FEATURED" : null}
            </span>
          </div>
          <p className="position">{props.data.position}</p>
          <div className="job-details">
            <span className="postedAt">{props.data.postedAt}</span>
            <span className="contract">{props.data.contract}</span>
            <span className="location">{props.data.location}</span>
          </div>
        </div>
      </div>
      <div className="requirements">
        {props.data.features.map((feature, index) => {
          return (
            <button
              className="btn-req"
              value={feature}
              onClick={props.filterJob}
              key={index}
            >
              {feature}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default JobOffer;
