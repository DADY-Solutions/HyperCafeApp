const adminDrawerOptions = {
  menu: {
    label: 'Menu',
    value: 'menu',
  },
  orders: {
    label: 'Orders',
    value: 'orders',
  },
  customers: {
    label: 'Customers',
    value: 'customers',
  },
  sales: {
    label: 'Sales',
    value: 'sales',
  },
  inventory: {
    label: 'Inventory',
    value: 'inventory',
  },
}

const customerDrawerOptions = {
  menu: {
    label: 'Menu',
    value: 'menu',
    route: 'routes/menu'
  },
  order: {
    label: 'Order',
    value: 'order',
    route: 'routes/order'
  },
  contactUs: {
    label: 'Contact Us',
    value: 'contactUs',
    route: 'routes/contactUs'
  },
}

const admin = {
  role: 'Admin',
  homescreen: 'views/adminView/adminView',
  drawerOptions: adminDrawerOptions,
}

const customer = {
  role: 'Customer',
  homescreen: 'views/customerView/customerView',
  drawerOptions: customerDrawerOptions,
}

exports.admin = admin
exports.customer = customer

