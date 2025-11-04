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
      <section>
        <div className="mx-auto mb-8 mt-16 flex max-w-2xl flex-col items-center justify-center gap-4 text-center md:mb-20 md:mt-0">
          <h1 className="text-3xl capitalize leading-snug sm:text-3xl md:text-4xl lg:text-7xl lg:leading-snug">
            {title}
          </h1>
          <p className="text-text-navy text-sm text-justify md:text-lg md:text-center">
            {description}
          </p>
        </div>
        <div
          className="container mt-8 space-y-8 text-pretty text-justify md:mt-16"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </section>
    </>
  );
};

export default ArticlePage;
