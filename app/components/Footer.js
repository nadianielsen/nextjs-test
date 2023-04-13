

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return ( 
        <footer className="w-full h-24">
            <h3 className="flex justify-center item-center py-12"><span className="w-20 bg-[#f2f2f24c] h-0.5 my-3 mx-2"></span> ©MovieBase {year} <span className="w-20 bg-[#f2f2f24c] h-0.5 my-3 mx-2"></span></h3>
        </footer>
     );
}
 
export default Footer;