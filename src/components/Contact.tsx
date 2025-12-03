// import React, { useRef, useState } from 'react';
// import { Mail, MessageSquare, Send, Github, Linkedin, Instagram } from 'lucide-react';
// import emailjs from '@emailjs/browser';
// import toast from 'react-hot-toast';

// const Contact = () => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formRef.current) return;

//     try {
//       setLoading(true);
//       await emailjs.sendForm(
//         'service_omp66kv', // Replace with your EmailJS service ID
//         'template_og8npzg', // Replace with your EmailJS template ID
//         formRef.current,
//         'SRUGN4DszRyHgNxsW' // Replace with your EmailJS public key
//       );
//       toast.success('Message sent successfully!');
//       formRef.current.reset();
//     } catch (error) {
//       toast.error('Failed to send message. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
//           Get in Touch
//         </h2>

//         <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
//           <div>
//             <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
//               Let's Connect
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300 mb-8">
//               I'm always interested in hearing about new projects and opportunities.
//               Feel free to reach out if you'd like to collaborate or just want to say hi!
//             </p>
            
//             <div className="space-y-4">
//               <a
//                 href="mailto:shaikhshadab2604@gmail.com"
//                 className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
//               >
//                 <Mail className="w-5 h-5 mr-3" />
//                 syedkumailraza28@gmail.com
//               </a>
//               <a
//                 href="https://github.com/syedkumailraza2"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
//               >
//                 <Github className="w-5 h-5 mr-3" />
//                 @syedkumailraza2
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/syedkumailraza/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
//               >
//                 <Linkedin className="w-5 h-5 mr-3" />
//                 @syedkumailraza
//               </a>
//             </div>
//           </div>

//           <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label
//                 htmlFor="user_name"
//                 className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="user_name"
//                 name="user_name"
//                 required
//                 className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="user_email"
//                 className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="user_email"
//                 name="user_email"
//                 required
//                 className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 required
//                 rows={4}
//                 className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? (
//                 'Sending...'
//               ) : (
//                 <>
//                   Send Message
//                   <Send className="ml-2 w-5 h-5" />
//                 </>
//               )}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from 'react';
import { Mail, Github, Linkedin, Twitter, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      label: 'Email',
      value: 'syedkumailraza28@gmail.com',
      href: 'mailto:syedkumailraza28@gmail.com'
    },
    {
      icon: <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      label: 'Location',
      value: 'India',
      href: null
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/syedkumailraza2',
      color: 'hover:bg-gray-100 dark:hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/syedkumailraza/',
      color: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      url: 'https://x.com/kumail_raza11',
      color: 'hover:bg-sky-50 dark:hover:bg-sky-900/20'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Get In Touch
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
                >
                  {item.icon}
                  <div className="ml-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 dark:text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-200`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Send Me a Message
            </h3>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = 'mailto:syedkumailraza28@gmail.com?subject=Contact from Portfolio&body=' +
                  encodeURIComponent(`Name: ${e.currentTarget.name}\nEmail: ${e.currentTarget.email.value}\nMessage: ${e.currentTarget.message.value}`);
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;