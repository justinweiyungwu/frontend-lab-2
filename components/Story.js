import "../components/Story.css";

function Story() {
  function NewsCard(props) {
    function handleClick(e) {
      if (e.target !== e.currentTarget) {
        e.currentTarget.remove();
      }
    }
    return (
      <main onClick={handleClick} className="stories-container">
        <div className="main-story-container">
          <div className="delete-container">
            <span onClick={handleClick} className="delete-button">
              <p>x</p>
            </span>
          </div>
          <div className="image-container">
            <img className="sml-image" src={props.image} alt="bruh"></img>
          </div>
          <h2>
            <a href={props.link}>{props.title}</a>
          </h2>
          <div className="creator-container">
            <span className="creator-text">
              <p>By: {props.creator}</p>
            </span>
            <p>{props.description}</p>
          </div>
        </div>
      </main>
    );
  }
  return (
    <>
      <div className="main">
        <NewsCard
          title="Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming"
          creator="Steve Hanley"
          link="https://cleantechnica.com/2022/02/14/tesla-shanghai-capacity-will-exceed-1-million-cars-in-2022-byd-blade-batteries-coming/"
          image="https://picsum.photos/id/870/200/300?grayscale&blur=2"
          description="Tesla's Giga Shanghai is expanding and will soon be able to manufacture more than 1 million cars a year."
        />
        <NewsCard
          title="Elon Musk asegura que la 'verdadera' deuda de EU es de al menos 60 billones de dólares"
          creator="Milenio Digital"
          link="https://www.milenio.com/negocios/elon-musk-deuda-eu-60-billones-dolares"
          image="https://picsum.photos/id/870/200/300?grayscale&blur=2"
          description="El director ejecutivo de Tesla y SpaceX, Elon Musk, estimó que la deuda de Estados Unidos en tres veces mayor a su economía. ?La verdadera deuda nacional, incluidos los derechos no financiados, es de al menos 60 billones de dólares, aproximadamente tres veces el tamaño de toda la economía de los Estados Unidos."
        />
        <NewsCard
          title="Tesla recall for heater and defroster systems issued by Transport Canada"
          creator="Maria Merano"
          link="https://www.teslarati.com/tesla-recall-heater-defroster-system-transport-canada/"
          image="https://picsum.photos/id/870/200/300?grayscale&blur=2"
          description="Transport Canada issued a recall for the Tesla Model 3, Model Y, and Model S on February 3, 2022, the agency told Teslarati recently. The recall was issued after the agency discovered an issue with the heat system in certain Tesla vehicles.  Transport Canada reported that a little over 2,084 Tesla vehicles were affected by the recall."
        />
        <NewsCard
          title="China representó la mitad de las ventas globales de coches eléctricos en 2021"
          creator="Newsroom Infobae"
          link="https://www.infobae.com/america/agencias/2022/02/14/china-represento-la-mitad-de-las-ventas-globales-de-coches-electricos-en-2021-2/"
          image="https://picsum.photos/id/870/200/300?grayscale&blur=2"
          description="Shanghái (China), 14 feb La mitad de las ventas de vehículos eléctricos registradas en 2021 a nivel mundial se efectuaron en China, según datos publicados hoy por la consultora Canalys. En total, según las estimaciones de Canalys, se vendieron 6,5 millones de este tipo de vehículos -incluyendo los totalmente eléctricos y los híbridos enchufables- en todo el mundo durante el año pasado, un 109 % más que en 2020, alcanzando ya un 9 % de las ventas totales de vehículos a nivel global."
        />
      </div>
    </>
  );
}

export default Story;
