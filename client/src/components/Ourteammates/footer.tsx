export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 w-full">
      <div className="w-full py-4 md:py-8">
        <hr className="my-6 border-gray-200 w-full dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © Copyright {currentYear}{' '}
          <a href="#" className="hover:underline">
            Agro Api
          </a>
        </span>
      </div>
    </footer>
  );
};
