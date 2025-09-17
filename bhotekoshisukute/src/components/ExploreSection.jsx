import React from 'react'

const ExploreSection = () => {
  const exploreItems =[
    {
      Image:"https://lh3.googleusercontent.com/aida-public/AB6AXuAmj-ipcm6jHKXyAqPm4qsWAG5hSq42_VDes3q4Ki0yT1nc-b26nNb_TVJzIENTJGDYkLh4ILVl9CWdZbEzLzKGSF1Iko5zv29rKKaL5NnPEEPN1lU5IB_Z5EkV12PI1C3wXoMV4NpONVKRh1_ezvquKexp5yRG8QXLJWsL6Nj3qVVll7bqHP8SED4GnejBYYg_npViuul0dA-Z55vkxKy0sFtEm-Vbm536h2zf0Q7Zq2SHNOlyVZOP6GFumM0neXvqDcMbt0bULFCv",
      title:"VIrtual Tour",
      description:"Take a virtual tour of our resort and explore our facilities."
    },
    {
      Image:"https://lh3.googleusercontent.com/aida-public/AB6AXuDDPnh2FzR8PQdgJqhjgKB8DiQm1pyOOq5ZrTqBGQTOjf_N43snY_dz6Jzeo_rRxmr5agz8_MvSG5WsXMt-JkYmTX_EYdr1-YCW9nZYsZxoBfjBqr7cH8TP73KQv8-qxU34ajkF8oarhUyMkJlQhTX1XlqDRIdjsCCac_Xs8Pqi8aLs3yzLBRi-shXPK7tZz_bYKftaN46bOynFSs88-gbIo7V654DONUDMjK8McPnZJhls4lmesXxXCTkyvIcN5H3rhl-TN-x2CR_M",
      title:"Family Activities",
      description:"Discover fun activities for the whole family."
    },
    {
      Image:"https://lh3.googleusercontent.com/aida-public/AB6AXuDBGHq3_AKaO-kCLIdfrgGCJnyDztE9SoMFHEigVHI2wNiJmQAM6QTFv52m9CTUQJEsVyIyTyjoE-38JGKrAg5nqjAJQeYdYZfuQ9ya6d97ehN2_ImeBtzge6eBBFD1Ozc1y2bWXMmroVo5T3mAqFBRpAsbYriLxdXxyRYAtOVn42EE1x9JF_A46at0zqyx60wIVmRuB13okekJttkfh5CwbEOGaCR2yKEO1537oRh1Er-ILXQraN3pSFUwSLo4p1SIhwbvt7MdnIVL",
      title:"Corporate Events",
      description:"Plan your next corporate event with us." 
    }
  ]

  return (
    <section className="py-16 sm:py-24 bg-slate-100/70 rounded-2xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">Explore Sukute Resort</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
              {exploreItems.map((item,index)=>(
                <div key={index}
                    className="group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <div className="w-full h-56 bg-cover bg-center"
                        style={{ backgroundImage: `url("${item.Image}")` }}>
                    </div>
                    <div className="p-6">
                        <h3
                            className="text-lg font-bold text-slate-800 group-hover:text-[var(--primary-color)] transition-colors">
                            {item.title}
                            </h3>
                        <p className="mt-2 text-slate-600 text-sm">{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </section>

  )
}

export default ExploreSection
