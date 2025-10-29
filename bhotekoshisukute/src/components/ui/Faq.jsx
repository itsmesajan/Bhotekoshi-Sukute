import React from 'react'
import useFetchApi from '../../hooks/useFetchApi';


const Faq = () => {

const {
  data: faqDetail,
  loading,
  error,
} = useFetchApi("https://mayurstay.com/bhotekoshi/api/api_faq.php", "faqDetail");

  if (loading) return <></>;
  if (error) return <div>{error}</div>;

  return (
    <div>
            <h3 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h3>
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
                  <p className="mt-4 text-subtle-light dark:text-subtle-dark">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
  )
}

export default Faq
