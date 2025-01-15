import { useEffect } from "react";
import { useLocation } from "react-router-dom";  // React Router hook to track the current location

const ScrollToTop = () => {
  const location = useLocation(); // Get the current location (i.e., the URL)

  useEffect(() => {
    // Scroll to the top of the page whenever the location changes
    window.scrollTo(0, 0);
  }, [location]); // Re-run when the location changes

  return null; // This component doesn't render anything itself
};

export default ScrollToTop;
