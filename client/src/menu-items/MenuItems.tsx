import SettingsIcon from '@mui/icons-material/Settings';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import InventoryIcon from '@mui/icons-material/Inventory';
import DashboardIcon from '@mui/icons-material/Dashboard';

const MenuItems = [
  { text: "Overview", icon: <DashboardIcon />, path: "/dashboard/overview",tooltipText:'Overview' },
  { text: "Product List", icon: <InventoryIcon />, path: "/dashboard/productlist",tooltipText:'Product List' },
  { text: "Team", icon: <Diversity3Icon />, path: "/dashboard/team",tooltipText:'Team' },
  { text: "Settings", icon: <SettingsIcon />, path: "/dashboard/settings",tooltipText:'Settings' },
];

export default MenuItems;
