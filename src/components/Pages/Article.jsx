import React from "react";

const Article = (props) => {
  return (
    <article className="container mx-auto">
      <div className="mx-60 mt-20 mb-28">
        <div className="text-xl mb-16 font-semibold">
          <h2>WHAT I DO</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-36">
          <div>
            <h3 className="text-lg mb-6 font-medium">User Research</h3>
            <ul className="pl-5">
              <li>
                Apply mixed methods of qualitative research (usability test,
                field study, remote studies, interviews, surveys, tree test,
                card sort)
              </li>
              <li>
                Experience in conducting user research for different
                customer-facing products for the web app, mobile apps (iOS &
                Android) and internal tool
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mb-6 font-medium">UX Strategy</h3>
            <ul className="pl-5">
              <li>
                Initiated and established a UX Research process in the
                organization
              </li>
              <li>
                Integrate User-Centric Design framework inside the product
                development process: demonstrate how research could be
                implemented in different stages of the product development cycle
                and setting up a process on how it could be done in a
                collaborative way.
              </li>
              <li>
                Designed and facilitated User-Centric Design in Product
                Development training programs to Product Managers and
                stakeholders
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mb-6 font-medium">UX Design</h3>
            <ul className="pl-5">
              <li>
                Ability to transform complex ideas into low and high fidelity
                prototypes.
              </li>
              <li>
                Proficiency in using prototyping tools: Sketch, Figma, Adobe XD,
                Marvel App.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
