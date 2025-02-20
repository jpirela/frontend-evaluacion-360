/** Icons are imported separatly to reduce build time */
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import UserPlusIcon from '@heroicons/react/24/outline/UserPlusIcon'
import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon'
import ClipboardIcon from '@heroicons/react/24/outline/ClipboardIcon'
import ClipboardDocumentIcon from '@heroicons/react/24/outline/ClipboardDocumentIcon'
import ClipboardDocumentCheckIcon from '@heroicons/react/24/outline/ClipboardDocumentCheckIcon'
import ClipboardDocumentListIcon from '@heroicons/react/24/outline/ClipboardDocumentListIcon'
import UserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon'
import AdjustmentsHorizontalIcon from '@heroicons/react/24/outline/AdjustmentsHorizontalIcon'
import PresentationChartLineIcon from '@heroicons/react/24/outline/PresentationChartLineIcon'
import BellAlertIcon from '@heroicons/react/24/outline/BellAlertIcon'
import BellSnoozeIcon from '@heroicons/react/24/outline/BellSnoozeIcon'
import DocumentCheckIcon from '@heroicons/react/24/outline/DocumentCheckIcon'
import DocumentArrowDownIcon from '@heroicons/react/24/outline/DocumentArrowDownIcon'
import PaperClipIcon from '@heroicons/react/24/outline/PaperClipIcon'

const iconClasses = `h-7 w-7`
const submenuIconClasses = `h-6 w-6`

const routes = [

  {
    path: '/app/blank',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Dashboard',
  },
  {
    path: '',
    icon: <UserPlusIcon className={`${iconClasses} inline` }/>, 
    name: 'Gestión de Empleados', 
    submenu : [
      {
        path: '/app/mantenimiento_empleados',
        icon: <ClipboardDocumentListIcon className={submenuIconClasses}/>,
        name: 'Mantenimiento de Empleados',
      },
    ]
  },
  {
    path: '',
    icon: <ClipboardIcon className={`${iconClasses} inline` }/>, 
    name: 'Evaluaciones', 
    submenu : [
      {
        path: '/app/blank',
        icon: <ClipboardDocumentListIcon className={submenuIconClasses}/>, 
        name: 'Constructor de Evaluaciones', 
      },
      {
        path: '/app/blank', 
        icon: <ClipboardDocumentCheckIcon className={submenuIconClasses}/>, 
        name: 'Evaluaciones asignadas', 
      },
      {
        path: '/app/blank', 
        icon: <ClipboardDocumentIcon className={submenuIconClasses}/>, 
        name: 'Autoevaluación y coevaluación', 
      },
    ]
  },
  ,
  {
    path: '',
    icon: <UserCircleIcon className={`${iconClasses} inline` }/>, 
    name: 'Perfil del Usuario', 
    submenu : [
      {
        path: '/app/blank', 
        icon: <AdjustmentsHorizontalIcon className={submenuIconClasses}/>, 
        name: 'Información del Usuario', 
      },
      {
        path: '/app/blank', 
        icon: <PresentationChartLineIcon className={submenuIconClasses}/>, 
        name: 'Historial de evaluaciones', 
      },
    ]
  },  
  {
    path: '',
    icon: <BellAlertIcon className={`${iconClasses} inline` }/>, 
    name: 'Notificaciones', 
    submenu : [
      {
        path: '/app/blank', 
        icon: <BellSnoozeIcon className={submenuIconClasses}/>, 
        name: 'Evaluaciones pendientes', 
      },
      {
        path: '/app/blank-team', 
        icon: <DocumentCheckIcon className={submenuIconClasses}/>, 
        name: 'Feedback recibido', 
      },

    ]
  },
  {
    path: '',
    icon: <InboxArrowDownIcon className={`${iconClasses} inline` }/>, 
    name: 'Reportes', 
    submenu : [
      {
        path: '/app/blank', 
        icon: <DocumentArrowDownIcon className={submenuIconClasses}/>, 
        name: 'Reporte de evaluaciones', 
      },
      {
        path: '/app/blank-team', 
        icon: <PaperClipIcon className={submenuIconClasses}/>, 
        name: 'Exportación de resultados', 
      },

    ]
  }
]

export default routes


