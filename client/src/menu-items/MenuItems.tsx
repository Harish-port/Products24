import SettingsIcon from '@mui/icons-material/Settings';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import InventoryIcon from '@mui/icons-material/Inventory';
import DashboardIcon from '@mui/icons-material/Dashboard';

const MenuItems = [
  { text: "Overview", icon: <DashboardIcon />, path: "/dashboard/overview" },
  { text: "ProductList", icon: <InventoryIcon />, path: "/dashboard/productlist" },
  { text: "Team", icon: <Diversity3Icon />, path: "/dashboard/team" },
  { text: "Settings", icon: <SettingsIcon />, path: "/dashboard/settings" },
];

export default MenuItems;
