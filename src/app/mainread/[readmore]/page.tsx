"use client";

import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import SBP from '../../../../public/images/SBP-foto-lol.jpg'
import aeroplane from '../../../../public/images/aeroplane-.jpg.avif'
import gold from '../../../../public/images/gold.avif'
import solar from '../../../../public/images/solar-panels-.jpg.avif'
import digital from '../../../../public/images/Digital-Skills.jpg'
import cybersecurity from '../../../../public/images/cybersecurity.jpg'
import internet from '../../../../public/images/internet.avif'
import helmet from '../../../../public/images/helmet.avif'
import tax from '../../../../public/images/tax.jpg.avif'
import gemini from '../../../../public/images/Gemini-Live.jpg.avif'
import attendanceMonitor from '../../../../public/images/punjab schools.avif'
import court from '../../../../public/images/court-.jpg.avif'
import connection from '../../../../public/images/no-internet.jpg'
import cyberknife from '../../../../public/images/CyberKnife-tech.avif'
import plots from '../../../../public/images/residential-plots.jpg.avif'
import babarAzam from '../../../../public/images/bobby-1.jpg.avif'
import transport from '../../../../public/images/Free-Transport.jpg.avif'
import infinix from '../../../../public/images/Infinix-1.jpg.avif'
import pkr from '../../../../public/images/PKR.jpg.avif'
import AIOU from '../../../../public/images/AIOU.jpg'
import Comments from '@/app/comments/page';
import Link from 'next/link';

export interface Blog {
  title: string;
  slug: string;
  id: number;
  image: any;
  description1: string;
  description2: string;
  description3: string;
  author: string;
  createdAt: string;
  time: string;
}

