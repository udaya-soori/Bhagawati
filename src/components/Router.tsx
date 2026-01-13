// import { MemberProvider } from '@/integrations';
// import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
// import { ScrollToTop } from '@/lib/scroll-to-top';
// import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
// import HomePage from '@/components/pages/HomePage';
// import AboutPage from '@/components/pages/AboutPage';
// import ServicesPage from '@/components/pages/ServicesPage';
// import CareersPage from '@/components/pages/CareersPage';
// import ContactPage from '@/components/pages/ContactPage';

// // Layout component that includes ScrollToTop
// function Layout() {
//   return (
//     <>
//       <ScrollToTop />
//       <Outlet />
//     </>
//   );
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//         routeMetadata: {
//           pageIdentifier: 'home',
//         },
//       },
//       {
//         path: "about",
//         element: <AboutPage />,
//         routeMetadata: {
//           pageIdentifier: 'about',
//         },
//       },
//       {
//         path: "about/:memberId",
//         element: <AboutPage />,
//         routeMetadata: {
//           pageIdentifier: 'about-team-member',
//         },
//       },
//       {
//         path: "services",
//         element: <ServicesPage />,
//         routeMetadata: {
//           pageIdentifier: 'services',
//         },
//       },
//       {
//         path: "services/:slug",
//         element: <ServicesPage />,
//         routeMetadata: {
//           pageIdentifier: 'service-detail',
//         },
//       },
//       {
//         path: "careers",
//         element: <CareersPage />,
//         routeMetadata: {
//           pageIdentifier: 'careers',
//         },
//       },
//       {
//         path: "careers/:roleId",
//         element: <CareersPage />,
//         routeMetadata: {
//           pageIdentifier: 'career-detail',
//         },
//       },
//       {
//         path: "contact",
//         element: <ContactPage />,
//         routeMetadata: {
//           pageIdentifier: 'contact',
//         },
//       },
//       {
//         path: "*",
//         element: <Navigate to="/" replace />,
//       },
//     ],
//   },
// ], {
//   basename: import.meta.env.BASE_NAME,
// });

// export default function AppRouter() {
//   return (
//     <MemberProvider>
//       <RouterProvider router={router} />
//     </MemberProvider>
//   );
// }
