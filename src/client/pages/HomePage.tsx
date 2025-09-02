'use client';
import { useState } from 'react';
import { ThemeToggle } from '@/client/components/ThemeToggle';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

// Define types for the ExperienceItem component
interface ExperienceItemProps {
  title: string;
  position: string;
  timespan: string;
  description?: string;
  details?: string[];
  borderColor: string;
  url?: string;
  imageURL?: string;
}

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
}: ExperienceItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`border-l-4 ${borderColor} pl-3 sm:pl-6`}>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0 mb-3">
        <div className="flex-1 flex flex-col items-start">
          <div className='flex items-start gap-2 mb-2'>
            {imageURL && (
              <img src={imageURL} alt={title} className="w-5 h-5 sm:w-6 sm:h-6 object-contain rounded flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-semibold text-theme-primary font-display leading-tight">
                {url ? (
                  <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    {title}
                  </a>
                ) : (
                  title
                )}
              </h3>
            </div>
          </div>

          <p className="text-base sm:text-lg text-theme-secondary font-body  ">{position}</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 ml-7 sm:ml-0">
          <span className="text-sm text-theme-secondary whitespace-nowrap font-mono">{timespan}</span>
        </div>
      </div>

      {(details || description) && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-sm text-theme-secondary hover:text-theme-primary transition-all duration-200 mb-3 group"
        >
          <span>{isExpanded ? 'Show less' : 'Show more'}</span>
          <div className="transition-transform duration-200 ease-in-out">
            {isExpanded ? (
              <ChevronUpIcon className="w-4 h-4" />
            ) : (
              <ChevronDownIcon className="w-4 h-4" />
            )}
          </div>
        </button>
      )}

      {/* Collapsible Content with Fade Effect */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded
          ? 'max-h-[2000px] opacity-100 transform translate-y-0'
          : 'max-h-0 opacity-0 transform -translate-y-2'
          }`}
      >
        <div className="pb-3 space-y-3">
          {description && (
            <div className={`transition-all duration-300 delay-100 ${isExpanded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
              }`}>
              <p className="text-theme-secondary text-sm sm:text-base font-body leading-relaxed">
                {description}
              </p>
            </div>
          )}

          {details && (
            <div className={`transition-all duration-300 delay-200 ${isExpanded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
              }`}>
              <ul className="list-disc list-inside space-y-2 text-theme-secondary ml-2 sm:ml-4 text-sm sm:text-base font-body">
                {details.map((detail, index) => (
                  <li
                    key={index}
                    dangerouslySetInnerHTML={{ __html: detail }}
                    className="leading-relaxed"
                  />
                ))}
              </ul>
            </div>
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
        `<strong><a href="https://mechanify.in/" target="_blank" rel="noopener noreferrer" class="underline">Mechanify</a>:</strong> Insuring the 2nd life of EVs`,
        "<strong>Upraised:</strong> AI powered solution to assess talent (Acquired)",
        `<strong> <a href="" target="_blank" rel="noopener noreferrer" class="underline"> HexStar Universe </a>:</strong> Full-Stack Space Edtech Platform.`,
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
      imageURL: "https://mdfazal.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd5f23efc-cabc-4a6a-b64d-138d0ef7e7d4%2F0d75d5aa-3d37-4e3e-adca-a424c1c4f04d%2Flecturenotes_logo.jpg?table=block&id=8abaeed6-6422-40d2-8559-03d74f585143&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&freeze=true&userId=&cache=v2"
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
      imageURL: "https://mdfazal.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd5f23efc-cabc-4a6a-b64d-138d0ef7e7d4%2F70cacff9-13ce-4393-b21d-b7cfece130c5%2FCS.jpg?table=block&id=550bc3b-b13f-4b2a-ae5d-0d84388692f9&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&freeze=true&userId=&cache=v2"
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
      borderColor: "border-blue-500",
      imageURL: "https://mdfazal.notion.site/image/attachment%3A1ddc4462-0dc8-4d83-ac39-624b245bfce0%3Aimages.png?table=block&id=1bc355ae-6ea1-80f4-a52b-cf4457c02375&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&userId=&cache=v2"
    },
    {
      title: "Google Cloud Facilitator - Program Lead",
      position: "",
      timespan: "2022",
      description: "I was the Google Cloud Facilitator of my City and had to train at least 50 students on GCP. All the trainings were sucessfully finished by me and all the students received their completion badge.",
      borderColor: "border-green-500",
      imageURL: "https://mdfazal.notion.site/image/attachment%3A76e25959-864b-4601-9bbe-f397e2381713%3A1650292030943.jpg?table=block&id=1bc355ae-6ea1-8048-84a9-d5aeacee84c6&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&userId=&cache=v2"
    },
    {
      title: "Facebook Developer Circle - Core member",
      position: "",
      timespan: "2021",
      description: "I was the core member of the Facebook Developer Circle under the Lead Sabhyasachi Mukopadhyay. We built the community of 500+ strong developers learning Pytorch and other Meta technologies.",
      borderColor: "border-purple-500",
      imageURL: "https://mdfazal.notion.site/image/attachment%3A5d6420e4-4587-41da-bf16-163435aa4e2d%3Adevelopercirclesfromfacebook_logo.jpg?table=block&id=1bc355ae-6ea1-8097-a64f-dc3d51927dd0&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&userId=&cache=v2"
    },
    {
      title: "Google Developer Group, Kolkata - Core member",
      position: "",
      timespan: "2019 - 2022",
      description: "I was a core member at GDG Kolkata, which was led by Rivu Das and Indranil Dutta. We built this community over three years and expanded it to 40,000+ developers from 100+ companies and 30+ colleges in the city. At GDG we conduct sessions and workshops on Android, Dart, Flutter, Tensorflow (ML), AR, and Web development. Hands-on session is done and one-on-one guidance is given to students who face difficulty in learning or if they are stuck at some bugs.",
      borderColor: "border-orange-500",
      imageURL: "https://mdfazal.notion.site/image/attachment%3A3cfcff19-98b1-4439-a036-9a32f47a27bc%3Aimages_(1).png?table=block&id=1bc355ae-6ea1-80d4-a08d-d6ff77f425c5&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&userId=&cache=v2"
    },
    {
      title: "AWS User Group, Kolkata - Core member",
      position: "",
      timespan: "2019 - 2021",
      description: "I was a core member at AWS user Group Kolkata, wherein we built a community of 8000+ developers and also organised AWS' flagship event AWS Community Day in Kolkata. We trained all of these developers across 20+ AWS services like AWS EC2, S3, DynamoDB etc.",
      borderColor: "border-red-500",
      imageURL: "https://mdfazal.notion.site/image/attachment%3A04043df4-d0d5-4fbd-a3c1-28a877610411%3Aimages_(2).png?table=block&id=1bc355ae-6ea1-8076-81ec-e1b42697f213&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&userId=&cache=v2"
    },
    {
      title: "Cloud Native Computing Foundation User Group, Kolkata - Co-Founder",
      position: "",
      timespan: "2019 - 2021",
      description: "I along with Chirag Nayyar started the CNCF Chapter for Kolkata, very quickly we grew it to 3000+ members. We conducted 20+ sessions on Azure, AWS, Kubernetes, Docker etc.",
      borderColor: "border-indigo-500",
      imageURL: "https://mdfazal.notion.site/image/attachment%3A8936e379-8bb0-49cc-81b8-a55873aa984a%3Acncfugkol_logo.jpg?table=block&id=1bc355ae-6ea1-8027-9993-d25cbd8ad3c9&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&userId=&cache=v2"
    },
    {
      title: "Pie & AI by Deeplearning.ai - Ambassador",
      position: "",
      timespan: "2020 - 2021",
      description: "When Deeplearning AI Community came to Kolkata to open their chapter \"Pie & AI\" for this city, almost 300+ undergrad students applied to be their ambassador. I was choosen out of them to lead the chapter for the city. Under my leadership we executed 15 sessions with 10 of the speakers from overseas and 3 learning tracks. We truly helped 3000+ students to upskill in AI.",
      borderColor: "border-pink-500",
      imageURL: "https://mdfazal.notion.site/image/attachment%3A4a660c10-16c1-4a19-bda6-e37c2b7ebff4%3Aimages.jpg?table=block&id=1bc355ae-6ea1-8015-85aa-ca60e016fd70&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&userId=&cache=v2"
    },
    {
      title: "Lecturenotes Campus Ambassador Program - Co-Founder",
      position: "",
      timespan: "2022 - 2023",
      description: "At Lecturenotes our team built an ambassador program spanning to 1500+ Engineering Campuses in India giving us access to 3 Million Engineering Students pursuing B.Tech.",
      borderColor: "border-yellow-500",
      imageURL: "https://mdfazal.notion.site/image/attachment%3A97afc72c-f409-4eff-8d2b-ef44dbe89c7a%3Alecturenotes_logo.jpg?table=block&id=1bc355ae-6ea1-8078-b54a-c23a5d7f8526&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&userId=&cache=v2"
    }
  ];

  return (
    <div className="min-h-screen bg-theme-primary transition-colors duration-300">
      <ThemeToggle />

      <div className="max-w-4xl mx-auto px-3 sm:px-6 py-6 sm:py-12">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme-primary mb-4 sm:mb-6 font-display tracking-tight">MD Fazal Mustafa</h1>
        </div>

        {/* About Me Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-theme-primary mb-4 sm:mb-6 font-display">About me:</h2>
          <div className="space-y-3 sm:space-y-4 text-theme-secondary leading-relaxed text-sm sm:text-base font-body">
            <p>Born in <a href="https://www.google.com/search?q=hazaribagh&rlz=1C1UEAD_enIN1172IN1172&oq=ha&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgoIAhAAGLEDGIAEMgoIAxAuGLEDGIAEMg0IBBAuGNQCGLEDGIAEMgYIBRBFGD0yBggGEEUYPDIGCAcQRRg80gEHOTExajBqN6gCALACAA&sourceid=chrome&ie=UTF-8" className="underline">Hazaribagh</a>, grew up in <a href="https://www.google.com/search?q=calcutta&rlz=1C1UEAD_enIN1172IN1172&oq=calcutta+&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyEwgBEC4YrwEYxwEYkQIYgAQYigUyDQgCEAAYgwEYsQMYgAQyBwgDEAAYgAQyCggEEC4YsQMYgAQyBwgFEAAYgAQyDQgGEAAYkQIYgAQYigUyBwgHEAAYgAQyDQgIEAAYkQIYgAQYigUyDQgJEAAYkQIYgAQYigXSAQg1Njg3ajBqOagCBrACAfEFirSiSCwog6LxBYq0okgsKIOi&sourceid=chrome&ie=UTF-8" className='underline'>Calcutta</a> .</p>
            <p>Went to 3 different schools, from Co-ed to all boys, thus have seen both worlds.</p>
            <p>Studied Engineering, coz I love tinkering with stuff.</p>
            <p>Built & sold 2 Companies, 1 failed product & on to my 3rd one now.</p>
            <p>Consulted 8 Companies.</p>
            <p>Personally, in love with Autonomous systems and Robotics since 2019.</p>
            <p>Building Products, AI & growth is where I thrive.</p>
            <p>Research work - Coming soon.</p>
            <p>Find my writings here - <a href="https://fazalai.substack.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Substack</a></p>
            <div className="flex items-center flex-wrap gap-3 break-words">
              <span>Connect with me -</span>
              <a href="mailto:contact@fazalmustafa.com" className="text-blue-600 hover:text-blue-800 underline">
                <img src="https://mdfazal.notion.site/icons/mail_green.svg?mode=light" alt="Email" className="w-8 h-8 object-contain rounded" />
              </a>
              <a href="https://linkedin.com/in/fazalmustafa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                <img src="https://mdfazal.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd5f23efc-cabc-4a6a-b64d-138d0ef7e7d4%2Fda7cc18a-a2a7-411d-ae76-c80cfceed2be%2FLinkedIn_icon.svg.png?table=block&id=340898d8-57d5-4a98-ae5f-c6a18e94cdd1&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&userId=&cache=v2" alt="LinkedIn" className="w-6 h-6 object-contain rounded" />
              </a>
              <a href="https://twitter.com/fazalmustafa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                <img src="https://mdfazal.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd5f23efc-cabc-4a6a-b64d-138d0ef7e7d4%2Feae177d2-db14-47a4-a664-d4e6b9ff34dc%2F24twitter.jpg?table=block&id=5d288a61-9b2c-4c28-b6ec-e603de052e9f&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=40&userId=&cache=v2" alt="Twitter" className="w-8 h-8 object-contain rounded" />
              </a>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-theme-primary mb-4 sm:mb-6 font-display">Work Experience</h2>

          <div className="space-y-6 sm:space-y-8">
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
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-theme-primary mb-4 sm:mb-6 font-display">DevRel Experience</h2>

          <div className="space-y-6 sm:space-y-8">
            {devrelExperiences.map((experience, index) => (
              <ExperienceItem
                key={index}
                title={experience.title}
                position={experience.position}
                timespan={experience.timespan}
                description={experience.description}
                details={undefined}
                borderColor={experience.borderColor}
                url={undefined} imageURL={experience.imageURL} />
            ))}
          </div>
        </section>

        {/* Feature in Media Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-theme-primary mb-4 sm:mb-6 font-display">Feature in Media</h2>

          <div className="space-y-4">
            <div>
              <div className='flex items-center gap-2 mb-2'>
                <img src="https://mdfazal.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd5f23efc-cabc-4a6a-b64d-138d0ef7e7d4%2Fc1f9d618-8592-4029-8d4b-b6358166753f%2Funnamed_(1).png?table=block&id=47a7b0f0-7566-4f17-8491-b727fac553c8&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&freeze=true&userId=&cache=v2" alt="" className='w-6 h-6 sm:w-8 sm:h-8 object-contain rounded' />
                <h3 className="text-base sm:text-lg font-semibold text-theme-primary font-display">Yourstory</h3>


                <a href="https://yourstory.com/companies/collegeshala" target="_blank" rel="noopener noreferrer" className=" underline text-sm sm:text-base break-all font-body mt-2"> <p className="text-theme-secondary mb-2 text-sm sm:text-base font-body">Collegeshala was featured in our seed round of $250K.</p></a>
              </div>
            </div>

            <div>
              <div className='flex items-center gap-2 mb-2'>
                <img src="https://mdfazal.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd5f23efc-cabc-4a6a-b64d-138d0ef7e7d4%2F7a4f6fd8-4cbb-437d-9200-57e625692c6d%2F2141.png?table=block&id=e8a5dffc-7542-4a37-ab62-ced082938216&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&freeze=true&userId=&cache=v2" alt="" className='w-6 h-6 sm:w-8 sm:h-8 object-contain rounded' />
                <h3 className='text-base sm:text-lg font-semibold text-theme-primary font-display'> Inc 42</h3>

                <a href="https://inc42.com/buzz/edtech-startup-lecturenotes-acquires-collegeshala-for-an-undisclosed-amount/" target="_blank" rel="noopener noreferrer" className=" underline text-sm sm:text-base break-all font-body mt-2"><p className="text-theme-secondary mb-2 text-sm sm:text-base font-body">Collegeshala getting acquired by Lecturenotes.</p></a>
              </div>
            </div>

            <div>
              <div className='flex items-center gap-2 mb-2'>
                <img src="https://mdfazal.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fd5f23efc-cabc-4a6a-b64d-138d0ef7e7d4%2F819d2305-e028-47a8-8c49-1961389a57b3%2Fdownload_(1).png?table=block&id=1d7c1277-4186-4bc7-bef9-e971b4b42dab&spaceId=d5f23efc-cabc-4a6a-b64d-138d0ef7e7d4&width=60&freeze=true&userId=&cache=v2" alt="" className='w-6 h-6 sm:w-8 sm:h-8 object-contain rounded' />

                <h3 className="text-base sm:text-lg font-semibold text-theme-primary font-display">Entrackr</h3>

                <a href="https://entrackr.com/2022/03/lecturenotes-raises-2-5-mn-in-pre-series-a-round/" target="_blank" rel="noopener noreferrer" className=" underline text-sm sm:text-base break-all font-body mt-2"> <p className="text-theme-secondary mb-2 text-sm sm:text-base font-body">When we raised a $2.5 Million Pre-Series round for Lecturenotes.</p></a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-theme-primary mb-4 sm:mb-6 font-display">Contact</h2>
          <p className="text-theme-secondary text-sm sm:text-base font-body">
            I am mostly active on  <a href=" fazal@heva.ai" className='underline'>Email</a>  ,
            <a href="https://x.com/the_mdfazal  " className='underline'>Twitter</a>, and  <a href="https://www.linkedin.com/in/md-fazal-mustafa-ba5265129/" className='underline'>Linkedin</a> . Email is preferred but I do respond to DMs quickly.</p>
        </section>

        {/* SubStack Embed Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-theme-primary mb-4 sm:mb-6 font-display">SubStack</h2>
          <div className="bg-theme-card border border-theme-card rounded-lg p-3 sm:p-6">
            <iframe
              src="https://fazalai.substack.com/embed"
              width="100%"
              height="250"
              style={{ border: 'none' }}
              title="SubStack Embed"
              className="sm:h-[400px]"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
