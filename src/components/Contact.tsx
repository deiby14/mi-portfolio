import "./Contact.css";

const Contact = () => {
  return (
    <section id="contacto" className="contact">
      <h2>Contacto</h2>
      <p>¿Quieres colaborar conmigo? ¡Ponte en contacto!</p>
      <div className="contact-links">
        <a href="mailto:tu-email@ejemplo.com" className="contact-button">Email</a>
        <a href="#" className="contact-button">LinkedIn</a>
        <a href="#" className="contact-button">GitHub</a>
      </div>
    </section>
  );
};

export default Contact;