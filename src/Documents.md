### Outlet

<Outlet /> tells root route where to render child routes.
Specifying at top level.

However this is possible too.
 <>
  // Other Components
    <div id="detail">
       <Outlet />
    </div>
  </>

Remember to use <Link /> instead of <a> for client-side routing
It updates UI instead of getting served another document to render

### BrowserRouter

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "contact",
            element: <Contact />
        }
    ]
  },
  /*
  {
    path: "about",
    element: <div>Yes Lawd</div>,
  },
  */
])
