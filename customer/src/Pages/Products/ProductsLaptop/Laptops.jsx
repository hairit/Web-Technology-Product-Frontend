import React from "react";
import axios from "axios";
import URL from '../../../DATA/URL'
import "../../../CSS/ProductsCss/bootstrap.css";
import "../../../CSS/ProductsCss/style.css";
import { useEffect, useState } from "react";
import ListProductLaptop from "./ListProductLaptop";
import Solver from "../../../Classes/Solver";
import AsusLogo1 from "../../../Images/AsusLogo1.png"
import DellLogo1 from "../../../Images/DellLogo1.png"
import HPLogo1 from "../../../Images/HPLogo1.png"
import logo_asus from "../../../Images/logo_asus.png"
import logo_dell from "../../../Images/logo_dell.png"
import logo_hp from "../../../Images/logo_hp.png"
import logo_acer from "../../../Images/logo_acer.png"
import banner_pro_right from "../../../Images/banner_pro_right.png"
import banner_pro_left from "../../../Images/banner_pro_left.png"
import AcerLogo1 from "../../../Images/AcerLogo1.png"
import DareuLogo1 from "../../../Images/DareuLogo1.png"
import Swal from "sweetalert2";

import { NavLink, useHistory } from "react-router-dom";
import PostsLaptop from "./PostsLaptop";
const solver = new Solver();
export default function Laptops({ idUser, match, addProductToCart }) {
  const history = useHistory();
  const [load, setLoad] = useState(0);
  const [firstprice, setFirstprice] = useState();
  const [lastprice, setLastprice] = useState();
  const [display, setDisplay] = useState(true);
  const [active, setActive] = useState(1);
  const [actives, setActives] = useState(false);
  const [pros, setPros] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPage, setItemsPage] = useState(10);
  // const [sort, setSort] = useState();
  // const currentPro = pros.slice(firstPage, lastPage)

  useEffect(() => {
    if (match !== undefined) {
      var API;
      if (match.match.params.attribute === "gia") {
        API = `${URL}/data/product/type=laptop/from=${match.match.params.from}to=${match.match.params.to}`;
      }
      else if (match.match.params.attribute !== "gia") {
        API = `${URL}/data/laptop/${match.match.params.attribute}=${match.match.params.value}`;
      }
    }
    else API = `${URL}/data/Product/type=laptop`;

    axios
      .get(API, null)
      .then((res) => setPros(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', banner);
    // changeAdminMode('off');
  }, [])
  function addProductInCart(id, gia) {
    addProductToCart(idUser, id, gia);
  }

  function reload() {
    if (load === 0) {
      setLoad(1)
    } else {
      setLoad(0)
    }
  }

  function sortLaptop(e) {
    console.log("aa", active)
    if (active % 2 !== 0) {
      var sorts = e.target.value
      axios.get(`${URL}/data/laptop/` + sorts, null)
        .then((res) => setPros(res.data))
        .catch((err) => console.log(err))
    } else {
      axios.get(`${URL}/data/Product/type=laptop`, null)
        .then((res) => setPros(res.data))
        .catch((err) => console.log(err))
    }

  }

  const pages = []
  for (let i = 1; i <= Math.ceil(pros.length / itemsPage); i++) {
    pages.push(i)
  }

  // console.log("mkmk", pages.length)
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
    axios.get(`${URL}/data/product/type=laptop/from=${firstprice}to=${lastprice}`)
      .then((res) => {
        console.log(res.title);
        if (res.status === 200) {
          setPros(res.data)
        } else {
          Swal.fire('Không có sản phẩm nào !')
        }
      })
      .catch((err) => console.error(err))
  }

  const banner = () => {
    if (window.scrollY > 4000) setDisplay(false);
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
              <a href="#">
                <img
                  src="https://lh3.googleusercontent.com/fYdGt5_-5ZV4eLU5y3PavUiyFpIxgqIaS1L_d4paiFiT7a2rS3oOrgoHvbvozhOllxuWz_Xo2xVq8U0yng0-nXqyDwnNBMw1PA=w1920-rw"
                  alt=""
                />
              </a>
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
                    <input type="image" src={logo_asus} className=" btn-sort sort-brand" value="brand=asus" id="brand=asus" onClick={(e) => { setActive(active + 1); sortLaptop(e) }}>
                    </input>
                    <input type="image" src={logo_dell} className="btn-sort sort-brand" value="brand=dell" id="brand=dell" onClick={(e) => { setActive(active + 1); sortLaptop(e) }} >
                    </input>
                    <input type="image" src={logo_hp} className="btn-sort sort-brand" value="brand=hp" id="brand=hp" onClick={(e) => { setActive(active + 1); sortLaptop(e) }}>
                    </input>
                    <input type="image" src={logo_acer} className="btn-sort sort-brand" value="brand=acer" id="brand=acer" onClick={(e) => { setActive(active + 1); sortLaptop(e) }}>
                    </input>
                  </div>
                </div>
                <div className="loc">
                  <div className="title-sort">CPU</div>
                  <div className="btn-right">
                    <button type="button" className="btn-sort" value="cpu=i3" onClick={(e) => sortLaptop(e)}>
                      Corei3
                    </button>
                    <button type="button" className="btn-sort" value="cpu=i5" onClick={(e) => sortLaptop(e)}>
                      Corei5
                    </button>
                    <button type="button" className="btn-sort" value="cpu=i7" onClick={(e) => sortLaptop(e)}>
                      Corei7
                    </button>
                    <button type="button" className="btn-sort" value="cpu=i9" onClick={(e) => sortLaptop(e)}>
                      Corei9
                    </button>
                  </div>
                </div>

                <div className="loc">
                  <div className="title-sort">Ram</div>
                  <div className="btn-right">
                    <button type="button" className="btn-sort" value="ram=4" onClick={(e) => sortLaptop(e)}>
                      4GB
                    </button>
                    <button type="button" className="btn-sort" value="ram=8" onClick={(e) => sortLaptop(e)}>
                      8GB
                    </button>
                    <button type="button" className="btn-sort" value="ram=16" onClick={(e) => sortLaptop(e)}>
                      16GB
                    </button>
                  </div>
                </div>
                <div className="loc">
                  <div className="title-sort">VAG</div>
                  <div className="btn-right">
                    <button type="button" className="btn-sort" value="vga=nvidia" onClick={(e) => sortLaptop(e)}>
                      NVIDIA
                    </button>
                    <button type="button" className="btn-sort" value="vga=amd" onClick={(e) => sortLaptop(e)}>
                      AMD
                    </button>
                  </div>
                </div>

                <div className="loc">
                  <div className="title-sort">Màn hình</div>
                  <div className="btn-right">
                    <button type="button" className="btn-sort" value="manhinh=13.3" onClick={(e) => sortLaptop(e)}>
                      13.3 inch
                    </button>
                    <button type="button" className="btn-sort" value="manhinh=14" onClick={(e) => sortLaptop(e)}>
                      14 inch
                    </button>
                    <button type="button" className="btn-sort" value="manhinh=15" onClick={(e) => sortLaptop(e)}>
                      15 inch
                    </button>
                    <button type="button" className="btn-sort" value="manhinh=15.6" onClick={(e) => sortLaptop(e)}>
                      15.6 inch
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
                <ListProductLaptop pros={page} addProductInCart={addProductInCart} />
              </div>
              <div className="toolbar">
                <div className="pager">
                  <button className="btn-previ-next" onClick={() => handlePrev()}>Sau</button>
                  {renderPageNumber}
                  <button className="btn-previ-next" onClick={() => handleNext()}>Trước</button>
                </div>
              </div>
              <div className="post">
                <PostsLaptop />
              </div>
            </div>
          </div>
          <div className="product-tag tags">
            <h3 className="title">
              Products
              <strong> Tags</strong>
            </h3>
            <ul>
              <li>
                <a href="#">Laptop Asus</a>
              </li>
              <li>
                <a href="#">Laptop Dell</a>
              </li>
              <li>
                <a href="#">Laptop sinh viên</a>
              </li>
              <li>
                <a href="#">Laptop giá rẻ</a>
              </li>
              <li>
                <a href="#">Laptop Gaming</a>
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
