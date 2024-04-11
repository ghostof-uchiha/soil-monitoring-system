export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black w-full">
    <div className="w-full py-4 md:py-8">
      <hr className="my-6 border-gray-200 w-full dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-white sm:text-center">
        © Copyright {currentYear}{' '}
        <a href="#" className="hover:underline">
          Soil Monitoring System
        </a>
      </span>
    </div>
  </footer>
  
  );
};
