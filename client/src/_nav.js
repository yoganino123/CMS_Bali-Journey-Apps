import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilSpreadsheet,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilFlightTakeoff,
  cilNotes,
  cilPeople,
  cilDollar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  // DASHBOARD ROUTE
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/admin/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  // PRODUCT ROUTE
  {
    component: CNavTitle,
    name: 'Product',
  },

  {
    component: CNavItem,
    name: 'Category',
    to: '/admin/category',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Destination',
    to: '/admin/destination',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Package Trip',
    to: '/admin/package-trip',
    icon: <CIcon icon={cilFlightTakeoff} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Review',
  },
  {
    component: CNavItem,
    name: 'Destination',
    to: '/admin/review/destination',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Package Trip',
    to: '/admin/review/package-trip',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'User',
  },
  {
    component: CNavItem,
    name: 'User',
    to: '/admin/user',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Payment',
  },
  {
    component: CNavItem,
    name: 'Transaction',
    to: '/admin/transaction',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
  },

  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Base',
    to: '/admin/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/admin/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Breadcrumb',
        to: '/admin/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Cards',
        to: '/admin/base/cards',
      },
      {
        component: CNavItem,
        name: 'Carousel',
        to: '/admin/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Collapse',
        to: '/admin/base/collapses',
      },
      {
        component: CNavItem,
        name: 'List group',
        to: '/admin/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs',
        to: '/admin/base/navs',
      },
      {
        component: CNavItem,
        name: 'Pagination',
        to: '/admin/base/paginations',
      },
      {
        component: CNavItem,
        name: 'Placeholders',
        to: '/admin/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'Popovers',
        to: '/admin/base/popovers',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/admin/base/progress',
      },
      {
        component: CNavItem,
        name: 'Spinners',
        to: '/admin/base/spinners',
      },
      {
        component: CNavItem,
        name: 'Tables',
        to: '/admin/base/tables',
      },
      {
        component: CNavItem,
        name: 'Tooltips',
        to: '/admin/base/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Buttons',
    to: '/admin/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/admin/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/admin/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/admin/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/admin/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/admin/forms/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/admin/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/admin/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/admin/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/admin/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/admin/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/admin/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/admin/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/admin/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/admin/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/admin/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/admin/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/admin/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/admin/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/admin/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/admin/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default _nav
