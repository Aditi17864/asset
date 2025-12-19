import { Asset, AssetStatus, AuditLog, Category, Department, Location, Ticket, TicketPriority, TicketStatus, User } from './types';
import { subDays, format } from 'date-fns';

const createId = () => Math.random().toString(36).substring(2, 10);

// USERS
export const users: User[] = [
  { id: 'usr_1', name: 'Alex Doe', email: 'alex.doe@consult.co', role: 'Admin', avatarUrl: 'https://picsum.photos/seed/1/40/40' },
  { id: 'usr_2', name: 'Jane Smith', email: 'jane.smith@consult.co', role: 'Manager', avatarUrl: 'https://picsum.photos/seed/2/40/40' },
  { id: 'usr_3', name: 'Sam Wilson', email: 'sam.wilson@consult.co', role: 'Technician', avatarUrl: 'https://picsum.photos/seed/3/40/40' },
  { id: 'usr_4', name: 'Maria Garcia', email: 'maria.garcia@consult.co', role: 'Employee', avatarUrl: 'https://picsum.photos/seed/4/40/40' },
  { id: 'usr_5', name: 'Chen Wang', email: 'chen.wang@consult.co', role: 'Employee', avatarUrl: 'https://picsum.photos/seed/5/40/40' },
];

// SETTINGS DATA
export const departments: Department[] = [
  { id: 'dept_1', name: 'Strategy' },
  { id: 'dept_2', name: 'Digital Transformation' },
  { id: 'dept_3', name: 'Operations' },
  { id: 'dept_4', name: 'Human Resources' },
];

export const locations: Location[] = [
  { id: 'loc_1', name: 'New York HQ' },
  { id: 'loc_2', name: 'London Office' },
  { id: 'loc_3', name: 'Singapore Hub' },
  { id: 'loc_4', name: 'Remote' },
];

export const categories: Category[] = [
  { id: 'cat_1', name: 'Laptops' },
  { id: 'cat_2', name: 'Monitors' },
  { id: 'cat_3', name: 'Software Licenses' },
  { id: 'cat_4', name: 'Mobile Devices' },
  { id: 'cat_5', name: 'Peripherals' },
];

// ASSETS
const assetStatuses: AssetStatus[] = ['In Use', 'In Stock', 'In Repair', 'Retired'];
export const assets: Asset[] = Array.from({ length: 25 }, (_, i) => {
    const isSoftware = categories[i % categories.length].name === 'Software Licenses';
    const status = assetStatuses[i % assetStatuses.length];
    const assignedUser = status === 'In Use' ? users[i % users.length] : undefined;
    return {
        id: `ast_${i + 1}`,
        assetTag: `AST-2024-${String(i + 1).padStart(4, '0')}`,
        name: isSoftware ? `Adobe Creative Suite` : `MacBook Pro 16"`,
        type: isSoftware ? 'Software' : 'Hardware',
        category: categories[i % categories.length].name,
        location: locations[i % locations.length].name,
        status: status,
        assignedTo: assignedUser?.name,
        purchaseDate: format(subDays(new Date(), i * 15), 'yyyy-MM-dd'),
    }
});

// TICKETS
const ticketStatuses: TicketStatus[] = ['Open', 'In Progress', 'Resolved', 'Closed'];
const ticketPriorities: TicketPriority[] = ['Low', 'Medium', 'High'];

export const tickets: Ticket[] = Array.from({ length: 15 }, (_, i) => ({
    id: `tkt_${i + 1}`,
    title: i % 3 === 0 ? 'Cannot connect to VPN' : (i % 3 === 1 ? 'Software installation request' : 'Laptop screen flickering'),
    status: ticketStatuses[i % ticketStatuses.length],
    priority: ticketPriorities[i % ticketPriorities.length],
    requester: users[i % users.length].name,
    assignedTo: users[(i + 1) % users.length].name,
    createdDate: format(subDays(new Date(), i * 2), 'yyyy-MM-dd HH:mm'),
    assetTag: assets[i % assets.length].assetTag,
    description: 'User is reporting issues with their device. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Please investigate and resolve.'
}));

