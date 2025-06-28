import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="bg-green-600 p-4 rounded-2xl">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-neutral-800 mb-4">Privacy Policy</h1>
          <p className="text-lg text-neutral-600">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-neutral-500 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4 flex items-center">
              <Database className="w-6 h-6 mr-3 text-green-600" />
              1. Information We Collect
            </h2>
            <div className="space-y-4 text-neutral-600">
              <p>We collect information you provide directly to us, such as:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Business name, contact person, and professional credentials</li>
                <li>Contact information (email, phone, business address)</li>
                <li>Pharmacy license numbers and regulatory information</li>
                <li>Order history and product preferences</li>
                <li>Payment and billing information</li>
                <li>Communication preferences and support interactions</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-green-600" />
              2. How We Use Your Information
            </h2>
            <div className="space-y-4 text-neutral-600">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process and fulfill your wholesale orders</li>
                <li>Verify your professional credentials and licensing</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send order confirmations, shipping updates, and invoices</li>
                <li>Comply with regulatory requirements and reporting</li>
                <li>Improve our services and develop new offerings</li>
                <li>Prevent fraud and ensure transaction security</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">3. Information Sharing</h2>
            <div className="space-y-4 text-neutral-600">
              <p>We may share your information in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>With manufacturers:</strong> For product verification and warranty claims</li>
                <li><strong>With shipping partners:</strong> For delivery and logistics coordination</li>
                <li><strong>With regulatory authorities:</strong> As required by law or regulation</li>
                <li><strong>With payment processors:</strong> For secure transaction processing</li>
                <li><strong>With legal authorities:</strong> When required by law or court order</li>
              </ul>
              <p className="mt-4 font-semibold">
                We never sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-green-600" />
              4. Data Security
            </h2>
            <div className="space-y-4 text-neutral-600">
              <p>We implement comprehensive security measures to protect your information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>256-bit SSL encryption for all data transmission</li>
                <li>Secure, encrypted databases with access controls</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Employee training on data protection and privacy</li>
                <li>Multi-factor authentication for system access</li>
                <li>Regular backup and disaster recovery procedures</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">5. HIPAA Compliance</h2>
            <div className="space-y-4 text-neutral-600">
              <p>As a pharmaceutical distributor, we comply with HIPAA regulations:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Protected Health Information (PHI) is handled according to HIPAA standards</li>
                <li>Business Associate Agreements (BAAs) are executed when required</li>
                <li>Access to PHI is limited to authorized personnel only</li>
                <li>Audit logs track all access to sensitive information</li>
                <li>Breach notification procedures are in place</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">6. Data Retention</h2>
            <p className="text-neutral-600 leading-relaxed">
              We retain your information for as long as necessary to provide our services and comply with legal obligations. 
              Order records are maintained for 7 years as required by pharmaceutical regulations. 
              You may request deletion of your personal information, subject to regulatory requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4 flex items-center">
              <UserCheck className="w-6 h-6 mr-3 text-green-600" />
              7. Your Rights
            </h2>
            <div className="space-y-4 text-neutral-600">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data in a portable format</li>
                <li>File a complaint with regulatory authorities</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">8. Cookies and Tracking</h2>
            <div className="space-y-4 text-neutral-600">
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences and login information</li>
                <li>Analyze website usage and improve performance</li>
                <li>Provide personalized content and recommendations</li>
                <li>Ensure website security and prevent fraud</li>
              </ul>
              <p className="mt-4">
                You can control cookie settings through your browser preferences.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">9. Third-Party Services</h2>
            <p className="text-neutral-600 leading-relaxed">
              Our website may contain links to third-party services. We are not responsible for the privacy practices 
              of these external sites. We encourage you to review their privacy policies before providing any information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">10. Contact Us</h2>
            <div className="bg-neutral-50 rounded-lg p-6">
              <p className="text-neutral-600 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-neutral-600">
                <p><strong>Privacy Officer:</strong> privacy@premiumpharmawholesale.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Pharma District, Medical City, MC 12345</p>
              </div>
            </div>
          </section>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-800 mb-2">Your Privacy Matters</h3>
            <p className="text-blue-700 text-sm">
              We are committed to protecting your privacy and maintaining the confidentiality of your information. 
              This policy may be updated periodically to reflect changes in our practices or legal requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;