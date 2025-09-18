// // import React, { useState, useEffect } from 'react';

// // // Board member data
// // const boardMembers = [
// //   {
// //     id: 1,
// //     name: "Ayush Patel",
// //     title: "Vice President",
// //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
// //     social: {
// //       github: "https://github.com/ap0309",
// //       twitter: "https://twitter.com",
// //       linkedin: "https://linkedin.com"
// //     }
// //   },
// //   {
// //     id: 2,
// //     name: "Sarah Johnson",
// //     title: "President",
// //     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
// //     social: {
// //       github: "https://github.com",
// //       twitter: "https://twitter.com",
// //       linkedin: "https://linkedin.com"
// //     }
// //   },
// //   {
// //     id: 3,
// //     name: "Michael Chen",
// //     title: "Technical Director",
// //     image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
// //     social: {
// //       github: "https://github.com",
// //       twitter: "https://twitter.com",
// //       linkedin: "https://linkedin.com"
// //     }
// //   },
// //   {
// //     id: 4,
// //     name: "Emma Williams",
// //     title: "Marketing Head",
// //     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
// //     social: {
// //       github: "https://github.com",
// //       twitter: "https://twitter.com",
// //       linkedin: "https://linkedin.com"
// //     }
// //   }
// // ];

// // // CSS Styles
// // const styles = `
// //   .flip-card {
// //     perspective: 1000px;
// //     height: 380px;
// //   }
  
// //   .flip-card-inner {
// //     position: relative;
// //     width: 100%;
// //     height: 100%;
// //     text-align: center;
// //     transition: transform 0.8s;
// //     transform-style: preserve-3d;
// //   }
  
// //   .flip-card:hover .flip-card-inner {
// //     transform: rotateY(180deg);
// //   }
  
// //   .flip-card-front, .flip-card-back {
// //     position: absolute;
// //     width: 100%;
// //     height: 100%;
// //     -webkit-backface-visibility: hidden;
// //     backface-visibility: hidden;
// //     border-radius: 16px;
// //     display: flex;
// //     flex-direction: column;
// //     justify-content: center;
// //     align-items: center;
// //   }
  
// //   .flip-card-back {
// //     transform: rotateY(180deg);
// //   }
  
// //   .profile-picture {
// //     position: relative;
// //     width: 150px;
// //     height: 150px;
// //     border-radius: 50%;
// //     overflow: hidden;
// //     transition: all 0.3s ease;
// //   }
  
// //   .profile-picture::before,
// //   .profile-picture::after {
// //     content: '';
// //     position: absolute;
// //     border-radius: 50%;
// //     z-index: -1;
// //     transition: all 0.3s ease;
// //   }
  
// //   .profile-picture::before {
// //     width: 162px;
// //     height: 162px;
// //     background: rgb(96, 165, 250);
// //     top: -6px;
// //     left: -6px;
// //   }
  
// //   .profile-picture::after {
// //     width: 174px;
// //     height: 174px;
// //     background: rgb(96, 165, 250);
// //     top: -12px;
// //     left: -12px;
// //     opacity: 0.7;
// //   }
  
// //   .group:hover .profile-picture::before {
// //     transform: scale(1.1);
// //     background: rgb(59, 130, 246);
// //   }
  
// //   .group:hover .profile-picture::after {
// //     transform: scale(1.2);
// //     background: rgb(37, 99, 235);
// //   }
  
// //   .dark .profile-picture::before {
// //     background: rgb(30, 58, 138);
// //   }
  
// //   .dark .profile-picture::after {
// //     background: rgb(30, 64, 175);
// //   }
  
// //   .dark .group:hover .profile-picture::before {
// //     background: rgb(30, 64, 175);
// //   }
  
// //   .dark .group:hover .profile-picture::after {
// //     background: rgb(23, 37, 84);
// //   }
  
// //   .social-icons {
// //     opacity: 0;
// //     transform: translateY(20px);
// //     transition: all 0.4s ease;
// //   }
  
// //   .flip-card-back:hover .social-icons {
// //     opacity: 1;
// //     transform: translateY(0);
// //   }
  
