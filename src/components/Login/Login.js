import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-gray-900"
            style={{
              backgroundSize: '100%',
              background:
                'linear-gradient(135deg, #b3cae5 12%, #dbdde4 46%, #e4e3e4 70%, #f7ddbb 94%, #efcab2 100%)',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className="container mx-auto px-10 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-10">
                    <div className="text-gray-700 text-xl text-center font-semibold">
                      Log-in to administrator account
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                    <form onSubmit={onSubmit}>
                      <div className="relative w-full mb-3">
                        {/* <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          UserName
                        </label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          value={name}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:shadow-outline w-full"
                          placeholder="Enter your name"
                          autoComplete="off"
                          style={{ transition: "all .15s ease" }}
                          onChange={(e) => setName(e.target.value)}
                          noValidate
                        /> */}
                        {/*
                        {errors.username.length > 0 && (
                          <span className="text-red-700 uppercase font-bold text-xxs">
                            {errors.username}
                          </span>
                        )}
                        */}
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          value={password}
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:shadow-outline w-full"
                          placeholder="Enter your password"
                          style={{ transition: 'all .15s ease' }}
                          onKeyDown={() => {}}
                          autoComplete="off"
                          onChange={e => setPassword(e.target.value)}
                          noValidate
                        />
                        {/*
                        {errors.password.length > 0 && (
                          <span className="text-red-700 uppercase font-bold text-xxs">
                            {errors.password}
                          </span>
                        )}
                        */}
                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          // type="button"
                          // style={{ transition: "all .15s ease" }}
                          // onClick={() => {}}
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
