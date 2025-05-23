import Input from '../atoms/Button';
import Button from '../atoms/Button';

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <Input 
        label="Name"
        id="name"
        type="text"
        placeholder="Your name"
      />
      <Input 
        label="Email"
        id="email"
        type="email"
        placeholder="Your email"
      />
      <div>
        <label className="block text-gray-700 mb-2" htmlFor="message">
          Message
        </label>
        <textarea 
          id="message"
          rows="4"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          placeholder="Your message"
        ></textarea>
      </div>
      <Button 
        type="submit"
        className="w-full bg-indigo-600 text-white hover:bg-indigo-700"
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
