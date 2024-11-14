export interface ChangeRequestReceived {
    roster: string;
    date: string;
    shift: string;
    sender: string;
    status: 'pending' | 'approved' | 'rejected';
  }