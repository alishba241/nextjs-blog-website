import React from 'react'
import tax from '../../../../public/images/tax.jpg.avif'
import CCP from '../../../../public/images/CCP.png'
import savings from '../../../../public/images/National-Saving.jpg'
import PSX from '../../../../public/images/PSX-Pak-Ago-PP.jpg'
import bills from '../../../../public/images/electricity-bills.jpg'
import dollar from '../../../../public/images/PKR-PP-1.jpg'
import gem from '../../../../public/images/gem.jpg.avif'
import FBR from '../../../../public/images/FBR-4-e1714201434581.jpg'
import Oiltanker from '../../../../public/images/OilTanker.jpg.avif'
import taxtile from '../../../../public/images/textile-PP.jpg'
import cement from '../../../../public/images/DG-Cement.jpg.avif'
import ghani from '../../../../public/images/ghani.jpg.avif'
import innovation from '../../../../public/images/SAP-Innovation.avif'
import gemini from '../../../../public/images/Gemini-Live.jpg.avif'
import vape from '../../../../public/images/vape-smoking.jpg.avif'
import epidemic from '../../../../public/images/epidemic.jpg.avif'
import contaminatedWater from '../../../../public/images/contaminated-water.jpg.avif'
import milk from '../../../../public/images/milk-.jpg'
import mpox from '../../../../public/images/mpox-.jpg.avif'
import medicine from '../../../../public/images/medicne.avif'
import hosp from '../../../../public/images/hospital-.jpg.avif'
import hospital from '../../../../public/images/hospital.jpg.avif'
import congo from '../../../../public/images/congo-fever.jpg.avif'
import emptyClass from '../../../../public/images/empty-classroom.jpg.avif'
import schools from '../../../../public/images/schools-2.jpg.avif'
 import scholarship from '../../../../public/images/scholarshipnew.jpeg'
import outSchool from '../../../../public/images/outofschool-children.jpg.avif'
import digital from '../../../../public/images/Digital-Skills.jpg'
import attendanceMonitor from '../../../../public/images/punjab schools.avif'
import AIOU from '../../../../public/images/AIOU.jpg'
import college from '../../../../public/images/islamia-college.jpg.avif'
import books from '../../../../public/images/books-.jpg.avif'
import olympaid from '../../../../public/images/fbise-lums-maths-olympiad.jpg.avif'
import AI from '../../../../public/images/Artificial-Intelligence.jpeg'
import crypto from '../../../../public/images/crypto.jpeg'
import trends from '../../../../public/images/trends.jpeg'
import cloud from '../../../../public/images/cloud.jpeg'
import augmented from '../../../../public/images/augmented.jpeg'
import technology from '../../../../public/images/5G.jpeg'
import bigdataAnalytics from '../../../../public/images/big-Data_Analytics.jpeg'
import quantumComputing from '../../../../public/images/Quantum_Computing.png'

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import Comments from '@/app/comments/page';


export interface card {
    id: number;
    title: string;
    image: any;
    category: string;
    slug: string;
  description1: string;
  description2: string;
  description3: string;
  author:string;
    createdAt: string;
    time: string;
}