// //   .social-icon {
// //     transition: all 0.3s ease;
// //   }
  
// //   .social-icon:hover {
// //     transform: translateY(-5px);
// //   }
  
// //   .theme-toggle {
// //     transition: all 0.3s ease;
// //   }
  
// //   .theme-toggle:hover {
// //     transform: rotate(30deg);
// //   }

// //   .bg-gradient-to-br {
// //     background: linear-gradient(to bottom right, var(--tw-gradient-stops));
// //   }

// //   body.dark {
// //     background-color: #111827;
// //     color: #fff;
// //   }

// //   body {
// //     background-color: #f3f4f6;
// //     transition: background-color 0.3s, color 0.3s;
// //     font-family: 'Inter', sans-serif;
// //     margin: 0;
// //     padding: 0;
// //   }

// //   #root {
// //     min-height: 100vh;
// //   }

// //   .container {
// //     max-width: 1200px;
// //     margin: 0 auto;
// //     padding: 20px;
// //   }

// //   .grid {
// //     display: grid;
// //     gap: 2rem;
// //   }

// //   @media (min-width: 768px) {
// //     .grid {
// //       grid-template-columns: repeat(2, 1fr);
// //     }
// //   }

// //   @media (min-width: 1024px) {
// //     .grid {
// //       grid-template-columns: repeat(2, 1fr);
// //     }
// //   }

// //   .shadow-xl {
// //     box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
// //   }

// //   .rounded-xl {
// //     border-radius: 0.75rem;
// //   }

// //   .text-2xl {
// //     font-size: 1.5rem;
// //     line-height: 2rem;
// //   }

// //   .text-4xl {
// //     font-size: 2.25rem;
// //     line-height: 2.5rem;
// //   }

// //   .font-bold {
// //     font-weight: 700;
// //   }

// //   .font-medium {
// //     font-weight: 500;
// //   }

// //   .mb-1 {
// //     margin-bottom: 0.25rem;
// //   }

// //   .mb-2 {
// //     margin-bottom: 0.5rem;
// //   }

// //   .mb-4 {
// //     margin-bottom: 1rem;
// //   }

// //   .mb-6 {
// //     margin-bottom: 1.5rem;
// //   }

// //   .mb-10 {
// //     margin-bottom: 2.5rem;
// //   }

// //   .mb-16 {
// //     margin-bottom: 4rem;
// //   }

// //   .mt-4 {
// //     margin-top: 1rem;
// //   }

// //   .mt-16 {
// //     margin-top: 4rem;
// //   }

// //   .mx-auto {
// //     margin-left: auto;
// //     margin-right: auto;
// //   }

// //   .p-6 {
// //     padding: 1.5rem;
// //   }

// //   .p-8 {
// //     padding: 2rem;
// //   }

// //   .px-4 {
// //     padding-left: 1rem;
// //     padding-right: 1rem;
// //   }

// //   .py-8 {
// //     padding-top: 2rem;
// //     padding-bottom: 2rem;
// //   }

// //   .w-80 {
// //     width: 20rem;
// //   }

// //   .w-12 {
// //     width: 3rem;
// //   }

// //   .h-12 {
// //     height: 3rem;
// //   }

// //   .h-48 {
// //     height: 12rem;
// //   }

// //   .flex {
// //     display: flex;
// //   }

// //   .items-center {
// //     align-items: center;
// //   }

// //   .justify-center {
// //     justify-content: center;
// //   }

// //   .space-x-4 > * + * {
// //     margin-left: 1rem;
// //   }

// //   .fixed {
// //     position: fixed;
// //   }

// //   .top-4 {
// //     top: 1rem;
// //   }

// //   .right-4 {
// //     right: 1rem;
// //   }

// //   .z-10 {
// //     z-index: 10;
// //   }

// //   .text-center {
// //     text-align: center;
// //   }

// //   .object-cover {
// //     object-fit: cover;
// //   }

// //   .rounded-full {
// //     border-radius: 9999px;
// //   }

