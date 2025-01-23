import React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  badge: string;
  iconClass: string;
  position: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  description,
  badge,
  iconClass,
  position,
}) => {
  return (
    <div className={`timeline-4 ${position}-4`}>
      <div className={`card ${position === 'left' ? 'gradient-custom' : 'gradient-custom-4'}`}>
        <div className="card-body p-4">
          <i className={`${iconClass} fa-2x mb-3`}></i>
          <h4>{date}</h4>
          <p>{description}</p>
          <h6 className="badge bg-light text-black mb-0">{badge}</h6>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;