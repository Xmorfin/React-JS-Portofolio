import React from "react";

import aku from "../../img/aku.JPG";

const Main = (props) => {
  return (
    <main className="grid grid-cols-2 justify-items-center">
      <section className="mx-auto">
        <img className="" src={aku} alt="aku" height={"728px"} />
      </section>
      <article className="flex justify-center items-center mx-auto px-28 bg-blue-600">
        <div className="bg-indigo-50 mx-auto">
          <div className="mx-20">
            <p className="my-16 mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, sit
              consequatur vero velit numquam officia error, corrupti accusantium
              rerum exercitationem voluptas dolore quae molestiae porro autem
              laboriosam repellendus, culpa reprehenderit.
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              vero, iure architecto consectetur unde ducimus enim. Aliquam ut,
              mollitia necessitatibus distinctio eum aliquid eaque hic, fugiat
              numquam voluptas voluptate laboriosam.
            </p>
            <p className="mb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              doloribus commodi earum officia fugit minima sit consectetur,
              similique expedita eum repellendus fugiat, voluptate magni maiores
              laborum cumque perspiciatis, praesentium adipisci?
            </p>
            <div className="mb-11">
              <button className="bg-black text-white px-16 py-2">
                Check out my CV
              </button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Main;
