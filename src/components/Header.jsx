import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import TopHeaderBar from "./TopHeaderBar";
import logo from '../assets/logo.png'


export default function Header() {
  const { t, i18n } = useTranslation();

  const openEmail = () => {
    const email = "info@nirautomobile.com";
    const subject = "Get A Quote";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };

  return (
    <header className="w-full shadow-sm border-b border-gray-200">
      {/* Top Bar */}
      <TopHeaderBar />

      {/* Main Navigation */}
      <div
        className="bg-white px-4 py-3 flex items-center justify-between"
      >
        {/* Logo */}
        <Link to='/'>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Cripar Logo" className="h-10" />
            <div>
              <div className="font-bold text-xl text-red-600">NI-R</div>
              <span className="text-sm text-gray-500">{t("header.automotive")}</span>
            </div>
          </div>
        </Link>

        <nav className='hidden md:flex gap-6'>
          <Link to='/' className='hover:text-primary'>{t('nav.home')}</Link>
          <Link to='/services' className='hover:text-primary'>{t('nav.services')}</Link>
          <Link to='/about' className='hover:text-primary'>{t('nav.about')}</Link>
          <Link to='/gallery' className='hover:text-primary'>{t('nav.gallery')}</Link>
          <Link to='/testimonials' className='hover:text-primary'>{t('nav.testimonials')}</Link>
          <Link to='/contact' className='hover:text-primary'>{t('nav.contact')}</Link>
        </nav>

        {/* CTA Button */}
        <Button onClick={openEmail} className="bg-red-600 hover:bg-red-700 text-white">
          {t("header.get_a_quote")}
        </Button>
      </div>
    </header>
  );
}