// //   .transition-colors {
// //     transition-property: background-color, border-color, color, fill, stroke;
// //     transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
// //     transition-duration: 150ms;
// //   }

// //   .hover\\:bg-blue-600:hover {
// //     background-color: #2563eb;
// //   }

// //   .hover\\:bg-blue-400:hover {
// //     background-color: #60a5fa;
// //   }

// //   .hover\\:bg-blue-700:hover {
// //     background-color: #1d4ed8;
// //   }

// //   .hover\\:text-white:hover {
// //     color: #fff;
// //   }

// //   .border-4 {
// //     border-width: 4px;
// //   }

// //   .border-blue-400 {
// //     border-color: #60a5fa;
// //   }

// //   .from-blue-500 {
// //     --tw-gradient-from: #3b82f6;
// //     --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(59, 130, 246, 0));
// //   }

// //   .to-indigo-700 {
// //     --tw-gradient-to: #4338ca;
// //   }

// //   .text-white {
// //     color: #fff;
// //   }

// //   .text-gray-800 {
// //     color: #1f2937;
// //   }

// //   .text-gray-600 {
// //     color: #4b5563;
// //   }

// //   .text-gray-500 {
// //     color: #6b7280;
// //   }

// //   .text-gray-700 {
// //     color: #374151;
// //   }

// //   .text-blue-500 {
// //     color: #3b82f6;
// //   }

// //   .text-blue-600 {
// //     color: #2563eb;
// //   }

// //   .text-blue-400 {
// //     color: #60a5fa;
// //   }

// //   .text-blue-700 {
// //     color: #1d4ed8;
// //   }

// //   .bg-white {
// //     background-color: #fff;
// //   }

// //   .bg-blue-500 {
// //     background-color: #3b82f6;
// //   }

// //   .bg-blue-800 {
// //     background-color: #1e40af;
// //   }

// //   .bg-indigo-900 {
// //     background-color: #312e81;
// //   }

// //   /* Dark mode styles */
// //   .dark .bg-gray-800 {
// //     background-color: #1f2937;
// //   }

// //   .dark .bg-gray-900 {
// //     background-color: #111827;
// //   }

// //   .dark .text-white {
// //     color: #fff;
// //   }

// //   .dark .text-blue-300 {
// //     color: #93c5fd;
// //   }

// //   .dark .text-gray-300 {
// //     color: #d1d5db;
// //   }

// //   .dark .text-gray-400 {
// //     color: #9ca3af;
// //   }

// //   .dark .border-gray-400 {
// //     border-color: #9ca3af;
// //   }

// //   .dark .from-blue-800 {
// //     --tw-gradient-from: #1e40af;
// //   }

// //   .dark .to-indigo-900 {
// //     --tw-gradient-to: #312e81;
// //   }
// // `;

// // // Board Member Card Component
// // const BoardMemberCard = ({ member }) => {
// //   return (
// //     <div className="flip-card w-80 mx-auto mb-10">
// //       <div className="flip-card-inner">
// //         {/* Front of the card */}
// //         <div className="flip-card-front bg-white dark:bg-gray-800 shadow-xl group border-4 border-blue-400 dark:border-gray-400 rounded-xl p-6">
// //           <div className="profile-picture mb-6">
// //             <img 
// //               src={member.image} 
// //               alt={member.name}
// //               className="w-full h-full object-cover rounded-full"
// //             />
// //           </div>
// //           <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{member.name}</h3>
// //           <h4 className="text-lg text-blue-500 dark:text-blue-300 font-medium">{member.title}</h4>
// //           <p className="text-gray-500 dark:text-gray-400 mt-4">Hover or click to flip</p>
// //         </div>
        
// //         {/* Back of the card */}
// //         <div className="flip-card-back bg-gradient-to-br from-blue-500 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 text-white shadow-xl p-8">
// //           <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
// //           <h4 className="text-lg font-medium mb-6">{member.title}</h4>
// //           <p className="mb-6">Connect with me on social media</p>
          
