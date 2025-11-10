import React from 'react'
import useFetchApi from '../../hooks/useFetchApi';


const Faq = () => {

const {
  data: faqDetail,
  loading,
  error,
} = useFetchApi("https://www.bhotekoshibeachresort.com/api/api_faq.php", "faqDetail");

  if (loading) return <></>;
  if (error) return <div>{error}</div>;

  return (
    <div className='pt-16 lg:pt-16 sm:pt-32'>
      <h2 class="text-4xl text-center mb-12 lg:text-5xl font-display font-bold text-[var(--secondary-color)] dark:text-light tracking-tight">FAQ's</h2>
            <div className="space-y-4">
              {faqDetail.map((faq, idx) => (
                <details
                  key={idx}
                  className="group rounded-lg border border-border-light dark:border-border-dark bg-transparent p-4 transition-all duration-300 ease-in-out hover:bg-white/50 dark:hover:bg-white/10"
                >
                  <summary className="flex cursor-pointer items-center justify-between">
                    <h4 className="font-medium">{faq.question}</h4>
                    <span className="material-symbols-outlined plus-icon text-primary">
                      add
                    </span>
                  </summary>
                  <p className="mt-4 text-subtle-light dark:text-subtle-dark"
                   dangerouslySetInnerHTML={{ __html: faq.answer}}>
                  </p>
                </details>
              ))}
            </div>
          </div>
  )
}

export default Faq
