import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import PaymentsIcon from '@mui/icons-material/Payments';
import DiscountIcon from '@mui/icons-material/Discount';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';

export const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/",
        icon: <SpaceDashboardIcon />
      },
      {
        title: "Empresa",
        path: "/company",
        icon: <BusinessIcon />
      },
      {
        title: "Colaboradores",
        path: "/collaborators",
        icon: <GroupIcon />
      },
      {
        title: "Folha de Pagamento",
        path: "/payroll",
        icon: <PaymentsIcon />
      },
      {
        title: "Benefícios",
        path: "/benefits",
        icon: <CreditScoreIcon />
      },
      {
        title: "Descontos",
        path: "/discounts",
        icon: <DiscountIcon />
      }
    ]
  },
  {
    title: "User",
    list: [
      {
        title: "Configurações",
        path: "/settings",
        icon: <SettingsIcon />,
      },
      {
        title: "Ajuda",
        path: "/help",
        icon: <InfoIcon />,
      },
    ],
  },
]