// //           <div className="social-icons flex space-x-4">
// //             <a 
// //               href={member.social.github} 
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="social-icon bg-white text-blue-600 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
// //             >
// //               <i className="fab fa-github text-xl"></i>
// //             </a>
// //             <a 
// //               href={member.social.twitter} 
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="social-icon bg-white text-blue-400 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors"
// //             >
// //               <i className="fab fa-twitter text-xl"></i>
// //             </a>
// //             <a 
// //               href={member.social.linkedin} 
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="social-icon bg-white text-blue-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors"
// //             >
// //               <i className="fab fa-linkedin-in text-xl"></i>
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Theme Toggle Component
// // const ThemeToggle = ({ darkMode, setDarkMode }) => {
// //   return (
// //     <button 
// //       onClick={() => setDarkMode(!darkMode)}
// //       className="theme-toggle fixed top-4 right-4 bg-white dark:bg-gray-800 shadow-lg w-12 h-12 rounded-full flex items-center justify-center text-gray-700 dark:text-yellow-300 z-10"
// //     >
// //       {darkMode ? (
// //         <i className="fas fa-sun text-xl"></i>
// //       ) : (
// //         <i className="fas fa-moon text-xl"></i>
// //       )}
// //     </button>
// //   );
// // };

// // // Main App Component
// // const App = () => {
// //   const [darkMode, setDarkMode] = useState(false);
  
// //   useEffect(() => {
// //     // Apply dark mode class to body
// //     if (darkMode) {
// //       document.body.classList.add('dark');
// //     } else {
// //       document.body.classList.remove('dark');
// //     }
// //   }, [darkMode]);

// //   // Add CSS to the document
// //   useEffect(() => {
// //     const styleSheet = document.createElement("style");
// //     styleSheet.innerText = styles;
// //     document.head.appendChild(styleSheet);
    
// //     // Add Font Awesome
// //     const fontAwesome = document.createElement("link");
// //     fontAwesome.rel = "stylesheet";
// //     fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
// //     document.head.appendChild(fontAwesome);
    
// //     return () => {
// //       document.head.removeChild(styleSheet);
// //       document.head.removeChild(fontAwesome);
// //     };
// //   }, []);
  
// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      
// //       <header className="text-center mb-16">
// //         <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Board Members</h1>
// //         <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
// //           Meet our talented team of professionals driving innovation and success.
// //         </p>
// //       </header>
      
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 place-items-center">
// //         {boardMembers.map(member => (
// //           <BoardMemberCard key={member.id} member={member} />
// //         ))}
// //       </div>
      
// //       <footer className="text-center mt-16 text-gray-600 dark:text-gray-400">
// //         <p>Interactive card design with React and Tailwind CSS</p>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default App;


// import React, { useState, useEffect } from 'react';

// // Board member data
// const boardMembers = [
//   {
//     id: 1,
//     name: "Ayush Patel",
//     title: "Vice President",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
//     social: {
//       github: "https://github.com/ap0309",
//       twitter: "https://twitter.com",
//       linkedin: "https://linkedin.com"
//     }
//   },
//   {
//     id: 2,
//     name: "Sarah Johnson",
//     title: "President",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
//     social: {
//       github: "https://github.com",
//       twitter: "https://twitter.com",
//       linkedin: "https://linkedin.com"
//     }
//   },
//   {
//     id: 3,
//     name: "Michael Chen",
//     title: "Technical Director",
//     image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
//     social: {
//       github: "https://github.com",
//       twitter: "https://twitter.com",
//       linkedin: "https://linkedin.com"
//     }
//   },
//   {
//     id: 4,
//     name: "Emma Williams",
//     title: "Marketing Head",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
//     social: {
//       github: "https://github.com",
//       twitter: "https://twitter.com",
//       linkedin: "https://linkedin.com"
//     }
//   }
// ];

// // CSS Styles
// const styles = `
//   .flip-card {
//     perspective: 1000px;
//     height: 380px;
//   }
  
