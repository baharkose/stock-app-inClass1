## Stock Management System

This stock management application features a Node.js backend and a React frontend, providing robust user interactions including login for returning users and registration for new users. It allows users to seamlessly add, edit, and delete product information like company, brand, and stock levels. The system includes advanced features for sorting and filtering tabular data to streamline operations. Additionally, users can visualize data with graphical presentations, improving accessibility and understanding of the data. For state management, the Redux Toolkit is used, enhanced by redux-persist to maintain state across application restarts. CRUD operations are handled through API requests, while Formik and Yup are utilized for efficient and reliable form validation. The UI/UX design integrates libraries such as Material-UI, Tailwind CSS, Material Tailwind, and ApexCharts to create a visually appealing and user-friendly interface.

## Project Skeleton
Stock Management System (folder)
|
|
├── public
│    └── index.html
├── src
│    ├── app
│    │    └──  store.jsx
│    ├── assets
│    │    └──  logo.png
│    ├── components
│    │     ├──BarChart.jsx
│    │     ├──BrandCard.jsx
│    │     ├──BrandForm.jsx
│    │     ├──DataMessage.jsx
│    │     ├──FirmCard.jsx
│    │     ├──FirmForm.jsx
│    │     ├──Footer.jsx
│    │     ├──LineChart.jsx
│    │     ├──LoginForm.jsx
│    │     ├──Navbar.jsx
│    │     ├──ProductForm.jsx
│    │     ├──ProductTable.jsx
│    │     ├──RecentReport.jsx
│    │     ├──RegisterForm.jsx
│    │     ├──SaleForm.jsx
│    │     ├──SaleTable.jsx
│    │     ├──Stats.jsx
│    │     └──Switch.jsx
│    ├── features
│    │     ├──authSlice.js
│    │     └──stockSlice.js
│    ├── helpers
│    │     ├── icon.js
│    │     └──ToastNotify.js
│    ├── pages
│    │     ├──Brands.jsx
│    │     ├──Dashboard.jsx
│    │     ├──Firms.jsx
│    │     ├──Login.jsx
│    │     ├──Products.jsx
│    │     ├──Purchases.jsx
│    │     ├──Register.jsx
│    │     ├──Sales.jsx
│    │     └──ScroolToTop.jsx
│    ├── router
│    │     ├── PrivateRouter.jsx
│    │     └── AppRouter.jsx
│    ├── service
│    │     ├── useAuthCalls.js
│    │     ├── useAxios.js
│    │     └── useStockCalls.js
│    ├── App.js
│    ├── index.js
│    ├── index.css
├── .env
├── package-lock-json
├── package.json
├── tailwind.config.js
└── README.md

### live: https://stock-app-gules.vercel.app/
