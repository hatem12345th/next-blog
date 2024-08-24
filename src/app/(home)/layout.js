import  Navbar from "@/components/Navbar";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Navbar />
<div className=" h-full pt-12 px-[32px]">
{children}

</div>
        </body>
    </html>
  );
}




/**

  
 */