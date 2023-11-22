import '@styles/global.css'

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div id="root" className='bg-background'>
                {children}
            </div>
        </body>
    </html>
  )
}

export default RootLayout