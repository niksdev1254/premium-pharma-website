import React from 'react';
import { Award, Shield, CheckCircle, FileText, Building, Globe } from 'lucide-react';

const Licensing = () => {
  const licenses = [
    {
      title: "FDA Wholesale Distributor License",
      number: "FD-WD-2024-001234",
      issueDate: "January 15, 2024",
      expiryDate: "January 15, 2027",
      status: "Active",
      authority: "U.S. Food and Drug Administration"
    },
    {
      title: "DEA Registration",
      number: "BD1234567",
      issueDate: "March 10, 2024",
      expiryDate: "March 10, 2027",
      status: "Active",
      authority: "Drug Enforcement Administration"
    },
    {
      title: "State Pharmacy Wholesale License",
      number: "PWL-2024-5678",
      issueDate: "February 20, 2024",
      expiryDate: "February 20, 2025",
      status: "Active",
      authority: "State Board of Pharmacy"
    }
  ];

  const certifications = [
    {
      title: "ISO 9001:2015 Quality Management",
      certBody: "International Organization for Standardization",
      certDate: "June 2023",
      validUntil: "June 2026",
      scope: "Quality management systems for pharmaceutical distribution"
    },
    {
      title: "ISO 13485:2016 Medical Devices",
      certBody: "International Organization for Standardization",
      certDate: "August 2023",
      validUntil: "August 2026",
      scope: "Quality management systems for medical device distribution"
    },
    {
      title: "GDP Certification",
      certBody: "Good Distribution Practice Authority",
      certDate: "April 2023",
      validUntil: "April 2026",
      scope: "Good Distribution Practice for pharmaceutical products"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="bg-blue-600 p-4 rounded-2xl">
              <Award className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-neutral-800 mb-4">Licensing & Certifications</h1>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Premium Pharma maintains all required licenses and certifications to ensure compliance 
            with federal, state, and international pharmaceutical distribution regulations.
          </p>
        </div>

        {/* Regulatory Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6 flex items-center">
            <Shield className="w-6 h-6 mr-3 text-blue-600" />
            Regulatory Compliance Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-green-800 mb-2">FDA Compliant</h3>
              <p className="text-sm text-green-700">
                Fully licensed wholesale distributor with current FDA registration
              </p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-blue-800 mb-2">DEA Registered</h3>
              <p className="text-sm text-blue-700">
                Authorized to distribute controlled substances under DEA oversight
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-purple-800 mb-2">ISO Certified</h3>
              <p className="text-sm text-purple-700">
                International quality management standards certification
              </p>
            </div>
          </div>
        </div>

        {/* Federal Licenses */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6 flex items-center">
            <Building className="w-6 h-6 mr-3 text-blue-600" />
            Federal Licenses & Registrations
          </h2>
          <div className="space-y-6">
            {licenses.map((license, index) => (
              <div key={index} className="border border-neutral-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">{license.title}</h3>
                    <p className="text-neutral-600">{license.authority}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {license.status}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-neutral-500">License Number</p>
                    <p className="font-semibold text-neutral-800">{license.number}</p>
                  </div>
                  <div>
                    <p className="text-neutral-500">Issue Date</p>
                    <p className="font-semibold text-neutral-800">{license.issueDate}</p>
                  </div>
                  <div>
                    <p className="text-neutral-500">Expiry Date</p>
                    <p className="font-semibold text-neutral-800">{license.expiryDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Certifications */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6 flex items-center">
            <Award className="w-6 h-6 mr-3 text-blue-600" />
            Quality Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="border border-neutral-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-neutral-800 mb-3">{cert.title}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-neutral-500">Certifying Body</p>
                    <p className="font-medium text-neutral-800">{cert.certBody}</p>
                  </div>
                  <div>
                    <p className="text-neutral-500">Certification Date</p>
                    <p className="font-medium text-neutral-800">{cert.certDate}</p>
                  </div>
                  <div>
                    <p className="text-neutral-500">Valid Until</p>
                    <p className="font-medium text-neutral-800">{cert.validUntil}</p>
                  </div>
                  <div>
                    <p className="text-neutral-500">Scope</p>
                    <p className="text-neutral-600">{cert.scope}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-blue-600" />
            Compliance Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-neutral-800 mb-4">Federal Regulations</h3>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>FDA Drug Supply Chain Security Act (DSCSA)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>DEA Controlled Substances Act</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>HIPAA Privacy and Security Rules</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>FDA Current Good Manufacturing Practice (cGMP)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-800 mb-4">International Standards</h3>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>WHO Good Distribution Practice (GDP)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>ICH Guidelines for Pharmaceutical Quality</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>EU Good Distribution Practice Guidelines</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>PIC/S Guide to Good Distribution Practice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Audit Information */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6 flex items-center">
            <Globe className="w-6 h-6 mr-3 text-blue-600" />
            Audit & Inspection History
          </h2>
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-green-800 mb-2">Latest FDA Inspection</h3>
              <p className="text-green-700 mb-2">Date: September 2023 | Result: No Action Indicated (NAI)</p>
              <p className="text-sm text-green-600">
                Facility inspection completed with no significant findings. All systems and processes 
                found to be in compliance with federal regulations.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-blue-800 mb-2">ISO Surveillance Audit</h3>
              <p className="text-blue-700 mb-2">Date: November 2023 | Result: Certificate Maintained</p>
              <p className="text-sm text-blue-600">
                Annual surveillance audit successfully completed. Quality management system 
                continues to meet ISO 9001:2015 requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Contact for Verification */}
        <div className="mt-8 bg-neutral-100 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold text-neutral-800 mb-4">License Verification</h3>
          <p className="text-neutral-600 mb-6">
            All licenses and certifications can be independently verified through the respective regulatory authorities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Download License Copies
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Request Verification Letter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Licensing;