const ContactUs = () => {
  return (
    <div className="p-5 bg-lime-100 h-[calc(100vh-80px)] flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl mb-6">Contact Us</h1>
      <form
        className="flex flex-col items-center gap-4 w-full max-w-md"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          name="username"
          id="username"
          className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          placeholder="Enter User Name"
        />
        <input
          type="email"
          name="useremail"
          id="useremail"
          className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          placeholder="Enter User Email"
        />
        <button
          type="submit"
          className="mt-4 w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
