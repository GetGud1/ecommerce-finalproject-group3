import { useLocation } from "react-router-dom";
import "./CreateProductForm.css";

export default function NotFound() {
  const location = useLocation();
  
  // Only show Navigation component when not on the NotFound page
  // const showNavigation = location.pathname !== "*";

  console.log("not found ---- path",location.pathname)

    return (
      <>
        
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="notF">404</p>
            <h1 className="Page">Page not found</h1>
            <p className="Sorry">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="home"
              >
                Go back home
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }
  