import { useState } from 'react';
import { Home, BookOpen, Users, Wrench, Info, Mail, Menu, X } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './components/ui/carousel';
import logoSvg from '../imports/TO_300_Site_Mockup.svg';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = {
    home: <HomePage />,
    students: <StudentsPage />,
    faculty: <FacultyPage />,
    tools: <ToolsPage />,
    about: <AboutPage />,
    contact: <ContactPage />
  };

  const navigation = [
    { id: 'home', label: 'HOME', icon: Home },
    { id: 'students', label: 'STUDENTS', icon: BookOpen },
    { id: 'faculty', label: 'FACULTY', icon: Users },
    { id: 'tools', label: 'TOOLS', icon: Wrench },
    { id: 'about', label: 'ABOUT', icon: Info },
    { id: 'contact', label: 'CONTACT', icon: Mail }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img 
                src={logoSvg} 
                alt="California Public University Logo" 
                className="w-10 h-10 object-contain flex-shrink-0"
              />
              <h1 className="text-xl sm:text-2xl">GenAI at California Public University</h1>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`text-sm transition-colors ${
                    currentPage === item.id
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-200">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                      currentPage === item.id
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={20} />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {pages[currentPage]}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img 
                src={logoSvg} 
                alt="California Public University Logo" 
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-lg">GenAI at California Public University</h3>
                <p className="text-sm text-gray-600">
                  California Public University was founded to provide higher education to the people of this city.
                </p>
              </div>
            </div>
            <nav className="flex gap-6 text-sm text-gray-600">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className="hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-8 sm:p-12 text-white mb-12">
        <h1 className="text-3xl sm:text-4xl mb-4">Ethical AI Usage Guidelines</h1>
        <p className="text-xl text-blue-100 max-w-3xl">
          California Public University is committed to fostering responsible AI adoption that enhances learning while maintaining academic integrity and ethical standards.
        </p>
      </div>

      {/* What is GenAI */}
      <section className="mb-12">
        <h2 className="text-2xl mb-4">What is GenAI?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Generative AI (GenAI) refers to artificial intelligence systems capable of creating new content, including text, images, code, and more. Popular examples include ChatGPT, Claude, GitHub Copilot, and Google Gemini. These tools use large language models trained on vast amounts of data to understand and generate human-like responses.
        </p>
        <p className="text-gray-700 leading-relaxed">
          While GenAI offers tremendous potential to enhance productivity and learning, it also raises important questions about academic integrity, bias, privacy, and the role of human judgment in education.
        </p>
      </section>

      {/* Why is it important */}
      <section className="mb-12">
        <h2 className="text-2xl mb-4">Why is it Important?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Universities across the nation are grappling with how to integrate AI tools while preserving the core mission of education: developing critical thinking, creativity, and deep understanding. Without clear guidelines, AI can become a shortcut that undermines learning rather than a tool that enhances it.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 mt-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg mb-2">Academic Integrity</h3>
            <p className="text-gray-700 text-sm">
              Clear policies help students understand appropriate AI use and avoid unintentional plagiarism or academic dishonesty.
            </p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="text-lg mb-2">Data Privacy</h3>
            <p className="text-gray-700 text-sm">
              Protecting sensitive student and research data when using AI tools is critical for compliance and security.
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-lg mb-2">Ethical AI</h3>
            <p className="text-gray-700 text-sm">
              Understanding AI biases, limitations, and hallucinations ensures responsible use and critical evaluation of outputs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg mb-2">Can I use AI for my assignments?</h3>
            <p className="text-gray-700">
              It depends on your instructor's policy. Always check your course syllabus and ask your professor if you're unsure. When AI is permitted, you must cite it properly and verify all outputs for accuracy.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg mb-2">Do I need to cite AI tools?</h3>
            <p className="text-gray-700">
              Yes. Any time you use AI to generate content, code, or ideas, you must cite the tool, provide the prompt you used, and document your experience with it.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg mb-2">What AI tools does the university provide?</h3>
            <p className="text-gray-700">
              The university provides access to several approved AI platforms with enhanced privacy protections. See the <button onClick={() => window.scrollTo(0, 0)} className="text-blue-600 hover:underline">Tools</button> page for a complete list.
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section>
        <h2 className="text-2xl mb-6">Latest AI News</h2>
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            <CarouselItem>
              <div className="bg-gray-800 rounded-lg overflow-hidden h-full">
                <div className="p-6 sm:p-8">
                  <div className="bg-gray-700 rounded-lg h-48 mb-4 flex items-center justify-center">
                    <BookOpen className="text-gray-500" size={64} />
                  </div>
                  <h3 className="text-xl text-white mb-2">New AI Guidelines Released</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    California Public University has officially launched comprehensive AI usage guidelines for students and faculty, setting clear standards for ethical AI adoption in education.
                  </p>
                  <button className="bg-white text-gray-900 px-6 py-2 rounded hover:bg-gray-100 transition-colors">
                    READ MORE
                  </button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-gray-800 rounded-lg overflow-hidden h-full">
                <div className="p-6 sm:p-8">
                  <div className="bg-gray-700 rounded-lg h-48 mb-4 flex items-center justify-center">
                    <BookOpen className="text-gray-500" size={64} />
                  </div>
                  <h3 className="text-xl text-white mb-2">ChatGPT Enterprise Now Available</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Students and faculty can now access ChatGPT Enterprise through the university portal with enhanced privacy protections and data security features.
                  </p>
                  <button className="bg-white text-gray-900 px-6 py-2 rounded hover:bg-gray-100 transition-colors">
                    READ MORE
                  </button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-gray-800 rounded-lg overflow-hidden h-full">
                <div className="p-6 sm:p-8">
                  <div className="bg-gray-700 rounded-lg h-48 mb-4 flex items-center justify-center">
                    <BookOpen className="text-gray-500" size={64} />
                  </div>
                  <h3 className="text-xl text-white mb-2">AI Literacy Workshops This Fall</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Join our monthly workshops to learn effective AI usage strategies, citation best practices, and how to critically evaluate AI-generated content.
                  </p>
                  <button className="bg-white text-gray-900 px-6 py-2 rounded hover:bg-gray-100 transition-colors">
                    READ MORE
                  </button>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:-left-12" />
          <CarouselNext className="right-2 sm:-right-12" />
        </Carousel>
      </section>
    </div>
  );
}

function StudentsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl mb-8">AI Guidelines for Students</h1>

      {/* Core Principles */}
      <section className="mb-12">
        <h2 className="text-2xl mb-4">Core Principles</h2>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
          <p className="text-gray-800">
            <strong>Remember:</strong> AI is a tool to enhance your learning, not replace it. Your education is about developing critical thinking, creativity, and expertise that AI cannot replicate.
          </p>
        </div>
      </section>

      {/* Using AI to Learn */}
      <section className="mb-12">
        <h2 className="text-2xl mb-4">Using AI to Learn</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-green-200 bg-green-50 rounded-lg p-6">
            <h3 className="text-lg mb-3 flex items-center gap-2">
              <span className="text-green-600">✓</span> Appropriate Uses
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Brainstorming ideas and exploring different perspectives</li>
              <li>• Getting feedback on your work and identifying areas to improve</li>
              <li>• Understanding complex concepts with explanations</li>
              <li>• Debugging code and learning programming concepts</li>
              <li>• Creating study guides and practice questions</li>
              <li>• Translating or summarizing research materials</li>
            </ul>
          </div>
          <div className="border border-red-200 bg-red-50 rounded-lg p-6">
            <h3 className="text-lg mb-3 flex items-center gap-2">
              <span className="text-red-600">✗</span> Inappropriate Uses
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Submitting AI-generated work as your own</li>
              <li>• Using AI on exams or assessments unless explicitly permitted</li>
              <li>• Bypassing the learning process by having AI do assignments</li>
              <li>• Sharing confidential university data with public AI tools</li>
              <li>• Using AI without proper citation or disclosure</li>
              <li>• Relying on AI outputs without verification</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fact-Checking */}
      <section className="mb-12">
        <h2 className="text-2xl mb-4">Fact-Checking AI Outputs</h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
          <p className="text-gray-800 mb-4">
            <strong>Critical:</strong> AI systems can "hallucinate" — confidently providing false information, fabricated citations, or biased content. You are responsible for verifying all AI-generated content.
          </p>
          <h3 className="text-lg mb-3">Verification Checklist:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Cross-reference facts with authoritative sources</li>
            <li>✓ Verify all citations actually exist and support the claims</li>
            <li>✓ Check for potential biases or one-sided perspectives</li>
            <li>✓ Confirm technical accuracy with official documentation</li>
            <li>✓ Test code outputs thoroughly before submission</li>
            <li>✓ Consult subject matter experts when in doubt</li>
          </ul>
        </div>
      </section>

      {/* Citation */}
      <section className="mb-12">
        <h2 className="text-2xl mb-4">How to Cite AI Tools</h2>
        <div className="border border-gray-200 rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            When you use AI tools in your work, you must provide:
          </p>
          <ol className="space-y-3 text-gray-700 list-decimal list-inside mb-6">
            <li><strong>The tool name and version</strong> (e.g., ChatGPT-4, Claude 3.5 Sonnet)</li>
            <li><strong>The date you used it</strong></li>
            <li><strong>The prompt(s) you provided</strong></li>
            <li><strong>How you used the output</strong> (e.g., "Used for brainstorming," "Helped debug code")</li>
            <li><strong>Your reflection</strong> on advantages, limitations, or issues encountered</li>
          </ol>
          <div className="bg-gray-50 p-4 rounded border border-gray-200">
            <p className="text-sm text-gray-600 mb-2"><strong>Example Citation:</strong></p>
            <p className="text-sm text-gray-800">
              OpenAI. (2026, April 5). ChatGPT (GPT-4) [Large language model]. https://chat.openai.com<br />
              <em>Prompt: "Explain the concept of machine learning bias"</em><br />
              <em>Usage: Used to understand different types of ML bias for background research. Verified all examples with peer-reviewed sources.</em>
            </p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section>
        <h2 className="text-2xl mb-4">Student Resources</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg mb-2">AI Literacy Workshops</h3>
            <p className="text-gray-600 text-sm mb-3">Learn how to use AI tools effectively and ethically</p>
            <button className="text-blue-600 hover:underline text-sm">Learn More →</button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg mb-2">Citation Guides</h3>
            <p className="text-gray-600 text-sm mb-3">Downloadable templates for citing AI in various formats</p>
            <button className="text-blue-600 hover:underline text-sm">Download →</button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg mb-2">Academic Support Center</h3>
            <p className="text-gray-600 text-sm mb-3">Get help understanding your instructor's AI policy</p>
            <button className="text-blue-600 hover:underline text-sm">Visit →</button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg mb-2">AI Ethics Course</h3>
            <p className="text-gray-600 text-sm mb-3">Explore the broader implications of AI in society</p>
            <button className="text-blue-600 hover:underline text-sm">Enroll →</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FacultyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl mb-8">AI Guidelines for Faculty</h1>

      {/* Introduction */}
      <section className="mb-12">
        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6">
          <p className="text-gray-800">
            Faculty members have the autonomy to set AI policies for their courses based on learning objectives. This page provides guidance and resources to help you craft effective, clear AI policies for your syllabus.
          </p>
        </div>
      </section>

      {/* Policy Frameworks */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Three Policy Frameworks</h2>
        <p className="text-gray-700 mb-6">
          Based on research from leading universities, we recommend one of three approaches for your course:
        </p>

        <div className="space-y-6">
          {/* Prohibited */}
          <div className="border-2 border-red-200 rounded-lg overflow-hidden">
            <div className="bg-red-100 px-6 py-3 border-b border-red-200">
              <h3 className="text-xl">1. AI Prohibited</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong> Courses where developing foundational skills without AI assistance is critical (e.g., introductory writing, basic programming, critical analysis).
              </p>
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <p className="text-sm text-gray-800 mb-2"><strong>Sample Syllabus Language:</strong></p>
                <p className="text-sm text-gray-700">
                  "The use of generative AI tools (including but not limited to ChatGPT, Claude, GitHub Copilot) is prohibited for all assignments and assessments in this course. All work submitted must be your own original work. Using AI tools to generate, edit, or substantially inform your submissions constitutes academic dishonesty and will be addressed according to university policy."
                </p>
              </div>
            </div>
          </div>

          {/* Allowed with Disclosure */}
          <div className="border-2 border-yellow-200 rounded-lg overflow-hidden">
            <div className="bg-yellow-100 px-6 py-3 border-b border-yellow-200">
              <h3 className="text-xl">2. AI Allowed with Disclosure</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong> Upper-level courses where AI can be a productivity tool but transparency is required (e.g., research methods, advanced writing, project-based work).
              </p>
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <p className="text-sm text-gray-800 mb-2"><strong>Sample Syllabus Language:</strong></p>
                <p className="text-sm text-gray-700">
                  "You may use generative AI tools (ChatGPT, Claude, etc.) to assist with brainstorming, research, and editing in this course. However, you must:<br />
                  1) Cite all AI tool usage including the tool name, date, and prompts used<br />
                  2) Include a brief reflection on how AI helped or hindered your work<br />
                  3) Verify all AI-generated content for accuracy—you are responsible for any errors<br />
                  4) Ensure the final work represents your own understanding and analysis<br /><br />
                  Failure to properly disclose AI use constitutes academic dishonesty."
                </p>
              </div>
            </div>
          </div>

          {/* Encouraged */}
          <div className="border-2 border-green-200 rounded-lg overflow-hidden">
            <div className="bg-green-100 px-6 py-3 border-b border-green-200">
              <h3 className="text-xl">3. AI Encouraged</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                <strong>Best for:</strong> Graduate courses, professional development, and courses focused on emerging technologies where AI literacy is a learning objective.
              </p>
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <p className="text-sm text-gray-800 mb-2"><strong>Sample Syllabus Language:</strong></p>
                <p className="text-sm text-gray-700">
                  "This course actively encourages the use of AI tools as part of developing professional skills in [field]. You are expected to:<br />
                  1) Experiment with various AI tools and document your process<br />
                  2) Critically evaluate AI outputs and identify limitations<br />
                  3) Cite all AI usage and reflect on its impact on your workflow<br />
                  4) Share insights about effective AI use with classmates<br /><br />
                  Some assignments will specifically require AI tool integration. For take-home assignments, AI use is permitted unless otherwise specified."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl mb-4">Best Practices for AI Policies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg mb-3">Be Specific</h3>
            <p className="text-gray-700 text-sm">
              Clearly state which AI tools are allowed/prohibited, for which assignments, and what constitutes appropriate use. Ambiguity leads to confusion and potential violations.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg mb-3">Explain the Why</h3>
            <p className="text-gray-700 text-sm">
              Help students understand your pedagogical reasoning. When they know why AI is restricted or encouraged, they're more likely to comply.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg mb-3">Focus on Learning Objectives</h3>
            <p className="text-gray-700 text-sm">
              Align your AI policy with course goals. If an assignment aims to build a specific skill, consider whether AI use would bypass that development.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg mb-3">Include in Syllabus</h3>
            <p className="text-gray-700 text-sm">
              Make your AI policy a formal part of your syllabus. Discuss it on the first day and revisit it throughout the semester.
            </p>
          </div>
        </div>
      </section>

      {/* Training & Resources */}
      <section className="mb-12">
        <h2 className="text-2xl mb-4">Faculty Training & Resources</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg mb-2">AI Policy Workshop Series</h3>
            <p className="text-gray-600 text-sm mb-3">
              Monthly workshops on designing effective AI policies, detecting AI misuse, and integrating AI into pedagogy.
            </p>
            <button className="text-blue-600 hover:underline text-sm">Register →</button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg mb-2">Syllabus Templates Library</h3>
            <p className="text-gray-600 text-sm mb-3">
              Download customizable syllabus templates with AI policy language for various disciplines and course levels.
            </p>
            <button className="text-blue-600 hover:underline text-sm">Access Library →</button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg mb-2">Assignment Design Consultation</h3>
            <p className="text-gray-600 text-sm mb-3">
              Work with instructional designers to create AI-resistant or AI-integrated assignments.
            </p>
            <button className="text-blue-600 hover:underline text-sm">Schedule →</button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="text-lg mb-2">AI Detection Tools & Limitations</h3>
            <p className="text-gray-600 text-sm mb-3">
              Learn about available detection tools and their significant limitations—why conversation is better than surveillance.
            </p>
            <button className="text-blue-600 hover:underline text-sm">Learn More →</button>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="text-lg mb-2">Important Note on AI Detection</h3>
          <p className="text-gray-700 text-sm">
            The university does not officially endorse AI detection software due to high false-positive rates and potential bias against non-native English speakers. We encourage building trust through clear policies, meaningful assignments, and open dialogue rather than relying on surveillance technology.
          </p>
        </div>
      </section>
    </div>
  );
}

function ToolsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl mb-8">Approved AI Tools</h1>

      {/* Introduction */}
      <section className="mb-12">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
          <p className="text-gray-800 mb-4">
            California Public University provides access to enterprise-grade AI tools with enhanced privacy protections and data security. These tools are recommended for academic use as they protect sensitive university data and comply with FERPA regulations.
          </p>
          <p className="text-gray-800">
            <strong>Important:</strong> Never input confidential student data, unpublished research, or proprietary university information into public AI tools.
          </p>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Available Tools by Category</h2>

        {/* General Purpose AI */}
        <div className="mb-8">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            General Purpose AI
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg mb-2">ChatGPT Enterprise</h4>
              <p className="text-sm text-gray-600 mb-3">Advanced language model for writing, research, and analysis</p>
              <div className="space-y-1 text-sm text-gray-700 mb-4">
                <p><strong>Access:</strong> portal.cpu.edu/chatgpt</p>
                <p><strong>Authentication:</strong> University SSO</p>
                <p><strong>Data Policy:</strong> Conversations not used for training</p>
              </div>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg mb-2">Google Gemini for Education</h4>
              <p className="text-sm text-gray-600 mb-3">Integrated with Google Workspace for seamless collaboration</p>
              <div className="space-y-1 text-sm text-gray-700 mb-4">
                <p><strong>Access:</strong> Available in Google Workspace</p>
                <p><strong>Authentication:</strong> @cpu.edu email</p>
                <p><strong>Data Policy:</strong> FERPA compliant</p>
              </div>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
            </div>
          </div>
        </div>

        {/* Coding Assistants */}
        <div className="mb-8">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            Coding & Development
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg mb-2">GitHub Copilot</h4>
              <p className="text-sm text-gray-600 mb-3">AI pair programmer for code completion and generation</p>
              <div className="space-y-1 text-sm text-gray-700 mb-4">
                <p><strong>Access:</strong> Free for students via GitHub Education</p>
                <p><strong>Use Case:</strong> Learning to code, debugging, exploring APIs</p>
              </div>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg mb-2">Replit AI</h4>
              <p className="text-sm text-gray-600 mb-3">Cloud-based coding environment with AI assistance</p>
              <div className="space-y-1 text-sm text-gray-700 mb-4">
                <p><strong>Access:</strong> replit.com with university account</p>
                <p><strong>Use Case:</strong> Collaborative programming projects</p>
              </div>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
            </div>
          </div>
        </div>

        {/* Research Tools */}
        <div className="mb-8">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            Research & Analysis
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg mb-2">Elicit</h4>
              <p className="text-sm text-gray-600 mb-3">AI research assistant for literature reviews</p>
              <div className="space-y-1 text-sm text-gray-700 mb-4">
                <p><strong>Access:</strong> elicit.org (free tier available)</p>
                <p><strong>Use Case:</strong> Finding relevant papers, summarizing research</p>
              </div>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Recommended</span>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg mb-2">Otter.ai</h4>
              <p className="text-sm text-gray-600 mb-3">AI meeting transcription and note-taking</p>
              <div className="space-y-1 text-sm text-gray-700 mb-4">
                <p><strong>Access:</strong> University-wide license</p>
                <p><strong>Use Case:</strong> Recording lectures, interviews, group meetings</p>
              </div>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
            </div>
          </div>
        </div>

        {/* Specialized Tools */}
        <div className="mb-8">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
            Specialized Applications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg mb-2">Grammarly Premium</h4>
              <p className="text-sm text-gray-600 mb-3">AI writing assistant for grammar, style, and tone</p>
              <div className="space-y-1 text-sm text-gray-700 mb-4">
                <p><strong>Access:</strong> Free for all students</p>
                <p><strong>Use Case:</strong> Editing, proofreading, improving clarity</p>
              </div>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg mb-2">Zoom AI Companion</h4>
              <p className="text-sm text-gray-600 mb-3">Meeting summaries and in-meeting Q&A</p>
              <div className="space-y-1 text-sm text-gray-700 mb-4">
                <p><strong>Access:</strong> Available in Zoom meetings</p>
                <p><strong>Use Case:</strong> Generating meeting notes, action items</p>
              </div>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* Restricted Tools */}
      <section className="mb-12">
        <h2 className="text-2xl mb-4">Tools Requiring Review</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <p className="text-gray-800 mb-4">
            The following types of AI tools require approval from the AI Governance Committee before use with university data:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• AI tools that process student grades or personally identifiable information</li>
            <li>• Research AI tools handling unpublished or sensitive data</li>
            <li>• Administrative AI systems making or informing consequential decisions</li>
            <li>• Any AI tool requiring upload of bulk university data</li>
          </ul>
          <button className="mt-4 text-blue-600 hover:underline text-sm">Request Tool Review →</button>
        </div>
      </section>

      {/* Getting Help */}
      <section>
        <h2 className="text-2xl mb-4">Need Help?</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <h3 className="text-lg mb-2">IT Support</h3>
            <p className="text-sm text-gray-600 mb-3">Technical issues with approved tools</p>
            <button className="text-blue-600 hover:underline text-sm">Contact IT →</button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <h3 className="text-lg mb-2">Training</h3>
            <p className="text-sm text-gray-600 mb-3">Learn how to use these tools effectively</p>
            <button className="text-blue-600 hover:underline text-sm">View Workshops →</button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <h3 className="text-lg mb-2">Request Tool</h3>
            <p className="text-sm text-gray-600 mb-3">Suggest a new AI tool for approval</p>
            <button className="text-blue-600 hover:underline text-sm">Submit Request →</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl mb-8">About This Initiative</h1>

      {/* Mission */}
      <section className="mb-12">
        <h2 className="text-2xl mb-4">Our Mission</h2>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded">
          <p className="text-gray-800 text-lg leading-relaxed">
            California Public University is committed to harnessing the power of artificial intelligence to enhance education while preserving the core values of academic integrity, critical thinking, and human-centered learning.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Guiding Principles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg mb-2">Transparency</h3>
            <p className="text-gray-700 text-sm">
              AI use should be disclosed and documented. We believe in open conversation about AI's role in education rather than surveillance or prohibition.
            </p>
          </div>
          <div className="border-l-4 border-indigo-500 pl-4">
            <h3 className="text-lg mb-2">AI as Augmentation</h3>
            <p className="text-gray-700 text-sm">
              AI should enhance human capabilities, not replace them. Students must develop critical thinking and expertise that AI cannot replicate.
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="text-lg mb-2">Privacy & Security</h3>
            <p className="text-gray-700 text-sm">
              Student data and research must be protected. We provide secure, university-approved tools that comply with FERPA and institutional policies.
            </p>
          </div>
          <div className="border-l-4 border-pink-500 pl-4">
            <h3 className="text-lg mb-2">Equity & Access</h3>
            <p className="text-gray-700 text-sm">
              All students and faculty should have access to AI tools and training, regardless of department or background. AI literacy is essential for modern education.
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-lg mb-2">Critical Evaluation</h3>
            <p className="text-gray-700 text-sm">
              Users must understand AI limitations including bias, hallucinations, and reliability issues. We emphasize verification and critical assessment of AI outputs.
            </p>
          </div>
          <div className="border-l-4 border-amber-500 pl-4">
            <h3 className="text-lg mb-2">Faculty Autonomy</h3>
            <p className="text-gray-700 text-sm">
              Instructors have the flexibility to set AI policies aligned with their course learning objectives, with university support and resources.
            </p>
          </div>
        </div>
      </section>

      {/* Framework Development */}
      <section className="mb-12">
        <h2 className="text-2xl mb-4">Framework Development</h2>
        <p className="text-gray-700 mb-6">
          Our AI governance framework was developed through extensive research of leading universities and adjacent industries. We studied policies from:
        </p>
        <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
          {[
            'MIT', 'Stanford', 'UC Berkeley', 'University of Michigan',
            'University of Chicago', 'UT Austin', 'Arizona State',
            'UCLA', 'NYU', 'Purdue', 'UNC Chapel Hill', 'UIUC'
          ].map((uni) => (
            <div key={uni} className="bg-gray-100 px-4 py-2 rounded text-center text-sm text-gray-700">
              {uni}
            </div>
          ))}
        </div>
        <p className="text-gray-700">
          This research revealed common themes: the importance of transparency, faculty discretion, data privacy, and the need to balance innovation with academic integrity. Our framework synthesizes these best practices for California Public University.
        </p>
      </section>

      {/* Governance */}
      <section className="mb-12">
        <h2 className="text-2xl mb-4">AI Governance Committee</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <p className="text-gray-700 mb-4">
            The university has established an AI Governance Committee comprising faculty, students, IT security, legal counsel, and instructional designers. This committee:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Reviews and approves AI tools for university use</li>
            <li>• Develops training programs and educational resources</li>
            <li>• Updates policies in response to technological changes</li>
            <li>• Investigates potential risks including bias, privacy, and security</li>
            <li>• Provides guidance on ethical AI implementation</li>
            <li>• Collects feedback from the campus community</li>
          </ul>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-12">
        <h2 className="text-2xl mb-4">Implementation Timeline</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-24 flex-shrink-0 text-sm text-gray-600">Phase 1</div>
            <div className="flex-1">
              <h3 className="text-lg mb-1">Policy Development & Launch</h3>
              <p className="text-gray-700 text-sm">April 2026 - Establish framework, launch website, begin faculty training</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-24 flex-shrink-0 text-sm text-gray-600">Phase 2</div>
            <div className="flex-1">
              <h3 className="text-lg mb-1">Tool Deployment & Training</h3>
              <p className="text-gray-700 text-sm">Fall 2026 - Roll out approved tools, conduct workshops, gather feedback</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-24 flex-shrink-0 text-sm text-gray-600">Phase 3</div>
            <div className="flex-1">
              <h3 className="text-lg mb-1">Assessment & Refinement</h3>
              <p className="text-gray-700 text-sm">Spring 2027 - Evaluate effectiveness, refine policies, expand resources</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-24 flex-shrink-0 text-sm text-gray-600">Ongoing</div>
            <div className="flex-1">
              <h3 className="text-lg mb-1">Continuous Improvement</h3>
              <p className="text-gray-700 text-sm">Regular updates to address new AI technologies and emerging challenges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section>
        <h2 className="text-2xl mb-4">Get Involved</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg mb-2">Share Feedback</h3>
            <p className="text-gray-600 text-sm mb-4">
              Your input helps us improve these guidelines. Tell us what's working and what needs adjustment.
            </p>
            <button className="text-blue-600 hover:underline text-sm">Submit Feedback →</button>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg mb-2">Join Working Groups</h3>
            <p className="text-gray-600 text-sm mb-4">
              Participate in discussions about AI policy, tool evaluation, and training development.
            </p>
            <button className="text-blue-600 hover:underline text-sm">Learn More →</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl mb-6">We'd love to get to know you!</h2>
          <p className="text-gray-700 mb-6">
            Have questions about AI usage policies? Need help with approved tools? Want to share feedback? We're here to help.
          </p>

          {/* Contact Methods */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="text-blue-600 mt-1" size={20} />
              <div>
                <h3 className="text-sm">Email</h3>
                <p className="text-gray-700">ai-support@cpu.edu</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Info className="text-blue-600 mt-1" size={20} />
              <div>
                <h3 className="text-sm">Office</h3>
                <p className="text-gray-700">Academic Technology Center, Room 205</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="text-blue-600 mt-1" size={20} />
              <div>
                <h3 className="text-sm">Office Hours</h3>
                <p className="text-gray-700">Monday-Friday, 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 rounded-lg p-6">
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                placeholder="Type message here"
                rows={6}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <button className="w-full bg-gray-600 text-white py-3 rounded hover:bg-gray-700 transition-colors">
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <section>
        <h2 className="text-2xl mb-4">Quick Help</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg mb-2">Students</h3>
            <p className="text-gray-600 text-sm mb-3">Questions about using AI in your courses?</p>
            <button className="text-blue-600 hover:underline text-sm">Student Guidelines →</button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg mb-2">Faculty</h3>
            <p className="text-gray-600 text-sm mb-3">Need help creating your AI policy?</p>
            <button className="text-blue-600 hover:underline text-sm">Faculty Resources →</button>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg mb-2">IT Support</h3>
            <p className="text-gray-600 text-sm mb-3">Technical issues with AI tools?</p>
            <button className="text-blue-600 hover:underline text-sm">Submit Ticket →</button>
          </div>
        </div>
      </section>
    </div>
  );
}