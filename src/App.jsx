import "./App.css";
import emailjs from "@emailjs/browser";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="App">
      <h2>Test Email</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Name: </label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="">Message: </label>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
        </div>
        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