//   .flip-card-inner {
//     position: relative;
//     width: 100%;
//     height: 100%;
//     text-align: center;
//     transition: transform 0.8s;
//     transform-style: preserve-3d;
//   }
  
//   .flip-card:hover .flip-card-inner {
//     transform: rotateY(180deg);
//   }
  
//   .flip-card-front, .flip-card-back {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     -webkit-backface-visibility: hidden;
//     backface-visibility: hidden;
//     border-radius: 16px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }
  
//   .flip-card-back {
//     transform: rotateY(180deg);
//   }
  
//   .profile-picture {
//     position: relative;
//     width: 150px;
//     height: 150px;
//     border-radius: 50%;
//     overflow: hidden;
//     transition: all 0.3s ease;
//   }
  
//   .profile-picture::before,
//   .profile-picture::after {
//     content: '';
//     position: absolute;
//     border-radius: 50%;
//     z-index: -1;
//     transition: all 0.3s ease;
//   }
  
//   .profile-picture::before {
//     width: 162px;
//     height: 162px;
//     background: rgb(96, 165, 250);
//     top: -6px;
//     left: -6px;
//   }
  
//   .profile-picture::after {
//     width: 174px;
//     height: 174px;
//     background: rgb(96, 165, 250);
//     top: -12px;
//     left: -12px;
//     opacity: 0.7;
//   }
  
//   .group:hover .profile-picture::before {
//     transform: scale(1.1);
//     background: rgb(59, 130, 246);
//   }
  
//   .group:hover .profile-picture::after {
//     transform: scale(1.2);
//     background: rgb(37, 99, 235);
//   }
  
//   .dark .profile-picture::before {
//     background: rgb(30, 58, 138);
//   }
  
//   .dark .profile-picture::after {
//     background: rgb(30, 64, 175);
//   }
  
//   .dark .group:hover .profile-picture::before {
//     background: rgb(30, 64, 175);
//   }
  
//   .dark .group:hover .profile-picture::after {
//     background: rgb(23, 37, 84);
//   }
  
//   .social-icons {
//     opacity: 0;
//     transform: translateY(20px);
//     transition: all 0.4s ease;
//   }
  
//   .flip-card-back:hover .social-icons {
//     opacity: 1;
//     transform: translateY(0);
//   }
  
//   .social-icon {
//     transition: all 0.3s ease;
//   }
  
//   .social-icon:hover {
//     transform: translateY(-5px);
//   }
  
//   .theme-toggle {
//     transition: all 0.3s ease;
//   }
  
//   .theme-toggle:hover {
//     transform: rotate(30deg);
//   }

//   .bg-gradient-to-br {
//     background: linear-gradient(to bottom right, var(--tw-gradient-stops));
//   }

//   body.dark {
//     background-color: #111827;
//     color: #fff;
//   }

//   body {
//     background-color: #f3f4f6;
//     transition: background-color 0.3s, color 0.3s;
//     font-family: 'Inter', sans-serif;
//     margin: 0;
//     padding: 0;
//   }

//   #root {
//     min-height: 100vh;
//   }

//   .container {
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 20px;
//   }

//   .grid {
//     display: grid;
//     gap: 2rem;
//   }

//   @media (min-width: 768px) {
//     .grid {
//       grid-template-columns: repeat(2, 1fr);
//     }
//   }

//   @media (min-width: 1024px) {
//     .grid {
//       grid-template-columns: repeat(2, 1fr);
//     }
//   }

//   .shadow-xl {
//     box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
//   }

//   .rounded-xl {
//     border-radius: 0.75rem;
//   }

//   .text-2xl {
//     font-size: 1.5rem;
//     line-height: 2rem;
//   }

//   .text-4xl {
//     font-size: 2.25rem;
//     line-height: 2.5rem;
//   }

//   .font-bold {
//     font-weight: 700;
//   }

//   .font-medium {
//     font-weight: 500;
//   }

//   .mb-1 {
//     margin-bottom: 0.25rem;
//   }

//   .mb-2 {
//     margin-bottom: 0.5rem;
//   }

//   .mb-4 {
//     margin-bottom: 1rem;
//   }

