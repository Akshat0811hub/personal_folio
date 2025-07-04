import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) =>
  emailjs.send(
    process.env.NEXT_PUBLIC_SERVICE_ID,
    process.env.NEXT_PUBLIC_TEMPLATE_ID,
    { name, email, message },
    {
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY, // ✅ use correct env variable
      limitRate: {
        throttle: 10000, // 10s
      },
    }
  );

export default mail;
