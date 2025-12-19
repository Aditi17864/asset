export type User = {
  id: string;
  name: string;
  avatarUrl: string;
  email: string;
  role: 'Admin' | 'Manager' | 'Technician' | 'Employee';
};

export type Department = {
  id: string;
  name:string;
};

export type Location = {
  id: string;
  name: string;
};

export type Category = {
  id: string;
  name: string;
};

export type AssetStatus = 'In Use' | 'In Stock' | 'In Repair' | 'Retired';

export type Asset = {
  id: string;
  assetTag: string;
  name: string;
  type: 'Hardware' | 'Software';
  category: string;
  location: string;
  assignedTo?: string;
  status: AssetStatus;
  purchaseDate: string;
  notes?: string;
};

export type AssetHistoryEvent = {
  date: string;
  event: string;
  details: string;
};

export type TicketStatus = 'Open' | 'In Progress' | 'Resolved' | 'Closed';
export type TicketPriority = 'High' | 'Medium' | 'Low';

export type Ticket = {
  id: string;
  title: string;
  priority: TicketPriority;
  status: TicketStatus;
  requester: string;
  assignedTo?: string;
  createdDate: string;
  assetTag?: string;
  description: string;
};

export type TicketComment = {
  id: string;
  user: string;
  avatarUrl: string;
  date: string;
  comment: string;
};

export type AuditLog = {
  id: string;
  date: string;
  user: string;
  action: string;
  details: string;
};
