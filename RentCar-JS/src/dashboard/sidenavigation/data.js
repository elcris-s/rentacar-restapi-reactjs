import HomeIcon from './icons/home';
import { AiFillCar } from 'react-icons/ai';
import { BsCardChecklist } from 'react-icons/bs';
import { FaBuilding } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { FaCarAlt } from 'react-icons/fa';

const data = [
  {
    title: 'Inicio',
    icon: <HomeIcon />,
    link: '/admin',
  },
  {
    title: 'Categorias',
    icon: <AiFillCar />,
    link: '/admin/categoria',
  },
  {
    title: 'Facturas',
    icon: <FaFileInvoiceDollar />,
    link: '/admin/facturas',
  },
  {
    title: 'Marcas',
    icon: <FaBuilding />,
    link: '/admin/marcas',
  },
  {
    title: 'Pagos',
    icon: <MdPayment />,
    link: '/admin/pagos',
  },
  {
    title: 'Reservas',
    icon: <BsCardChecklist />,
    link: '/admin/reservas',
  },
  {
    title: 'Roles',
    icon: <AiOutlineUsergroupAdd />,
    link: '/admin/roles',
  },
  {
    title: 'Usuarios',
    icon: <AiOutlineUser />,
    link: '/admin/usuarios',
  },
  {
    title: 'Vehiculos',
    icon: <FaCarAlt />,
    link: '/admin/vehiculos',
  },
];

export default data;
