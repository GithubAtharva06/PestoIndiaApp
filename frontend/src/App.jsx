import "./App.css";
import { useState } from "react";
import pestImg from "./assets/pestconrtollingman.png";



function Navbar({setpage}) {
  return(
    <nav className = "navbar">
    <h1 className="logo"> PestoIndia</h1>
    <ul className="nav-links">
      <li><a href="#home" onClick={() => setpage('home')}>Home</a></li>
      <li><a href="#services" onClick={() => setpage('services')}>Services</a></li>
      <li><a href="#products" onClick={() => setpage('products')}>Products</a></li>
      <li><a href="#about" onClick={() => setpage('about')}>About Us</a></li>
    </ul>
    </nav>
  )
}
function ContactForm({ onClose }) {
  const [closing, setClosing] = useState(false);
  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  address: "",
  pest: "",
  email: ""
});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
const handleSubmit = async () => {
  const { name, phone, address, pest, email } = formData;

  if (!name || !phone || !address || !pest || !email) {
    setError("All fields are required");
    return;
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    setError("Enter valid 10-digit phone number");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("Enter valid email");
    return;
  }

  setError("");


  try {
    const response = await fetch("http://localhost:8080/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
  name: formData.name,
  mobileNumber: formData.phone,   
  address: formData.address,
  email: formData.email,
  pestType: formData.pest         
})
    });

    if (!response.ok) {
      throw new Error("Failed");
    }

    alert("Service booked successfully!");
    handleClose();

  } catch (err) {
    setError("Failed to submit. Try again.");
  }
};


const [error, setError] = useState("");

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 300); // wait for animation
  };

  return (
    <div className="overlay" onClick={handleClose}>
      <div
        className={`form-box ${closing ? "fade-out" : "fade-in"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="form-title">Book Service</h3>

<div className="form-group">
  <label>Name</label>
  <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
  />
</div>

<div className="form-group">
  <label>Mobile Number</label>
  <input
    type="text"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
  />
</div>

<div className="form-group">
  <label>Address</label>
  <input
    type="text"
    name="address"
    value={formData.address}
    onChange={handleChange}
  />
</div>

<div className="form-group">
  <label>Pest Type</label>
  <input
    type="text"
    name="pest"
    value={formData.pest}
    onChange={handleChange}
  />
</div>

<div className="form-group">
  <label>Email</label>
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
  />
</div>

{error && <p className="error">{error}</p>}

<button className="submit-btn" onClick={handleSubmit}>
  Submit
</button>
      </div>
    </div>
  );
}

function Home() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
    <div className="home-container">
      
      <div className="left">
        <img src={pestImg} alt="service" />
      </div>

      <div className="right">
        <h1>Welcome to Pesto India, </h1>
        <p>
          We are your trusted partner in creating safe, hygienic, and pest-free environments for homes and businesses across Mumbai. With decades of industry experience, a team of certified professionals, and eco-friendly solutions, we deliver reliable pest management you can count on. Your health and peace of mind are our top priorities.
        </p>
      </div>
      
    </div>
    <div><button className="button" onClick={() => setShowForm(true)}> 
        Contact Us
      </button></div>

    {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </>

    
  );
}



function App() {
  const [page, setpage] = useState('home'); 

  return (
    <>
     <Navbar setpage={setpage}/>
      {page === 'home' && <Home />}
      {page === 'services' && (
  <div className="services">
    <h1>Our Services</h1>

    <div className="services-list">
      <div className="service-card">
        <h3>Termite Control</h3>
        <p>Protect your property from structural damage caused by termites.</p>
      </div>

      <div className="service-card">
        <h3>Rodent Control</h3>
        <p>Effective solutions to eliminate rats and mice from your space.</p>
      </div>

      <div className="service-card">
        <h3>Bed Bug Treatment</h3>
        <p>Safe and thorough treatment to remove bed bugs permanently.</p>
      </div>

      <div className="service-card">
        <h3>Mosquito Control</h3>
        <p>Reduce mosquito breeding and protect your family from diseases.</p>
      </div>
    </div>
  </div>
)}  
      {page === 'products' && <div className="products"> </div>}
      {page === 'about' && <div className="about"> </div>}
    </>
  )
}

export default App
