import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import { CarRental, Route } from '@mui/icons-material';

export const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/",
        icon: <SpaceDashboardIcon />,
        active: true
      },
      {
        title: "Colaboradores",
        path: "/colaboradores",
        icon: <GroupIcon />,
        active: true
      },
      {
        title: "Veículos",
        path: "/veiculos",
        icon: <CarRental/>,
        active: true
      },
      {
        title: "Rotas",
        path: "/rotas",
        icon: <Route />,
        active: true
      }
    ]
  },
  {
    title: "User",
    list: [
      {
        title: "Configurações",
        path: "/configuracoes",
        icon: <SettingsIcon />,
        active: false
      },
      {
        title: "Ajuda",
        path: "/ajuda",
        icon: <InfoIcon />,
        active: false
      }
    ],
  },
]