export const blogs:Blog[] = [
  {
    id: 1,
    title: "State Bank Announces Winners of New Currency Notes Design Competition",
    description1: "The State Bank of Pakistan (SBP) has announced the successful conclusion of Art Competition for the designs of the new banknote series.In a statement, SBP said it appreciates the local artists and designers who participated in the competition showcasing their creativity and talent in this important endeavor.",
    description2: "SBP said the shortlisted designs are suggestive in nature and are being shared with international designers who have been shortlisted to work with SBP and finalize designs for the new banknote series.The International designers, while drawing inspiration from the local art submissions, will, however, be free to employ their own design expertise and imagination to create final designs for the new banknotes.",
    description3:"The SBP will ensure that the new banknote series reflects the rich cultural heritage and progressive vision of our nation, and hopes the final designs fully reflects this collaborative effort.It said that winners will be awarded prize money, as per earlier announcement, to appreciate their contribution to this important national project. Further details regarding the award ceremony will be communicated shortly, it added.",
       image: SBP,
    slug: "blog-1",
    author: "By Arsalan Khattak",
    createdAt: " Published Sep 5, 2024 ",
    time:"9:43 pm"
  },
  {
    id: 2,
    title: "Gold Price Hits All-Time High in Pakistan as International Prices Soar",
    image: gold,
    slug: "blog-2",
    description1:"The price of gold in Pakistan breached the record high mark for the second time this week on Friday. According to data issued by the All-Sindh Sarafa Jewellers Association, the price of gold (24 carats) rose by Rs. 2,900 per tola to Rs. 265,900, while the price of 10 grams climbed by Rs. 2,486 to Rs. 227,966.",
    description2: "The previous record high price of the precious metal in Pakistan was recorded on September 11, at Rs. 264,000 per tola.In the international market gold prices hit a record high on Thursday with spot gold up 1.7 percent at $2,554.05 per ounce as of 1810 GMT, while the US gold futures were 1.5 percent higher at $2,580.60. ",
    description3:"",
    author: "By Sultan Naseer",
    createdAt: " Published Sep 13, 2024 ",
    time:"5:55 pm",
  },
  {
    id: 3,
    title: "Several New Airlines Set to Launch Operations in Pakistan",
    image: aeroplane,
    slug: "blog-3",
    author: "By Arsalan Khattak",
    createdAt: " Published Sep 6, 2024 ",
    time:"6:53 pm",
    description1: "Several new airlines are gearing up to launch their services in various cities across Pakistan, according to a report by a private news channel, citing Civil Aviation Authority (CAA) sources.Sources within the CAA revealed that local airlines, including Jet Green, Q Airways, and Go Green Air, have applied for the necessary licenses and permits.",
    description2: "Additionally, Air Indus has approached the CAA to resume its operations, while Q Aviation and Liberty Air have also submitted applications for licenses to begin flight services in the country.The CAA has welcomed the influx of applications, noting that the entry of new airlines is a positive sign for the economy. It is expected that this development will offer travelers more options, boost foreign exchange earnings in the aviation sector, and generate employment opportunities.",
    description3:"Currently, three private airlines—Airblue, SereneAir, and AirSial—are already operating within Pakistan. The introduction of new competitors is anticipated to improve service quality and provide more competitive pricing for passengers."
  },
  {
    id: 4,
    title: "Solar Panel Prices Drop Significantly Nationwide",
    image: solar,
    slug: "blog-4",
    description1: " Solar panel prices across the country witnessed a major decline on Friday, offering a significant reduction in the cost of systems ranging from 5 to 15 kilowatts. According to reports, the price cuts have been as high as Rs300,000.The market price for a 5-kilowatt solar system now stands at Rs650,000, while a 7-kilowatt system has been priced at Rs725,000.For larger systems, the cost of a 10-kilowatt setup has dropped to Rs950,000, and a 12-kilowatt system is now available for Rs1.1 million.",
    description2: "The price of a 15-kilowatt system has been set at Rs1.25 million, marking the highest reduction in this range.These prices apply specifically to on-grid systems, which are designed to be connected to the national grid. However, those opting for hybrid systems—capable of storing energy using batteries—will need to bear the additional cost of batteries.",
    description3:"The reduction in solar panel prices is expected to encourage more households and businesses to invest in renewable energy, helping to reduce electricity costs and reliance on traditional power",
      author: "By Arsalan Khattak",
    createdAt: " Published Sep 6, 2024 ",
    time:"6:53 pm" 
  },
   {
    id: 5,
    title: "KP and Google to Give Digital Skills Scholarships to Thousands of Youngsters",
     image: digital,
     slug: "blog-5",
     description1: "In a significant step toward building a digitally empowered and economically resilient Khyber Pakhtunkhwa, the Khyber Pakhtunkhwa Information Technology Board (KPITB), under the leadership of the Honorable Chief Minister Mr. Ali Amin Khan Gandapur, has unveiled a series of groundbreaking initiatives.",
    description2: "The KPITB has launched its Digital Internship Program, offering 200 internship opportunities to young graduates to train them in industry-demanded skills. These interns will be placed in IT companies located in IT parks in Peshawar and Abbottabad, enabling them to gain practical experience and increase employability. The initiative was launched under the direction of Chief Minister Ali Amin Khan Gandapur.",
    description3:"The new Join IT online portal was introduced to connect skilled individuals with IT companies seeking technical expertise. The platform will act as a talent demand-supply bridge, allowing organizations to find the skilled workforce they need while providing employment opportunities to local talent. This initiative was also launched by the Chief Minister.",
   author: "By Arsalan Khattak",
    createdAt: " Published Sep 14, 2024 ",
    time:"12:10 am" 
  },
    {
    id: 6,
    title: "Pakistan Achieves Top Score in Cybersecurity Index 2024 Report",
      image: cybersecurity,
      slug: "blog-6",
      description1: "Pakistan has achieved the top score in the International Telecommunication Union’s (ITU) Global Cybersecurity Index 2024 report. The report ranks hundreds of countries across different continents according to their cybersecurity status and Pakistan was ranked among the top-tier performers.",
       description2: "The report divides these countries into tiers, indicating their cybersecurity performance scores. Those with the highest scores reach the highest tier (Tier 1) while those with the lowest fall under Tier 5. The score takes into account several factors such as a country’s legal measures, technical measures, organization measures, capacity development, and cooperation measures.  Here are all the tiers:",
    description3:"Pakistan was ranked in the highest tier (role modeling) with a score as high as 95-100. Other countries on this list were Australia, Germany, the United States, Bahrain, Italy, Oman, and many others. This means that Pakistan is regarded as a role model when it comes to cybersecurity measures.",
       author: "By Aasil Ahmed",
    createdAt: " Published Sep 14, 2024 ",
    time:"12:28 pm"
  },
    {
    id: 7,
    title: "Internet, Mobile Traffic, ATMs At Risk of Shutting Down Across Pakistan",
      image: internet,
      slug: "blog-7",
      description1: "Around 50 percent of mobile traffic, 10 percent of Internet traffic, and around 40 percent of ATM banking machines are at risk of out of service, due to non-renewal of Long Distance International (LDI) licenses on account of outstanding dues of around Rs. 79 billion, official documents revealed.There were 13 LDI Licensees up for renewal. Four licenses are processed for renewal, and the remaining 9 licensees have outstanding dues regarding APC for USF.",
       description2: "Pakistan has several cross-border microwaves and OFC links with neighboring countries like Afghanistan, facilitated by Multinet Pakistan which enhance international connectivity.Non-renewal will lead to the discontinuity of the international data transit, potentially causing connectivity issues for operators in Afghanistan that rely on these routes.",
    description3:"Pakistan has several cross-border microwaves and OFC links with neighboring countries like Afghanistan, facilitated by Multinet Pakistan which enhance international connectivity.Non-renewal will lead to the discontinuity of the International data transit, potentially causing connectivity issues for operators in Afghanistan.",
       author: "By Arsalan Khattak",
    createdAt: " Published Sep 10, 2024",
    time:"11:01 am"
  },
    {
    id: 8,
    title: "Lahore Cracks Down on Helmetless Motorcyclists",
      image: helmet,
      slug: "blog-8",
      description1: "motorcyclists riding without helmetsIn Lahore, a strict operation has begun to target motorcyclists riding without helmets and licenses at the main entry and exit points.Authorities have stationed personnel at several key locations, including Ravi Bridge, Saggian, Thokar Niaz Baig, Babu Sabu, Ada Plot, Nawaz Sharif Interchange, and 10 additional spots such as Harbanspura, Gajjumata, and Bhatta Chowk.",
       description2: "For now, motorcyclists without helmets will be allowed to enter the city after being fined. However, starting next week, those without helmets will be barred from entering the city. Additionally, authorities plan to act against rickshaws and public transport vehicles using LPG cylinders.In another development, Lahore’s Chief Traffic Officer, Amara Athar, has initiated a similar campaign targeting motorcyclists without valid driving licenses. Offenders will be fined Rs. 2,000, and their motorcycles will be seized until they provide a valid license.",
    description3:"The CTO emphasized that obtaining a license costs Rs. 930 and encouraged citizens to comply with the law. Furthermore, the 42-day validity for learner permits has been abolished, meaning motorcyclists must secure a full license before using public roads.To assist the public, 10 driving license testing centers have been established across the city, and over 500,000 residents have already benefited from these services this year.",
       author: "By Saqib Rehman",
    createdAt: " Published Sep 14, 2024 ",
    time:"12:51 pm"
  },
    {
    id: 9,
    title: "Govt Mulls Giving Tier-2 Merchants a 5-Year Tax Break",
      image: tax,
      slug: "blog-9",
      description1: "The federal government is considering allowing tier-2 merchants a tax break of at least 5 years.Sources said that this was discussed in a meeting chaired by the State Minister for Finance and Revenue and officials of the Ministry of Finance. The State Bank of Pakistan, the Ministry of Information Technology, and the Federal Board of Revenue also participated in the meeting.",
       description2: "Sources informed ProPakistani that the government can also introduce a phased tax exemption plan, where the tax break is reduced gradually over five years, allowing merchants to adjust to the new system progressively.The meeting also discussed that the government should move towards zero pricing on Raast Person to Merchant (P2M) transactions for receiving merchants.A key initiative in this direction is to enhance the capabilities of financial institutions to leverage merchant transaction data, thereby enabling their entry into the data-based lending business.",
    description3:"Regulatory and policy efforts towards establishing robust data protection and data-sharing protocols must be initiated, sources added.The State Bank officials informed that about 84% of the transactions in Pakistan are still over the counter, which should be enforced to be converted into account-based or wallet-based payments.The central bank also proposed that government departments should start collecting digital payment methods by removing alternatives like over-the-counter payments.",
       author: "By Arsalan Khattak",
    createdAt: " Published Sep 6, 2024 ",
    time:"1:16 pm"
  },
    {
    id: 10,
    title: "Google Makes Gemini Live Free for Everyone, Coming to Android Devices",
      image: gemini,
      slug: "blog-10",
      description1: "Google has announced a significant expansion of its Gemini Live service, a feature that enables real-time conversations with the company’s AI assistant. Initially exclusive to Advanced subscribers, this interactive tool will now be available to all users for free.Gemini Live distinguishes itself from the standard Gemini app by offering a more dynamic conversational experience. Users can engage in fluid back-and-forth exchanges, with the ability to interrupt and redirect the conversation as needed. This flexibility allows for new information or changes in direction mid-dialogue.",
       description2: "Currently, access to Gemini Live is limited to Android users through the Gemini app, which is exclusively available on the Google Play Store. The rollout is further restricted to devices set to English language settings, though Google has indicated that support for additional languages is in development and will be introduced soon.",
    description3:"Google’s Gemini Live feature can be easily accessed through the Gemini app on Android devices. Users can initiate a live conversation by tapping the sparkle icon located in the bottom-right corner of the app. Once activated, the screen displays two primary controls: a “Hold” button and an “End” button, allowing users to manage the flow of their conversation with the AI.Upon ending the chat, users can review a complete transcription of their interaction. This feature provides a useful record of the conversation for future reference. It’s worth noting that, in its current iteration, Gemini Live does not integrate with other Google services such as Gmail, YouTube Music, or Maps. This limitation sets it apart from some of the company’s other AI-powered tools.",
       author: "By Aasil Ahmed",
    createdAt: " Published Sep 10, 2024 ",
    time:"4:07 pm"
  },
    {
    id: 11,
    title: "Punjab Introduces Attendance Monitoring System for Teachers",
      image: attendanceMonitor,
      slug: "blog-11",
      description1: "The Punjab School Education Department (SED) introduced a new monitoring system on Friday to ensure teacher attendance in public schools, aiming to improve the overall quality of education across the province.This system focuses on strict compliance with working hours for principals and teachers as part of a broader initiative to enhance educational standards and maintain school discipline.",
       description2: "According to a directive obtained by Dawn, the SED has instructed all school staff to adhere to specified duty hours, with surprise inspections by department officers to ensure compliance. The guidelines, issued on August 11, emphasize that principals and teachers must stay in school until 2:30 pm. The department has reinforced school timing regulations to improve operations and ensure educational activities run smoothly.",
    description3:"The SED has communicated these instructions to all District Education Authorities (DEAs) chief executive officers in Punjab, stressing the importance of adhering to the previously issued schedule.Teachers are now required to prepare lesson plans, engage in professional development, and participate in academic and extracurricular activities during extended school hours and alternate Saturdays. The department warned that no leniency would be tolerated, and officers are responsible for ensuring full compliance.",
       author: "By Raji Shoaib",
    createdAt: " Published Sep 14, 2024 ",
    time:"1:55 pm"
  },
    {
    id: 12,
    title: "Punjab Govt Reverses Decision to Increase Court Fees",
      image: court,
      slug: "blog-12",
      description1: "The Punjab government has rolled back its decision to increase court fees, offering relief to the public. On Saturday, a new notification was issued, reducing the fees following approval from the provincial governor.The court fee, which had been raised significantly, was brought down from Rs. 500 to just Rs. 10. Earlier, under the Punjab Finance Act 2024, the government had increased court fees and stamp duties by a large margin.",
       description2: "The hike affected various court processes, with fees rising by 500% to 1000% in some cases. For instance, the cost of court tickets for civil and criminal cases had jumped from Rs. 2 to Rs. 500, while transferring cases saw an increase from Rs. 5 to Rs. 500.Requests for court records, previously Rs. 2, had also been raised to Rs. 500, making it difficult for many litigants. Filing a memorandum of appeal or supervision had seen a similar increase, from Rs. 15 to Rs. 500.",
    description3:"The rollback has been welcomed by many, as it eases the financial burden on those seeking justice. Legal professionals and the general public expressed concerns over the steep hike, and the reduction offers a much-needed relief for litigants across the province.",
       author: "By Arsalan Khattak",
    createdAt: " Published Sep 14, 2024 ",
    time:"12:04 pm"
  },
    {
    id: 13,
    title: "Pakistan’s Internet Shutdowns Caused Business Losses of Over Rs. 1.3 Billion",
      image: connection,
      slug: "blog-13",
      description1: "In developing nations like Pakistan, internet connectivity is crucial in modernizing public services through digital public infrastructure (DPI) and enabling businesses to compete in the global marketplace. However, recent actions suggest Pakistan may be regressing in its digital transformation efforts. A notable internet shutdown in August 2023 reportedly cost e-commerce businesses 30% of their revenue.",
       description2: "Experts argue that for Pakistan to realize its potential as a thriving digital economy, the government must prioritize widespread, affordable internet access and invest in robust digital infrastructure. The current trend of internet shutdowns is counterproductive and risks stifling the country’s economic growth in an increasingly digital world.Speaking of limited internet access, recent data reveals that over 58% of Pakistan’s population has access to mobile internet networks but has not yet subscribed to these services.",
    description3:"This substantial gap between availability and adoption highlights a potential growth area for the telecom sector. Industry experts suggest that telecom providers could tap into this large pool of potential subscribers by improving affordability and enhancing service quality. Such expansion could boost the sector’s revenues and contribute to Pakistan’s broader digital transformation goals.",
       author: "By Arsalan Khattak",
    createdAt: " Published Sep 6, 2024 ",
    time:"11:03 am"
  },
    {
    id: 14,
    title: "JPMC Karachi is Giving Free Cancer Treatment Using CyberKnife",
      image: cyberknife,
      slug: "blog-14",
      description1: "The Jinnah Postgraduate Medical Centre (JPMC) in Karachi is providing free cancer treatment using the advanced CyberKnife technology, offering hope to patients nationwide.CyberKnife is a cutting-edge, non-invasive method that targets cancerous tumors with precise radiation, eliminating the need for surgery or anesthesia.",
       description2: "According to Dr. Tariq Mehmood, head of the Oncology Department at JPMC, this treatment significantly reduces side effects by minimizing damage to surrounding healthy tissues. Patients experience no pain during the procedure, and sessions typically range from 1 to 5 treatments.CyberKnife is versatile and can be used to treat various types of cancer, including those affecting the brain, spine, lungs, liver, and kidneys. It also serves as an alternative for patients with inoperable tumors or those requiring complex surgical interventions.",
    description3:"The system uses robotic technology to deliver high-energy radiation from multiple angles, focusing only on the tumor while sparing healthy tissues. This innovative approach has been proven effective in cancer treatment for over two decades.JPMC is the only hospital in the world offering this expensive treatment for free, benefiting patients from across Pakistan and 15 other countries. This initiative provides a life-saving option for many who otherwise could not afford such advanced care.",
       author: "By Arsalan Khattak",
    createdAt: " Published Sep 6, 2024 ",
    time:"4:36 pm"
  },
    {
    id: 15,
    title: "Punjab Govt to Give Free Plots to Journalists and Media Workers",
      image: plots,
      slug: "blog-15",
      description1: "A delegation of senior journalists met with Provincial Information Minister Azma Bukhari today at the DGPR office in a positive and cordial atmosphere.Azma Bukhari attentively listened to the journalists’ concerns and addressed their issues. She clarified misunderstandings regarding the Maskan Ravi project.",
       description2: "During the meeting, it was agreed that in the Maskan Ravi Scheme, not only journalists but also all full-time media workers employed in media organizations will be allotted plots. The provincial minister assured that the Maskan Ravi project would be completed as soon as possible, under the supervision of RUDA, with no involvement from PJHF.Bukhari further stated that a total of 3,200 journalists and media workers will receive plots, with the plot size increased to 5 marlas to accommodate more beneficiaries. Journalists and media workers from Lahore will be prioritized, with those from other cities receiving plots either in Maskan Ravi or in their respective districts’ residential schemes.",
    description3:"The minister added that appeals filed by petitioners in the Maskan Ravi project will be considered based on merit, ensuring no journalist is deprived of their right. Additionally, plots under this scheme will be provided free of charge to all eligible media workers and journalists.The Maskan Ravi delegation included Khalid Hasnain, Saber Awan, Kashif Malik, Rab Nawaz Khan, Kashif Selman, Faizan Waraich, and Gulzar Mustafai. Both parties agreed to continue consultations in the future. Only one plot will be allotted per family, even if both spouses are media workers.The delegation acknowledged the efforts of Lahore Press Club President Arshad Ansari, along with senior journalists Salman Ghani, Mujibur Rahman Shami, and others, in advancing the Maskan Ravi project",
       author: "By Rija Shoaib",
    createdAt: " Published Sep 6, 2024 ",
    time:"2:19 pm"
  },
    {
    id: 16,
    title: "Babar Azam Reportedly Set to Lose White-Ball Captaincy",
      image: babarAzam,
      slug: "blog-16",
      description1: "Babar Azam’s tenure as Pakistan’s white-ball captain is reportedly in jeopardy as the Pakistan Cricket Board (PCB) is set to replace the batting maestro after a series of poor results.Reports suggest that Babar, who has led Pakistan’s white-ball side, may be replaced before the team tours Australia, which features three T20 internationals and three ODIs.The PCB is contemplating a leadership change, with discussions reportedly centering around Mohammad Rizwan as a potential new captain in white-ball cricket.",
       description2: "Rizwan’s performance has been strong, particularly in the recent Test series where he emerged as Pakistan’s top batter with 294 runs. His leadership capabilities are under review, and if selected, he could take on captaincy duties across all formats.It is reported that Pakistan’s white-ball head coach, Gary Kirsten, is said to be a fan of Rizwan’s leadership skills and recommended him as the captain to the PCB.Babar’s recent performances have added to the speculation about his future while his form in Test cricket has been underwhelming, as evidenced by his low scores in the series against Bangladesh, where he managed only 22 runs in one innings and 31 and 11 in the other Test.",
    description3:"Meanwhile, the Champions One-Day Cup captains have been chosen by team mentors. The Dolphins will be led by Test vice-captain Saud Shakeel, the Lions by Shaheen Shah Afridi, the Panthers by Shadab Khan, the Stallions by Mohammad Haris, and the Wolves will be led by Rizwan.Babar Azam’s poor form has resulted in his deteriorating ICC Test ranking. He is currently placed 12th in the ICC Test rankings after the new standings were revealed.",
       author: "By Shayan Obaid Alexander ",
    createdAt: " Published Sep 6, 2024 ",
    time:"4:02 pm"
  },
    {
    id: 17,
    title: "Free Travel for Seniors, Students, and Disabled Coming Soon in Punjab",
      image: transport ,
     slug: "blog-17",
      description1: "The Punjab government, under the leadership of PML-N, is preparing to launch a welfare initiative aimed at providing free transport services to certain groups in society. These services will benefit senior citizens, students, and people with disabilities, allowing them to travel on the Orange Line, Metro, and Speedo buses without any cost. The goal is to make public transportation more accessible and reduce the financial strain on these vulnerable groups.",
       description2: "The free transport services will be available in three key cities: Lahore, Multan, and Rawalpindi. These cities have large transport systems, and this initiative will help ease the burden on those who rely heavily on public transport. By offering free travel, the government hopes to support those who need it most, particularly seniors, students, and individuals with disabilities, making commuting easier and more affordable for them.",
    description3:"This initiative is currently awaiting final approval from the Punjab Cabinet Committee. A detailed summary outlining the project has already been submitted by the transport department and the Mass Transit Authority. Senior Minister Maryam Aurangzeb is overseeing the approval process, and once the green light is given, the program will officially begin.",
       author: "By Saqib Rehman",
    createdAt: " Published Sep 12, 2024 ",
    time:"1:13 pm"
  },
    {
    id: 18,
    title: "Infinix x WGSN: Where Trends Meet Technology in Vibrant Hues",
      image: infinix,
      slug: "blog-18",
      description1: "Infinix a trendy tech brand crafted for young consumers, has teamed up with global trend forecasting leader WGSN to launch the “2025 Smartphone Color Trend Report.”This report merges WGSN’s deep insights into global consumer behavior with Infinix’s expertise in technological innovation, highlighting key design trends and introducing three standout colors for 2025: Violet Garden, Misty Aqua, and Blossom Glow. Through this collaboration, Infinix aims to bring cutting-edge, trending design and personalization to its new ZERO 40 Series, offering a more artistic and tailored experience for young consumers.",
       description2: "WGSN (World Global Style Network) is a leading trend forecasting and analytics service that helps businesses anticipate future trends in various industries, including fashion, design, and technology. By analyzing consumer behavior, cultural shifts, and market dynamics, WGSN provides valuable insights that help companies make informed decisions about product development, marketing, and design.The Infinix x WGSN 2025 Trend Report features six key forces— “STEPIC Drivers”—that will shape global economic, technological, environmental, and cultural development. These macro forces are set to play a pivotal role in the global economy and business landscape by 2025 and beyond. The report identifies significant global trends, from political instability and economic uncertainty to the decentralization of digital culture, migration waves, the rise of the space economy, and the AI-driven “synthetic creativity” revolution, all of which will have profound impacts on the future",
    description3:"These trends have sparked three core emotional needs among young consumers: Idleness (seeking personalization and self-expression in a complex environment), Radical Acceptance (pursuing balance and connection with nature under pressure), and Rational Optimism (finding a positive outlook through technological progress).According to WGSN’s forecasts, future designs will focus more on the use of natural materials and textures, such as stone surfaces rich in sensory experience and storytelling.Additionally, the mechanization of geometric patterns and the use of color variations will play a crucial role in design, meeting young consumers’ demand for personalization and quality.",
       author: "By Arsalan Khattak",
    createdAt: " Published Sep 13, 2024 ",
    time:"7:50 pm"
  },
    {
    id: 19,
    title: "Govt Finalizes Mandatory Retirement Scheme for Employees",
      image: pkr,
      slug: "blog-19",
      description1: "The federal government has finalized a compulsory “Severance Package” for its employees, high level sources told ProPakistani.Sources said this package will be introduced through amendments to the Civil Servants Act, 1973, and will apply to all government employees without any exceptions or preferential treatment.The Federal Cabinet already approved an amendment earlier which integrated a Compulsory Retirement Package into the existing law. The policy specifically targets employees affected by the abolition of ministries, dissolution of departments, and government mergers.",
       description2: "Under the new regulations, any civil servant whose position is abolished will be eligible for the severance package. Employees will have the right to submit their application to a committee formed by the Prime Minister within seven days of being informed of their dismissal. The committee will then decide on the matter within 30 days of receiving the application.",
    description3:"The federal government has made it clear that the severance package is compulsory. Oddly, if a civil servant refuses to accept it, their employment will be terminated under the new rules. This amendment to the Civil Servants Act was also reviewed and approved by the Cabinet Committee for Disposal of Legislative Cases.",
       author: "By Arsalan Khattak",
    createdAt: " Published Sep 8, 2024 ",
    time:"12:48 pm"
  },
    {
    id:20,
    title: "Good News for AIOU Students Regarding PM Laptop Scheme",
      image: AIOU,
      slug: "blog-20",
      description1: "Minister for Federal Education and Professional Training, Khalid Maqbool Siddiqui, assured the National Assembly on Thursday that students of Allama Iqbal Open University (AIOU) would be included in the Prime Minister’s Laptop Scheme.",
       description2: "In response to a calling attention notice raised by Shahida Begum regarding the exclusion of AIOU students from the scheme, the minister explained that a final decision on the PM’s Laptop Scheme is still pending. However, he reassured the assembly that this issue would be addressed during the decision-making process.Siddiqui emphasized the government’s commitment to ensuring AIOU students benefit from the program, noting that since its launch in 2013, the scheme has distributed over 10,000 laptops to students, including those from AIOU and Virtual University (VU).",
    description3:"Shahida Begum highlighted that many AIOU students, particularly from remote areas in Balochistan and Khyber-Pakhtunkhwa, come from disadvantaged backgrounds. She stressed that these students, especially those pursuing Ph.D. and M.Phil. degrees, rely heavily on laptops for their studies.",
       author: "By Rija Shoaib",
    createdAt: " Published Sep 13, 2024 ",
    time:"1:20 pm"
  },
]
interface BlogDetailProps {
  params: {
    readmore: string;
  };
}