// AUDIT LOGS
const auditActions = ['Asset Created', 'Ticket Updated', 'User Login', 'Settings Changed', 'Asset Assigned'];
export const auditLogs: AuditLog[] = Array.from({ length: 30 }, (_, i) => ({
    id: `log_${i + 1}`,
    date: format(subDays(new Date(), i), 'yyyy-MM-dd HH:mm:ss'),
    user: users[i % users.length].name,
    action: auditActions[i % auditActions.length],
    details: `User ${users[i % users.length].name} performed action: ${auditActions[i % auditActions.length]}.`
}));

// Dashboard Data
export const recentActivity = auditLogs.slice(0, 5);

export const dashboardStats = {
    totalAssets: assets.length,
    assetsInUse: assets.filter(a => a.status === 'In Use').length,
    openTickets: tickets.filter(t => ['Open', 'In Progress'].includes(t.status)).length,
    pendingRequests: 5, // static for demo
};

const last7Days = Array.from({ length: 7 }, (_, i) => format(subDays(new Date(), i), 'MMM d')).reverse();

export const assetUtilizationData = {
    labels: last7Days,
    datasets: [
        { name: 'In Use', data: last7Days.map(() => Math.floor(Math.random() * (20 - 10 + 1)) + 10) },
        { name: 'In Stock', data: last7Days.map(() => Math.floor(Math.random() * (10 - 2 + 1)) + 2) },
    ]
};

export const ticketTrendsData = {
    labels: last7Days,
    datasets: [
        { name: 'Opened', data: last7Days.map(() => Math.floor(Math.random() * (10 - 3 + 1)) + 3) },
        { name: 'Resolved', data: last7Days.map(() => Math.floor(Math.random() * (8 - 1 + 1)) + 1) },
    ]
};

// Asset Detail Data
export const getAssetById = (id: string) => assets.find(a => a.id === id);
export const getAssetHistory = (assetId: string) => [
    { date: format(subDays(new Date(), 90), 'yyyy-MM-dd'), event: 'Created', details: `Asset ${assetId} purchased and added to system.` },
    { date: format(subDays(new Date(), 85), 'yyyy-MM-dd'), event: 'Assigned', details: `Assigned to ${users[1].name}.` },
    { date: format(subDays(new Date(), 40), 'yyyy-MM-dd'), event: 'In Repair', details: 'Submitted for screen repair under ticket TKT-008.' },
    { date: format(subDays(new Date(), 32), 'yyyy-MM-dd'), event: 'Assigned', details: `Returned from repair and reassigned to ${users[1].name}.` },
];

// Ticket Detail Data
export const getTicketById = (id: string) => tickets.find(t => t.id === id);
export const getTicketComments = (ticketId: string) => [
    { id: 'com_1', user: 'Sam Wilson', avatarUrl: 'https://picsum.photos/seed/3/40/40', date: format(subDays(new Date(), 1), 'yyyy-MM-dd HH:mm'), comment: "I've been assigned this ticket. I will look into it shortly." },
    { id: 'com_2', user: 'Maria Garcia', avatarUrl: 'https://picsum.photos/seed/4/40/40', date: format(subDays(new Date(), 1), 'yyyy-MM-dd HH:mm'), comment: "Thank you! Please let me know if you need any more information from my side." },
    { id: 'com_3', user: 'Sam Wilson', avatarUrl: 'https://picsum.photos/seed/3/40/40', date: format(new Date(), 'yyyy-MM-dd HH:mm'), comment: "The issue has been resolved. The VPN configuration profile was updated. Please verify and confirm." },
];

// Reports Data
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
export const reportsData = {
    ticketVolumeByDept: {
        labels: departments.map(d => d.name),
        datasets: [{ data: departments.map(() => Math.floor(Math.random() * 50) + 10) }]
    },
    assetStatusDistribution: {
        data: assetStatuses.map(status => ({
            name: status,
            value: assets.filter(a => a.status === status).length,
            fill: `var(--chart-${assetStatuses.indexOf(status) + 1})`
        }))
    }
};
