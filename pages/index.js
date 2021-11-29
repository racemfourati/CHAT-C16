import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'




export default function Home() {

  const [name, setName] = useState('')
  const router = useRouter()


  useEffect(() => {
    var user = window.localStorage.getItem('user')
    if (user !== null) {
      router.push('/chats')
    }
  }, [])

  var login = () => {
    if (name != '') {
      window.localStorage.setItem('user', name)
      router.push('/chats')
    }
  }

  return (
    <div >
      <Head>
        <title>C-16</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>




      <div class="flex flex-col h-screen bg-gray-100">
        <div class="grid place-items-center mx-2 my-20 sm:my-auto">
          <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg">

            <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
              Welcome!
            </h2>

            <form class="mt-10" method="POST">
              <label for="name" class="block text-xs font-semibold text-gray-600 uppercase">Pseudo name</label>
              <input id="name" type="text" name="name" placeholder="enter your name..." autocomplete="name"
                onChange={e => { setName(e.target.value) }}
                class="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required />
              <button
                onClick={() => { login() }}
                class="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}





