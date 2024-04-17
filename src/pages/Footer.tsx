 import { useLocation } from 'react-router-dom';

const Footer = () => {


    const location = useLocation();
    const shouldRenderSidebar = !['signIn', 'signUp','Message'].includes(
      location.pathname.replace('/', '')
    );
    if (!shouldRenderSidebar) {
      return null;
    }

    return (
        <footer className='footer_div'>
            Conditions of Use
            Privacy Notice
            Your Ads Privacy Choices
            © 1996-2024, Amazon.com, Inc. or its affiliates
        </footer>
    )
}

export default Footer
