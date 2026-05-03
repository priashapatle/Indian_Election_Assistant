import React from 'react';
import { UserPlus, Megaphone, Users, CheckSquare, BarChart } from 'lucide-react';

const phases = [
  {
    id: 1,
    title: "Voter Registration",
    icon: <UserPlus size={24} />,
    description: "The first step is ensuring you are eligible and registered to vote.",
    details: [
      "Eligibility: Citizen of India, 18+ years of age.",
      "Form 6: Fill this form online on the NVSP portal or offline to get your EPIC (Voter ID).",
      "Check Status: Verify your name is on the Electoral Roll."
    ]
  },
  {
    id: 2,
    title: "Announcement & MCC",
    icon: <Megaphone size={24} />,
    description: "The Election Commission of India (ECI) announces the election dates.",
    details: [
      "Press Conference: ECI announces polling and counting dates.",
      "Model Code of Conduct (MCC): Comes into effect immediately.",
      "MCC Rules: The ruling party cannot announce new schemes; strict guidelines on campaigning begin."
    ]
  },
  {
    id: 3,
    title: "Nominations & Campaigning",
    icon: <Users size={24} />,
    description: "Candidates file their papers and rally for support.",
    details: [
      "Filing Nominations: Candidates submit their affidavits and forms.",
      "Scrutiny & Withdrawal: ECI checks forms; candidates can withdraw within a timeframe.",
      "Campaigning: Rallies, manifestos, and public meetings (stops 48 hours before voting)."
    ]
  },
  {
    id: 4,
    title: "Polling Day",
    icon: <CheckSquare size={24} />,
    description: "The day voters cast their ballots at designated booths.",
    details: [
      "At the Booth: Show your EPIC or valid ID to the Polling Officer.",
      "Indelible Ink: Marked on your left index finger.",
      "Voting: Press the button next to your chosen candidate on the EVM. Verify your vote via the VVPAT slip (visible for 7 seconds)."
    ]
  },
  {
    id: 5,
    title: "Counting & Results",
    icon: <BarChart size={24} />,
    description: "Votes are counted and the new government is formed.",
    details: [
      "Strong Rooms: EVMs are kept securely until counting day.",
      "Counting: Done under strict supervision of ECI officials and candidate representatives.",
      "Declaration: The candidate with the most votes in a constituency wins (First Past the Post system)."
    ]
  }
];

export default function ElectionTimeline() {
  return (
    <div className="timeline-container animate-fade-in">
      {phases.map((phase, index) => (
        <div key={phase.id} className="timeline-item" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="timeline-marker">
            {phase.icon}
          </div>
          <div className="timeline-content glass-panel">
            <h3>Phase {phase.id}: {phase.title}</h3>
            <p>{phase.description}</p>
            <ul>
              {phase.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
