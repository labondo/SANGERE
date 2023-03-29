import React, { useState} from "react";
import Services from "../CardDetails/ServicesDetails";
import Products from "../CardDetails/ProductsDetails";
import { NavLink } from "react-router-dom";
import lady from "../assets/lady.png";
import fruit from "../assets/fruit.png";

// import React from 'react';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';



export default function Home() {

  // const [data, setData] = useState([]);
  // const [sortType, setSortType] = useState('');

  // useEffect(() => {
  //   const sortArray = type => {
  //     const types = {
  //       verified: 'verified',
  //       ratings: 'ratings',
  //       popularity: 'popularity',
  //       closet: 'closet',
  //       mostviewed: 'mostviewed',
  //     };
  //     const sortProperty = types[type];
  //     const sorted = [...Products].sort((a, b) => b[sortProperty] - a[sortProperty]);
  //     setData(sorted);
  //   };

  //   sortArray(sortType);
  // }, [sortType]);




  const [items, setItems] = useState(Products, Services);
  // const filterItem = (categItem) => {
  //   const updateItems = Menu.filter((curElem) => {
  //     return curElem.category === categItem;
  //   });

  //   setItems(updateItems);
  //   setActive(true);
  // };

  const [ToggleState, setToggleState] = useState("products");

  const toggleTab = (index) => {
    setToggleState(index);
    const updateProducts = Products.filter((curElem) => {
      return curElem.category === index;
    });
    const updateServices = Services.filter((curElem) => {
      return curElem.category === index;
    });

    setItems(updateProducts);
    setItems(updateServices);
  };

  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  return (
    <div className="home">
      <div className="landing-page ">
        <div className="landing-page-image">
          <img src={lady} alt="Logo" />
        </div>

        <div className="landing-page-text">
          <h1>Find & Buy Anything in Yola</h1>
          <h1>Register & Be Found</h1>
          <div className="search">
            <iconify-icon icon="eva:search-outline" className="serch-icon"></iconify-icon>
            <input type="text" className="form-control" placeholder="I am looking for... Start typing" />
            <button className="btn ">Search</button>
          </div>
        </div>
      </div>

      <div className="container-fluid ads-carousel">

        <div className="ads-title">
          <h2>Sunshine Basket is
            now on Sengere!</h2>
        </div>


        <div className="ads-text col">
          <p>Fresh exoctic fruits &
            Farm Produce</p>
          <button className="btn">View Store</button>
        </div>

        <div className="ads-image">
          <img src={fruit} alt="fruit" />
        </div>
      </div>

      <div className="product-and-services-section">
        <div className="categories">
          <ul>
            <p>Products</p>
            <li>
              Clothes
            </li>
            <li>
              Food
            </li>
            <li>
              Computer & Accessories
            </li>
            <li>
              Cosmetics
            </li>
            <li>
              Hair & Hair Products
            </li>
            <li>
              Baby products
            </li>
            <li>
              Electronics
            </li>
            <li>
              Furniture
            </li>
            <li>
              Cars & Equipment
            </li>
          </ul>

          <ul>
            <p>Services</p>
            <li>
              Real Estate
            </li>
            <li>
              Make -Up
            </li>
            <li>
              Restaurants
            </li>
            <li>
              Eatries
            </li>
            <li>
              Fashion Design
            </li>
            <li>
              Car Repairs
            </li>
            <li>
              IT Services
            </li>
            <li>
              Events & Catering
            </li>
            <li>
              Laundry
            </li>
            <li>
              Business Consultancy
            </li>
            <li>
              Saloon
            </li>
            <li>
              Construction
            </li>
          </ul>
        </div>

        <div className="product-and-service-display">

          <div className="container-fluid">
            <ul className="tab-list">
              <li
                className={`tabs ${getActiveClass("products", "active-tabs")}`}
                onClick={() => toggleTab("products")}
              >
                Product
              </li>
              <li
                className={`tabs ${getActiveClass("services", "active-tabs")}`}
                onClick={() => toggleTab("services")}
              >
                Services
              </li>
            </ul>
            <div className="content-container">

              <div className={`content ${getActiveClass("products", "active-content")}`}>
                <div>
                <div className="sorting">
                  <iconify-icon icon="bx:sort" style={{ color: "#FC5A00", fontSize: "28px" }}></iconify-icon>
                  {/* <select onChange={(e) => setSortType(e.target.value)}> */}
                  <select>
                  <option value="">Sort By</option>
                    <option value="verified">Verified</option>
                    <option value="ratings">Ratings</option>
                    <option value="popularity">Popularity</option>
                    <option value="closet">Closest to you</option>
                    <option value="mostviewed">Most viewed</option>
                  </select>






                  {/* <button className="btn sort">
                    <iconify-icon icon="bx:sort" style={{ color: "#FC5A00", fontSize: "28px" }}></iconify-icon>

                    Sort By</button> */}

                </div>
               
                </div>

                {/* <select onChange={(e) => setSortType(e.target.value)}>
                  <option value="albums">Albums</option>
                  <option value="members">Members</option>
                  <option value="formed">Formed in</option>
                </select> */}

                <div className="row">
                  {items.map((elem) => {
                    const { name, image, price, availabilty, store } = elem;

                    return (
                      <div className="col-2" >
                        <div className="product-card mb-3">
                          <div className="card-image">
                            <img className="" src={image} alt="" style={{ maxWidth: "100%" }} />
                          </div>
                          <div className="card-body">
                            <div className="card-text">
                              <p className="title">{name} <span className="price">{price}</span></p>
                              <p className="availability">{availabilty}</p>
                              <p className="store">{store}</p>
                            </div>

                            <NavLink to="cart" className="card-cart">
                              <iconify-icon icon="clarity:shopping-cart-line" style={{ margin: "0 10px 0 0" }}></iconify-icon>
                              Add to Cart
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
              <div className={`content ${getActiveClass("services", "active-content")}`}>
                <div className="row">
                  {items.map((elem) => {
                    const { image, name, address } = elem;

                    return (
                      <div className="col-3" >
                        <div className="service-card mb-3">
                          <div className="card-image">
                            <img className="" src={image} alt="" style={{ maxWidth: "100%" }} />
                          </div>
                          <div className="col card-body">

                            <div className="card-text">
                              <p className="title">{name}</p>
                              <p className="store-name">{address}</p>
                            </div>


                            <div className="align-items-start"><button type="button" className="btn  p-1">
                              Contact
                            </button></div>


                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-service-list mx-5">

        <div className="content-container">
          <div className={`content ${getActiveClass("products", "active-content")}`}>

            <div className="row">
              {items.map((elem) => {
                const { name, image, price, availabilty, store } = elem;

                return (
                  <div className="col-md-2" >
                    <div className="product-card mb-3">
                      <div className="card-image">
                        <img className="" src={image} alt="" style={{ maxWidth: "100%" }} />
                      </div>
                      <div className="card-body">
                        <div className="card-text">
                          <p className="title">{name} <span className="price">{price}</span></p>
                          <p className="availability">{availabilty}</p>
                          <p className="store">{store}</p>
                        </div>

                        <NavLink to="cart" className="card-cart">
                          <iconify-icon icon="clarity:shopping-cart-line" style={{ margin: "0 10px 0 0" }}></iconify-icon>
                          Add to Cart
                        </NavLink>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
          <div className={`content ${getActiveClass("services", "active-content")}`}>
            <div className="row">
              {items.map((elem) => {
                const { image, name, address } = elem;

                return (
                  <div className="col-2" >
                    <div className="service-card mb-3">
                      <div className="card-image">
                        <img className="" src={image} alt="" style={{ maxWidth: "100%" }} />
                      </div>
                      <div className="col card-body">

                        <div className="card-text">
                          <p className="title">{name}</p>
                          <p className="store-name">{address}</p>
                        </div>


                        <div className="align-items-start"><button type="button" className="btn  p-1">
                          Contact
                        </button></div>


                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}