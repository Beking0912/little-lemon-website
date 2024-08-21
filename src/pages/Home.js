export default function Home() {
  return (
    <>
      <section className="discount">
        <h1>30% Off This Weekend</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          egestas erat non magna fringilla molestie. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Suspendisse egestas erat non magna
          fringilla molestie. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Suspendisse egestas erat non magna fringilla molestie. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas
          erat non magna fringilla molestie.
        </p>
      </section>

      <section className="content">
        <div className="card">
          <h2>Our New Menu</h2>
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-122861-376464.jpg&fm=jpg"
            alt="Our New Menu"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            egestas erat non magna fringilla molestie. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Suspendisse egestas erat non
            magna fringilla molestie. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse egestas erat non magna fringilla
            molestie.
          </p>
          <a href="/menu">View Our Menu</a>
        </div>
        <div className="card">
          <h2>Book a table</h2>
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-122861-376464.jpg&fm=jpg"
            alt="Book a table"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            egestas erat non magna fringilla molestie. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Suspendisse egestas erat non
            magna fringilla molestie. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse egestas erat non magna fringilla
            molestie.
          </p>
          <a href="/booking">Book Your Table</a>
        </div>
        <div className="card">
          <h2>Opening Hours</h2>
          <img
            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-122861-376464.jpg&fm=jpg"
            alt="Opening Hours"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            egestas erat non magna fringilla molestie. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Suspendisse egestas erat non
            magna fringilla molestie.
          </p>
          <div className="hours">
            <p>Mon - Fri: 7:00am - 11:00pm</p>
            <p>Sat - Sun: 8:00am - 1:00am</p>
          </div>
        </div>
      </section>
    </>
  );
}
