const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white border border-gray-300 rounded-lg shadow-md">
        <form className="space-y-6">
          <h5 className="text-2xl font-semibold text-gray-800 mb-6">
            Sign in to our platform
          </h5>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mt-4">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 mt-4">
            Not registered?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
