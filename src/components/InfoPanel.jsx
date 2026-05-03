import React from 'react';
import { HelpCircle, FileText, MapPin, Search } from 'lucide-react';

export default function InfoPanel() {
  return (
    <div className="info-section animate-fade-in">
      <div className="glass-panel info-item">
        <h3><HelpCircle size={20} /> Who can vote in India?</h3>
        <p>
          According to the Constitution of India, any citizen who is 18 years of age or older on the qualifying date (usually 1st January of the year of revision of electoral roll) is eligible to vote, provided they are not disqualified by law.
        </p>
      </div>

      <div className="glass-panel info-item">
        <h3><FileText size={20} /> How to register to vote?</h3>
        <p>
          You need to fill out <strong>Form 6</strong>. This can be done online through the Voters' Services Portal (voters.eci.gov.in) or the Voter Helpline App. Alternatively, you can submit a hard copy to your local Electoral Registration Officer (ERO) or Booth Level Officer (BLO).
        </p>
      </div>

      <div className="glass-panel info-item">
        <h3><Search size={20} /> How to check if my name is on the voter list?</h3>
        <p>
          You can search your name on the electoral roll online at the ECI website using your EPIC number or personal details. It is highly recommended to check this a few weeks before polling day.
        </p>
      </div>

      <div className="glass-panel info-item">
        <h3><MapPin size={20} /> How to find my polling booth?</h3>
        <p>
          Your polling booth details are usually printed on the Voter Information Slip distributed before the elections. You can also find your polling station online using the 'Know Your Polling Station' feature on the ECI portal or via SMS services provided by the Commission.
        </p>
      </div>
      
      <div className="glass-panel info-item" style={{ borderLeft: '4px solid var(--primary)' }}>
        <h3>Important Notice</h3>
        <p>
          Having an EPIC (Voter ID card) is not enough to vote. <strong>Your name must be present in the current Electoral Roll (Voter List)</strong> of your constituency. Always verify your name before the election.
        </p>
      </div>
    </div>
  );
}
