import React from 'react'
import { useEffect, useState } from "react";
import LogoFT from "../../Images/LogoFT.png";
import win11 from "../../Images/win11.png";
import halo from "../../Images/halo.png";
import halo1 from "../../Images/halo1.png";
import msi from "../../Images/msi.png";
import awards from "../../Images/awards.png";
import pacman from "../../Images/pacman.png";
import dowappadroi from "../../Images/dowappadroi.png";
import sacvachoi from "../../Images/sacvachoi.png";
import tincongnghe from "../../Images/tincongnghe.png";
import chipm11 from "../../Images/chipm11.png";
import gpixel6 from "../../Images/gpixel6.png";
import airpoid from "../../Images/airpoid.png";
import macpro from "../../Images/macpro.png";
import gocgame from "../../Images/gocgame.png";
import thuthuat from "../../Images/thuthuat.png";
import shell from "../../Images/shell.png";
import checkpin from "../../Images/checkpin.png";
import offws from "../../Images/offws.png";
import cauhinhlap from "../../Images/cauhinhlap.png";
import fblite from "../../Images/fblite.png";
import Minecraft from "../../Images/Minecraft.png";
import computer from "../../Images/computer.png";
import theyear from "../../Images/theyear.png";
import thegame from "../../Images/thegame.png";
import ggmeet from "../../Images/ggmeet.png";
import asuszen from "../../Images/asuszen.png";
import Tintucs from "../../CSS/Tintucs.css";
import { NavLink } from "react-router-dom";

