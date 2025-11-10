import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../ui/NotFound";
import useFetchApi from "../../hooks/useFetchApi";

const ArticlePage = () => {
  const { slug } = useParams();

  const {
    data: articlePageContents,
    loading,
    error,
  } = useFetchApi(
    "https://mayurstay.com/bhotekoshi/api/api_article.php",
    "articlePageContents"
  );

  if (loading) {
    return <></>;
  }

  if (error) {
    return (
      <>
        <NotFound />
      </>
    );
  }

  const article = articlePageContents[slug];

  if (!article) {
    return (
      <>
        <NotFound />
      </>
    );
  }

  const { html, description, title, meta_description, meta_keywords } = article;

  return (
    <>
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--secondary-color)]">
              {title}
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 ">
              {description}
            </p>
          </div>
          <div
            className="container mt-8 space-y-8 text-pretty text-justify md:mt-16"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>
    </>
  );
};

export default ArticlePage;
