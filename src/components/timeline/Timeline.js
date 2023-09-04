import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const milestones = [
  {
    date: '2018',
    text: 'Completed SSC from St. Thomas High School',
    icon: 'school',
    color: 'green',
  },
  {
    date: '2020',
    text: 'Completed HSC from Thakur Ramnarayan College of Arts and Commerce',
    icon: 'school',
    color: 'green',
  },
  {
    date: '2023',
    text: 'Completed BScIT from Thakur Ramnarayan College of Arts and Commerce',
    icon: 'school',
    color: 'green',
  },
  {
    date: 'Present',
    text: 'Joining an Innovative Company',
    icon: 'work',
    color: 'gray',
  },
];

function TimelineComponent() {
  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 600,
    paddingTop: '3rem',
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const hrStyle = {
    width: '50%',
    margin: '0 auto',
    border: '1px solid black',
    marginTop: '10px',
    marginBottom: '20px',
  };

  return (
    <div className="timeline-container">
      <h1 style={titleStyle}>Timeline</h1>
      <hr style={hrStyle} /> {/* Include the <hr> element with the specified styles */}
      <div
        style={{
          overflow: 'hidden',
          height: 'calc(100vh - 4rem)',
        }}
      >
        <VerticalTimeline>
          {milestones.map((milestone, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={milestone.date}
              iconClassName={milestone.icon}
              iconStyle={{ background: milestone.color }}
              contentStyle={{ boxShadow: 'none' }}
            >
              <h3
                className="vertical-timeline-element-title"
                onMouseOver={(e) => (e.currentTarget.parentElement.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)')}
                onMouseOut={(e) => (e.currentTarget.parentElement.style.boxShadow = 'none')}
              >
                {milestone.text}
              </h3>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default TimelineComponent;