export const blogscard:card[] = [
//business

  {
    id: 1,
    title: "Govt Mulls Giving Tier-2 Merchants a 5-Year Tax Break",
       image: tax,
        category: "business",
        slug: 'category-blog-1',
     description1: "The federal government is considering allowing tier-2 merchants a tax break of at least 5 years.Sources said that this was discussed in a meeting chaired by the State Minister for Finance and Revenue and officials of the Ministry of Finance. The State Bank of Pakistan, the Ministry of Information Technology, and the Federal Board of Revenue also participated in the meeting.",
       description2: "Sources informed ProPakistani that the government can also introduce a phased tax exemption plan, where the tax break is reduced gradually over five years, allowing merchants to adjust to the new system progressively.The meeting also discussed that the government should move towards zero pricing on Raast Person to Merchant (P2M) transactions for receiving merchants.A key initiative in this direction is to enhance the capabilities of financial institutions to leverage merchant transaction data, thereby enabling their entry into the data-based lending business.",
    description3:"Regulatory and policy efforts towards establishing robust data protection and data-sharing protocols must be initiated, sources added.The State Bank officials informed that about 84% of the transactions in Pakistan are still over the counter, which should be enforced to be converted into account-based or wallet-based payments.The central bank also proposed that government departments should start collecting digital payment methods by removing alternatives like over-the-counter payments.",
       author: "By Arsalan Khattak",
    createdAt: " Published Sep 6, 2024 ",
    time:"1:16 pm"
     },
  {
    id: 2,
    title: "CCP Approves Two Acquisitions in Packaging, Renewable Energy Sectors",
       image: CCP,
        category: "business",
        slug: 'category-blog-2',
     description1: "The Competition Commission of Pakistan (CCP) has approved two acquisitions, reinforcing its commitment to promoting competition across sectors.The transactions involve International Paper Company acquiring DS Smith Plc, and Pakistan Pencils (Private) Limited acquiring YDE SA (SMC-Private) Limited.",
       description2: "International Paper Company, a US-based global leader in renewable fiber-based packaging and pulp products, is acquiring 100 percent shareholding of DS Smith Plc, a public limited company in England and Wales and the parent of the DS Smith Group. DS Smith operates primarily in corrugated packaging across the European Economic Area. In Pakistan, its indirect subsidiary, TMS Pakistan (Private) Limited, supplies point-of-sale display stands to a single customer. The relevant market for this transaction has been identified as “Point of Sale Display Stands.”",
    description3:"The second transaction involves Pakistan Pencils (Private) Limited acquiring 100% shareholding of YDE SA (SMC-Private) Limited through a Share Purchase Arrangement. Pakistan Pencils is a leading Pakistani manufacturer and distributor of stationery products, while YDE SA designs and installs renewable energy power plants and sells electricity in Pakistan. The CCP has identified the relevant market for this transaction as “Distributed Power Generation – Bulk Power Consumer,” with YDE SA holding a 2.50% market share, according to NEPRA data.",
       author: "By Arsalan Khattak",
    createdAt: " Published Sep 13, 2024 ",
    time:" 8:59 pm"
     },
 {
    id: 3,
    title: " Rates of Profit on National Savings Schemes Revised Downwards",
       image: savings,
        category: "business",
        slug: 'category-blog-3',
     description1: "The federal government has revised the rates of profit on National Savings Schemes. According to data shared by Arif Habib Limited (AHL), the rates of profit on Regular Income Certificate (RIC) have been revised downward by 12 bps to 14.52 percent. ",
       description2: "The rate of profit on Special Saving Certificates (SSC) has been cut by 30 bps to 15.50 percent. Similary, the rate on Special Saving Accounts (SSA) has been cut by 30 bps to 15.50 percent, on Short Term Savings Certificates (STSC) down 68 bps to 17.22 percent, on Sarwa Islamic Savings Account (SISA) down 100 bps to 18.00 percent and on Sarwa Islamic Term Account (SITA) down 122 bps to 16.36 percent. ",
    description3:"The rates of other schemes have not been changed.",
       author: "By Arsalan Khattak",
    createdAt: " Published Sep 13, 2024 ",
    time:"8:43 pm"
     },
     {
    id: 4,
    title: "PSX Issues Alert Against Fraudulent WhatsApp Groups Giving Investment Advice",
       image: PSX,
        category: "business",
        slug: 'category-blog-4',
     description1: "Pakistan Stock Exchange Limited (PSX) has issued an investor alert regarding the surge in fraudulent activities promoted through social media and WhatsApp groups under the guise of investment advice and training courses.",
       description2: "The scammers may misuse the name of the registered professionals or claim to be affiliated with a legitimate company to lure the investing public to participate in unauthorized investment schemes.These fraudulent groups and media pages demand fees from individuals to grant them membership, promise exclusive access to insider tips, and provide training on investments. The major suspicions include requests to transfer money to a private or third-party account, promises of exorbitant profits, claims of no or minimal risk, and promises of providing valuable investment tips.",
       description3:"Scammers often use e-mail addresses or URLs similar to registered firms. Poor spelling and grammar in messages, account names, or URLs can be a sign of a scam. Always watch out for spelling mistakes in URLs and emails before opening any attachments or clicking on any links received through social media platforms. Conduct your own research, go through the relevant company’s financials, and perform proper due diligence before opting for such an investment opportunity.Investors are advised to regularly visit the official websites of SECP, PSX, CDC, and NCCPL to keep themselves updated and make well-informed and prudent investment decisions.",
       author: "By Arsalan Khattak",
    createdAt: " Published Sep 13, 2024 ",
    time:"5:43 pm"
  },
     {
    id: 5,
    title: "Weekly Inflation in Pakistan Increases After Four Straight Falls",
       image: bills,
        category: "business",
        slug: 'category-blog-5',
     description1: "The Sensitive Price Index (SPI)-based inflation for the week ended September 12, 2024, increased by 0.01 percent, according to the Pakistan Bureau of Statistics (PBS). During the week, out of 51 items, prices of 15 (29.41 percent) items increased, 14 (27.45 percent) items decreased, and 22 (43.14 percent) items remained stable. ",
       description2: "Some of the items, prices of which, increased during the period under review include tomatoes (6.62 percent), electricity charges for Q1 per unit (4.13 percent), chicken (3.77 percent), pulse gram (2.43 percent), garlic (2.24 percent), beef with bone (1.13 percent),  mutton (0.71 percent), milk fresh (0.11 percent), curd (0.10 percent), and rice basmati broken (0.01 percent). ",
       description3:"On the other hand, the year-on-year trend depicted an increase of 14.36 percent mainly due to increase in the prices of gas charges for Q1 (570 percent), onions (88.26 percent), pulse gram (55.76 percent), powered milk (25.72 percent), beef (25.28 percent), shirting (21.45 percent), chicken (20.10 percent), garlic (19.50 percent), pulse moong (17.05 percent), salt powder (15.94 percent). ",
       author: "By Umer Tariq",
    createdAt: " Published Sep 13, 2024 ",
    time:" 4:39 pm"
     },
      {
    id: 6,
    title: "Rupee Up 4th Day in a Row Against US Dollar After IMF News",
       image: dollar,
        category: "business",
        slug: 'category-blog-6',
     description1: "The Pakistani rupee (PKR) rose 4th day in a row against the US Dollar (USD) today after opening trade at 278 in the interbank market.It was stable all day and closed in green against the greenback. Meanwhile, it posted losses against most of the other major currencies during today’s session.The interbank rate stayed at 278/$ most of the day before closing at the same level. Open market rates across multiple currency counters were strictly at the 278 level today.The PKR appreciated by 0.10 percent to close at 278.1 after gaining 27 paisas against the US Dollar today.",
       description2: "On a fiscal year-to-date basis, the rupee has so far depreciated by 0.07 percent.In a key development, the International Monetary Fund (IMF) confirmed on Thursday that its Executive Board will meet on September 25 to discuss the $7 billion Extended Fund Facility (EFF) to Pakistan.On Thursday, State Bank of Pakistan (SBP) Governor Jameel Ahmad said that Pakistan had arranged the $2 billion external financing required for the IMF program, paving the way for IMF board approval during the current month.The PKR was red against most of the other major currencies in the interbank market today.It gained seven paisas against the UAE Dirham (AED), seven paisas against the Saudi Riyal (SAR), and 16 paisas against the Canadian Dollar (CAD).",
       description3:"Meanwhile, it lost Rs. 1.21 against the Australian Dollar (AUD), Rs. 2.05 against the Euro (EUR), and Rs. 2.83 against the British Pound (GBP) in today’s interbank currency market.",
       author: "By Umer Tariq",
    createdAt: " Published Sep 13, 2024 ",
    time:"4:06 pm"
  },
      {
    id: 7,
    title: "Gemstones Worth $5 Billion Smuggled Out of Pakistan Every Year",
       image: gem,
        category: "business",
        slug: 'category-blog-7',
     description1: "Gemstones worth $5 billion are smuggled out of Pakistan every year, MNA Gul Asghar Khan said during a recent meeting of the National Assembly Sub-Committee on Commerce.It was disclosed that Pakistan was among the world’s top eight gemstone producers, yet the official exports stand at a mere $8 million. A member said gemstones are smuggled from Pakistan to Thailand which are then cut, polished, and sold for billions of dollars.",
       description2: "The discussion also brought to light that 30-40 percent of gemstones smuggled into Pakistan originate from Afghanistan. It was suggested that opening the Afghan border for legal gemstone trade could help curb the smuggling issue.Meanwhile, the committee was informed that the federal government has decided to establish a Gems and Jewellery Facilitation Wing to regulate and support the industry, though previous efforts such as the establishment of five gemstone authority centers have yet to become operational.",
    description3:"Comparing Pakistan’s underutilized potential, the committee chairman cited India where the gemstones and jewelry sector generates $45 billion in exports. He emphasized that Pakistan could follow suit as regions like Swat, Gilgit, and Kashmir hold significant reserves of valuable rubies, one of which was once sold for $18 million",
       author: "By Arsalan Khattak",
    createdAt: " Published Sep 13, 2024 ",
    time:"3:43 pm"
     }, 
     {
    id: 8,
    title: "FBR to Freeze Bank Accounts of Filers Who Deliberately Submit Incorrect Tax Returns",
       image: FBR,
        category: "business",
        slug: 'category-blog-8',
     description1: "The FBR has also proposed a ban on purchasing immovable properties and vehicles, disconnecting their utility connections, and imposing heavy fines on filers who would file incorrect or incomplete returns.The policy measures have been proposed by FBR Member Inland Revenue (Operations) to strengthen enforcement and address tax non-compliance.",
       description2: "Member Inland Revenue (Operations) has proposed policy changes focused on curbing tax non-compliance, particularly among those submitting inaccurate or incorrect tax returns. These measures would apply across the board, including to Tier-1 retailers and manufacturers, and cover both Sales Tax and Income Tax.",
    description3:"The FBR believed these steps would be instrumental in strengthening our tax enforcement regime and achieving our fiscal targets. We look forward to discussing these proposals further and are open to any suggestions that may help enhance these policy measures for maximum impact.",
       author: "By Jehangir Nasir",
    createdAt: " Published Sep 6, 2024 ",
    time:"11:34 am"
     },
  {
    id: 9,
    title: "Pakistan’s Petroleum Imports Surge 23% in Two Months of FY25 ",
       image: Oiltanker,
        category: "business",
        slug: 'category-blog-9',
     description1: "Petroleum group imports witnessed 22.73 percent growth during the first two months (July-August) of current fiscal year 2024-25 (FY25) and stood at $2.664 billion compared to $2.171 billion during the same period of last fiscal year, says Pakistan Bureau of Statistics (PBS).The exports and imports released by the PBS revealed that imports during July-August FY25 stood at $8.750 billion (provisional) against $8.165 billion during the corresponding period of last year showing an increase of 7.16 percent. ",
       description2: "On a year-on-year (YoY) basis petroleum group imports witnessed 1.35 percent growth in August 2024 and stood at $1.398 billion compared to $1.379 billion in August 2023. On a month-on-month (MoM) basis, petroleum group imports witnessed 10.43 percent growth when compared to $1.266 billion in July 2024.Petroleum products imports witnessed 13.41 percent negative growth during the first two months FY25 and remained $841.113 million compared to $971.371 million during the same period of the last fiscal year. ",
    description3:"On a YoY basis petroleum products imports witnessed 44.35 percent negative growth in August 2024 and remained $342.096 million compared to $614.781 million in August 2023. MoM basis, petroleum products imports witnessed 31.45 percent negative growth when compared to $499.017 million in July 2024. Main commodities of imports during August 2024 were Petroleum crude (Rs. 162,679 million), Natural gas, liquified (Rs. 106,422 million), Petroleum products (Rs. 95,288 million), Palm oil (Rs. 71,293 million), Electric machinery & apparatus (Rs. 70,488 million), Plastic materials (Rs. 53,463 million), Iron & Steel (Rs. 34,191 million), Fertilizer manufactured (Rs. 28,836 million), Medicinal products (Rs. 28,558 million) and Motor cars (CKD/SKD) (Rs. 27,580 million).",
       author: "By Jehangir Nasir",
    createdAt: " Published Sep 16, 2024 ",
    time:"7:40 pm"
   },
  {
    id: 10,
    title: "Pakistan’s Textile Exports Increase by 5.4% in Two Months of FY25 ",
       image: taxtile,
        category: "business",
        slug: 'category-blog-10',
     description1: "The country’s textile group exports increased by 5.37 percent in first two months (July-August) of current fiscal year 2024-25 (FY25) and stood at $2.915 billion as compared to $2.766 billion during the same period of last fiscal year, the Pakistan Bureau of Statistics (PBS) said. The data of exports and imports released by PBS revealed that the country’s overall exports during July-August 2024 totaled $5.069 billion (provisional) against $4.430 billion during the corresponding period of last year showing an increase of 14.42 percent. ",
       description2: "The data showed that textile group exports increased by 12.99 percent in August 2024 and remained at $1.644 billion as compared to $1.455 billion in August 2023 and increased by 29.36 percent on month on month (MoM) when compared to $1.271 billion in July 2024.Cotton yarn exports registered 45.21 percent negative growth in July-August 2024 and remained $110.588 million compared to $201.837 million during the same period of the last year. On MoM basis cotton yarn registered 1.64 percent negative growth and stood at $54.838 million in August when compared to $55.750 million in July 2024. On year-on-year basis cotton yarn registered negative growth of 47.68 percent when compared to $104.806 million in August 2023.  ",
    description3:"Pakistan rice exports in July-August 2024 registered 98.58 percent growth and stood at $464.667 million when compared to $233.992 million during the same period of last fiscal year.  MoM basis rice exports 25.85 percent as it stood at $258.922 million in August 2024 when compared to $205.745 million in July 2024 and registered 121.51 percent growth on YoY basis when comparted to $116.890 million in August 2023. Main commodities of exports during August 2024 were Knitwear (Rs. 128,937 million), Readymade garments (Rs. 101,124 million), Bed wear (Rs. 80,901 million), Cotton Cloth (Rs. 50,835 million), Rice others (Rs. 44,244 million), Towels (Rs. 28,041 million), Rice Basmati (Rs. 27,876 million), Madeup articles (excl towels & bedwear) (Rs. 19,868 million), Cotton yarn (Rs. 15,275 million) and Plastic materials (Rs. 13,979 million).  ",
       author: "By Arsalan Khattak",
    createdAt: " Published Sep 16, 2024 ",
    time:"7:32 pm"
   },
  {
    id: 11,
    title: "DG Khan Cement Posts Rs. 542 Million Profit for FY24",
       image: cement,
        category: "business",
        slug: 'category-blog-11',
     description1: "D.G. Khan Cement Company Limited (DGKC) announced its financial result for FY24 today, posting a profit of Rs. 542 million (EPS: PKR 1.24) compared to a loss of Rs. 3.6 billion (LPS: PKR 8.30) in SPLY.Topline during FY24 arrived at Rs. 66 billion, depicting an uptick of 2 percent YoY in contrast to Rs. 64.9 billion in SPLY, on the back of higher retention prices, according to Arif Habib Limited. However, during 4QFY24 net sales remained flat at Rs. 16.98 billion.",
       description2: "Gross margins for FY24 climbed up by 124 bps arriving at 16 percent owed to higher cement prices in tandem with a fall in coal prices during the period. In 4QFY24 gross margins came at 8 percent vis-à-vis 11 percent in SPLY. This was primarily attributable to an increase in exports arriving at 453,000 tons (up 5 percent YoY).Selling and Distribution expenses in FY24 surged by 43 percent YoY to settle at Rs. 2.6 billion, on the back of elevated freight charges given higher export sales, we view In 4QFY24, selling and distribution expenses arrived at Rs. 992 million vis-à-vis Rs. 770 million, a jump of 29 percent due to the aforementioned reason.",
    description3:"Finance costs in FY24 increased by 19 percent YoY to clock in at Rs. 8 billion on the back of higher interest rates. In 4QFY24, the finance cost arrived at Rs. 1.92 billion, displaying a rise of 3 percent YoY due to the reason stated above.The company booked effective taxation at 81 percent in FY24 amid amendments made in tax laws where normal tax is charged on the sale of exports (compared to presumptive tax).During SPLY effective taxation arrived at 215 percent due to the imposition of super tax which was retrospective.",
       author: "By Arsalan Khattak",
    createdAt: " Published Sep 16, 2024 ",
    time:"4:46 pm"
   },
  {
    id: 12,
    title: "Ghani Chemical Industries to List Subsidiary At PSX",
       image: ghani,
        category: "business",
        slug: 'category-blog-12',
     description1: "The Board of Directors of Ghani Chemical Industries Limited (PSX: GCIL) in their meeting held today has approved the Demerger/Merger Scheme of Compromises, Arrangement, and Reconstruction (the Scheme) to list Ghani ChemWorld Limited (GCWL) at PSX.This Scheme is subject to approval by the Lahore High Court, and all other related matters, the company said in a stock filing on Monday.",
       description2: "To carve out Calcium Carbide Project that is being set up by the Company at Hattar Special Economic Zone from GCIL to Ghani ChemWorld Limited (GCWL/at present wholly owned subsidiary of GCIL).To merge the leftover assets of Ghani Products (Private) Limited (GPL/an associated company) with and into the GCIL against One to One SWAP ratio.To issue and allot Partially Redeemable Shares of GCWL to the shareholders of GCIL in the ratio of 50:1,000 (50 Partially Redeemable Shares of Rs. 100/- each of GCWL against 1,000 ordinary shares of GCIL) i.e. Rs. 5,000 worth of partially redeemable shares* will be given to the shareholders of GCIL against 1,000 ordinary shares having face value of Rs. 10,000/-*partially redeemable shares of Rs. 100/- each (with par/nominal value divided into a redeemable portion of Rs. 90/- per share and an irredeemable potion of Rs. 10/- per share)To issue and allot 70 Million additional ordinary shares of GCIL to the GCWL.To list the GCWL at PSX after submission of requisite documents.",
    description3:"The Scheme will be circulated to the PSX and shareholders in due course subject to directions/order of the Honorable Lahore High Court and in accordance with the applicable law, the filing added.At the time of filing, GCIL’s scrip at the bourse was Rs. 10.92, down 2.93 percent or Rs. 0.33 with over 2.25 million shares on Monday.",
       author: "By Ahsan Gardezi",
    createdAt: " Published Sep 16, 2024 ",
    time:"2:59 pm"
     },
  
   //tech
  
  {
    id: 13,
    title: "SAP Innovation Day Pakistan Highlights AI-Driven Business Solutions",
       image: innovation,
        category: "tech",
        slug: 'category-blog-13',
     description1: "SAP, the global leader in enterprise software solutions, hosted its highly anticipated SAP Innovation Day, centered around the theme Better Business Transformation with SAP Business AI. The event showcased the convergence of cutting-edge technology and future-proof insights, aligning seamlessly with Pakistan’s ambitious future trajectory.",
       description2: "The SAP Innovation Day highlighted the transformative power of artificial intelligence in business, drawing together an impressive array of industry titans, thought leaders, and seasoned professionals from diverse sectors. This collaborative platform facilitated the exchange of invaluable insights, proven best practices, and inspiring success stories of AI-enabled business transformations.The leadership of various SAP clients, including K-Electric, MacPac, and Tapal Tea, discussed how AI-powered businesses allow their respective organizations to meet consumer demands more efficiently while reducing costs.",
    description3:"Senior SAP executives who attended the event included Stamatia Betsi, Climate Action & Sustainability Business Development Expert EMEA; Mayar Salti, Public Cloud ERP Lead, MEA North; Syed Mustafa Kamal, Cloud Solution Advisor & Public Cloud Lead for Middle East & Africa-North; Sam Taha, Head of Presales—Business Technology Platform—Middle East North at SAP; and Yasser Saber, SAP Signavio Senior Solution Advisory. They shared their expertise and achievements in AI-driven digitalization to help chart a stronger course for the future of business.The event concluded with a networking dinner, allowing participants to connect and exchange ideas on leveraging AI for business excellence. SAP Innovation Day reinforced SAP’s leadership in driving digital transformation across industries.",
       author: "By Ahsan Gardezi",
    createdAt: " Published Sep 16, 2024 ",
    time:"12:24 pm"
     },
   {
      id: 14,
      title: "Google Makes Gemini Live Free for Everyone, Coming to Android Devices",
      image: gemini,
       category: "tech",
      slug: "category-blog-14",
      description1: "Google has announced a significant expansion of its Gemini Live service, a feature that enables real-time conversations with the company’s AI assistant. Initially exclusive to Advanced subscribers, this interactive tool will now be available to all users for free.Gemini Live distinguishes itself from the standard Gemini app by offering a more dynamic conversational experience. Users can engage in fluid back-and-forth exchanges, with the ability to interrupt and redirect the conversation as needed. This flexibility allows for new information or changes in direction mid-dialogue.",
      description2: "Currently, access to Gemini Live is limited to Android users through the Gemini app, which is exclusively available on the Google Play Store. The rollout is further restricted to devices set to English language settings, though Google has indicated that support for additional languages is in development and will be introduced soon.",
      description3: "Google’s Gemini Live feature can be easily accessed through the Gemini app on Android devices. Users can initiate a live conversation by tapping the sparkle icon located in the bottom-right corner of the app. Once activated, the screen displays two primary controls: a “Hold” button and an “End” button, allowing users to manage the flow of their conversation with the AI.Upon ending the chat, users can review a complete transcription of their interaction. This feature provides a useful record of the conversation for future reference. It’s worth noting that, in its current iteration, Gemini Live does not integrate with other Google services such as Gmail, YouTube Music, or Maps. This limitation sets it apart from some of the company’s other AI-powered tools.",
      author: "By Aasil Ahmed",
      createdAt: " Published Sep 10, 2024 ",
      time: "4:07 pm"
  
   },
   {
      id: 15,
      title: "Artificial Intelligence (AI) and Machine Learning (ML)",
      image: AI,
       category: "tech",
      slug: "category-blog-15",
      description1: "Artificial Intelligence (AI) and Machine Learning (ML) are driving forces behind the current wave of technological innovation. AI refers to the ability of machines to perform tasks that would normally require human intelligence, such as speech recognition, decision-making, and visual perception. Machine learning, a subset of AI, involves the development of algorithms that allow machines to learn from and make predictions or decisions based on data. This has paved the way for advances in a variety of fields, from healthcare and finance to autonomous vehicles and personalized content recommendations. In healthcare, AI-driven systems can help doctors diagnose diseases more accurately, while machine learning models are used to analyze patient data and predict outcomes.",
      description2: "The applications of AI and ML are virtually endless, as they are increasingly being embedded into our daily lives. In retail, for example, AI-powered recommendation engines are capable of analyzing a customer's browsing and purchasing history to offer personalized product suggestions. In the realm of self-driving cars, ML algorithms enable vehicles to learn from road conditions, obstacles, and other vehicles to make driving decisions. Even social media platforms like Facebook and Instagram use AI to filter content, detect fake accounts, and provide tailored advertisements. AI’s ability to process large volumes of data quickly and accurately allows businesses to automate processes, reducing costs and increasing efficiency.",
      description3: "However, despite the exciting possibilities, there are several challenges associated with AI and ML. One of the biggest concerns is the ethical use of AI, particularly when it comes to privacy, bias, and the potential loss of jobs due to automation. Bias in AI systems can arise if the data used to train them is incomplete or skewed, leading to discriminatory outcomes. Privacy concerns also arise as AI systems require large amounts of data, which can include sensitive personal information. As these technologies continue to evolve, it will be crucial to develop regulations and best practices that address these concerns while ensuring that AI and ML are used for the greater good.",
      author: "By Aasil Ahmed",
      createdAt: " Published Sep 10, 2024 ",
      time: "4:07 pm"
  
   },
   {
      id: 16,
      title: "Blockchain Technology and Cryptocurrencies",
      image: crypto,
       category: "tech",
      slug: "category-blog-16",
      description1: "Blockchain technology has emerged as one of the most disruptive innovations in recent years, offering a decentralized and secure way to record transactions across multiple systems without the need for a central authority. Originally developed as the underlying technology for Bitcoin, blockchain operates as a distributed ledger where each transaction is stored in a block, and these blocks are linked together in a chain. This technology ensures that transactions are transparent, immutable, and secure, making it nearly impossible for any single entity to alter the record without consensus from the entire network. Today, blockchain extends beyond cryptocurrencies, offering solutions in industries such as finance, supply chain management, healthcare, and even voting systems.",
      description2: "Cryptocurrencies are perhaps the most well-known application of blockchain technology, with Bitcoin and Ethereum leading the charge. These digital currencies allow for peer-to-peer transactions without the need for intermediaries like banks, reducing transaction costs and increasing the speed of international transfers. Smart contracts, another application of blockchain, enable the execution of code when certain conditions are met, allowing for trustless agreements between parties. These developments have sparked a wave of innovation, with decentralized finance (DeFi) platforms offering new ways to borrow, lend, and invest without traditional financial institutions.",
      description3: "However, the adoption of blockchain technology and cryptocurrencies faces several challenges. Regulatory uncertainty remains one of the biggest hurdles, as governments and financial regulators struggle to define clear legal frameworks for these decentralized systems. Additionally, concerns over the environmental impact of proof-of-work mining systems, particularly with Bitcoin, have sparked debates over the sustainability of blockchain technology. Innovations like proof-of-stake and layer 2 solutions are emerging to address scalability and energy consumption issues, signaling a future where blockchain could become a fundamental infrastructure for the digital economy, beyond just cryptocurrencies.",
      author: "By Aasil Ahmed",
      createdAt: " Published Sep 10, 2024 ",
      time: "4:07 pm"
  
   },
    {
      id: 17,
      title: "Web Development (Frontend and Backend Trends)",
      image: trends,
       category: "tech",
      slug: "category-blog-17",
      description1: "Web development continues to evolve rapidly, with both frontend and backend technologies experiencing significant advancements that are reshaping how websites and applications are built and maintained. On the frontend, frameworks like React, Vue.js, and Svelte are pushing the boundaries of interactive user interfaces (UI), focusing on performance, user experience, and ease of development. These frameworks empower developers to build dynamic, fast-loading applications that deliver a seamless user experience across devices. Additionally, the rise of component-based architecture in frontend development promotes reusability and maintainability, making it easier to scale and update complex applications over time.",
      description2: "Backend development is also undergoing transformation, with modern trends focusing on scalability, real-time data processing, and modularity. Node.js has become a popular backend framework due to its non-blocking, event-driven architecture that allows for real-time communication and high concurrency. Other innovations include serverless computing, which allows developers to run backend code without managing servers, and microservices architecture, which breaks monolithic applications into smaller, more manageable services that can be developed, deployed, and scaled independently. This shift towards distributed systems helps developers build more robust, resilient applications that can handle large-scale traffic without compromising performance.",
      description3: "Moreover, the introduction of Jamstack architecture, which decouples the frontend from the backend, has revolutionized how web applications are delivered. With Jamstack, static site generation and content delivery networks (CDNs) are used to pre-render and cache content, dramatically improving loading times and reducing server loads. This architecture also enhances security by reducing the number of attack vectors and simplifying infrastructure. As web development continues to evolve, developers are embracing automation tools, headless content management systems (CMS), and cloud-based platforms to streamline workflows, optimize performance, and deliver cutting-edge digital experiences.",
      author: "By Aasil Ahmed",
      createdAt: " Published Sep 10, 2024 ",
      time: "4:07 pm"
  
   },
    {
      id: 18,
      title: " Cloud Computing and Cloud Storage Solutions",
      image: cloud,
       category: "tech",
      slug: "category-blog-18",
      description1: "Cloud computing has revolutionized the way businesses and individuals manage, store, and access data and applications. At its core, cloud computing refers to the delivery of computing services over the internet, enabling users to access and store data, run applications, and perform other computing tasks without the need for on-premises hardware. This shift to the cloud has brought numerous benefits, such as scalability, cost savings, flexibility, and enhanced collaboration. Major cloud service providers like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform offer a wide range of services, from infrastructure as a service (IaaS) to platform as a service (PaaS) and software as a service (SaaS), catering to the diverse needs of businesses and developers.",
      description2: "Cloud storage solutions are a key component of cloud computing, allowing users to store large amounts of data securely in remote data centers. This not only reduces the need for physical storage infrastructure but also ensures that data is easily accessible from anywhere with an internet connection. For businesses, cloud storage provides the ability to scale storage capacity as needed, ensuring they can handle growing data volumes without the need for costly hardware upgrades. Popular cloud storage platforms like Google Drive, Dropbox, and iCloud are used by millions of individuals and businesses to store, share, and back up their data seamlessly.",
      description3: "However, with the widespread adoption of cloud computing comes a growing concern over data privacy and security. As more sensitive information is stored in the cloud, ensuring its protection from cyberattacks, data breaches, and unauthorized access has become a top priority for cloud service providers. Many companies are implementing encryption, multi-factor authentication, and compliance with international data protection regulations like GDPR to address these concerns. As cloud computing continues to evolve, advancements like edge computing and hybrid cloud solutions are emerging, offering even more efficient, secure, and flexible ways to leverage cloud technologies",
      author: "By Aasil Ahmed",
      createdAt: " Published Sep 10, 2024 ",
      time: "4:07 pm"
  
   },
     {
      id: 19,
      title: "Augmented Reality (AR) and Virtual Reality (VR)",
      image: augmented,
       category: "tech",
      slug: "category-blog-19",
      description1: "Augmented Reality (AR) and Virtual Reality (VR) are immersive technologies that are changing the way we interact with digital content. AR overlays digital information onto the real world, allowing users to view and interact with digital objects within their physical environment. Popular applications of AR include mobile apps like Pokémon GO, which superimposes game elements onto real-world locations, and AR-based retail apps that allow users to visualize furniture or clothing in their homes before making a purchase. AR is also gaining traction in industries such as education, healthcare, and manufacturing, where it is used for training, remote assistance, and visualization of complex data.",
      description2: "Virtual Reality, on the other hand, creates a fully immersive digital environment, typically experienced through headsets like the Oculus Rift or HTC Vive. VR transports users to entirely virtual worlds, making it a powerful tool for gaming, entertainment, and simulation-based training. In sectors like real estate, VR allows potential buyers to take virtual property tours from anywhere in the world, while in healthcare, VR simulations are used for training medical professionals in complex procedures. As VR technology advances, its applications in gaming, entertainment, and beyond are expanding, offering new ways for users to experience content.",
      description3: "Despite their growing popularity, AR and VR face challenges related to hardware costs, user adoption, and content development. High-quality VR experiences require powerful computing hardware and immersive headsets, which can be prohibitively expensive for consumers. Similarly, AR’s dependence on smartphones and other mobile devices limits its potential for truly immersive experiences. As these technologies continue to mature, advances in hardware, combined with innovative use cases, will likely drive further adoption and integration of AR and VR into everyday life.",
      author: "By Aasil Ahmed",
      createdAt: " Published Sep 10, 2024 ",
      time: "4:07 pm"
  
   },
      {
      id: 20,
      title: "5G Technology and Its Impact on Connectivity",
      image: technology,
       category: "tech",
      slug: "category-blog-20",
      description1: "The introduction of 5G technology marks a significant leap forward in wireless communication, promising faster speeds, lower latency, and improved connectivity compared to its predecessor, 4G. 5G technology is designed to support not only faster data transmission but also a massive number of devices, making it a cornerstone for the future of smart cities, IoT, and autonomous vehicles. With speeds up to 100 times faster than 4G, 5G networks enable the seamless streaming of high-definition content, faster downloads, and more responsive applications. Beyond personal devices, industries like healthcare, transportation, and manufacturing stand to benefit from 5G’s enhanced connectivity, which enables real-time data exchange and supports mission-critical operations.",
      description2: "One of the most promising aspects of 5G is its potential to drive innovation in areas like autonomous driving, remote surgery, and immersive augmented and virtual reality experiences. For instance, autonomous vehicles rely on instant communication with other vehicles, traffic signals, and infrastructure to navigate safely and efficiently. 5G’s low latency ensures that these communications occur in real-time, reducing the risk of accidents and improving traffic management. In healthcare, 5G could enable surgeons to perform complex operations remotely, using robotic systems to operate on patients located miles away. Additionally, smart cities equipped with 5G technology can use real-time data from IoT sensors to manage utilities, reduce energy consumption, and enhance public safety.",
      description3: "However, the rollout of 5G has faced several challenges, including infrastructure requirements, regulatory hurdles, and concerns over potential health risks. Building the necessary infrastructure for widespread 5G coverage requires significant investment in new cell towers and base stations, especially in rural or underserved areas. Moreover, there are ongoing debates about the safety of 5G radiation, though scientific consensus suggests that it poses no greater risk than previous generations of wireless technology. Despite these challenges, the global adoption of 5G continues to expand, with major cities around the world already enjoying its benefits. As 5G technology matures, it is expected to lay the groundwork for future innovations that will redefine how we live, work, and interact with technology.",
      author: "By Aasil Ahmed",
      createdAt: " Published Sep 10, 2024 ",
      time: "4:07 pm"
  
   },
      {
      id: 21,
      title: "Big Data Analytics and Its Business Applications",
      image: bigdataAnalytics,
       category: "tech",
      slug: "category-blog-21",
      description1: "Big Data refers to the vast and complex datasets that are generated by modern digital activities, from social media interactions to sensor data from IoT devices. As businesses and organizations continue to collect massive amounts of data, the ability to analyze and derive meaningful insights from this data has become increasingly important. Big Data analytics involves using advanced techniques, such as machine learning, data mining, and statistical analysis, to identify patterns, trends, and correlations within large datasets. By leveraging Big Data, businesses can make more informed decisions, optimize operations, and personalize customer experiences, giving them a competitive edge in today’s data-driven economy.",
      description2: "One of the most significant applications of Big Data analytics is in marketing and customer service. By analyzing data from customer interactions, companies can gain a deeper understanding of consumer behavior, preferences, and purchasing patterns. This enables businesses to create targeted marketing campaigns, recommend products, and offer personalized services based on individual customer profiles. In the financial sector, Big Data analytics is used for fraud detection and risk management, helping institutions identify suspicious activities and mitigate potential risks. In healthcare, Big Data is transforming patient care by enabling predictive analytics, which can identify potential health risks and improve treatment outcomes by analyzing patient data, medical history, and environmental factors.",
      description3: "While Big Data presents numerous opportunities, it also comes with challenges. The sheer volume, velocity, and variety of data generated today make it difficult for traditional data processing systems to handle. Moreover, ensuring data privacy and compliance with regulations such as the General Data Protection Regulation (GDPR) is crucial, as mishandling sensitive information can lead to legal consequences and damage to a company’s reputation. As businesses continue to adopt Big Data analytics, they must invest in robust data infrastructure, skilled data scientists, and ethical practices to unlock the full potential of Big Data while addressing these challenges.",
      author: "By Aasil Ahmed",
      createdAt: " Published Sep 10, 2024 ",
      time: "4:07 pm"
  
   },
   {
      id: 22,
      title: "Quantum Computing and Its Future Potential",
      image: quantumComputing,
       category: "tech",
      slug: "category-blog-22",
      description1: "Quantum computing represents one of the most exciting and transformative areas of technology, with the potential to solve complex problems that are currently beyond the reach of classical computers. Unlike classical computers, which process data in binary (0s and 1s), quantum computers use quantum bits or qubits, which can exist in multiple states simultaneously, thanks to the principles of quantum mechanics like superposition and entanglement. This allows quantum computers to perform complex calculations at speeds exponentially faster than today’s most powerful supercomputers. While still in its early stages, quantum computing holds the promise of revolutionizing industries such as cryptography, drug discovery, materials science, and artificial intelligence.",
      description2: "One of the most anticipated applications of quantum computing is in cryptography. Today’s encryption methods, such as RSA and AES, rely on the difficulty of factoring large numbers, which classical computers find challenging. However, a sufficiently powerful quantum computer could break these encryption systems in a fraction of the time, leading to a new era of secure communication. Quantum computing also has the potential to revolutionize drug discovery by simulating molecular interactions at the quantum level, enabling scientists to develop new treatments and materials more efficiently. Similarly, industries like aerospace, finance, and logistics stand to benefit from quantum algorithms that can optimize complex systems and solve problems that are currently intractable for classical computers.",
      description3: "Despite its enormous potential, quantum computing faces significant technical and practical challenges. Building stable qubits and maintaining quantum coherence is extremely difficult, and current quantum computers are prone to errors caused by environmental factors. Additionally, the hardware and expertise required to develop and operate quantum computers are still expensive and limited to a few research institutions and tech companies. Nevertheless, as advancements in quantum computing technology continue, it is expected that within the next decade, we will see the first commercially viable quantum computers, ushering in a new era of technological innovation and problem-solving capabilities.",
      author: "By Aasil Ahmed",
      createdAt: " Published Sep 10, 2024 ",
      time: "4:07 pm"
  
   },

//health
{
      id: 23,
      title: "Sale of E-Cigarettes and Vapes Banned in This District",
      image: vape,
       category: "health",
      slug: "category-blog-23",
      description1: "Deputy Commissioner Haripur, Shoaib Abbas, has imposed a ban on e-cigarettes, vapes, and related nicotine products in Haripur district, effective from September 6, 2024, for 90 days under Section 144.The ban prohibits the use of e-cigarettes, vapes, and nicotine products in public transport and public spaces. Additionally, promoting these products through media platforms and displaying related pamphlets on walls or vehicles is forbidden. The sale of these items to individuals under 21 years of age is also banned.The restrictions further prohibit the storage or sale of e-cigarettes, vapes, and nicotine products within a 100-meter radius of schools, colleges, hospitals, and public parks.",
      description2: "Earlier today, the Sindh government imposed a ban on the sale of items commonly used for drug consumption, as part of efforts to curb narcotics use across the province. Following directives from Senior Minister Sharjeel Inam Memon, Karachi’s commissioner issued a notification under Section 144, prohibiting the sale of wooden, acrylic, glass, stone, plastic, and ceramic pipes, roach clips, chillums, bongs, and marijuana pipes.Local police Station House Officers (SHOs) are authorized to take action against violators under Section 188 of the Pakistan Penal Code (PPC).",
      description3: "Meanwhile, the Senate Standing Committee on Science and Technology on Monday approved the country’s first-ever Cannabis Authority Bill after a delay of over four years due to jurisdictional disputes between ministries. During the committee meeting, its chairman, Senator Kamil Ali Agha, called for a thorough review of each clause, while Senators Dr. Afnan Ullah Khan, Musadik Masood Malik, and Nasir Mehmood advocated for the bill’s immediate passage.PTI Senator Shibli Faraz, who had overseen the initial drafting of the bill, expressed concern about bypassing due consideration and warned that he would submit a dissenting note if the bill were passed hastily.",
      author: "By Rija Sohaib ",
      createdAt: " Published Sep 10, 2024 ",
      time: "6:25 pm"
  
   },
{
      id: 24,
      title: "KP Reports 34,000+ Cases of Gastro and Diarrhea in One Week",
      image: epidemic,
       category: "health",
      slug: "category-blog-24",
      description1: "Stomach and intestinal diseases have reached alarming levels in several districts of Khyber-Pakhtunkhwa, driven by poor nutrition, contaminated water, high temperatures, and environmental pollutionIn just one week, 34,701 cases of gastroenteritis and acute diarrhea were reported across various districts in the province. According to the Health Department’s Integrated Disease Surveillance Report for the period from August 26 to September 1, Peshawar recorded the highest number of cases, with 4,443 reported. Swat followed closely with 3,995 cases, while the Bajaur tribal district registered 2,556 cases. Dera Ismail Khan and Nowshera also saw significant outbreaks, with over 2,000 cases reported in each district.",
      description2: "According to sources other affected districts included Shangla with 1,654 cases, Malakand with 1,412, Dera Ismail Khan with 1,240, Haripur with 1,127, Chitral Lower with 1,114, and Abbottabad with 1,103. The lowest number of cases—42—were reported in the mountainous Orakzai tribal district.Dr. Shams Wazir, a gastroenterologist at Lady Reading Hospital Peshawar, explained that the hot weather and ongoing rains contribute to the rise in gastrointestinal diseases. Poor hygiene, consumption of substandard drinks, and lack of access to clean drinking water are major causes. He added that unsanitary conditions in public toilets and the failure to wash hands before eating are also contributing to the high rate of viral gastroenteritis.",
      description3: "Dr. Wazir advised the public to be cautious about nutrition, water quality, and personal hygiene, particularly with schools reopening. He stressed the importance of keeping school toilets clean to prevent the spread of infections and warned against consuming open food exposed to flies. In areas prone to flooding, access to clean drinking water is crucial to avoid further outbreaks.",
      author: "By Rija Sohaib ",
      createdAt: " Published Sep 9, 2024 ",
      time: "4:26 pm"
  
   },
   {
      id: 25,
      title: "61% of Drinking Water in Dozens of Pakistani Cities Found Unsafe",
      image: contaminatedWater,
       category: "health",
      slug: "category-blog-25",
      description1: "A new government report has revealed that a majority of Pakistan’s urban centers are grappling with unsafe drinking water, with 61% of water supplies in 29 cities found to be contaminated.Major cities like Karachi and Multan are among the worst affected, posing serious health risks to residents. The report, presented by the Ministry of Water Resources, shows alarming contamination rates, with Gilgit, Mirpur Khas, and Shaheed Benazirabad reporting 100% of their drinking water to be unsafe.",
      description2: "Karachi’s water supply is 93% contaminated, while Multan’s stood at 94% and Badin at 92%.Other cities facing significant contamination include Bahawalpur (76%), Sargodha (83%), Faisalabad (59%), and Sheikhupura (60%). In Balochistan, Quetta and Loralai reported contamination levels of 59%, while Hyderabad was at 80%, Sukkur at 67%, and Muzaffarabad at 70%.",
      description3: "The Pakistan Council of Research in Water Resources (PCRWR), responsible for the study, regularly shares its findings with provincial authorities. However, with the responsibility of providing clean drinking water shifted to the provinces after the 18th Constitutional Amendment, the report highlights the ongoing challenge of ensuring safe water for millions amid growing public health and environmental concerns.",
      author: "By Arsalan Khattak",
      createdAt: " Published Sep 5, 2024 ",
      time: "6:13 pm"
  
   },
   {
      id: 26,
      title: "Sindh Food Authority Seizes Fake Milk Factory in Karachi",
      image: milk,
       category: "health",
      slug: "category-blog-26",
      description1: "The Sindh Food Authority conducted a raid on Tuesday at a factory in Karachi’s Bhains Colony, where chemicals were being mixed with water to produce milk, ARY News reported.According to Muzamil Haliputo, ADG of the Sindh Food Authority, the factory was producing 9,000 liters of milk using 750 kilos of chemicals.The authorities destroyed the chemically-tainted milk, which was made by mixing the chemicals with 480 liters of water.",
      description2: "The staff involved in the production of this harmful milk were arrested, and legal action is being taken against them.Muzamil Haliputo emphasized that the authorities would not tolerate any activities that jeopardize public health.Last month, the Sindh Food Authority (SFA) conducted a similar raid on a synthetic milk-producing factory, seizing toxic chemicals and arresting the staff.According to the SFA, the operation was carried out in Karachi’s Bhains Colony after receiving complaints that the factory was producing fake (synthetic) milk by adding chemicals to the water.",
      description3: "ADG Muzamil Haliputo led the SFA team that confiscated 750 kilos of chemicals used to produce 9,000 liters of fake milk.Additionally, 480 liters of the prepared fake milk were seized and discarded. The entire factory staff has been arrested, and the SFA has vowed to take strict action against those involved in the production and distribution of adulterated milk.",
      author: "By Arsalan Khattak",
      createdAt: " Published Sep 4, 2024 ",
      time: "1:08 pm"
  
   },
{
      id: 27,
      title: "Second Monkeypox Case Confirmed in Pakistan in Two Days",
      image: mpox,
       category: "health",
      slug: "category-blog-27",
      description1: "On Sunday, Pakistan confirmed its second Monkeypox (mpox) case in two days, raising the total to four since the World Health Organization (WHO) declared the disease an emergency of international concern on August 14. The new case, like the previous three, was reported in Khyber Pakhtunkhwa.National Health Services (NHS) Ministry spokesman Sajid Shah confirmed that the latest mpox patient is a 47-year-old man who returned from a Gulf country on August 29. The Peshawar resident exhibited symptoms of the virus and was isolated by Border Health Services (BHS) at Bacha Khan International Airport.",
      description2: "In response to a question, Mr. Shah stated that authorities have begun tracing individuals who may have been in contact with the patient to prevent local transmission. Previously, on Thursday, a 51-year-old man arriving in Peshawar from Saudi Arabia was isolated at the airport due to similar concerns.The test samples of the patient were sent to the Public Health Reference Lab at Khyber Medical University, where they tested positive on Friday. Dr. Irshad Ali Roghani, Director of Public Health in Khyber Pakhtunkhwa, stated that the patient is now isolated at Services Hospital.",
      description3: "Pakistan has not reported any local transmission of mpox, with all four cases involving patients who arrived from abroad and were isolated by the Border Health Services (BHS) at airports. Prime Minister’s Coordinator on Health, Dr. Malik Mukhtar Ahmad Bharath, praised the BHS for its role in monitoring incoming passengers.The strain identified in Pakistan is classified as clade IIb, a subclade of clade II. The current outbreak in the Democratic Republic of the Congo is associated with clade Ib (a subclade of clade I). There have been no reported cases of clade I in Pakistan to date.",
      author: "By Arsalan Khattak",
      createdAt: " Published Sep 2, 2024 ",
      time: "1:12 pm"
  
   },
   {
      id: 28,
      title: "Many Pakistani Medicines Fail to Meet International Standards",
      image: medicine,
       category: "health",
      slug: "category-blog-28",
      description1: "On Friday, a parliamentary committee expressed serious concerns regarding the quality of medicine produced in Pakistan, highlighting that many do not meet international standards.This issue was brought up during a meeting of the Senate Standing Committee on National Health Services, Regulations, and Coordination, chaired by Senator Amir Waliuddin Chishti at the Parliament House.",
      description2: "In response to the committee’s concerns about medicine quality, Drug Regulatory Authority of Pakistan (DRAP) officials highlighted a recent lawsuit against GlaxoSmithKline (GSK) for producing substandard drugs.The committee also questioned the presence of multinational pharmaceutical companies in Pakistan and addressed rumors about their potential departure.In response, DRAP officials confirmed that 30 multinational pharmaceutical companies are still active in Pakistan. They added that no companies have left the market, though there have been several mergers.",
      description3: "The Senate committee also examined the updated policy for the National Registration Examination (NRE). Dr. Rizwan Taj, President of the Pakistan Medical and Dental Council (PMDC), reported that the passing criteria for foreign medical students had been reduced from 70% to 60%.This change has boosted the NRE passing rate from 4% to 40%. Moreover, National Health Services Secretary Nadeem Mahbub updated the committee on staffing in federal hospitals, revealing that 500 doctors were appointed between 2018 and 2023.",
      author: "By Arsalan Khattak",
      createdAt: " Published Aug 31, 2024 ",
      time: "3:00 pm"
  
   },
   {
      id: 29,
      title: "Balochistan to Hand Over Govt Hospitals to Private Sector",
      image: hosp,
       category: "health",
      slug: "category-blog-29",
      description1: "The Balochistan government has decided to operate state-run hospitals through public-private partnerships.In the initial phase, 10 public hospitals in the province will transition to this model. The Health Department has also issued a notification to include the Trauma Centers in Zhob and Khuzdar in this initiative.The hospitals being changed to Public-Private Partnerships in Balochistan include the District Headquarters Hospitals in Zhob, Panjgur, Kohlu, Pashin, Khuzdar, Dera Bugti, Qalat, and Lasbela districts.",
      description2: "In a similar move last month, the Punjab government announced plans to outsource the management of operation theatres in public hospitals to private companies. The Punjab government has officially notified the government hospitals about this.Under this plan, private medical firms will run operation theatres, in addition to installing and managing advanced surgical equipment, including arthroscopy, laparoscopy, endoscopy, and endo-urology devices.",
      description3: "The initiative is designed to upgrade surgical facilities in public hospitals, providing access to cutting-edge equipment for several medical procedures.",
      author: "By Arsalan Khattak",
      createdAt: " Published Aug 24, 2024 ",
      time: "2:44 pm"
  
   },
   {
      id: 30,
      title: "Islamabad is Getting a State-of-the-Art International Hospital",
      image: hospital,
       category: "health",
      slug: "category-blog-30",
      description1: "Federal Minister for Interior Mohsin Naqvi laid the foundation stone for a cutting-edge 100-bed international hospital in Islamabad, a joint venture between the National Police Foundation (NPF) and a Turkish company. This project is expected to transform healthcare services for both policemen and the general public.The National Police Foundation (NPF) has provided the land for the hospital, while a private firm from Turkiye is investing Rs5 billion to fund the project.",
      description2: "Naqvi remarked that this initiative represents a significant advancement in healthcare facilities in the region and is a major milestone for the NPF, which has seen a resurgence under the leadership of Sabir Ahmed, MD of NPF.The Minister emphasized that the proceeds from this and other NPF projects are being directed towards the welfare of police officers and the families of martyrs.",
      description3: "He also mentioned that the NPF and the Capital Development Authority are planning to collaborate on additional joint projects, with discussions already in progress.Naqvi added that the NPF’s efforts are not limited to Islamabad, noting that a housing project has been completed in Hyderabad. He also highlighted the ongoing revitalization of the National Police Academy.",
      author: "By Rija Shoaib",
      createdAt: " Published Aug 20, 2024 ",
      time: "1:56 pm"
  
   },
    {
      id: 31,
      title: "Karachi Reports First Congo Virus Case of 2024",
      image: congo,
       category: "health",
      slug: "category-blog-31",
      description1: "According to officials, a patient who tested positive for the Congo virus was admitted to the Sindh Infectious Disease Hospital and Research Centre late Wednesday evening.",
      description2: "The 32-year-old patient, the first case of Congo fever this year, was initially reported at Dr. Ruth Pfau Civil Hospital Karachi on Tuesday. He was then transferred to Jinnah Postgraduate Medical Centre (JPMC) earlier on Wednesday.“He is in critical condition. We have moved him to a specialized hospital for infectious diseases where he will receive appropriate care,” explained JPMC’s Deputy Executive Director, Dr. Yahya Tunio.",
      description3: "The patient, a butcher by profession, had contracted Crimean-Congo hemorrhagic fever (CCHF), also known as Congo fever. This viral hemorrhagic fever is typically transmitted by ticks but can also be spread through contact with infected animal tissues during and immediately after slaughter.Congo fever has a case fatality rate of up to 40 percent, and there is no available vaccine for either humans or animals.",
      author: "By Rija Shoaib",
      createdAt: " Published Aug 15, 2024 ",
      time: "12:49 pm"
  
   },

    //education
      {
      id: 32,
      title: "KP’s Primary School Teachers Announce Massive Protest Next Month",
      image: emptyClass,
       category: "education",
      slug: "category-blog-32",
         description1: "Over 139,000 primary school teachers in Khyber Pakhtunkhwa announced a province-wide strike on October 7, following the government’s decision to drop their upgrade plan.The All Primary Teachers Association (APTA) has decided to lock schools in protest and hold demonstrations across the province. APTA’s leadership, during a recent meeting led by President Azizullah, declared that teachers would take to the streets and organize protests outside press clubs in various cities.",
      description2:"Azizullah emphasized that teachers have no choice but to escalate their actions after the government’s inaction on their demands. “We will lock schools and gather for a sit-in. The responsibility lies with the government,” he stated.The strike will shut down more than 25,000 primary schools across the province, with a large number of teachers expected to converge in Peshawar for a major sit-in.",
      description3: "Teachers have a firm stance and have warned that the protest will continue until the government addresses their concerns. The strike represents a significant show of unity among educators, highlighting growing frustration over unmet promises. Further steps may be taken if their demands remain ignored.",
      author: "By Arsalan Khattak",
      createdAt: " Published Sep 16, 2024 ",
      time: "12:42 pm"
  
   },
       {
      id: 33,
      title: "Private Schools Threaten Protest Against Possible 25% Tax",
      image: schools,
       category: "education",
      slug: "category-blog-33",
         description1: "Private educational institutions nationwide have strongly opposed the government’s proposal to impose a Point of Sales Tax on private schools charging monthly fees exceeding one thousand rupees. According to a press release, the schools have threatened to launch nationwide protests if the tax is enforced.Dr. Malik Abrar Hussain, Central President of the All Pakistan Private Schools and Colleges Association, warned that such a tax would significantly increase education costs, making it inaccessible for the average citizen. He explained that a 25% tax hike would substantially raise fees, meaning that a school currently charging 4,000 rupees would need to increase its fees to 5,000, with parents bearing the additional burden. “This move contradicts the government’s slogan of ‘Education for All’ and undermines efforts to address the educational crisis,” he remarked.",
      description2:"During a meeting of the Central Executive Committee of the association, chaired by Dr. Malik Abrar Hussain, members unanimously decided to reject any form of taxation on education. The meeting, held at the association’s central office, also addressed concerns over recent FSC results from the Federal Board of Islamabad. The association intends to escalate these issues to higher authorities and strategize a resolution.The committee also discussed the status of educational institutions in Islamabad’s sectoral areas, particularly in light of the high court’s ruling on non-conforming use. The association pledged to formulate an action plan with the Capital Development Authority (CDA) once the court’s decision is finalized. It reiterated its commitment to addressing the challenges faced by private schools across the country and fostering public-private partnerships in education.",
      description3: "Key figures at the meeting included Secretary General Muhammad Ashraf Haraj, Javed Iqbal Raja, Irfan Muzaffar Kiani, Malik Hafeezur Rahman, Sardar Gul Zubair Khan, Haji Abdul Rahim, Muhammad Ibrahim, Qasim Abbas, Antakah Hussain, Chaudhry Iftikhar Ahmed, Tariq Mehmood Rizvi, Syed Abid Shah, and Madam Sadia. They all expressed their support for resisting the proposed tax and advocating for the interests of students and institutions.",
      author: "By Arsalan Khattak",
      createdAt: " Published Sep 16, 2024 ",
      time: "12:24 pm"
  
   },
        {
      id: 34,
      title: "Applications Open for Scotland Pakistan Scholarships for Young Women and Girls 2024-25",
      image: scholarship,
       category: "education",
      slug: "category-blog-34",
         description1: "The applications for the British Council-administered Scotland Pakistan Scholarship for Young Women and Girls are now open. This scholarship funds Bachelor’s and Master’s/MPhil studies for Pakistani women in any HEC-recognized university across Pakistan.",
      description2:"Funded by the Scottish Government, these grants aim to make higher education more accessible to women, supporting them in achieving their potential and ambition. British Council administers the scheme in Pakistan and coordinates with selected scholars and universities either directly or through nominated university focal persons.The scholarship will cover a two-year master’s/MPhil or four-year bachelor’s degree at an HEC-recognised Pakistani university.",
      description3: "The last date to apply is 30 September 2024. To apply students can visit the website and fill in the online form and application.",
      author: "By Sher Alam",
      createdAt: " Published Sep 13, 2024 ",
      time: "4:57 pm"
  
   },
    {
      id: 35,
      title: "Pakistan Has Over 26.2 Million Out-of-School Children: Report",
      image: outSchool,
       category: "education",
      slug: "category-blog-35",
         description1: "The Ministry of Education has disclosed alarming figures during a National Assembly session, revealing that approximately 2.62 crore children are currently out of school.The statistics indicate that 1.07 crore children aged 5 to 9 are not attending school, including 49.72 lakh boys and 58.01 lakh girls. In the 10 to 12 age group, 49.35 lakh children are missing out on middle school education, with 21.06 lakh boys and 28.28 lakh girls affected.",
      description2:"The high school level shows 45.45 lakh students who are not enrolled, comprising 23.06 lakh boys and 22.38 lakh girls. Additionally, 59.50 lakh students are deprived of higher secondary education, including 29.92 lakh boys and 29.58 lakh girls.On Sunday, Prime Minister Shehbaz Sharif declared a nationwide education emergency, urging the private sector and civil organizations to collaborate with the government to address the critical education crisis.",
      description3: "According to a report by UNESCO, three out of four children in developing countries cannot read or understand a basic text by the age of 10. Furthermore, there are still 754 million illiterate adults globally, with two-thirds of them being women.",
      author: "By Arsalan Khattak",
      createdAt: " Published Sep 10, 2024 ",
      time: "11:58 am"
  
   },
    {
    id: 36,
    title: "KP and Google to Give Digital Skills Scholarships to Thousands of Youngsters",
       image: digital,
     category:"education",
     slug: "category-blog-36",
     description1: "In a significant step toward building a digitally empowered and economically resilient Khyber Pakhtunkhwa, the Khyber Pakhtunkhwa Information Technology Board (KPITB), under the leadership of the Honorable Chief Minister Mr. Ali Amin Khan Gandapur, has unveiled a series of groundbreaking initiatives.",
    description2: "The KPITB has launched its Digital Internship Program, offering 200 internship opportunities to young graduates to train them in industry-demanded skills. These interns will be placed in IT companies located in IT parks in Peshawar and Abbottabad, enabling them to gain practical experience and increase employability. The initiative was launched under the direction of Chief Minister Ali Amin Khan Gandapur.",
    description3:"The new Join IT online portal was introduced to connect skilled individuals with IT companies seeking technical expertise. The platform will act as a talent demand-supply bridge, allowing organizations to find the skilled workforce they need while providing employment opportunities to local talent. This initiative was also launched by the Chief Minister.",
   author: "By Arsalan Khattak",
    createdAt: " Published Sep 14, 2024 ",
    time:"12:10 am" 
   },
    {
    id:37,
    title: "Punjab Introduces Attendance Monitoring System for Teachers",
      image: attendanceMonitor,
      category:"education",
      slug: "category-blog-37",
      description1: "The Punjab School Education Department (SED) introduced a new monitoring system on Friday to ensure teacher attendance in public schools, aiming to improve the overall quality of education across the province.This system focuses on strict compliance with working hours for principals and teachers as part of a broader initiative to enhance educational standards and maintain school discipline.",
       description2: "According to a directive obtained by Dawn, the SED has instructed all school staff to adhere to specified duty hours, with surprise inspections by department officers to ensure compliance. The guidelines, issued on August 11, emphasize that principals and teachers must stay in school until 2:30 pm. The department has reinforced school timing regulations to improve operations and ensure educational activities run smoothly.",
    description3:"The SED has communicated these instructions to all District Education Authorities (DEAs) chief executive officers in Punjab, stressing the importance of adhering to the previously issued schedule.Teachers are now required to prepare lesson plans, engage in professional development, and participate in academic and extracurricular activities during extended school hours and alternate Saturdays. The department warned that no leniency would be tolerated, and officers are responsible for ensuring full compliance.",
       author: "By Raji Shoaib",
    createdAt: " Published Sep 14, 2024 ",
    time:"1:55 pm"
   },
     {
    id:38,
    title: "Good News for AIOU Students Regarding PM Laptop Scheme",
        image: AIOU,
      category:"education",
      slug: "category-blog-38",
      description1: "Minister for Federal Education and Professional Training, Khalid Maqbool Siddiqui, assured the National Assembly on Thursday that students of Allama Iqbal Open University (AIOU) would be included in the Prime Minister’s Laptop Scheme.",
       description2: "In response to a calling attention notice raised by Shahida Begum regarding the exclusion of AIOU students from the scheme, the minister explained that a final decision on the PM’s Laptop Scheme is still pending. However, he reassured the assembly that this issue would be addressed during the decision-making process.Siddiqui emphasized the government’s commitment to ensuring AIOU students benefit from the program, noting that since its launch in 2013, the scheme has distributed over 10,000 laptops to students, including those from AIOU and Virtual University (VU).",
    description3:"Shahida Begum highlighted that many AIOU students, particularly from remote areas in Balochistan and Khyber-Pakhtunkhwa, come from disadvantaged backgrounds. She stressed that these students, especially those pursuing Ph.D. and M.Phil. degrees, rely heavily on laptops for their studies.",
       author: "By Rija Shoaib",
    createdAt: " Published Sep 13, 2024 ",
    time:"1:20 pm"
   },
     {
    id:39,
    title: "Islamia College Peshawar’s New Library Remains Incomplete After Years",
        image: college,
      category:"education",
      slug: "category-blog-39",
      description1: "Islamia College Peshawar, which gained university status in 2008, has seen a significant surge in student enrollment, rising from 2,000 to over 8,000, with some estimates nearing 10,000. To address this growth, the administration initiated plans to expand the university’s library to better accommodate the increasing student population.",
       description2: "Construction of the new library building began in 2017 with an initial budget of Rs 126 million. However, despite five years passing, the project remains incomplete. The grey structure of the building stands unfinished, with construction materials strewn across the site, diminishing the prestige of this historic institution.Due to the prolonged delay, the project’s cost has risen to Rs 157 million. The ongoing delay has significantly affected students, as the existing library does not have enough space to meet the needs of the growing student body.",
    description3:"The administration of Islamia College University Peshawar has largely remained silent on the reasons behind the extended delay. In addition to the library, other important facilities, including research centers and academic classrooms, have also been under construction for the past five years.",
       author: "By Rija Shoaib",
    createdAt: " Published Sep 9, 2024 ",
    time:"6:21 pm"
   },
      {
    id:40,
    title: "Punjab Makes Major Course Changes for Class 9 and Class 11",
        image: books,
      category:"education",
      slug: "category-blog-40",
      description1: "The Punjab government has announced major changes to the curriculum for Class 9 and 11 students starting from the next academic year.According to a recent notification by the Punjab Curriculum and Textbook Board (PCTB), these changes will include revisions to key subjects like Urdu, English, Physics, Chemistry, Biology, Computer Science, and Mathematics.",
       description2: "The decision aims to update the educational content to meet current academic standards and address the evolving needs of students. As part of these changes, the curriculum will also focus on Pakistan’s cultural and historical importance, particularly in subjects like Islamiat and Social Studies.The goal is to provide a more relevant and modernized educational experience for students in the province. The PCTB has been tasked with printing new textbooks that reflect these changes.",
    description3:"The revised textbooks are expected to be available before the new academic year begins, ensuring students and teachers are prepared to engage with the updated syllabus. These changes are part of a broader effort by the Punjab government to improve the quality of education across the region.",
       author: "By Rija Shoaib",
    createdAt: " Published Sep 9, 2024 ",
    time:"1:35 pm"
  },
   {
    id:41,
    title: "FBISE and LUMS to Hold Pakistan Mathematics Olympiad",
        image: olympaid,
      category:"education",
      slug: "category-blog-41",
      description1: "The Federal Board of Intermediate and Secondary Education (FBISE) has announced a strategic partnership with the Lahore University of Management Sciences (LUMS) to launch the Pakistan Mathematics Olympiad (PMO).As part of this collaboration, LUMS has meticulously developed a comprehensive syllabus specifically tailored for the PMO. A model question paper has been crafted to further aid students in their preparation, providing valuable insights into the competition’s format and difficulty level.",
       description2: "The PMO is open to students enrolled in Secondary School Certificate (SSC) or O Level, Higher Secondary School Certificate (HSSC) or A Level, and equivalent qualifications from all educational streams across Pakistan. This inclusive approach ensures that students from diverse educational backgrounds have the opportunity to participate and showcase their mathematical talents on a national platform.To encourage excellence in mathematics, the PMO will offer prestigious prizes to high achievers, including cash awards, medals, laptops, and scholarships for admission to top universities in Pakistan. These incentives are designed to inspire a new generation of problem-solvers and critical thinkers, fostering a culture of academic excellence and innovation.",
    description3:"Registration for the Pakistan Mathematics Olympiad will commence in mid-September 2024, exclusively on the FBISE website. Students are encouraged to register early to take advantage of this unique opportunity to compete at the highest level and gain national recognition for their mathematical prowess.For more information on the registration process and competition details, interested participants can visit the official FBISE website.",
       author: "By Sher Alam",
    createdAt: " Published Sep 4, 2024 ",
    time:" 10:57 am"
   },
    
]

interface obj {
    params: {
        read: string;
        }
    }

// ! Blogs for each categiry

const Read:React.FC<obj> = ({params}) => {
    const findItems = blogscard.find((item) => item.slug === params.read);
    if (!findItems) {
        return <h1>Blog not found</h1>;
    }
     
    const combineDescription = `${findItems.description1}\n${findItems.description2}\n${findItems.description3}`
    const paras = combineDescription.split('\n');
    
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
        <h1 className='text-cyan-950 font-bold md:text-4xl text-2xl'>{findItems.title}</h1>
        <p className='pt-10 md:text-lg text-sm'>{findItems.author} | {findItems.createdAt} | { findItems.time}</p>
          <Image src={findItems.image} alt={findItems.title} width={500} height={500} className='w-[1500px]  h-[200px] md:h-[500px] mt-[10px] shadow-xl' />
          {paras.map((para, index) => {
            return (
              <div key={index}>
                <p  className='mt-[50px] '>{para}</p>
              </div>
            ) })}
          
        </div>
      </div>
        <div className='mt-[100px]'>
           {/* Comments section added */}
        <Comments />
        </div>
    </div> 
  );
}

export default Read
