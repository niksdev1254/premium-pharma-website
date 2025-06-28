import React from 'react';
import { FileText, Shield, Users, AlertCircle } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="bg-primary-600 p-4 rounded-2xl">
              <FileText className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-neutral-800 mb-4">Terms of Service</h1>
          <p className="text-lg text-neutral-600">
            Please read these terms carefully before using our wholesale pharmacy services
          </p>
          <p className="text-sm text-neutral-500 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4 flex items-center">
              <Users className="w-6 h-6 mr-3 text-primary-600" />
              1. Acceptance of Terms
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              By accessing and using Premium Pharma Wholesale Solutions services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              These terms apply to all visitors, users, and others who access or use our wholesale pharmacy distribution services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">2. Wholesale Services</h2>
            <div className="space-y-3 text-neutral-600">
              <p>Our wholesale pharmacy services include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Bulk pharmaceutical product distribution</li>
                <li>Medical equipment and supplies</li>
                <li>Regulatory compliance documentation</li>
                <li>Cold chain logistics and delivery</li>
                <li>24/7 customer support and order assistance</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">3. Eligibility and Registration</h2>
            <div className="space-y-4 text-neutral-600">
              <p>To use our wholesale services, you must:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Be a licensed pharmacy or healthcare provider</li>
                <li>Provide valid business registration and licensing documents</li>
                <li>Maintain current DEA and state pharmacy licenses</li>
                <li>Comply with all applicable federal and state regulations</li>
                <li>Be at least 18 years of age and legally capable of entering contracts</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">4. Orders and Pricing</h2>
            <div className="space-y-4 text-neutral-600">
              <p>All wholesale orders are subject to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Minimum order quantities and values</li>
                <li>Current wholesale pricing at time of order confirmation</li>
                <li>Product availability and stock levels</li>
                <li>Credit approval and payment terms</li>
                <li>Delivery scheduling and logistics coordination</li>
              </ul>
              <p className="mt-4">
                Prices are subject to change without notice. All orders require written confirmation and are binding upon acceptance.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">5. Payment Terms</h2>
            <div className="space-y-4 text-neutral-600">
              <p>Payment terms and conditions:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Net 30 days for approved credit accounts</li>
                <li>Cash on delivery (COD) for new customers</li>
                <li>Credit card payments accepted for orders under $10,000</li>
                <li>Late payment fees apply after 30 days</li>
                <li>All prices are exclusive of applicable taxes</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-primary-600" />
              6. Regulatory Compliance
            </h2>
            <div className="space-y-4 text-neutral-600">
              <p>All parties must comply with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>FDA regulations and guidelines</li>
                <li>DEA controlled substance requirements</li>
                <li>State pharmacy board regulations</li>
                <li>HIPAA privacy and security rules</li>
                <li>Drug Supply Chain Security Act (DSCSA)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">7. Product Quality and Returns</h2>
            <div className="space-y-4 text-neutral-600">
              <p>We guarantee product quality and offer returns under specific conditions:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All products are sourced from FDA-approved manufacturers</li>
                <li>Cold chain integrity maintained throughout distribution</li>
                <li>Returns accepted within 30 days for unopened products</li>
                <li>Damaged or defective products replaced at no charge</li>
                <li>Expired products may be returned per manufacturer policies</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">8. Limitation of Liability</h2>
            <p className="text-neutral-600 leading-relaxed">
              Premium Pharma Wholesale Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">9. Termination</h2>
            <p className="text-neutral-600 leading-relaxed">
              We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">10. Contact Information</h2>
            <div className="bg-neutral-50 rounded-lg p-6">
              <p className="text-neutral-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-neutral-600">
                <p><strong>Email:</strong> legal@premiumpharmawholesale.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Pharma District, Medical City, MC 12345</p>
              </div>
            </div>
          </section>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Important Notice</h3>
              <p className="text-yellow-700 text-sm">
                These terms are subject to change. Continued use of our services after any modifications constitutes acceptance of the new terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;