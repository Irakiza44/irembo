import './App.css';
import "@fontsource/nunito-sans";
import logo from './img/logo.png'
import { Link } from "react-router-dom";
import Footer from './components/Footer';
function App() {
  return (
    <div className="relative font-nunito ">
      {/* navigation part */}

      <div className="grid grid-rows-2  w-full">
        <div className=" bg-yellow-400">

          <p className="text-end p-8 flex justify-center text-lg gap-2">

            <svg className="text-blue-500 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
            <strong>New!</strong>
            The fiscal year 2022/2023 has started. Pay for your family's mutuelle coverage
            <strong>here</strong>
          </p>
        </div>
        <div className="flex justify-end items-center bg-blue-500 ">
          <div className="flex justify-start items-center mr-96">
            <img src={logo} alt='logo' className=" object-left w-44 h-16" />
          </div>
          <button className="flex items-center gap-2 bg-blue-500 py-1 px-4 rounded m-4 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>


            Support Center</button>

          <button className="flex items-center gap-2 bg-blue-500 py-1 px-4 rounded m-4 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>


            Sign Up</button>

          <button className=" flex items-center gap-2 bg-blue-500 py-1 px-4 rounded m-4 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>

            Log In</button>

          <button className="flex items-center gap-2 bg-blue-400 py-3 px-4 rounded m-4 text-white">
            <svg className="inline w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            Find Applications</button>

          <div class="flex items-center justify-center bg-blue-500 ml-4 mr-32">
            <select id="language-select" name="language" class="py-2 rounded text-white border-none bg-blue-500">
              <option value="English">English</option>
              <option value="kinyarwanda">Kinyarwanda</option>
              <option value="Francais">Francais</option>

            </select>
          </div>

        </div>
      </div>  
      {/* navigation part end here */}
      
      {/* main part */}
      <div className='bg-white'>
        <div className="flex flex-col h-56  bg-blue-500  w-full justify-center items-center">
          <p className='text-[34px] font-bold text-white p-4 text-center'>Welcome</p>
          <input type='text' className=' placeholder:p-3 placeholder:text-lg placeholder:text-gray-500 py-3 ml-8  shadow-lg w-3/5 rounded hover:shadow-xl hover:shadow-blue-800'
            placeholder='&#xF002; Search for services' />
        </div>

        <div className=" w-11/12 p-16">
          <button class="bg-blue-100 flex text-lg gap-2 text-black font-bold p-5 w-full rounded text-start">
            <svg className="w-8 h-8 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg> <Link to="about" className='text-blue-400 underline'>Click here </Link>  for all Tourism Services</button>
            <h2 className='text-2xl pt-6 pb-4 text-gray-600 font-bold'>Family</h2>
            <div className='grid grid-cols-3 gap-4 mt-5 '>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
                <ul>
                  <li className='mb-3 text-lg'>Certificate for Widow/Widower</li>
                  <li className='mb-3 text-lg'>Certificate of Residence</li>
                  <li className='mb-3 text-lg'>Certificate of Genocide Survivors</li>
                  <li className='mb-3 text-lg'>Certificate of Being Single</li>
                  <li className='mb-3 text-lg'>Divorce Services</li>
                </ul>
                </div>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
              <ul>
              <li className='mb-3 text-lg'>Record of recognition</li>
              <li className='mb-3 text-lg'>Guardianship Record</li>
              <li className='mb-3 text-lg'>Certificate of Succession</li>
              <li className='mb-3 text-lg'>Certificate of Cohabitation</li>
              </ul>
              </div>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
                <ul>
                  <li className='mb-3 text-lg'>Birth Services</li>
                  <li className='mb-3 text-lg'>Marriage Services</li>
                  <li className='mb-3 text-lg'>Death Services</li>
                  <li className='mb-3 text-lg'>Adoption Record</li>
                </ul>
              </div>
            </div>

            <h2 className='text-2xl pt-6 pb-4 text-gray-600 font-bold'>Immigration And Emigration</h2>
            <div className='grid grid-cols-3 gap-4 mt-5 '>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
                <ul>
                  <li className='mb-3 text-lg'>Penalty Payments</li>
                  <li className='mb-3 text-lg'>DPA payment</li>
                  <li className='mb-3 text-lg'>CEPGL Services</li>
                  <li className='mb-3 text-lg'>Rwandan Nationality</li>
                  <li className='mb-3 text-lg'>Permit and Visa Transfer</li>
                </ul>
                </div>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
                <ul>
                  <li className='mb-3 text-lg'>Permits</li>
                  <li className='mb-3 text-lg'>Foreigner ID Card</li>
                  <li className='mb-3 text-lg'>Foreigner Travel Document</li>
                </ul>
              </div>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
              <ul>
                  <li className='mb-3 text-lg'>e-Passport Application</li>
                  <li className='mb-3 text-lg'>Laissez-passer</li>
                  <li className='mb-3 text-lg'>Visa Application</li>
                </ul>
              </div>
            </div>

            <h2 className='text-2xl pt-6 pb-4 text-gray-600 font-bold'>Identification</h2>
            <div className='grid grid-cols-3 gap-4 mt-5 '>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
                <ul>
                  <li className='mb-3 text-lg'>Application for National ID</li>
                  <li className='mb-3 text-lg'>Registration in the National Population Registry</li>
                  <li className='mb-3 text-lg'>National ID Replacement</li>
                </ul>
                </div>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
              <ul>
                  <li className='mb-3 text-lg'>Certificate of Full Identity</li>
                  <li className='mb-3 text-lg'>Change of name</li>
                  <li className='mb-3 text-lg'>Application for National ID Correction</li>
                </ul>
              </div>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
              <ul>
                  <li className='mb-3 text-lg'>Certificate of Nationality</li>
                  <li className='mb-3 text-lg'>Certificate of Being Alive</li>
                  <li className='mb-3 text-lg'>Certificate for Replacement of National Identification</li>
                </ul>
              </div>
            </div>

            <h2 className='text-2xl pt-6 pb-4 text-gray-600 font-bold'>Land</h2>
            <div className='grid grid-cols-3 gap-4 mt-5 '>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
                <ul>
                  <li className='mb-3 text-lg'>Sporadic Registration</li>
                  <li className='mb-3 text-lg'>E-payment Services</li>
                  <li className='mb-3 text-lg'>Authentication for Loan Agreement</li>
                </ul>
                </div>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
              <ul>
                  <li className='mb-3 text-lg'>Change of Land Use</li>
                  <li className='mb-3 text-lg'>Title Details Update</li>
                  <li className='mb-3 text-lg'>Document Replacement</li>
                </ul>
              </div>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
              <ul>
                  <li className='mb-3 text-lg'>Title Transfer</li>
                  <li className='mb-3 text-lg'>Land Merging</li>
                  <li className='mb-3 text-lg'>Subdivision</li>
                </ul>
              </div>
            </div>

            <h2 className='text-2xl pt-6 pb-4 text-gray-600 font-bold'>Police</h2>
            <div className='grid grid-cols-3 gap-4 mt-5 '>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
                <ul>
                  <li className='mb-3 text-lg'>Duplicate of Driving License</li>
                  <li className='mb-3 text-lg'>Traffic Fines</li>
                  <li className='mb-3 text-lg'>Replacement of Definitive Driving License</li>
                  <li className='mb-3 text-lg'>Motor Vehicle Inspection </li>
                </ul>
                </div>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
              <ul>
                  <li className='mb-3 text-lg'>Driving License Exam Results</li>
                  <li className='mb-3 text-lg'>Renewal of Driving License</li>
                </ul>
              </div>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
              <ul>
                  <li className='mb-3 text-lg'>Application for Driving License</li>

                  <li className='mb-3 text-lg'>Registration for Driving Test</li>
                </ul>
              </div>
            </div>

            <h2 className='text-2xl pt-6 pb-4 text-gray-600 font-bold'>Notarisation And Gazette Service</h2>
            <div className='grid grid-cols-3 gap-4 mt-5 '>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
                <ul>
                  <li className='mb-3 text-lg'>Subscribe for the Official Gazette</li>
                  <li className='mb-3 text-lg'>Various Notary Services</li>
                </ul>
                </div>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
              <ul>
                 <li className='mb-3 text-lg'>Publish in the Official Gazette</li>
                </ul>
              </div>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
              <ul>
                 <li className='mb-3 text-lg'>Purchase an Official Gazette</li>
                </ul>
              </div>
            </div>

            <h2 className='text-2xl pt-6 pb-4 text-gray-600 font-bold'>Health</h2>
            <div className='grid grid-cols-3 gap-4 mt-5 '>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
                <ul>
                  <li className='mb-3 text-lg'>COVID-19 Test</li>
                </ul>
                </div>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
              <ul>
                  <li className='mb-3 text-lg'>Yellow fever vaccination</li>
                </ul>
              </div>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
              <ul>
                  <li className='mb-3 text-lg'>Community Based Health Insurance(Mutuelle)</li>
                </ul>
              </div>
            </div>
            <h2 className='text-2xl pt-6 pb-4 text-gray-600 font-bold'>Education</h2>
            <div className='grid grid-cols-3 gap-4 mt-5 '>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
                <ul>
                  <li className='mb-3 text-lg'>Foreign Equivalency Certification for TVET</li>
                </ul>
                </div>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
              <ul>
                  <li className='mb-3 text-lg'>Application for Equating Foreign Qualifications - General Education</li>
                </ul>
              </div>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
              <ul>
                  <li className='mb-3 text-lg'>Application for Equating Foreign Qualifications</li>
                </ul>
              </div>
            </div>

            <h2 className='text-2xl pt-6 pb-4 text-gray-600 font-bold'>Rwanda Museums</h2>
            <div className='grid grid-cols-3 gap-4 mt-5 '>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
                <ul>
                  <li className='mb-3 text-lg'>Schedule a Visit</li>
                  <li className='mb-3 text-lg'>Re-schedule a Visit</li>
                </ul>
                </div>
            </div>

            <h2 className='text-2xl pt-6 pb-4 text-gray-600 font-bold'>Transport</h2>
            <div className='grid grid-cols-3 gap-4 mt-5 '>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
                <ul>
                  <li className='mb-3 text-lg'>Transport Authorization</li>
                  <li className='mb-3 text-lg'>Transport License</li>
                </ul>
                </div>
            </div>

            <h2 className='text-2xl pt-6 pb-4 text-gray-600 font-bold'>Criminal Record</h2>
            <div className='grid grid-cols-3 gap-4 mt-5 '>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
                <ul>
                  <li className='mb-3 text-lg text-gray-600 font-bold'>Criminal Record Certificate</li>
                </ul>
                </div>
            </div>

            <h2 className='text-2xl pt-6 pb-4 text-gray-600 font-bold'>Media</h2>
            <div className='grid grid-cols-3 gap-4 mt-5 '>
              <div className='bg-white pl-6 border-l-2 h-auto border-gray-300 '>
                <ul>
                  <li className='mb-3 text-lg'>Accreditation for Foreign Media</li>
                </ul>
                </div>
            </div>
            

        </div>
        <Footer/>
      </div>

      

    </div>
  );
}

export default App;
