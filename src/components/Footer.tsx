
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} Смертная казнь в России: Информационный ресурс</p>
          </div>
          <div>
            <p className="text-sm">Этот сайт создан в образовательных целях</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
