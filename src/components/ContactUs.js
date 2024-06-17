const ContactUs = () => {
  return (
    <div className="p-5">
      <h1 className="font-bold text-3xl">ContactUs</h1>
      <form className="bg-blue-100 flex justify-center gap-6 h-auto">
        <input
          type="text"
          name="username"
          id="username"
          className="block w-96 rounded-md border-0 py-1 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          placeholder="Enter User Name"
        />
        <input
          type="email"
          name="useremail"
          id="useremail"
          className="block w-96 rounded-md border-0 py-1 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-950 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          placeholder="Enter User Email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
