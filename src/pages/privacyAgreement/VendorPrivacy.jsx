import React from "react";

const VendorPrivacy = () => {
  return (
    <div id="my-popover" popover className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">Last Updated: [20th/october/2024]</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-gray-700">
            We respect your privacy and are committed to protecting the personal
            information you provide to us. This Privacy Policy explains how we
            collect, use, and share your personal data when you interact with
            our website or services. By using our services, you agree to the
            collection and use of information in accordance with this policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
          <p className="text-gray-700">
            When you use our services, we may ask you to provide certain
            personally identifiable information, including:
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Username</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            Why We Collect This Information
          </h3>
          <h4 className="text-lg font-semibold">2.1 Full Name</h4>
          <p className="text-gray-700 mb-2">
            We collect your full name to personalize your experience, identify
            you, and provide customer support.
          </p>
          <h4 className="text-lg font-semibold">2.2 Email Address</h4>
          <p className="text-gray-700 mb-2">
            Your email is used for account creation, communication, and sending
            important security notifications.
          </p>
          <h4 className="text-lg font-semibold">2.3 Username</h4>
          <p className="text-gray-700">
            We collect your username to give you a unique identifier, allow
            interaction with other users, and access certain features.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-700">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Provide and maintain our services.</li>
            <li>Manage your account and authenticate access.</li>
            <li>Improve and personalize your experience.</li>
            <li>Communicate updates and respond to inquiries.</li>
            <li>Monitor usage and address technical or security issues.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            4. Legal Basis for Processing Personal Data
          </h2>
          <p className="text-gray-700">
            We process your personal data based on:
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Consent: You consent to our use of the data by providing it.</li>
            <li>Contractual Necessity: We need the data to fulfill service agreements.</li>
            <li>Legitimate Interest: To improve security and manage communication.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
          <p className="text-gray-700">
            We take reasonable steps to protect your data but cannot guarantee
            100% security due to the nature of online transmissions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Data Sharing</h2>
          <p className="text-gray-700">
            We do not sell or rent your personal information. We may share your
            data with trusted service providers who assist in our operations.
            We may also disclose your data if required by law or for security
            reasons.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            7. Retention of Your Information
          </h2>
          <p className="text-gray-700">
            We retain your personal data only as long as necessary. You may
            request its deletion at any time by contacting us.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Your Rights</h2>
          <p className="text-gray-700">
            You have the right to access, correct, delete, or request a copy of
            your personal data. Contact us to exercise these rights.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">9. Changes to This Privacy Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy periodically. Changes will be posted on this page.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Email: [northernweavegh@gmail.com]</li>
            <li>Address: [GA-105-4831 Tse Addo]</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default VendorPrivacy ;
