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

// Define interface for social profile data
interface SocialProfile {
  name: string;
  url: string;
  icon: string;
  bgColor: string;
}

const Contact: React.FC = () => {


  // Handle click on social media link
  const handleSocialClick = (url: string): void => {
    window.open(url, '_blank');
  };

  return (
    <div className="contact-container">
      <h2>Get In Touch</h2>
      <p>Feel free to connect with me on any of these platforms:</p>
      
      <div className="social-links">
      <div
                    className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:border-indigo-500/50 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      {/* You'll need to add the actual icons here */}
                      <span className="text-gray-700 dark:text-gray-300">
                        Github
                      </span>
                    </div>
                  </div>
      </div>

      <style>{`
        .contact-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
          font-family: Arial, sans-serif;
        }
        
        h2 {
          margin-bottom: 1rem;
          color: #333;
        }
        
        .social-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .social-item {
          display: flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          transition: transform 0.2s, opacity 0.2s;
        }
        
        .social-item:hover {
          transform: translateY(-3px);
          opacity: 0.9;
        }
        
        .social-icon {
          font-size: 1.5rem;
          margin-right: 0.5rem;
        }
        
        .social-name {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Contact;