import Navbar from '../components/navbar'

export default function Timeline() {

  const timelineData = [
    { date: 'birth', title: 'Born!', description: 'Sydney was born a very fat baby to an older brother and cute little parents...', badge: 'You were born!', iconClass: 'fas fa-brain' },
    { date: 'one year old', title: 'one year', description:"your other brother was born bald but you are still your lolo's favorite...", badge: 'baby brother', iconClass: 'fas fa-camera' },
    { date: 'three years old?', title: 'annoying', description: 'you cried when your family dog died not because you were sad, but because you wanted attention...', badge: 'annoying', iconClass: 'fas fa-campground' },
    { date: 'six years old', title: 'six', description: 'i think around here you met a bunch of your elementary school friends, like rachel and christine...', badge: 'friends!!', iconClass: 'fas fa-campground' },
    { date: 'eight years old?', title: 'eight', description: 'around this age i bet you got way more serious with dance by joining that evanston school...', badge: 'dancy wancy', iconClass: 'fas fa-campground' },
    { date: 'eleven years old', title: 'eleven', description: "you won the fifth grade spelling bee, and you're still proud about it...", badge: 'winner!!', iconClass: 'fas fa-sun' },
    { date: 'twelve years old', title: 'twelve', description: 'edward and peta <3333 i just know the librarian hated you...', badge: 'YA phase', iconClass: 'fas fa-campground' },
    { date: 'fourteen years old', title: 'fourteen', description: 'KISS IN THE CHEEEK?????? at a PANIC in the disco concert???? WHATTTT...', badge: 'romance', iconClass: 'fas fa-campground' },
    { date: 'fifteen years old', title: 'fifteen', description: '#ICEisEVIL + the beanie + snapchat filter = gold...', badge: 'tumblr would have loved you', iconClass: 'fas fa-campground' },
    { date: 'seventeen years old', title: 'seventeen', description: "i guess you are a third level swimmer but what does it mean...", badge: 'whatever', iconClass: 'fas fa-sun' },
    { date: 'eighteen years old', title: 'eighteen', description: "killer calves and college acceptances?? ugh you're top 20 in your school but i'm top 20 in my country...", badge: 'all worth it', iconClass: 'fas fa-sun' },
    { date: 'nineteen years old', title: 'nineteen', description: "your childhood cat died but i think he's proud of you wherever he is...", badge: 'jesse kitty', iconClass: 'fas fa-sun' },
    { date: 'twenty years old', title: 'twenty', description: "international travella fella, is there a place where you haven't been? also you did great in your dances...", badge: 'around the world', iconClass: 'fas fa-sun' },
  ];
    return (
      
     <div className="font-Gloria_Hallelujah">
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