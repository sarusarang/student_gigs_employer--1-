export default function LoginTerms() {

  return (


    <div className="flex justify-center items-center min-h-screen py-5">


      <div className="max-w-7xl mx-auto px-4 pb-8 pt-28 bg-white">
        <div className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Terms & Conditions for Employers – StudentsGigs.com</h1>
          <p className="text-gray-600 mt-2">(Effective Date: {new Date().toLocaleDateString()})</p>
        </div>

        <div className="space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. General Terms</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>By registering on StudentsGigs.com, you agree to follow these terms when posting jobs or hiring students.</li>
              <li>Employers must comply with local labor laws and ethical employment standards.</li>
              <li>StudentsGigs.com is not responsible for candidate behavior, job performance, or damages caused by students.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Job Posting & Recruitment Policies</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Employers must provide accurate job descriptions and salary details.</li>
              <li>Employers must not:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Post misleading or false job advertisements.</li>
                  <li>Demand money from students for job placements.</li>
                  <li>Offer jobs that violate labor laws or involve unsafe working conditions.</li>
                </ul>
              </li>
              <li>Employers must treat students professionally and fairly.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Salary, Payments & Disputes</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Employers are fully responsible for paying students on time and as agreed.</li>
              <li>StudentsGigs.com does not handle or guarantee salary payments.</li>
              <li>If salary disputes arise, the student and employer must resolve them directly.</li>
              <li>Non-payment complaints may result in employer account suspension.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Workplace Conduct & Legal Compliance</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Employers must provide a safe and respectful workplace.</li>
              <li>Employers must not engage in:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Harassment, discrimination, or abuse towards students.</li>
                  <li>Forcing unpaid labor or unethical working conditions.</li>
                  <li>Collecting personal data for non-job-related activities.</li>
                </ul>
              </li>
              <li>Employers are liable for any legal actions due to labor law violations.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Employer Responsibilities & Liabilities</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>If an employer misuses student contact details, they may face a ban from the platform.</li>
              <li>If a student causes damage to company property, the employer must handle the issue directly.</li>
              <li>StudentsGigs.com is not responsible for student misconduct or damage caused at the workplace.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Platform Usage & Restrictions</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Employers must not:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Post illegal, inappropriate, or misleading job listings.</li>
                  <li>Share student details with third parties.</li>
                  <li>Use the platform for non-recruitment purposes.</li>
                </ul>
              </li>
              <li>Repeated violations will result in a permanent ban from the platform.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Dispute Resolution & Legal Disclaimer</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Employers and students must resolve disputes between themselves.</li>
              <li>StudentsGigs.com only acts as an intermediary and is not responsible for disputes.</li>
              <li>Any legal claims must be directed towards the responsible party, not StudentsGigs.com.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Agreement & Acknowledgment</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>By registering, you agree to these terms and acknowledge that StudentsGigs.com is not responsible for employment-related disputes.</li>
              <li>Click "Agree" to continue using the platform.</li>
            </ul>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-600 italic">
          <p>Note: These terms and conditions are designed to protect both students and employers, ensuring a fair and safe environment on StudentsGigs.com.</p>
        </div>
      </div>
    </div>
  );
}