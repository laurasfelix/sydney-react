import Navbar from '../components/navbar'
import TimelineItem from '../components/timelineitem';

export default function Timeline() {

  const timelineData = [
    { date: 'birth', title: 'Born!', description: 'Sydney was born a very fat baby to an older brother and cute little parents...', badge: 'You were born!', iconClass: 'fas fa-brain' },
    { date: 'one year', title: 'one year', description:"your other brother was born bald but you are still your lolo's favorite...", badge: 'baby brother', iconClass: 'fas fa-camera' },
    { date: 'January 14', title: 'First date', description: 'We went on an actual date this time...', badge: 'First date', iconClass: 'fas fa-campground' },
    { date: 'January 22', title: 'First kiss', description: 'We kissed after I slept over at Slivka...', badge: 'First kiss', iconClass: 'fas fa-sun' },
  ];
    return (
      
     <div className="font-[family-name:var(--font-gloria-hallelujah)">
      <Navbar />

        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <h4>{item.date}</h4>
                <p>{item.description}</p>
                <span className="badge">{item.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}