import React from "react";
import axios from "axios";

import "../../../CSS/ProductsCss/bootstrap.css";
import "../../../CSS/ProductsCss/style.css";
import AsusLogo1 from "../../../Images/AsusLogo1.png"
import DellLogo1 from "../../../Images/DellLogo1.png"
import HPLogo1 from "../../../Images/HPLogo1.png"
import AcerLogo1 from "../../../Images/AcerLogo1.png"
import DareuLogo1 from "../../../Images/DareuLogo1.png"
import banner_pro_right from "../../../Images/banner_pro_right.png"
import banner_pro_left from "../../../Images/banner_pro_left.png"
import { useEffect, useState } from "react";
import ListProductKeyboard from "./ListProductKeyboard";
import PostsKeyboard from "./PostsKeyboard";
export default function Keyboard({ idUser, addProductToCart }) {
  const [pros, setPros] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPage, setItemsPage] = useState(10);
  const [firstprice, setFirstprice] = useState();
  const [lastprice, setLastprice] = useState();
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    axios
      .get("https://localhost:44343/data/Product/type=keyboard", null)
      .then((res) => setPros(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', banner);
    // changeAdminMode('off');
  }, [])
  function addProductInCart(id, gia) {
    addProductToCart(idUser, id, gia)
  }

  function sortKeyboard(e) {
    var sorts = e.target.value
    axios.get("https://localhost:44343/data/keyboard/" + sorts, null)
      .then((res) => setPros(res.data))
      .catch((err) => console.log(err))
  }

  const pages = []
  for (let i = 1; i <= Math.ceil(pros.length / itemsPage); i++) {
    pages.push(i)
  }

  console.log("mkmk", pages.length)
  const lastPage = currentPage * itemsPage
  const firstPage = lastPage - itemsPage
  const page = pros.slice(firstPage, lastPage)

  function handleClick(e) {
    setCurrentPage(Number(e.target.id))
  }

  const renderPageNumber = pages.map(number => {
    return (
      <button key={number} id={number} onClick={(e) => handleClick(e)} className={currentPage === number ? 'active' : null}>
        {number}
      </button>
    )
  })
  function handleNext() {
    if (currentPage + 1 <= pages.length) {
      setCurrentPage(currentPage + 1)
    }
  }
  function handlePrev() {
    if (currentPage - 1 >= 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  function handleprice(e) {
    const value = e.target.id
    if (value === "firstPrice") {
      setFirstprice(e.target.value)
    } else {
      setLastprice(e.target.value)
    }
  }
  function showProWithPrice() {
    axios.get(`https://localhost:44343/data/product/type=keyboard/from=${firstprice}to=${lastprice}`)
      .then((res) => setPros(res.data))
      .catch((err) => console.error(err))
  }
  const banner = () => {
    if (window.scrollY > 5500) setDisplay(false);
    else setDisplay(true);
  }
  return (
    <div className="wrapper">
      <div className="banner-pros">
        <img className={display === true ? "bn-left" : "bn-hidden-left"} src={banner_pro_left} />
        <img className={display === true ? "bn-right" : "bn-hidden-right"} src={banner_pro_right} />
      </div>
      <div className="container_fullwidth">
        <div className="col-md-12 leftp">
          <div className="banner">
            <div className="bannerslide" id="bannerslide">
              <ul className="slides">
                <li>
                  <a href="#">
                    <img
                      src="https://lh3.googleusercontent.com/fYdGt5_-5ZV4eLU5y3PavUiyFpIxgqIaS1L_d4paiFiT7a2rS3oOrgoHvbvozhOllxuWz_Xo2xVq8U0yng0-nXqyDwnNBMw1PA=w1920-rw"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="top-pro">
            <div className="col-md-12 sof">
              <div className="col-12 boloc section-heading">
                <div className="line-bl "></div>
                <p>Bộ lọc</p>
              </div>
              <div className="col-12 ">
                <div className="loc">
                  <div className="title-sort">Thương hiệu</div>
                  <div className="btn-right">
                    <button type="button" className="btn-sort" value="brand=akko" onClick={(e) => sortKeyboard(e)}>
                      AKKO
                    </button>
                    <button type="button" className="btn-sort" value="brand=dareu" onClick={(e) => sortKeyboard(e)}>
                      DareU
                    </button>
                    <button type="button" className="btn-sort" value="brand=royal-kludge" onClick={(e) => sortKeyboard(e)}>
                      Royal-Kludge
                    </button>
                  </div>
                </div>
                <div className="loc">
                  <div className="title-sort">Led</div>
                  <div className="btn-right">
                    <button type="button" className="btn-sort" value="led=rgb" onClick={(e) => sortKeyboard(e)}>
                      RGB
                    </button>
                    <button type="button" className="btn-sort" value="led=don" onClick={(e) => sortKeyboard(e)}>
                      Đơn
                    </button>
                  </div>
                </div>

                <div className="loc">
                  <div className="title-sort">Switch</div>
                  <div className="btn-right">
                    <button type="button" className="btn-sort" value="brandswitch=dareu" onClick={(e) => sortKeyboard(e)}>
                      Dareu
                    </button>
                    <button type="button" className="btn-sort" value="brandswitch=cherry" onClick={(e) => sortKeyboard(e)}>
                      Cherry
                    </button>
                    <button type="button" className="btn-sort" value="brandswitch=rk" onClick={(e) => sortKeyboard(e)}>
                      RK
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 sorfprice">
              <div className="price-filter leftbar">
                <h3 className="title">Giá</h3>
                <div className="pricing">
                  <input type="text" onChange={(e) => handleprice(e)} id="firstPrice" value={firstprice} placeholder="Giá thấp nhất" />
                  <span className="separate">-</span>
                  <input type="text" onChange={(e) => handleprice(e)} id="lastPrice" value={lastprice} placeholder="Giá cao nhất" />
                  <button type="button" className="" onClick={() => showProWithPrice()}>Tìm</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-pros">
            <div className="col-md-9 prolst">
              <div className="products-grid lstlaptop">
                <ListProductKeyboard addProductInCart={addProductInCart} pros={page} />
              </div>
              <div className="toolbar">
                <div className="pager">
                  <button className="btn-previ-next" onClick={() => handlePrev()}>Sau</button>
                  {renderPageNumber}
                  <button className="btn-previ-next" onClick={() => handleNext()}>Trước</button>
                </div>
              </div>
              <div className="post">
                <PostsKeyboard />
              </div>
            </div>
          </div>
          <div className="product-tag tags">
            <h3 className="title">
              Products
              <strong>Tags</strong>
            </h3>
            <ul>
              <li>
                <a href="#">Bàn phím cơ</a>
              </li>
              <li>
                <a href="#">Bàn phím</a>
              </li>
              <li>
                <a href="#">Bàn phím cơ Dareu</a>
              </li>
              <li>
                <a href="#">Bàn phím cơ giá rẻ</a>
              </li>
              <li>
                <a href="#">Bàn phím Gaming</a>
              </li>
            </ul>
          </div>
          <div className="our-brand">
            <h3 className="title">
              <strong>Nhãn hiệu tài trợ</strong>
            </h3>
            <ul id="braldLogo">
              <li>
                <ul className="brand_item">
                  <li>
                    <a href="#">
                      <div className="brand-logo">
                        <img
                          src={AsusLogo1}
                          alt=""
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo">
                        <img
                          src={DellLogo1}
                          alt=""
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo">
                        <img
                          src={HPLogo1}
                          alt=""
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo">
                        <img
                          src={AcerLogo1}
                          alt=""
                        />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="brand-logo">
                        <img
                          src={DareuLogo1}
                          alt=""
                        />
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
