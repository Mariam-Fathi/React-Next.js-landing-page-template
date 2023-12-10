'use client'

import { useState } from "react"

export default function Pricing() {
  const [annually, setAnnually] = useState<boolean>(false)

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Choose Your Plan</div>
            <h1 className="h2 mb-4">Our Pricing & Plans</h1>
            <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
            
            {/* toggle switch */}
            <div className="toggle lg:mb-3 mt-6">
              <label className="name">Annually</label>
              <input
                type="checkbox"
                className="checkbox"
                id="checkbox"
                checked={annually}
                onChange={() => setAnnually(!annually)}
              />

              <label htmlFor="checkbox" className="label">
                <div className="ball"></div>
              </label>

              <label className="name">Monthly</label>
            </div>
          </div>

          {/* Items */}
          <div className="flex flex-wrap flex-col justify-center gap-8 text-center max-w-6xl mx-auto lg:gap-0 lg:flex-row lg:flex-nowrap lg:w-full">
            
            {/* 1st item */}
            <article className="p-8 rounded bg-purple-200 shadow lg:w-full">
              <h2 className="text-slate-700 text-xl mb-5">Basic</h2>
              {annually && (
                <h3 className="flex items-center justify-center text-slate-700 text-5xl">
                  <span className="text-3xl mr-3">$</span> 19.99
                </h3>
              )}
              {!annually && (
                <h3 className="flex items-center justify-center text-slate-700 text-5xl">
                  <span className="text-3xl mr-3">$</span> 199.99
                </h3>
              )}
              <ul className="flex justify-center flex-col my-8">
                <li className="border-t border-slate-300 py-3 text-slate-600">
                  500 GB Storage
                </li>
                <li className="border-t border-slate-300 py-3 text-slate-600">
                  2 Users Allowed
                </li>
                <li className="border-y border-slate-300 py-3 text-slate-600">
                  Send up to 3 GB
                </li>
              </ul>
              <button className="bg-purple-600 btn text-white py-3 w-full rounded-lg shadow uppercase cursor-pointer border-2 hover:border-2">
                Learn More
              </button>
            </article>

            {/* 2nd item */}
            <article className="bg-purple-600 p-8 rounded shadow lg:w-full lg:scale-110">
              <h2 className="text-xl mb-5 text-white">Professional</h2>
              {annually && (
                <h3 className="flex items-center justify-center text-white text-5xl">
                  <span className="text-3xl mr-3">$</span> 24.99
                </h3>
              )}
              {!annually && (
                <h3 className="flex items-center justify-center text-white text-5xl">
                  <span className="text-3xl mr-3">$</span> 249.99
                </h3>
              )}
              <ul className="flex justify-center flex-col my-8">
                <li className="text-white border-t border-white py-3">
                  1 TB Storage
                </li>
                <li className="text-white border-t border-white py-3">
                  5 Users Allowed
                </li>
                <li className="text-white border-y border-white py-3">
                  Send up to 10 GB
                </li>
              </ul>
              <button className="bg-purple-200 text-slate-800 py-2 w-full rounded-lg shadow border-2 border-white uppercase cursor-pointer hover:bg-transparent hover:text-white transition-all duration-200">
                Learn More
              </button>
            </article>

            {/* 3rd item */}
            <article className="p-8 rounded bg-purple-200 shadow lg:w-full">
              <h2 className="text-slate-700 text-xl mb-5">Master</h2>
              {annually && (
                <h3 className="flex items-center justify-center text-slate-700 text-5xl">
                  <span className="text-3xl mr-3">$</span> 39.99
                </h3>
              )}
              {!annually && (
                <h3 className="flex items-center justify-center text-slate-700 text-5xl">
                  <span className="text-3xl mr-3">$</span> 399.99
                </h3>
              )}
              <ul className="flex justify-center flex-col my-8">
                <li className="border-t border-slate-300 py-3 text-slate-600">
                  2 TB Storage
                </li>
                <li className="border-t border-slate-300 py-3 text-slate-600">
                  10 Users Allowed
                </li>
                <li className="border-y border-slate-300 py-3 text-slate-600">
                  Send up to 20 GB
                </li>
              </ul>
              <button className="bg-purple-600 btn text-white py-3 w-full rounded-lg shadow uppercase cursor-pointer border-2 hover:border-2">
                Learn More
              </button>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}
