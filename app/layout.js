import './globals.css'

export const metadata = {
  title: 'Flowy',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-neutral-50 dark:bg-neutral-950 dark:text-white'>
        {children}
      </body>
    </html>
  )
}
