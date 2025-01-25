import React,{useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const sendMessage = (e) => {
    e.preventDefault();
  
    //const form = e.target; // Ensure the form is captured if using a form element
  
    const form = {
      name: formData.name.value,
      email: formData.email.value,
      contact: formData.contact.value,
      message: formData.message.value,
    };
  
    emailjs
      .send(
        "service_xzqvd9w", // Replace with your EmailJS Service ID
        "template_0j4d3he", // Replace with your EmailJS Template ID
        form,
        "UPPxHPud8c1799NoX" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          console.log("Success!", response.status, response.text);
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error("Error:", error);
        }
      );
    };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle send button click
  const handleSend = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.contact || !formData.message) {
        alert("Please fill out all fields before sending.");
        return; // Stop the function if any field is empty
    }
    //console.log("Form:", formData);
    //console.log("Form data:", form.name?.value, form.email?.value, form.contactNo?.value, form.message?.value);

    
    // Logic to handle form submission
    console.log("Form data submitted:", formData);
    sendMessage(e);
    alert("Your message has been sent!");
    // Clear form after sending (optional)
    setFormData({ name: "", email: "", contact: "", message: "" });
  };

  // Handle cancel button click
  const handleCancel = () => {
    // Clear the form
    setFormData({ name: "", email: "", contact: "", message: "" });
    alert("Form has been reset.");
  };

  const triggerAnimation = () => {
    setIsAnimatingOut(true); // Start the exit animation
    setTimeout(() => {
      navigate("/Portfolio/menu"); 
    }, 2000); 
  };
  const triggerAnimation1 = () => {
    setIsAnimatingOut(true); // Start the exit animation
    setTimeout(() => {
        navigate(-1); 
    }, 2000); 
  };
  
  return (
    <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3, // Delay between child animations
              },
            },
          }}
        >
    <motion.div
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}       // Animate to its final position
        transition={{ type: 'tween', stiffness: 30, duration: 2 }}
    >
    <AnimatePresence>
    {!isAnimatingOut && (
        <motion.div
        exit={{ x: '-100vw', opacity: 0 }} // Start off-screen to the right
        initial={{ x: '100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}       // Animate to its final position
        transition={{ type: 'tween', stiffness: 30, duration: 2 }}
        >
        
    <div className="background">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left" onClick={triggerAnimation1}>
            {'<'}
            </div>
            <button className="screen-header-right" onClick={triggerAnimation}>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </button>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>ME</span>
              </div>
            </div>
            <div className="screen-body-item">
              <div className="app-form">
                <div className="app-form-group">
                <input
                    className="app-form-control"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>  
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="Contact NO"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="app-form-group message">
                  <input
                    className="app-form-control"
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="app-form-group buttons">
                  <button className="app-form-button" onClick={handleCancel}>CANCEL</button>
                  <button className="app-form-button" onClick={handleSend}>SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
    )}
    </AnimatePresence>
    </motion.div>
    <motion.div
          initial={{ x: '-100vw', opacity: 0 }} // Start off-screen to the left
          animate={{ x: 0, opacity: 1 }}       // Animate to its final position
          transition={{ type: 'tween', stiffness: 30, duration: 2 }}
          style={{
            zIndex: 1000, //on top of other content
          }}
    >
    <AnimatePresence>
    {!isAnimatingOut && (
        <motion.div
        exit={{ x: '100vw', opacity: 0 }} // Start off-screen to the left
        animate={{ x: 0, opacity: 1 }}       // Animate to its final position
        transition={{ type: 'tween', stiffness: 20, duration: 2 }}
      >
      <img 
        src={`${process.env.PUBLIC_URL}/Imgs/contact.png`}
        //src="/Imags/contact.png"
        alt="My Image"
        className="contact-img"
      />
      </motion.div>
      )}
    </AnimatePresence>
    </motion.div>
    
    </motion.div>
  );
};

export default Contact;
