import {
  LayoutGrid,
  ShoppingBag,
  Package,
  Users,
  BarChart3,
  Tag,
  Settings,
  AlertTriangle,
  RotateCcw,
  ShoppingCart,
  Wallet,
  Truck,
  Percent,
  TrendingUp
} from 'lucide-react';

export const sidebarNavItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid, active: true },
  { id: 'orders', label: 'Orders', icon: ShoppingBag, active: false },
  { id: 'products', label: 'Products', icon: Package, active: false },
  { id: 'customers', label: 'Customers', icon: Users, active: false },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, active: false },
  { id: 'discounts', label: 'Discounts', icon: Tag, active: false },
  { id: 'settings', label: 'Settings', icon: Settings, active: false },
];

export const statCardsData = [
  {
    id: 'orders',
    value: '1,284',
    label: 'Total Orders',
    icon: ShoppingBag,
    gradient: 'from-[#6C4EF2] to-[#8367F5]',
    shadowColor: 'rgba(108, 78, 242, 0.28)',
  },
  {
    id: 'stock',
    value: '342',
    label: 'Products in Stock',
    icon: Package,
    gradient: 'from-[#2F80ED] to-[#56CCF2]',
    shadowColor: 'rgba(47, 128, 237, 0.28)',
  },
  {
    id: 'low-stock',
    value: '96',
    label: 'Low Stock Items',
    icon: AlertTriangle,
    gradient: 'from-[#F5635C] to-[#FF857B]',
    shadowColor: 'rgba(245, 99, 92, 0.28)',
  },
  {
    id: 'returns',
    value: '27',
    label: 'Pending Returns',
    icon: RotateCcw,
    gradient: 'from-[#F9A44A] to-[#FFC278]',
    shadowColor: 'rgba(249, 164, 74, 0.28)',
  },
];

export const earningsOverview = {
  title: 'Revenue',
  subtitle: 'Overview of performance',
  buttonText: 'Summary Report',
  tabsData: {
    DAILY: {
      revenue: '$4,250.20',
      orders: '312',
      revenueLabel: 'Current Day Revenue',
      ordersLabel: 'Orders Today',
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      series: [
        { name: 'Online Store', data: [2, 3, 4, 3, 5, 6, 5] },
        { name: 'Retail', data: [1, 2, 2, 1, 3, 3, 2] },
      ],
    },
    WEEKLY: {
      revenue: '$12,840.00',
      orders: '890',
      revenueLabel: 'Current Week Revenue',
      ordersLabel: 'Orders This Week',
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      series: [
        { name: 'Online Store', data: [15, 18, 22, 25] },
        { name: 'Retail', data: [10, 12, 14, 13] },
      ],
    },
    MONTHLY: {
      revenue: '$18,492.60',
      orders: '1,284',
      revenueLabel: 'Current Month Revenue',
      ordersLabel: 'Orders This Month',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      series: [
        { name: 'Online Store', data: [12, 14, 11, 17, 15, 21, 19, 24] },
        { name: 'Retail', data: [8, 9, 10, 9, 12, 11, 14, 13] },
      ],
    },
    YEARLY: {
      revenue: '$215,840.50',
      orders: '14,620',
      revenueLabel: 'Current Year Revenue',
      ordersLabel: 'Orders This Year',
      categories: ['2023', '2024', '2025', '2026'],
      series: [
        { name: 'Online Store', data: [145, 180, 210, 260] },
        { name: 'Retail', data: [90, 110, 130, 155] },
      ],
    },
  },
  bottomChips: [
    { icon: Wallet, label: 'Available Balance', value: '$9,340.75', color: 'violet' },
    { icon: Truck, label: 'Shipping Costs', value: '$1,286.40', color: 'sky' },
    { icon: Percent, label: 'Avg. Order Value', value: '$64.20', color: 'amber' },
    { icon: TrendingUp, label: 'Gross Sales', value: '$53,567.54', color: 'mint' },
  ],
};

export const analyticsData = {
  title: 'Customer Analytics',
  centerFigure: '68%',
  centerCaption: 'Repeat Buyers',
  segments: [
    { label: 'Completed', value: 62, color: '#6C4EF2' },
    { label: 'Pending', value: 23, color: '#F9A44A' },
    { label: 'Refunded', value: 15, color: '#F5635C' },
  ],
};

export const recentActivities = [
  {
    id: 'act-1',
    time: '40 mins ago',
    title: 'New Order Placed',
    subtitle: 'Order #12386 from Ayesha K.',
    icon: ShoppingCart,
    chipColor: 'bg-violet/12 text-violet',
  },
  {
    id: 'act-2',
    time: '2 hours ago',
    title: 'Stock Running Low',
    subtitle: 'Canvas Tote Bag — 4 left',
    icon: Package,
    chipColor: 'bg-coral/12 text-coral',
  },
  {
    id: 'act-3',
    time: '1 day ago',
    title: 'Refund Processed',
    subtitle: 'Order #12290 refunded to Daniyal R.',
    icon: RotateCcw,
    chipColor: 'bg-sky/12 text-sky',
  },
];

export const orderStatusTableData = {
  title: 'Recent Orders',
  subtitle: 'Overview of latest month',
  orders: [
    {
      id: '#12386',
      customer: 'Ayesha Khan',
      product: 'Canvas Tote Bag',
      price: '$42.00',
      status: 'Delivered',
    },
    {
      id: '#12385',
      customer: 'Daniyal Raza',
      product: 'Wireless Earbuds',
      price: '$89.99',
      status: 'Shipped',
    },
    {
      id: '#12384',
      customer: 'Sara Malik',
      product: 'Ceramic Mug Set',
      price: '$34.50',
      status: 'Processing',
    },
    {
      id: '#12383',
      customer: 'Omar Farooq',
      product: 'Leather Wallet',
      price: '$65.00',
      status: 'Pending',
    },
    {
      id: '#12382',
      customer: 'Hina Sheikh',
      product: 'Running Shoes',
      price: '$120.00',
      status: 'Refunded',
    },
  ],
};
