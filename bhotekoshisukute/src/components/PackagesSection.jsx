import React from 'react'

const PackagesSection = () => {
  const packages=[
    {
      title:"Family Fun Package",
      image:"https://lh3.googleusercontent.com/aida-public/AB6AXuDDPnh2FzR8PQdgJqhjgKB8DiQm1pyOOq5ZrTqBGQTOjf_N43snY_dz6Jzeo_rRxmr5agz8_MvSG5WsXMt-JkYmTX_EYdr1-YCW9nZYsZxoBfjBqr7cH8TP73KQv8-qxU34ajkF8oarhUyMkJlQhTX1XlqDRIdjsCCac_Xs8Pqi8aLs3yzLBRi-shXPK7tZz_bYKftaN46bOynFSs88-gbIo7V654DONUDMjK8McPnZJhls4lmesXxXCTkyvIcN5H3rhl-TN-x2CR_M",
      description:"2 nights stay, all meals, rafting & kids activities included.",
      price:"NPR 12,000"
    },
    {
      title:"Adventure Seeker",
      image:"https://lh3.googleusercontent.com/aida-public/AB6AXuDBGHq3_AKaO-kCLIdfrgGCJnyDztE9SoMFHEigVHI2wNiJmQAM6QTFv52m9CTUQJEsVyIyTyjoE-38JGKrAg5nqjAJQeYdYZfuQ9ya6d97ehN2_ImeBtzge6eBBFD1Ozc1y2bWXMmroVo5T3mAqFBRpAsbYriLxdXxyRYAtOVn42EE1x9JF_A46at0zqyx60wIVmRuB13okekJttkfh5CwbEOGaCR2yKEO1537oRh1Er-ILXQraN3pSFUwSLo4p1SIhwbvt7MdnIVL",
      description:"1 night stay, rafting, canyoning, kayaking & bonfire night.",
      price:"NPR 8,500"
    },
    {
      title:"Corporate Retreat",
      image:"https://lh3.googleusercontent.com/aida-public/AB6AXuC1vU8nYc1X4e0JHjv5YHk2b0X1eXoX1F3y7fJ3gk9KfE3y5FqzjvG7QZ6mJtYcD8gkJ8gkJ8gkJ8gkJ8gkJ8gkJ8gkJ8gkJ8gkJ8gkJ8gkJ8gkJ8gkJ8gkJ8gkJ8gkJ",
      description:"Conference facilities, team-building activities, meals & accommodation.",
      price:"NPR 15,000"
    }
  ]

  return (
     <section className="py-16 sm:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">Packages</h2>
                <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">Choose from our curated packages for families,
                    adventurers, and corporate groups.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((packages,index)=>(

                <div key={index}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-8 flex flex-col items-center">
                      <div className="w-full h-56 bg-cover bg-center"
                        style={{ backgroundImage: `url("${packages.image}")` }}>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 my-2">{packages.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 text-center">{packages.description}</p>
                    <div className="text-2xl font-extrabold text-[var(--primary-color)] mb-2">{packages.price}</div>
                    <button
                        className="bg-[var(--primary-color)] hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-all">Book
                        Now</button>
                </div>
                ))}

            </div>
        </section>
  )
}

export default PackagesSection
