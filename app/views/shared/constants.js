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

const clientDrawerOptions = {
  menu: {
    label: 'Menu',
    value: 'menu',
  },
  order: {
    label: 'Order',
    value: 'order',
  },
  contactUs: {
    label: 'Contact Us',
    value: 'contactUs',
  },
}

exports.adminDrawerOptions = adminDrawerOptions
exports.clientDrawerOptions = clientDrawerOptions

// TODO: Change this like the above
module.exports = {
  //Role constants
  customerRole: 'Customer',
  adminRole: 'Admin',

  //View constants
  customerView: 'views/customerView/customerView',
  adminView: 'views/adminView/adminView',

  adminDrawerOptions,
  clientDrawerOptions,
}