//! blogs based on categories

const BlogDetail: React.FC<BlogDetailProps> = ({ params }) => {
console.log(params)
  const data = blogs.find((blog) => blog.slug === params.readmore);

  if (!data) {
    return <h1>Blog not found</h1>;
  }

  //! blog content

  const combineDescription = `${data.description1}\n${data.description2}\n${data.description3}`;
  const paragraphs = combineDescription.split('\n');
  return (
    <div>
       <div className='flex flex-col w-[200px] absolute lg:left-[40px] left-[8px] md:left-[30px] md:text-2xl text-xl lg:text-3xl top-[500px]'>
        <div className='sticky'>
          <Link href={'https://www.facebook.com/'} target='_blank'><FaFacebook className='mb-[20px] text-blue-500 hover:text-black hover:ease-in-out hover:duration-700'/></Link> 
          <Link href={'https://www.instagram.com/'} target='_blank'><FaInstagram className='mb-[20px] text-pink-700 hover:text-black hover:ease-in-out hover:duration-700'/></Link>
          <Link href={'https://www.linkedin.com/in/alishba-naveed-a9ab38251/'} target='_blank'><FaLinkedin className='mb-[20px] text-blue-600 hover:text-black hover:ease-in-out hover:duration-700' /></Link>
          <Link href={'https://www.twitter.com/'} target='_blank'><FaTwitter className='mb-[20px] text-blue-300 hover:text-black hover:ease-in-out hover:duration-700'/></Link>
        </div>
        </div>
      <div className='flex justify-center flex-col items-center'>
      <div className='mt-[35px] md:mt-[60px]  w-[80%] text-center'>
        <h1 className='text-cyan-950 font-bold md:text-4xl text-2xl'>{data.title}</h1>
        <p className='pt-10 md:text-lg text-sm'>{data.author} | {data.createdAt} | { data.time}</p>
          <Image src={data.image} alt={data.title} width={500} height={500} className='w-[1500px]  h-[200px] md:h-[500px] mt-[10px] shadow-xl' />
          {paragraphs.map((para, index) => {
            return (
              <div key={index}>
                <p  className='mt-[50px] '>{para}</p>
              </div>
            ) })}
          
      </div>
      </div>
      <div className='mt-[80px]'>
        {/* Comments section added */}
        <Comments /> 
        </div>
    </div>
  );
}

export default BlogDetail;
