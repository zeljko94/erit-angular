export interface Roster {
    roster: string;
    date: string;
    shift: string;
    sender: string;
    status: 'pending' | 'approved' | 'rejected';
  }