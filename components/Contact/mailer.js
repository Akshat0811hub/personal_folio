import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) => {
  return emailjs.send(
    process.env.NEXT_PUBLIC_SERVICE_ID,       // service ID
    process.env.NEXT_PUBLIC_TEMPLATE_ID,      // template ID
    { name, email, message },                 // template params
    process.env.NEXT_PUBLIC_PUBLIC_KEY        // ✅ public key directly here (NOT inside an object)
  );
};

export default mail;
