import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Terms of Service</h1>
          <p className="text-gray-400 mb-8">Last updated: December 6, 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p className="leading-relaxed">
                By accessing and using Webscon's services, you agree to be bound by these Terms of Service and all 
                applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from 
                using or accessing our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Services Description</h2>
              <p className="leading-relaxed">
                Webscon provides custom software development services including web development, mobile app development, 
                UI/UX design, and custom software solutions. We reserve the right to modify or discontinue any service 
                without notice at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
              <p className="leading-relaxed mb-4">When using our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Not interfere with or disrupt the services or servers</li>
                <li>Not attempt to gain unauthorized access to any part of the services</li>
                <li>Comply with all applicable local, state, national and international laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property Rights</h2>
              <p className="leading-relaxed">
                The services and their original content, features, and functionality are owned by Webscon and are 
                protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. 
                Upon full payment for custom development work, you will own the rights to the final deliverables as specified 
                in your project agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>
              <p className="leading-relaxed mb-4">For custom development projects:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment terms will be outlined in your project agreement</li>
                <li>Typical payment structure includes an upfront deposit and milestone-based payments</li>
                <li>All fees are non-refundable unless otherwise stated in writing</li>
                <li>Late payments may incur additional fees as specified in the project agreement</li>
                <li>Work may be paused or stopped if payments are not received as agreed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Project Timeline</h2>
              <p className="leading-relaxed">
                Project timelines are estimates and may be subject to change based on project complexity, client feedback, 
                and availability of required resources. Webscon will make reasonable efforts to meet agreed-upon deadlines 
                but is not liable for delays caused by circumstances beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p className="leading-relaxed">
                Webscon shall not be liable for any indirect, incidental, special, consequential or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting 
                from your access to or use of or inability to access or use the services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Warranty Disclaimer</h2>
              <p className="leading-relaxed">
                Our services are provided "as is" and "as available" without any warranties of any kind, either express or 
                implied. Webscon does not warrant that the services will be uninterrupted, timely, secure, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
              <p className="leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. We will provide notice of any material 
                changes by posting the new Terms on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfService;
