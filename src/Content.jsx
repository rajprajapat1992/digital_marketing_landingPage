import React from 'react'
import { useNavigate } from 'react-router-dom'
import backgroundImage from './assets/Images/expert.jpg'
import seo from './assets/Images/seo.jpg'
import pcc from './assets/Images/pcc.jpg'
import emailMark from './assets/Images/email-marketing.jpg'
import contentMark from './assets/Images/content-marketing.jpg'
import socialMedia from './assets/Images/socialmedia.jpg'
import revenue from './assets/Images/better revenue.jpg'
import conversion from './assets/Images/Conversion-Rate.jpg'
import lowCoast from './assets/Images/lower-cost.jpg'

const Content = () => {
  const navigate = useNavigate()
  const scrollToServices = () => {
    const element = document.getElementById('contact-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleContact = () => {
    navigate('/contactform')
  };
  return (
    <>
      <div className='h-auto bg-gray-200'>
        <div className='h-auto py-5 md:py-12'
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
          <div className='flex flex-wrap px-10'>
            <div className='w-full md:w-2/5 my-10 md:my-20'>
              <p className='text-3xl lg:text-4xl font-semibold text-white'>Grow Your Business With</p>
              <p className='text-3xl lg:text-4xl font-semibold text-purple-700 py-3 md:py-5'>Digital Marketing Service</p>
              <p className=' text-xl md:text-2xl text-white font-semibold'>Increase Visibility Get New Leads & Drive Results</p>
            </div>
            <div className='w-full md:w-3/5 md:px-20 md:my-10 text-center'>
              <p className=' text-3xl font-semibold text-pink-600'>Want to grow digital ?</p>
              <p className=' text-xl font-semibold text-white py-5'>Welcome to Prilient. Get exciting digital marketing services developed to boost your business and revenue.</p>
              <p className=' text-base text-white leading-7 tracking-wider'>Digital marketing is the wide use of different social media strategies and digital platforms to promote your products and services.
                In simpler words it is your strong entry ticket for bringing your brand and business in the eyes of millions of online users at cost effective pricing.
              </p>
            </div>
          </div>
        </div>
        <div className='px-10 md:px-20 lg:px-28'>
          <p className='text-3xl text-center py-8 font-semibold text-red-600'>Our Key Services</p>
          <div className='w-full flex justify-center'>
            <div className='w-full max-w-screen-lg flex flex-wrap justify-center gap-5 mb-5'>
              <div className='border-2 border-slate-700 rounded-xl bg-white flex-1 min-w-[280px] max-w-[320px]'>
                <div
                  className='h-32 rounded-t-xl'
                  style={{
                    backgroundImage: `url(${seo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div className='h-full flex items-center justify-center'></div>
                </div>
                <div className='px-5'>
                  <p className='my-3 text-center text-xl md:text-2xl font-semibold'>Search Engine Optimization (SEO)</p>
                  <p className='text-sm text-gray-700'>Find your brand in the top search results. Improve your website's visibility with our experts. If you want to dominate search engines, we offer you:</p>
                  <div className='w-full flex justify-center'>
                    <ul className='text-gray-800 mb-2'>
                      <li className='text-sm font-semibold list-disc text-purple-700'> On-Page SEO</li>
                      <li className='text-sm font-semibold list-disc text-purple-700 my-1'> Off-Page SEO</li>
                      <li className='text-sm font-semibold list-disc text-purple-700'> Full SEO (Off & On Both)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='border-2 border-slate-700 rounded-xl bg-white flex-1 min-w-[280px] max-w-[320px]'>
                <div
                  className='h-32 rounded-t-xl'
                  style={{
                    backgroundImage: `url(${socialMedia})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div className='h-full flex items-center justify-center'></div>
                </div>
                <div className='px-5'>
                  <p className='my-3 text-center text-xl md:text-2xl font-semibold'>Social Media Marketing</p>
                  <p className='text-sm text-gray-700'>Tired of being invisible on social media? Let’s change that with our marketing on some of the largest social media platforms like:</p>
                  <div className='w-full flex justify-center'>
                    <ul className='text-gray-800 mb-2'>
                      <li className='text-sm font-semibold list-disc text-purple-700'> Facebook</li>
                      <li className='text-sm font-semibold list-disc text-purple-700 my-1'> Instagram</li>
                      <li className='text-sm font-semibold list-disc text-purple-700'> LinkedIn</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='border-2 border-slate-700 rounded-xl bg-white flex-1 min-w-[280px] max-w-[320px]'>
                <div
                  className='h-32 rounded-t-xl'
                  style={{
                    backgroundImage: `url(${contentMark})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div className='h-full flex items-center justify-center'></div>
                </div>
                <div className='px-5'>
                  <p className='my-3 text-center text-xl md:text-2xl font-semibold'>Content Marketing</p>
                  <p className='text-sm text-gray-700'>Attract your audience with attractive content about your brand. Leave a memorable impression with our content marketing.</p>
                </div>
              </div>

              <div className='border-2 border-slate-700 rounded-xl bg-white flex-1 min-w-[280px] max-w-[320px]'>
                <div
                  className='h-32 rounded-t-xl'
                  style={{
                    backgroundImage: `url(${pcc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div className='h-full flex items-center justify-center'></div>
                </div>
                <div className='px-5'>
                  <p className='my-3 text-center text-xl md:text-2xl font-semibold'>PPC Advertising</p>
                  <p className='text-sm text-gray-700'>Maximize your reach with our expertly designed PPC campaigns and get better results. Avail the benefits of our best-in-class advertising service:</p>
                  <div className='w-full flex justify-center'>
                    <ul className='text-gray-800 mb-2'>
                      <li className='text-sm font-semibold list-disc text-purple-700'> Meta Ads</li>
                      <li className='text-sm font-semibold list-disc text-purple-700 mt-1'> Google Ads</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='border-2 border-slate-700 rounded-xl bg-white flex-1 min-w-[280px] max-w-[320px]'>
                <div
                  className='h-32 rounded-t-xl'
                  style={{
                    backgroundImage: `url(${emailMark})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div className='h-full flex items-center justify-center'></div>
                </div>
                <div className='px-5'>
                  <p className='my-3 text-center text-xl md:text-2xl font-semibold'>Email Marketing</p>
                  <p className='text-sm text-gray-700'>Get Prilient’s personalized email campaigns, develop new leads, and build strong customer relationships.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='block md:flex justify-between bg-gray-400 py-10 px-5 md:px-10 lg:px-24 md:mx-0'>
          <div className=' flex mb-5 md:mb-0'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" sm:mb-0 w-8 h-8 sm:w-10 sm:h-10 fill-rose-500"
              viewBox="0 -960 960 960"
            >
              <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
            </svg>
            <p className='text-rose-500 text-2xl sm:text-3xl md:text-4xl font-semibold'>+91 7976026086</p>
          </div>
          <div className='md:flex'>
            <button className=' text-xl font-semibold border-2 border-rose-300 p-5 rounded-3xl bg-rose-400 hover:bg-rose-500 text-white active:scale-90 transition-all' onClick={scrollToServices}>Let’s Discuss What You Need</button>
          </div>
        </div>

        <div className=' py-5'>
          <div className=' text-center'>
            <p className='text-2xl font-semibold'>How We Do</p>
            <p className='text-2xl font-semibold my-2'> (The PCM Method)</p>
            <p className='text-xl '>Experience Our Unique 3 Step Marketing Process</p>
          </div>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 mx-10 md:mx-20 lg:mx-28 gap-5'>
            <div className=' text-center sm:px-10'>
              <div className=' rounded-2xl py-5 bg-pink-600'>
                <p className=' text-3xl font-semibold text-white my-2'>1. Purpose</p>
                <p className=' text-white '>(Aiming For Best)</p>
              </div>
            </div>
            <div className=' text-center sm:px-10'>
              <div className=' rounded-2xl py-5 bg-pink-600'>
                <p className=' text-3xl font-semibold text-white my-2'>2. Creating</p>
                <p className=' text-white '>(Developing The Best)</p>
              </div>
            </div>
            <div className='text-center sm:px-10'>
              <div className=' rounded-2xl py-5 bg-pink-600'>
                <p className=' text-3xl font-semibold text-white my-2'>3. Managing </p>
                <p className=' text-white '>(Handling The Best)</p>
              </div>
            </div>
          </div>
        </div>

        <div className=' py-5 bg-gray-400'>
          <div className=' text-center'>
            <p className='text-2xl font-semibold'>What you can get</p>
          </div>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 mx-10 md:mx-20 lg:mx-28 gap-10'>
            <div className='text-center  bg-white rounded-3xl'>
              <div className=''>
                <img className=' rounded-t-3xl' alt='conversion' src={conversion} />
              </div>
              <div className=' rounded-2xl py-5 '>
                <p className=' text-2xl md:text-2xl font-semibold text-gray-600 my-2'>Higher Conversion</p>
              </div>
            </div>
            <div className='text-center  bg-white rounded-3xl'>
              <div className=''>
                <img className=' rounded-t-3xl ' alt='conversion' src={revenue} />
              </div>
              <div className=' rounded-2xl py-5 '>
                <p className=' text-2xl md:text-2xl font-semibold text-gray-600 my-2'>Better Revenue</p>
              </div>
            </div>
            <div className='text-center  bg-white rounded-3xl'>
              <div className=''>
                <img className=' rounded-t-3xl' alt='conversion' src={lowCoast} />
              </div>
              <div className=' rounded-2xl py-5 '>
                <p className=' text-2xl md:text-2xl font-semibold text-gray-600 my-2'>Lower Cost</p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Content
