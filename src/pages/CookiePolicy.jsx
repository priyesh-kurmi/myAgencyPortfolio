import { motion } from 'framer-motion';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Cookie Policy</h1>
          <p className="text-gray-400 mb-8">Last updated: December 6, 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies</h2>
              <p className="leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently, as well as to provide information to the 
                owners of the site. Webscon uses cookies to improve your experience on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
              <p className="leading-relaxed mb-4">Webscon uses cookies for several purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for the operation of our website</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Analytics Cookies:</strong> Allow us to analyze website traffic and usage patterns</li>
                <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant ads</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Session Cookies</h3>
                  <p className="leading-relaxed">
                    These temporary cookies are erased when you close your browser and are used to maintain your session 
                    state as you navigate through our website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Persistent Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies remain on your device for a set period or until you delete them. They help us recognize 
                    you as a returning visitor and remember your preferences.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">First-Party Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies are set directly by Webscon and are used to improve your experience on our website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Third-Party Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies are set by external services we use, such as Google Analytics, to help us analyze 
                    website traffic and user behavior.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Specific Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-700 rounded-lg">
                  <thead className="bg-gray-900">
                    <tr>
                      <th className="px-4 py-3 text-left border-b border-gray-700">Cookie Name</th>
                      <th className="px-4 py-3 text-left border-b border-gray-700">Purpose</th>
                      <th className="px-4 py-3 text-left border-b border-gray-700">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="px-4 py-3">session_id</td>
                      <td className="px-4 py-3">Maintains user session</td>
                      <td className="px-4 py-3">Session</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="px-4 py-3">preferences</td>
                      <td className="px-4 py-3">Stores user preferences</td>
                      <td className="px-4 py-3">1 year</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="px-4 py-3">_ga</td>
                      <td className="px-4 py-3">Google Analytics tracking</td>
                      <td className="px-4 py-3">2 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">_gid</td>
                      <td className="px-4 py-3">Google Analytics tracking</td>
                      <td className="px-4 py-3">24 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Managing Cookies</h2>
              <p className="leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can set or amend your web browser 
                controls to accept or refuse cookies. Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>See what cookies you have and delete them individually</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from particular sites</li>
                <li>Block all cookies from being set</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Please note that if you choose to block cookies, some features of our website may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. How to Control Cookies</h2>
              <p className="leading-relaxed mb-4">You can control cookies through your browser settings:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Updates to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
                operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about 
                our use of cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <p className="mt-4 leading-relaxed">
                <strong>Webscon</strong><br />
                Email: webscon.in@gmail.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