//   .mb-6 {
//     margin-bottom: 1.5rem;
//   }

//   .mb-10 {
//     margin-bottom: 2.5rem;
//   }

//   .mb-16 {
//     margin-bottom: 4rem;
//   }

//   .mt-4 {
//     margin-top: 1rem;
//   }

//   .mt-16 {
//     margin-top: 4rem;
//   }

//   .mx-auto {
//     margin-left: auto;
//     margin-right: auto;
//   }

//   .p-6 {
//     padding: 1.5rem;
//   }

//   .p-8 {
//     padding: 2rem;
//   }

//   .px-4 {
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }

//   .py-8 {
//     padding-top: 2rem;
//     padding-bottom: 2rem;
//   }

//   .w-80 {
//     width: 20rem;
//   }

//   .w-12 {
//     width: 3rem;
//   }

//   .h-12 {
//     height: 3rem;
//   }

//   .h-48 {
//     height: 12rem;
//   }

//   .flex {
//     display: flex;
//   }

//   .items-center {
//     align-items: center;
//   }

//   .justify-center {
//     justify-content: center;
//   }

//   .space-x-4 > * + * {
//     margin-left: 1rem;
//   }

//   .fixed {
//     position: fixed;
//   }

//   .top-4 {
//     top: 1rem;
//   }

//   .right-4 {
//     right: 1rem;
//   }

//   .z-10 {
//     z-index: 10;
//   }

//   .text-center {
//     text-align: center;
//   }

//   .object-cover {
//     object-fit: cover;
//   }

//   .rounded-full {
//     border-radius: 9999px;
//   }

//   .transition-colors {
//     transition-property: background-color, border-color, color, fill, stroke;
//     transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//     transition-duration: 150ms;
//   }

//   .hover\\:bg-blue-600:hover {
//     background-color: #2563eb;
//   }

//   .hover\\:bg-blue-400:hover {
//     background-color: #60a5fa;
//   }

//   .hover\\:bg-blue-700:hover {
//     background-color: #1d4ed8;
//   }

//   .hover\\:text-white:hover {
//     color: #fff;
//   }

//   .border-4 {
//     border-width: 4px;
//   }

//   .border-blue-400 {
//     border-color: #60a5fa;
//   }

//   .from-blue-500 {
//     --tw-gradient-from: #3b82f6;
//     --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(59, 130, 246, 0));
//   }

//   .to-indigo-700 {
//     --tw-gradient-to: #4338ca;
//   }

//   .text-white {
//     color: #fff;
//   }

//   .text-gray-800 {
//     color: #1f2937;
//   }

//   .text-gray-600 {
//     color: #4b5563;
//   }

//   .text-gray-500 {
//     color: #6b7280;
//   }

//   .text-gray-700 {
//     color: #374151;
//   }

//   .text-blue-500 {
//     color: #3b82f6;
//   }

//   .text-blue-600 {
//     color: #2563eb;
//   }

//   .text-blue-400 {
//     color: #60a5fa;
//   }

//   .text-blue-700 {
//     color: #1d4ed8;
//   }

//   .bg-white {
//     background-color: #fff;
//   }

//   .bg-blue-500 {
//     background-color: #3b82f6;
//   }

//   .bg-blue-800 {
//     background-color: #1e40af;
//   }

//   .bg-indigo-900 {
//     background-color: #312e81;
//   }

//   /* Dark mode styles */
//   .dark .bg-gray-800 {
//     background-color: #1f2937;
//   }

//   .dark .bg-gray-900 {
//     background-color: #111827;
//   }

//   .dark .text-white {
//     color: #fff;
//   }

//   .dark .text-blue-300 {
//     color: #93c5fd;
//   }

//   .dark .text-gray-300 {
//     color: #d1d5db;
//   }

//   .dark .text-gray-400 {
//     color: #9ca3af;
//   }

//   .dark .border-gray-400 {
//     border-color: #9ca3af;
//   }

//   .dark .from-blue-800 {
//     --tw-gradient-from: #1e40af;
//   }