import { FaFacebookSquare,FaGooglePlusSquare,FaLinkedin,FaFacebookMessenger } from "react-icons/fa";
export default function Tintuc({changeAdminMode}) {
    useEffect(() =>{
        changeAdminMode('on');
    },[])
    return (
        <div className="wrapper full-page">
            <div className="container ">
                <div className="header">
                    <div className="all-header">
                        <div className="top-header">
                            <FaGooglePlusSquare className="icon-top-header" />
                            <FaLinkedin className="icon-top-header" />
                            <FaFacebookMessenger className="icon-top-header" />
                            <FaFacebookSquare className="icon-top-header"/>
                        </div>
                        <div className="center-header">
                            <div className="logo-store">
                                <img src={LogoFT} />
                            </div>
                            <div className="banner-header">
                                <img src="https://phongvu.vn/cong-nghe/wp-content/uploads/2021/11/728x90-2.jpg"/>
                            </div>
                        </div>
                        <nav className="menu" role='navigation'>
                            <ol className="ol-nav">
                                <li className="menu-item"><NavLink activeClassName='active-tintuc' exact to="">Tin t???c</NavLink></li>
                                <li className="menu-item"><NavLink to="">Windows 11</NavLink></li>
                                <li className="menu-item" aria-haspopup="true">
                                <NavLink to="">Review</NavLink>
                                <ol className="sub-menu" aria-label="submenu">
                                    <li className="menu-item"><a href="#0">Laptop Gaming</a></li>
                                    <li className="menu-item"><a href="#0">B??n ph??m c??</a></li>
                                    <li className="menu-item"><a href="#0">Bild PC</a></li>
                                </ol>
                                </li>
                                <li className="menu-item" aria-haspopup="true">
                                <NavLink to="">Th??? thu???t - H?????ng d???n</NavLink>
                                <ol className="sub-menu" aria-label="submenu">
                                    <li className="menu-item"><a href="#0">Ph???n m???m</a></li>
                                    <li className="menu-item"><a href="#0">M???o c??ng ngh???</a></li>
                                    <li className="menu-item"><a href="#0">Gi???i ph??p doanh nghi???p</a></li>
                                </ol>
                                </li>
                                <li className="menu-item"><NavLink to="">Laptop Sinh vi??n 2021</NavLink></li>
                                <li className="menu-item"><NavLink to="">Contact</NavLink></li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div id="body" className="home">
                    <div className="home-top">
                        <div className="home-right">
                            <NavLink to="congnghe" className="congnghe" >
                                <img src={win11} />
                            </NavLink>
                            <div className="title-tintuc">
                                <p>6 C??ch t???t windows 11 "vi di???u" nhanh g???n l??? c?? th??? b???n ch??a bi???t</p>
                            </div>
                        </div>
                        <div className="home-left">
                            <div className="home-left-top">
                                <NavLink to="game" className="congnghe game" >
                                    <img src={halo} />
                                </NavLink>
                                <div className="title-game">
                                    <p>Si??u ph???m Halo Infinite ra m???t: c???u h??nh v?? c??ch t???i ch??i ngay k???o ti???c!</p>
                                </div>
                            </div>
                            <div className="home-left-bottom">
                                <div className="home-left-bottom-right">
                                <NavLink to="game" className="congnghe left-bottom" >
                                    <img src={dowappadroi} />
                                </NavLink>
                                <div className="title-left-bottom">
                                    <p>C??ch t???i v?? c??i ?????t ???ng d???ng Android tr??n Windows 11</p>
                                </div>
                                </div>
                                <div className="home-left-bottom-left left-bottom">
                                    <NavLink to="game" className="congnghe" >
                                        <img src={sacvachoi} />
                                    </NavLink>
                                    <div className="title-right-bottom">
                                        <p>V???a s???c v???a d??ng laptop c?? sao kh??ng? C??ch s???c laptop ????ng kh??ng b??? chai pin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-center-tintuc ">
                        <div className="home-center-left ">
                            <div className="center-post-left">
                                <div className="title-post">
                                    <p>G??C C??NG NGH???</p>
                                </div>
                                <div className="center-left">
                                    <div className="left-left">
                                        <img className="hover-p" src={tincongnghe} />
                                        <div className="left-txt">
                                            <p className="title-congnghe hover-p">MacOS 12 Monterey c?? g?? m???i: 10 t??nh n??ng hay...</p>
                                            <p className="dateUp">19 Th??ng M?????i M???t, 2021</p>
                                            <p className="article-summary">Apple ???? ph??t h??nh MacOS 12 Monterey ???????c v??i tu???n r???i, anh em ???? bi???t h???t t??nh n??ng th?? v???...</p>
                                        </div>
                                    </div>
                                    <div className="left-right">
                                        <div className="left-contend">
                                            <img className="hover-p" src={chipm11} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">Chip M1 Pro v?? M1 Max c?? th???t s??? m???nh kh???ng...</p>
                                                <span className="ttcn">Tin t???c c??ng ngh???</span>
                                                <p className="dateUp">5 Th??ng M?????i M???t, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img className="hover-p" src={gpixel6} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">Google Pixel 6 v?? Pixel 6 Pro ?????i ?????u iPhone 13,...</p>
                                                <span className="ttcn">Tin t???c c??ng ngh???</span>
                                                <p className="dateUp">22 Th??ng M?????i M???t, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img className="hover-p" src={macpro} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">Macbook Pro 2021 g??y tranh c??i v???i tai th???, gi?? t???...</p>
                                                <span className="ttcn">Tin t???c c??ng ngh???</span>
                                                <p className="dateUp">20 Th??ng M?????i M???t, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img  className="hover-p"src={airpoid} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">????nh gi?? AirPods 3: thi???t k??? ho??n to??n m???i, gi??...</p>
                                                <span className="ttcn">Tin t???c c??ng ngh???</span>
                                                <p className="dateUp">20 Th??ng M?????i, 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="center-post-left second">
                                <div className="title-post">
                                    <p>G??C GAMING</p>
                                </div>
                                <div className="center-left">
                                    <div className="left-left">
                                        <img className="hover-p" src={gocgame} />
                                        <div className="left-txt">
                                            <p className="title-congnghe hover-p">Naraka: Bladepoint - game PUBG "ki???m hi???p" c???c hot kh??ng th???...</p>
                                            <p className="dateUp">15 Th??ng M?????i Hai, 2021</p>
                                            <p className="article-summary">L?? m???t t???a game m???i ra m???t kh??ng l??u, Naraka: Bladepoint ???? c??n qu??t th??? gi???i game v?? h???i t??? r???t nhi???u...</p>
                                        </div>
                                    </div>
                                    <div className="left-right">
                                        <div className="left-contend">
                                            <img className="hover-p" src={halo1} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">Si??u ph???m Halo Infinite ra m???t: c???u h??nh v?? c??ch t???i...</p>
                                                <span className="ttcn">Game</span>
                                                <p className="dateUp">15 Th??ng M?????i Hai, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img className="hover-p" src={msi} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">MSI ??? b???n ?????ng h??nh ?????nh nh???t ????? chi???n c??ng game...</p>
                                                <span className="ttcn">Game</span>
                                                <p className="dateUp">15 Th??ng M?????i Hai, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img className="hover-p" src={awards} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">Pac-Man Community s???p ????? b??? tr??n Facebook Gaming d??? ki???n s??? si??u...</p>
                                                <span className="ttcn">Game</span>
                                                <p className="dateUp">8 Th??ng M?????i Hai, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img className="hover-p" src={pacman} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">????nh gi?? AirPods 3: thi???t k??? ho??n to??n m???i, gi??...</p>
                                                <span className="ttcn">Game</span>
                                                <p className="dateUp">8 Th??ng Hai, 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="center-post-left second">
                                <div className="title-post">
                                    <p>G??C TH??? THU???T</p>
                                </div>
                                <div className="center-left">
                                    <div className="left-left">
                                        <img className="hover-p"src={thuthuat} />
                                        <div className="left-txt">
                                            <p className="title-congnghe hover-p">4 c??ch x??a, g??? c??c ???ng d???ng tr??n Macbook ????n gi???n</p>
                                            <p className="dateUp">3 Th??ng M?????i Hai, 2021</p>
                                            <p className="article-summary">B???n t???ng c??i ?????t m???t ???ng d???ng tr??n Macbook v?? mu???n xo?? n?? ??i khi kh??ng s??? d???ng n???a? Ho???c c???n g???...</p>
                                        </div>
                                    </div>
                                    <div className="left-right">
                                        <div className="left-contend">
                                            <img className="hover-p" src={cauhinhlap} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">5 c??ch ki???m tra c???u h??nh laptop ?????y ?????, ????n gi???n...</p>
                                                <span className="ttcn">Th??? thu???t</span>
                                                <p className="dateUp">24 Th??ng M?????i M???t, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img className="hover-p" src={offws} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">5 c??ch t???t Windows Defender (Windows Security) tr??n Windows 10</p>
                                                <span className="ttcn">Th??? thu???t</span>
                                                <p className="dateUp">20 Th??ng M?????i M???t, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img className="hover-p" src={checkpin} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">2 c??ch ki???m tra ????? chai pin laptop c???c nhanh, c???c...</p>
                                                <span className="ttcn">Th??? thu???t</span>
                                                <p className="dateUp">19 Th??ng M?????i M???t, 2021</p>
                                            </div>
                                        </div>
                                        <div className="left-contend">
                                            <img className="hover-p" src={shell} />
                                            <div className="right-txt">
                                                <p className="title-right-tintuc hover-p">6 c??ch s???a l???i ???Shell Infrastructure Host Has Stopped Working??? tr??n...</p>
                                                <span className="ttcn">Th??? thu???t</span>
                                                <p className="dateUp">19 Th??ng M?????i, 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home-center-right">
                            <div className="center-right">
                                <img src="https://phongvu.vn/cong-nghe/wp-content/uploads/2021/11/Cong-nghe-KM-T12.jpg" />
                                <img src="https://phongvu.vn/cong-nghe/wp-content/uploads/2021/11/Cong-nghe-Apple.png" />
                                <img src="https://phongvu.vn/cong-nghe/wp-content/uploads/2020/07/Covid.jpg" />
                            </div>
                            <div className="title-post-right">
                                <span>B??I VI???T QUAN T??M</span>
                            </div>
                            <div className="center-left">
                                <div className="right-top">
                                    <img className="hover-p" src={fblite} />
                                    <div className="right-txt-care">
                                        <p className="title-congnghe hover-p">Facebook lite c?? th???c s??? t???i ??u nh?? b???n t?????ng?</p>
                                        <p className="dateUp">25 Th??ng B???y, 2018</p>
                                        <p className="article-summary">C?? bao gi??? c??c b???n t??? h???i, m???c ????ch ra ?????i c???a Facebook lite l?? g??, trong khi ???? Facebook g???c ???? l??...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="review-product">
                        <div className="title-post-rv">
                            <p>Review s???n ph???m</p>
                        </div>
                        <div className="review">
                            <div className="video-review">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/a2Lu9FwTc58" title="YouTube video player" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/W3MfHBEJ0JI" title="YouTube video player" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/6eZTTElk31k" title="YouTube video player" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/zyVawxHagnI" title="YouTube video player" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/1_lFYLprTFw" title="YouTube video player" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/KVg6HxKhlbg" title="YouTube video player" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                    <div className="old-post">
                        <div className="title-post-rv">
                            <p>B??i vi???t c?? h??n</p>
                        </div>
                        <div className="posts-tt">
                            <div className="post-old">
                                <div className="posts-info">
                                    <img className="hover-p" src={Minecraft} />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">Minecraft 1.18 ???? ra m???t v?? ????y l?? nh???ng update m???i si??u hay ho...</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Game</span>
                                            <p className="dateUp">17 Th??ng M?????i Hai, 2021</p>
                                        </p>
                                        <p className="article-summary">Minecraft 1.18, hay The Caves and Cliffs ph???n 2 ???? ch??nh th???c ra m???t v?? ???????c ?????t k??? v???ng s??? ti???p t???c "ph?? ?????o" v?? tr??? h??nh kh???i v??...</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src={computer} />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">10+ c??ch s???a loa laptop b??? m???t ti???ng ????n gi???n t???i nh?? cho Win...</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">M???o hay c??ng ngh???</span>
                                            <p className="dateUp">17 Th??ng M?????i Hai, 2021</p>
                                        </p>
                                        <p className="article-summary">Laptop b??? m???t ti???ng l?? m???t trong nh???ng l???i nh??? nh??ng l???i th?????ng x???y ra v?? g??y kh?? ch???u r???t nhi???u khi ??ang l??m vi???c ho???c gi???i tr??...</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src={sacvachoi} />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">V???a s???c v???a d??ng laptop c?? sao kh??ng? C??ch s???c laptop ????ng kh??ng b???...</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Th??? thu???t - h?????ng d???n</span>
                                            <p className="dateUp">16 Th??ng M?????i Hai, 2021</p>
                                        </p>
                                        <p className="article-summary">V???i nhu c???u s??? d???ng laptop ????? l??m vi???c v?? gi???i tr?? ng??y c??ng t??ng cao v?? li??n t???c nh?? hi???n nay th?? dung l?????ng pin m???c ?????nh tr??n...</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src={theyear} />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">Hot: It Takes Two ??o???t gi???i Game hay nh???t c???a n??m trong The Game...</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Game</span>
                                            <p className="dateUp">10 Th??ng M?????i Hai, 2021</p>
                                        </p>
                                        <p className="article-summary">Khi mua ho???c build m???t chi???c m??y t??nh m???i, RAM l?? v???n ????? v?? c??ng quan tr???ng c???n l??u t??m. ?????c bi???t v???i nh???ng ai c?? nhu c???u ch??i...</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src={thegame} />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">The Game Awards 2021 c?? g?? hot? ??i???m danh nh???ng t???a game ???????c ?????...</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Game</span>
                                            <p className="dateUp">8 Th??ng M?????i Hai, 2021</p>
                                        </p>
                                        <p className="article-summary">M???t l???n n???a, c??c nh?? ph??t tri???n, c??ng ty v?? ng?????i ch??i t??? kh???p n??i tr??n th??? gi???i s??? tham gia v??o l??? k??? ni???m l???n nh???t trong ng??nh...</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src={ggmeet} />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">C??ch t???i Google Meet v??? m??y t??nh v?? ??i???n tho???i Android, iOS ????n gi???n...</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Th??? thu???t c??ng ngh???</span>
                                            <p className="dateUp">7 Th??ng M?????i Hai, 2021</p>
                                        </p>
                                        <p className="article-summary">Google meet th?? kh??ng c??n xa l??? g?? ?????i v???i ng?????i d??ng internet khi th???i gian work from home ng??y c??ng tr??? n??n quen thu???c.</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src={asuszen} />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">T???u laptop ASUS ZenBook OLED UX325 v?? UX363, nh???n ngay chu???t Newmen bao m?????t!</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Tin t???c</span>
                                            <p className="dateUp">24 Th??ng M?????i M???t, 2021</p>
                                        </p>
                                        <p className="article-summary">?????u c??ng ra m???t trong n??m nay, 2 chi???c ZenBook m???ng g???n nh?? Asus  UX325 & UX363 ?????u g??y ???n t?????ng c???c m???nh v?? gi?? r??? m?? c?? m??n...</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src="https://phongvu.vn/cong-nghe/wp-content/uploads/2021/12/makey-makey-la-gi-218x150.jpg" />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">Makey Makey l?? g??? B???t ng??? khi c?? th??? ch??i game b???ng chu???i!</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Tin t???c c??ng ngh???</span>
                                            <p className="dateUp">6 Th??ng M?????i Hai, 2021</p>
                                        </p>
                                        <p className="article-summary">Makey Makey l?? m???t thi???t b??? ??i???n t??? m???i s??? khi???n m???i ng?????i ph???i tr???m tr??? khi l???n ?????u nghe v??? n??. Ch??? c???n m???t n??t b???m, b???n ????...</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src="https://phongvu.vn/cong-nghe/wp-content/uploads/2021/12/Snapdragon-8-Gen-1-3-218x150.png" />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">Si??u chip Snapdragon 8 Gen 1 ra m???t v???i th??ng s??? g??y ng??? ng??ng</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Tin t???c c??ng ngh???</span>
                                            <p className="dateUp">3 Th??ng M?????i Hai, 2021</p>
                                        </p>
                                        <p className="article-summary">Snapdragon 8 Gen 1 - con m???i nh???t, ?????nh nh???t hi???n t???i c???a nh?? s???n xu???t chip h??ng ?????u th??? gi???i Qualcomm v???a ch??nh th???c ???????c tr??nh l??ng ng??y...</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src="https://phongvu.vn/cong-nghe/wp-content/uploads/2021/11/maxresdefault-1-16216810338771745108916-218x150.jpg" />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">C???u h??nh ch??i GTA 5 v?? link t???i free ?????y ????? nh???t</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Game</span>
                                            <p className="dateUp">30 Th??ng M?????i M???t, 2021</p>
                                        </p>
                                        <p className="article-summary">Grand Theft Auto hay GTA lu??n l?? c??i t??n ???????c n???m trong b???ng x???p h???ng top game c?? l?????t t???i nhi???u nh???t th???i ?????i. V?? g???n ????y l?? GTA...</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src="https://phongvu.vn/cong-nghe/wp-content/uploads/2021/11/screen-0-218x150.jpg" />
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">C??ch t???i v?? m???o ch??i Play Together tr??n PC chi ti???t nh???t</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Tin t???c</span>
                                            <p className="dateUp">30 Th??ng M?????i M???t, 2021</p>
                                        </p>
                                        <p className="article-summary">Play Together l?? game hot hi???n nay ??ang ???????c gi???i tr??? y??u th??ch. Play Together n???u b???n d???ch n?? sang Ti???ng Anh ???? l?? ????? ch??i c??ng nhau. Nh??ng...</p>
                                    </div>
                                </div>
                                <div className="posts-info">
                                    <img className="hover-p" src="https://phongvu.vn/cong-nghe/wp-content/uploads/2021/11/cach-scan-tai-lieu-bang-dien-thoai-218x150.jpg"/>
                                    <div className="post-old-txt">
                                        <p className="title-post-old hover-p">C??ch scan t??i li???u b???ng ??i???n tho???i iPhone, Android ????n gi???n</p>
                                        <p className="txt-center">
                                            <span  className="ttcn">Tin t???c</span>
                                            <p className="dateUp">17 Th??ng M?????i M???t, 2021</p>
                                        </p>
                                        <p className="article-summary">V???i s??? ph??t tri???n c??ng ngh??? ng??y nay, ch??ng ta kh??ng nh???t thi???t ph???i ????nh t??i li???u th??? c??ng b???ng tay n???a m?? lu??n c?? th??? scan (qu??t) tr???c...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-tintuc">
                <div id="footer">
                    <div className="ft-top">
                        <div className="ft-top-expost">
                            <div className="title-expost">
                                <p>B??I VI???T TI??U BI???U</p>
                            </div>
                            <div className="item-post-ft">
                                <img className="hover-p" src="https://gstatic.gvn360.com/2021/12/71CWZzoFlL._SL1500_-100x70.jpg" />
                                <div className="right-txt">
                                    <p className="title-right-tintuc hover-p">Nhi???u l???n b??? tai nghe ???v???t ?????u???, m??nh mua h???n tai...</p>
                                    <p className="dateUp">17/12/2021</p>
                                </div>
                            </div>
                            <div className="item-post-ft ct">
                                <img className="hover-p" src="https://gstatic.gvn360.com/2021/12/ihbijnk-100x70.jpg"/>
                                <div className="right-txt">
                                    <p className="title-right-tintuc hover-p">V?? ai c??ng c???n ??i???n tho???i ???n t?????ng, m???i t???i b???...</p>
                                    <p className="dateUp">17/12/2021</p>
                                </div>
                            </div>
                            <div className="item-post-ft">
                                <img className="hover-p" src="https://gstatic.gvn360.com/2021/12/243132-100x70.jpg" />
                                <div className="right-txt">
                                    <p className="title-right-tintuc hover-p">H?????ng d???n cho ph??p ???ng d???ng quy???n ???l??n ti???ng??? khi ??ang...</p>
                                    <p className="dateUp">17/12/2021</p>
                                </div>
                            </div>
                        </div>
                        <div className="ft-top-plpost">
                            <div className="title-expost">
                                <p>B??I VI???T PH??? BI???N</p>
                            </div>
                            <div className="item-post-ft">
                                <img className="hover-p" src="https://gstatic.gvn360.com/2021/11/dadawd-100x70.jpg" />
                                <div className="right-txt">
                                    <p className="title-right-tintuc hover-p">Top 10 lo??i kh???ng long nguy hi???m nh???t th???i ti???n s???,...</p>
                                    <p className="dateUp">16/08/2020</p>
                                </div>
                            </div>
                            <div className="item-post-ft ct">
                                <img className="hover-p" src="https://gstatic.gvn360.com/2019/07/87161149_1005006939882359_347389113952894976_n-100x70.jpg" />
                                <div className="right-txt">
                                    <p className="title-right-tintuc hover-p">TFTactics ??? ???ng d???ng ???nh???c b??i??? c???c ?????nh cho game th???...</p>
                                    <p className="dateUp">23/07/2019</p>
                                </div>
                            </div>
                            <div className="item-post-ft">
                                <img className="hover-p" src="https://gvn360.com/wp-content/uploads/2019/12/%C3%A1df-100x70.jpg" />
                                <div className="right-txt">
                                    <p className="title-right-tintuc hover-p">??i???u g?? ???? gi??p c??c lo??i c?? v??ng bi???n s??u ch???u...</p>
                                    <p className="dateUp">14/12/2019</p>
                                </div>
                            </div>
                        </div>
                        <div className="ft-top-xemnhieu">
                            <div className="title-expost">
                                <p>M???C XEM NHI???U NH???T</p>
                            </div>
                            <div className="txt-xemnhieu">
                                <p>C??ng ngh???</p>
                                <p>Tin c??ng ngh???</p>
                                <p>Tin game</p>
                                <p>TOP GAME</p>
                                <p>Th??? thu???t</p>
                                <p>H??nh n???n</p>
                                <p>Review</p>
                                <p>Anime</p>
                            </div>
                        </div>
                    </div>
                    <div className="ft-bottom">
                        <div className="logo-ft"><img src={LogoFT} /></div>
                        <div className="about-us">
                            <div className="ft-top-xemnhieu">
                                <div className="title-expost">
                                    <p>V??? CH??NG T??I</p>
                                </div>
                                <div className="ab-us-txt">
                                    <p>LAPPEE - NEWS</p>
                                    <p>Li??n h??? ch??ng t??i: <span>info@.com</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="follow">
                            <div className="ft-top-xemnhieu">
                                <div className="title-expost">
                                    <p>THEO D??I CH??NG T??I</p>
                                </div>
                                <div className="item-follow">
                                    <FaFacebookSquare className="item-fl" />
                                    <FaFacebookMessenger className="item-fl" />
                                    <FaGooglePlusSquare className="item-fl" />
                                    <FaLinkedin className="item-fl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
