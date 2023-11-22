import '@styles/global.css'

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body className='bg-background p-0 m-0 box-border'>
            <div id="root" className='min-h-screen  w-full flex flex-col justify-start items-center' >
                {children}
            </div>
        </body>
    </html>
  )
}

export default RootLayout