//   .dark .to-indigo-900 {
//     --tw-gradient-to: #312e81;
//   }
// `;

// // Board Member Card Component
// const BoardMemberCard = ({ member }) => {
//   return (
//     <div className="flip-card w-80 mx-auto mb-10">
//       <div className="flip-card-inner">
//         {/* Front of the card */}
//         <div className="flip-card-front bg-white dark:bg-gray-800 shadow-xl group border-4 border-blue-400 dark:border-gray-400 rounded-xl p-6">
//           <div className="profile-picture mb-6">
//             <img 
//               src={member.image} 
//               alt={member.name}
//               className="w-full h-full object-cover rounded-full"
//             />
//           </div>
//           <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{member.name}</h3>
//           <h4 className="text-lg text-blue-500 dark:text-blue-300 font-medium">{member.title}</h4>
//           <p className="text-gray-500 dark:text-gray-400 mt-4">Hover or click to flip</p>
//         </div>
        
//         {/* Back of the card */}
//         <div className="flip-card-back bg-gradient-to-br from-blue-500 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 text-white shadow-xl p-8">
//           <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
//           <h4 className="text-lg font-medium mb-6">{member.title}</h4>
//           <p className="mb-6">Connect with me on social media</p>
          
//           <div className="social-icons flex space-x-4">
//             <a 
//               href={member.social.github} 
//               target="_blank"
//               rel="noopener noreferrer"
//               className="social-icon bg-white text-blue-600 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
//             >
//               <i className="fab fa-github text-xl"></i>
//             </a>
//             <a 
//               href={member.social.twitter} 
//               target="_blank"
//               rel="noopener noreferrer"
//               className="social-icon bg-white text-blue-400 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors"
//             >
//               <i className="fab fa-twitter text-xl"></i>
//             </a>
//             <a 
//               href={member.social.linkedin} 
//               target="_blank"
//               rel="noopener noreferrer"
//               className="social-icon bg-white text-blue-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors"
//             >
//               <i className="fab fa-linkedin-in text-xl"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Theme Toggle Component
// const ThemeToggle = ({ darkMode, setDarkMode }) => {
//   return (
//     <button 
//       onClick={() => setDarkMode(!darkMode)}
//       className="theme-toggle fixed top-4 right-4 bg-white dark:bg-gray-800 shadow-lg w-12 h-12 rounded-full flex items-center justify-center text-gray-700 dark:text-yellow-300 z-10"
//     >
//       {darkMode ? (
//         <i className="fas fa-sun text-xl"></i>
//       ) : (
//         <i className="fas fa-moon text-xl"></i>
//       )}
//     </button>
//   );
// };

// // Main App Component
// const App = () => {
//   const [darkMode, setDarkMode] = useState(false);
  
//   useEffect(() => {
//     // Apply dark mode class to body
//     if (darkMode) {
//       document.body.classList.add('dark');
//     } else {
//       document.body.classList.remove('dark');
//     }
//   }, [darkMode]);

//   // Add CSS to the document
//   useEffect(() => {
//     const styleSheet = document.createElement("style");
//     styleSheet.innerText = styles;
//     document.head.appendChild(styleSheet);
    
//     // Add Font Awesome
//     const fontAwesome = document.createElement("link");
//     fontAwesome.rel = "stylesheet";
//     fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
//     document.head.appendChild(fontAwesome);
    
//     return () => {
//       document.head.removeChild(styleSheet);
//       document.head.removeChild(fontAwesome);
//     };
//   }, []);
  
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      
//       <header className="text-center mb-16">
//         <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Board Members</h1>
//         <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//           Meet our talented team of professionals driving innovation and success.
//         </p>
//       </header>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 place-items-center">
//         {boardMembers.map(member => (
//           <BoardMemberCard key={member.id} member={member} />
//         ))}
//       </div>
      
//       <footer className="text-center mt-16 text-gray-600 dark:text-gray-400">
//         <p>Interactive card design with React and Tailwind CSS</p>
//       </footer>
//     </div>
//   );
// };

// export default App;




