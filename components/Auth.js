import { LockClosedIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

export default function Auth() {

  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  console.log(`ユーザー名:${username}`)
  console.log(`パスワード:${password}`)
  console.log(`ログイン状態:${isLogin}`)

  const login = async () => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/auth/jwt/create/`,
        {
          method: "POST",
          body: JSON.stringify({username: username, password: password}),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.status === 400){
          throw "ログインに失敗しました";
        } else if (res.ok){
          return res.json();
        }
      }).then((data) => {
        const options = {path: "/"};
        cookie.set("access_token", data.access, options);
        router.push("/main")
      })
    } catch (err) {
      alert(err);
    }
  }

  const authUser = async (e) => {
    e.preventDefault();
    if (isLogin) {
      login();
    } else {
      try {
        await fetch(
          `${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/register/`,
          {
            method: 'POST',
            body: JSON.stringify({ username: username, password: password }),
            headers: {
              "Content-Type": "application/json"
            },
          }
        ).then((res) => {
          if (res.status === 400) {
            throw "登録に失敗しました。"
          }
        });
        login();
      } catch (err) {
        alert(err)
      }
    }
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 w-2/4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-700'>
              {isLogin ? "Login" : "Sign Up"}
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={authUser} method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <input
                  id="usename"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="ユーザー名"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="パスワード"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className='flex items-center justify-center'>
              <div className='text-sm'>
                  <span onClick={() => setIsLogin(!isLogin)} className='cursor-pointer font-medium text-gray-500 hover:text-indigo-500'>
                  {isLogin ? '新規登録はこちら' : 'ログインはこちら'}
                  </span>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
              {isLogin ? 'ログイン' : '新規登録'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}