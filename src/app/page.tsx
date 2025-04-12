
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start  w-fit over">
        <div className="w-full ">
          <div className="border border-black/[.08] dark:border-white/[.145] rounded-lg p-10 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/40 dark:to-purple-950/40 flex flex-col items-center justify-center">
            <h2 className="text-4xl font-semibold mb-3">This is Mixpanel Example Repo</h2>
         
       

            <div className="flex gap-4 items-center flex-col sm:flex-row pt-10" >
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 5L20 12L13 19M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Go to Blog
              </a>
              <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
                href="https://developer.mixpanel.com/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Mixpanel docs
              </a>
              <a
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
                href="https://developer.mixpanel.com/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </main>
    
    </div>
  );
}