const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Solutions</h2>
            <ul>
              <li className="mb-2">Marketing</li>
              <li className="mb-2">Analytics</li>
              <li className="mb-2">Commerce</li>
              <li className="mb-2">Insights</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul>
              <li className="mb-2">Pricing</li>
              <li className="mb-2">Documentation</li>
              <li className="mb-2">Guides</li>
              <li className="mb-2">API Status</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul>
              <li className="mb-2">About</li>
              <li className="mb-2">Blog</li>
              <li className="mb-2">Jobs</li>
              <li className="mb-2">Press</li>
              <li className="mb-2">Partners</li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold mb-4">Legal</h2>
            <ul>
              <li className="mb-2">Claim</li>
              <li className="mb-2">Privacy</li>
              <li className="mb-2">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
