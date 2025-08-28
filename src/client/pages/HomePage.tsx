'use client';
import { useState } from 'react';
import { ThemeToggle } from '@/client/components/ThemeToggle';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

// Generic ExperienceItem component for collapsible entries
function ExperienceItem({
  title,
  position,
  timespan,
  description,
  details,
  borderColor,
  url,
  imageURL
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`border-l-4 ${borderColor} pl-6`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <div className='flex items-center gap-2 mb-2'>
            {imageURL && (
              <img src={imageURL} alt={title} className="w-6 h-6 object-contain rounded " />
            )}
            <h3 className="text-xl font-semibold text-theme-primary">
              {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  {title}
                </a>
              ) : (
                title
              )}
            </h3>
          </div>

          <p className="text-lg text-theme-secondary">{position}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-theme-secondary whitespace-nowrap">{timespan}</span>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-sm text-theme-secondary hover:text-theme-primary transition-colors duration-200 bg-theme-card hover:bg-theme-hover px-3 py-1 rounded-md border border-theme-border"
          >
            <span>{isExpanded ? 'Show less' : 'Show more'}</span>
            {isExpanded ? (
              <ChevronUpIcon className="w-4 h-4" />
            ) : (
              <ChevronDownIcon className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Collapsible Content */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="pt-3 pb-1">
          {description && (
            <p className="text-theme-secondary mb-3">{description}</p>
          )}
          {details && (
            <ul className="list-disc list-inside space-y-1 text-theme-secondary ml-4">
              {details.map((detail, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: detail }} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  // Work experience data
  const workExperiences = [
    {
      title: "Heva AI",
      position: "Founder & CEO",
      timespan: "August 2025 - Ongoing",
      description: "We're an Applied AI Research Lab working on accelerating civilization. A lot more update to come.",
      borderColor: "border-blue-500",
      url: "https://www.heva.ai/",
      imageURL: "https://mdfazal.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd5f23efc-cabc-4a6a-b64d-138d0ef7e7d4%2F03aa9a45-0115-4d08-93ee-044962070222%2FLogo_(1).png?table=block&id=c295427f-bf00-484c-b351-000fd900a227&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&freeze=true&userId=&cache=v2",
    },
    {
      title: "Consulting",
      position: "Independent Consultant",
      timespan: "September 2023 - Ongoing",
      description: "I consulted the following startups:",
      details: [
        "<strong>Mechanify:</strong> Insuring the 2nd life of EVs",
        "<strong>Upraised:</strong> AI powered solution to assess talent (Acquired)",
        "<strong>HexStar Universe:</strong> Full-Stack Space Edtech Platform.",
        "<strong>Stealth:</strong> Leveraging business data to automate Ops, strategies, etc.",
        "<strong>Stealth:</strong> Innovating Defense for modern combat dynamics."
      ],
      borderColor: "border-green-500"
    },
    {
      title: "Self-Directed R&D - Research work",
      position: "Independent Researcher",
      timespan: "September 2023 - March 2025",
      description: "I did independent research work across Neuro, Vision, and Materials:",
      details: [
        "Diagnosing Neurological disorders like Epilepsy, parkinson with just raw EEG data in seconds. We achieve accuracy as high as 99.5%.",
        "Image Vectorization Using CLIP for Integration with Large Language Models: A Novel Approach to Enhancing Memorization.",
        "Machine Learning-Driven Prediction and Simulation of Crystalline Structures for Advanced Ballistic Protection."
      ],
      borderColor: "border-purple-500"
    },
    {
      title: "Associated Innovators",
      position: "Creator, freelance project",
      timespan: "September, 2023 → October, 2023",
      description: "At Associated Innovators, I am building their whole LP system and Portfolio Management system so as to be used by Investors like Suraj Juneja, Mahavir Sharma, Suniel Shetty, etc to keep accountability of their portfolio startups.",
      borderColor: "border-orange-500",
      url: "https://associatedinnovators.com/",
      imageURL: "https://mdfazal.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd5f23efc-cabc-4a6a-b64d-138d0ef7e7d4%2F05fc4012-d41d-4183-95df-e7e62949c377%2Flogo_(2).png?table=block&id=cdc1d3b9-982f-494c-a0e4-71d2224985a1&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&freeze=true&userId=&cache=v2"
    },
    {
      title: "Freeflow Ventures",
      position: "Part-Time, Tech consultant",
      timespan: "May, 2023 - September 2023",
      description: "I was Part-time Consulting on tech-related projects.",
      details: [
        "I was part of ideating solutions for the implementation of AI-related solutions in a Shrimp factory and for its supply chain. It was the biggest shrimp company in India doing north of Rs 2000 Crores a year.",
        "I led the tech due diligence on a London-based deep tech startup who are engaged in transforming the fashion industry and counts Zara, LVMH, and other Fortune 100 company as their clients."
      ],
      borderColor: "border-red-500",
      url: "https://freeflow.zone/",
      imageURL: "https://mdfazal.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd5f23efc-cabc-4a6a-b64d-138d0ef7e7d4%2Fad22b51e-b0f9-4d59-a361-d07cfdcd70b1%2Fffl.png?table=block&id=a30219e0-dcf8-43cf-a0c8-c6157add9acb&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&freeze=true&userId=&cache=v2"
    },
    {
      title: "Sconto",
      position: "Investment Consultant, Enabler",
      timespan: "May, 2023 → June, 2023",
      description: "I was hired on a contractual basis to help Sconto raise its funds. I helped them by introducing them to 30+ VCs across India. Out of which I got them on call with 10+ VCs.",
      borderColor: "border-indigo-500",
      url: "https://www.sconto.ai/",
      imageURL: "https://mdfazal.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd5f23efc-cabc-4a6a-b64d-138d0ef7e7d4%2F5ce91e6d-3cc7-4473-a69a-460809924a81%2Fdownload_(2).png?table=block&id=5238f27e-cd40-41c0-ab86-65a993281aa7&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&freeze=true&userId=&cache=v2"
    },
    {
      title: "Lecturenotes",
      position: "Founder, head of products, head of business, head of new initiatives",
      timespan: "June, 2021 → April, 2023",
      details: [
        "I was named Co-Founder of the company post-acquisition because of my contributions.",
        "Headed the Product team for the Lecturenotes platform deployment & completely revamped the existing product modules both from a product & tech point of view.",
        "Was Instrumental in drastically reducing the Tech and infra cost while maintaining the smooth functioning of the platform.",
        "Coordinated every product requirement and aligned it with the business too. While also having a coordination channel with the marketing & sales team in order to keep track of the overall cost. Made sure that the product always remained in unison with the business plan.",
        "Here also I was part of the team that helped in raising $2.5 Million in Pre-Series A Funding.",
        "Responsible for developing the LectureRooms product from scratch, a new vertical of Lecturenotes.",
        "Completely responsible for the P&L Sheet, Tech, Product, Marketing, Business, Sales & recruitment activity for this vertical.",
        "After that, I stepped down from an Active Role."
      ],
      borderColor: "border-pink-500",
      url: "https://lecturenotes.in/",
      imageURL: "https://mdfazal.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd5f23efc-cabc-4a6a-b64d-138d0ef7e7d4%2F0d75d5aa-3d37-4c3e-adca-a424c1c4f04d%2Flecturenotes_logo.jpg?table=block&id=8abaeed6-6422-40d2-8559-03d74f585143&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&freeze=true&userId=&cache=v2"
    },
    {
      title: "Audifie",
      position: "Creater, Founder, CEO",
      timespan: "February, 2021 → April, 2021",
      description: "We created Audifie so that users can listen to their documents. In early 2021, this was a unique achievement. But we were way ahead of our time; the tech cost just didn't make sense. This is the pre-Gen AI era, where converting text to voice for 1Mn characters used to cost $16. So we had to shut the product down.",
      borderColor: "border-yellow-500",
      url: "https://www.audifie.com/",
      imageURL: "https://mdfazal.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd5f23efc-cabc-4a6a-b64d-138d0ef7e7d4%2F3ce1605d-1dcf-4014-8f06-7d46d17b04dc%2FSXxVzAn0_400x400.jpg?table=block&id=be0fcf2b-918a-46e4-9067-f89e2188823f&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&freeze=true&userId=&cache=v2"
    },
    {
      title: "Collegeshala",
      position: "Founder, CBO, CPO",
      timespan: "December, 2019 → May, 2021",
      details: [
        "Ideated, conceptualized & developed India's First faculty-driven university-specific notes marketplace for Undergraduate academic degree courses. The development team was of only 3 people including me. And we rolled out the MVP in just 25 days.",
        "Coordinated with the Growth and Marketing Teams for successful Go-To-Market deployment of the product.",
        "Helped to scale the product so as to sustain the usage of the platform by 1 lakh+ student users across 15 Universities.",
        "Was Instrumental in raising a seed fund of $250K from an Angel Investor for further growth",
        "Our company was later acquired by LectureNotes Technologies in August 2021 in a multi-million-dollar deal."
      ],
      borderColor: "border-teal-500",
      url: "https://www.linkedin.com/company/collegeshala-edutech/",
      imageURL: "https://mdfazal.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd5f23efc-cabc-4a6a-b64d-138d0ef7e7d4%2F70cacff9-13ce-4393-b21d-b7cfece130c5%2FCS.jpg?table=block&id=550bcb3b-b13f-4b2a-ae5d-0d84388692f9&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&freeze=true&userId=&cache=v2"
    },
    {
      title: "Wholmeal",
      position: "Founding Engineer, Android Developer, Operations",
      timespan: "September, 2019 → November, 2019",
      details: [
        "Worked on their mobile app both Frontend using Flutter and Backend using Firebase & AWS.",
        "Post-launch the app garnered over 25k+ downloads in a month and through this app the company raked in 10 lakhs of revenue.",
        "That helped the startup to raise funds of Rs 40 lakhs.",
        "After that the 2 founders, I was the third guy in their startup. Helped them to set up processes & Ops with delivery agents, cooks, and delivery timelines.",
        "I helped them with all sorts of strategies regarding Products, Go-To-Market plans, Marketing & Outreach activities, etc."
      ],
      borderColor: "border-cyan-500",
      url: "https://www.linkedin.com/company/wholmeal/",
      imageURL: "https://mdfazal.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd5f23efc-cabc-4a6a-b64d-138d0ef7e7d4%2Fcbec6397-4295-4a8c-a991-9055262ed217%2Fwholmeal.jpg?table=block&id=7d198665-6f14-4f0a-9206-3f49c441d22e&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&freeze=true&userId=&cache=v2"
    },
    {
      title: "Learning While Travelling",
      position: "Intern, Front end development",
      timespan: "June, 2019 → August, 2019",
      description: "I revamped and built a whole new product for them.",
      borderColor: "border-gray-500",
      url: "https://learningwhiletravelling.com/",
      imageURL: "https://mdfazal.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd5f23efc-cabc-4a6a-b64d-138d0ef7e7d4%2Fa1c7360e-90d4-4911-94e3-8c703de35eca%2Fdownload_(1).jpg?table=block&id=5efc58e4-f91a-4e5b-97d2-f324043ab6d7&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&freeze=true&userId=&cache=v2"
    }
  ];

  // DevRel experience data
  const devrelExperiences = [
    {
      title: "Google Developer Student Club Lead - Campus Lead",
      position: "",
      timespan: "2020 - 2021",
      description: "I started the Google Developer Student Club at my College Campus and grew the community from 0 to 1500+ members. I built a core team of 8 to 10 folks and we executed 30+events, 2 Mini-Hackathons & 4 Programs.",
      borderColor: "border-blue-500"
    },
    {
      title: "Google Cloud Facilitator - Program Lead",
      position: "",
      timespan: "2022",
      description: "I was the Google Cloud Facilitator of my City and had to train at least 50 students on GCP. All the trainings were sucessfully finished by me and all the students received their completion badge.",
      borderColor: "border-green-500"
    },
    {
      title: "Facebook Developer Circle - Core member",
      position: "",
      timespan: "2021",
      description: "I was the core member of the Facebook Developer Circle under the Lead Sabhyasachi Mukopadhyay. We built the community of 500+ strong developers learning Pytorch and other Meta technologies.",
      borderColor: "border-purple-500"
    },
    {
      title: "Google Developer Group, Kolkata - Core member",
      position: "",
      timespan: "2019 - 2022",
      description: "I was a core member at GDG Kolkata, which was led by Rivu Das and Indranil Dutta. We built this community over three years and expanded it to 40,000+ developers from 100+ companies and 30+ colleges in the city. At GDG we conduct sessions and workshops on Android, Dart, Flutter, Tensorflow (ML), AR, and Web development. Hands-on session is done and one-on-one guidance is given to students who face difficulty in learning or if they are stuck at some bugs.",
      borderColor: "border-orange-500"
    },
    {
      title: "AWS User Group, Kolkata - Core member",
      position: "",
      timespan: "2019 - 2021",
      description: "I was a core member at AWS user Group Kolkata, wherein we built a community of 8000+ developers and also organised AWS' flagship event AWS Community Day in Kolkata. We trained all of these developers across 20+ AWS services like AWS EC2, S3, DynamoDB etc.",
      borderColor: "border-red-500"
    },
    {
      title: "Cloud Native Computing Foundation User Group, Kolkata - Co-Founder",
      position: "",
      timespan: "2019 - 2021",
      description: "I along with Chirag Nayyar started the CNCF Chapter for Kolkata, very quickly we grew it to 3000+ members. We conducted 20+ sessions on Azure, AWS, Kubernetes, Docker etc.",
      borderColor: "border-indigo-500"
    },
    {
      title: "Pie & AI by Deeplearning.ai - Ambassador",
      position: "",
      timespan: "2020 - 2021",
      description: "When Deeplearning AI Community came to Kolkata to open their chapter \"Pie & AI\" for this city, almost 300+ undergrad students applied to be their ambassador. I was choosen out of them to lead the chapter for the city. Under my leadership we executed 15 sessions with 10 of the speakers from overseas and 3 learning tracks. We truly helped 3000+ students to upskill in AI.",
      borderColor: "border-pink-500"
    },
    {
      title: "Lecturenotes Campus Ambassador Program - Co-Founder",
      position: "",
      timespan: "2022 - 2023",
      description: "At Lecturenotes our team built an ambassador program spanning to 1500+ Engineering Campuses in India giving us access to 3 Million Engineering Students pursuing B.Tech.",
      borderColor: "border-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-theme-primary transition-colors duration-300">
      <ThemeToggle />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-theme-primary mb-6">MD Fazal Mustafa</h1>
        </div>

        {/* About Me Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-theme-primary mb-6">About me:</h2>
          <div className="space-y-4 text-theme-secondary leading-relaxed">
            <p>Born in Hazaribagh, grew up in Calcutta.</p>
            <p>Went to 3 different schools, from Co-ed to all boys, thus have seen both worlds.</p>
            <p>Studied Engineering, coz I love tinkering with stuff.</p>
            <p>Built & sold 2 companies, 1 failed product & on to my 3rd one now.</p>
            <p>Consulted 8 companies.</p>
            <p>Personally, in love with Autonomous systems and robotics since 2019.</p>
            <p>Building Products, AI & growth is where I thrive.</p>
            <p>Research work - coming soon.</p>
            <p>Find my writings here - <a href="https://fazalai.substack.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Substack</a></p>
            <p>Connect with me - <a href="mailto:contact@fazalmustafa.com" className="text-blue-600 hover:text-blue-800 underline">Email</a> <a href="https://linkedin.com/in/fazalmustafa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Linkedin</a> <a href="https://twitter.com/fazalmustafa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Twitter</a></p>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-theme-primary mb-6">Work Experience</h2>

          <div className="space-y-8">
            {workExperiences.map((experience, index) => (
              <ExperienceItem
                key={index}
                title={experience.title}
                position={experience.position}
                timespan={experience.timespan}
                description={experience.description}
                details={experience.details}
                borderColor={experience.borderColor}
                url={experience.url} imageURL={experience.imageURL} />
            ))}
          </div>
        </section>

        {/* Essays Section */}
        {/* <section className="mb-16">
          <h2 className="text-2xl font-semibold text-theme-primary mb-6">Essays - 5</h2>
          <p className="text-theme-secondary mb-4">Always just show the 5 latest essays from my substack here & then a button "read more essays".</p>
          <a href="https://fazalai.substack.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
            Read more essays
          </a>
        </section> */}

        {/* DevRel Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-theme-primary mb-6">DevRel Experience</h2>

          <div className="space-y-8">
            {devrelExperiences.map((experience, index) => (
              <ExperienceItem
                key={index}
                title={experience.title}
                position={experience.position}
                timespan={experience.timespan}
                description={experience.description}
                details={undefined}
                borderColor={experience.borderColor}
                url={undefined} imageURL={undefined} />
            ))}
          </div>
        </section>

        {/* Feature in Media Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-theme-primary mb-6">Feature in Media</h2>

          <div className="space-y-4">
            <div>
              <div className='flex items-center gap-2 mb-2'>
                <img src="https://mdfazal.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd5f23efc-cabc-4a6a-b64d-138d0ef7e7d4%2Fc1f9d618-8592-4029-8d4b-b6358166753f%2Funnamed_(1).png?table=block&id=47a7b0f0-7566-4f17-8491-b727fac553c8&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&freeze=true&userId=&cache=v2" alt="" className='w-8 h-8 object-contain rounded' />
                <h3 className="text-lg font-semibold text-theme-primary">Yourstory</h3>
              </div>

              <p className="text-theme-secondary mb-2">Collegeshala was featured in our seed round of $250K.</p>
              <a href="https://yourstory.com/companies/collegeshala" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://yourstory.com/companies/collegeshala</a>
            </div>

            <div>
              <div className='flex items-center gap-2 mb-2'>
                <img src="https://mdfazal.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd5f23efc-cabc-4a6a-b64d-138d0ef7e7d4%2F7a4f6fd8-4cbb-437d-9200-57e625692c6d%2F2141.png?table=block&id=e8a5dffc-7542-4a37-ab62-ced082938216&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&freeze=true&userId=&cache=v2" alt="" className='w-8 h-8 object-contain rounded' />
<h3 className='text-lg font-semibold text-theme-primary'>Inc</h3>
              </div>
              <p className="text-theme-secondary mb-2">Collegeshala getting acquired by Lecturenotes.</p>
              <a href="https://inc42.com/buzz/edtech-startup-lecturenotes-acquires-collegeshala-for-an-undisclosed-amount/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://inc42.com/buzz/edtech-startup-lecturenotes-acquires-collegeshala-for-an-undisclosed-amount/</a>
            </div>

            <div>
              <div className='flex items-center gap-2 mb-2'>
                <img src="https://mdfazal.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd5f23efc-cabc-4a6a-b64d-138d0ef7e7d4%2F819d2305-e028-47a8-8c49-1961389a57b3%2Fdownload_(1).png?table=block&id=1d7c1277-4186-4bc7-bef9-e971b4b42dab&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&freeze=true&userId=&cache=v2" alt="" className='w-8 h-8 object-contain rounded' />

                <h3 className="text-lg font-semibold text-theme-primary">Entrackr</h3>
              </div>
              <p className="text-theme-secondary mb-2">When we raised a $2.5 Million Pre-Series round for Lecturenotes.</p>
              <a href="https://entrackr.com/2022/03/lecturenotes-raises-2-5-mn-in-pre-series-a-round/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://entrackr.com/2022/03/lecturenotes-raises-2-5-mn-in-pre-series-a-round/</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-theme-primary mb-6">Contact</h2>
          <p className="text-theme-secondary">I am mostly active on Email, Twitter, and Linkedin. Email is preferred but I do respond to DMs quickly.</p>
        </section>

        {/* SubStack Embed Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-theme-primary mb-6">SubStack</h2>
          <div className="bg-theme-card border border-theme-card rounded-lg p-6">
            <iframe
              src="https://fazalai.substack.com/embed"
              width="100%"
              height="400"
              style={{ border: 'none' }}
              title="SubStack Embed"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
