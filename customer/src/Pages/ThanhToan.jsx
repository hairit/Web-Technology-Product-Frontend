import React from "react";
import axios from "axios";
import Solver from "../Classes/Solver";
import { NavLink, useHistory } from "react-router-dom";
import GioHang from "../CSS/GioHangCss.css";
import Order from "../CSS/Order.css";
import edit from "../Images/edit.png";
import plus from "../Images/plus.png";
import { useEffect, useState} from "react";
import CheckoutItem from "./CheckoutItem";

export default function ThanhToan({ updateData,createBill,idUser,order}) {
  const history = useHistory();
  const solver = new Solver();
  const [address, setAddress] = useState(false);
  const [editinfo, setEditinfo] = useState(false);
  const [checkout, setCheckout] = useState([]);
  const [userOrder, setUserorder] = useState([]);
  const [reload, setReload] = useState(0);
  const [userinfo, setUserinfo] = useState({
    id: idUser,
    firstname: "",
    lastname: "",
    email: "",
    sdt: "",
    diachi: ""
  })
  useEffect(() =>{
      axios.get(`https://localhost:44343/data/user/${idUser}`)
         .then((res) => 
          setUserorder(res.data))
         .catch((err) => console.log("Reload User"+err));
}, [reload])
const reLoad = () =>{
  if(reload === 0) setReload(1);
  else setReload(0);
}
  useEffect(() => {
    if (idUser !== null) {
      axios.get(`https://localhost:44343/data/cartdetail/iduser=${idUser}/selected`,null)
          .then((res) => {
            if (res.status === 200) {
              setCheckout(res.data);
            }
          })
          .catch((err) => console.log(err));
    }
  }, [reload]);
  function totalPrice(carts) {
    var tongtien = 0;
    carts.forEach(cart => {
      tongtien = tongtien + cart.tongtien;
    });
    return tongtien;
  }
  function handleChane(e){
    const newdata = {...userinfo}
    newdata[e.target.id] = e.target.value
    setUserinfo(newdata)
}
 function saveInfoUser(e){
    e.preventDefault();
    axios.put("https://localhost:44343/data/user/", {
      id: idUser,
      firstname: userinfo.firstname + '' || userOrder.firstname + '',
      lastname: userinfo.lastname + '' || userOrder.lastname + '',
      email: userinfo.email + '' || userOrder.email + '',
      pass: userOrder.pass + '' ,
      sdt: userinfo.sdt || userOrder.sdt,
      diachi: userinfo.diachi + '' || userOrder.diachi + '',
      mode: userOrder.mode + '',
      nameimage: userOrder.nameimage + '',
      bills: [ ],
      cartDetails: [ ]
    }).then(res => {
      createBill(checkout,totalPrice(checkout), res.data.diachi)
      updateData()
      setEditinfo(false)

      
    }).catch(err => {
      console.log("L???i", err)
    })
    updateData()
    setEditinfo(false)

  }
  function savePhoneAddress(e) {
    e.preventDefault();
    axios.put("https://localhost:44343/data/user/", {
      id: idUser,
      firstname: userOrder.firstname + '',
      lastname: userOrder.lastname + '',
      email: userOrder.email + '',
      pass: userOrder.pass + '',
      sdt: userinfo.sdt ,
      diachi: userinfo.diachi + '' ,
      mode: userOrder.mode + '',
      nameimage: userOrder.nameimage + '',
      bills: [ ],
      cartDetails: [ ]
    }).then(res => {
      // updateData()
      createBill(checkout,totalPrice(checkout), res.data.diachi)
      setEditinfo(false)
      updateData()
      // reLoad()
    }).catch(err => {
      console.log("L???i", err)
    })
  }

  function btnEditInfo(){
    setEditinfo(true)
    setAddress(false);
  }
  function btnSaveEditInfo(){
    setEditinfo(false)
  }
  function showEditInfo(){
    if(editinfo === false){
      return Address();
    }else{
      return renderFormEditInfo()
    }
  }
  function editCart() {
    history.goBack();
  }
function formAddDiaChi(){
  <div className="formAddAdress">
        <div className="formEdit">
          <div className="info-editAdress">
            <form className="form-edit" onSubmit={(e) => savePhoneAddress(e) }>
              <div className="form-center">
                <div className="form-diachi">
                  <div className="title-diachi text-title">?????a ch???</div>
                  <input className="form-control btn-formEdit" type="text" onChange={(e) => handleChane(e)} id="diachi" value={userinfo.diachi} placeholder="Nh???p ?????a ch??? c???a b???n" />
                </div>
              </div>
              <div className="btn-form">
                <button className="btn btn-primary"  onClick={() => btnSaveNewAdress()} >L??u th??ng tin</button>
              </div>
            </form>
          </div>
        </div>
      </div>
}
function formAddPhone(){
  <div className="formAddAdress">
        <div className="formEdit">
          <div className="info-editAdress">
            <form className="form-edit" onSubmit={(e) => savePhoneAddress(e) }>
                <div className="form-email">
                  <div className="form-phone">
                    <div className="text-title">S??? ??i???n tho???i</div>
                    <input type="text" className="form-control btn-formEdit" onChange={(e) => handleChane(e)} id="sdt" value={userinfo.sdt} placeholder="Nh???p s??? ??i???n tho???i"/>
                  </div>
                </div>
              <div className="btn-form">
                <button className="btn btn-primary"  onClick={() => btnSaveNewAdress()} >L??u th??ng tin</button>
              </div>
            </form>
          </div>
        </div>
      </div>
}
  function AddressAndPhone(){
    if(userOrder.diachi && userOrder.sdt !== null){
      return showEditInfo();
    }
    else{
      return  renderFormAddAdressAndPhone();
    }
  }
 
 function btnOrder(){
  if(userOrder.diachi && userOrder.sdt !== null){
      return (
          <button type="button"className="btn-pay btn btn-outline-primary" 
          onClick={()=>{
            setTimeout(()=>{
              history.push("/bill");
              updateData()
            }, 1700)
            order()
            }} >?????t h??ng ngay </button>
      )
  }else{
    return (
          <button type="button"className="btn-pay btn btn-outline-primary" onClick={()=>order()}  disabled >
            ?????t h??ng ngay
          </button>
      )
  }
 }
  function renderFormEditInfo() {
    return (
      <div className="formAddAdress">
        <div className="formEdit">
          <div className="info-editAdress">
             <form className="form-edit" onSubmit={(e) => saveInfoUser(e)  }  >
              <div className="form-center">
                <div className="title-formEdit">S???a th??ng tin ng?????i nh???n h??ng</div>
                <div className="form-editName">
                  <div className="text-title">H???</div>
                  <div className="form-input">
                    <input type="text" className="form-control btn-formEdit" onChange={(e) => handleChane(e)}  id="firstname" value={userinfo.firstname}  placeholder={userOrder.firstname} />
                  </div>
                </div>
                <div className="form-editName">
                  <div className="text-title">T??n</div>
                  <div className="form-input">
                  <input className="form-control btn-formEdit" onChange={(e) => handleChane(e)} value={userinfo.lastname} id="lastname" placeholder={userOrder.lastname} type="text"  />
                  </div>
                </div>
                <div className="form-email">
                  <div className="form-phone">
                    <div className="text-title">S??? ??i???n tho???i</div>
                    <input className="form-control btn-formEdit" onChange={(e) => handleChane(e)} value={userinfo.sdt} id="sdt" placeholder={userOrder.sdt} type="text"  />
                  </div>
                  <div className="form-editemail">
                    <div className="text-title">Email</div>
                    <input className="form-control btn-formEdit" onChange={(e) => handleChane(e)} value={userinfo.email} id="email" placeholder={userOrder.email} type="text"   />
                  </div>
                </div>
                <div className="form-diachi">
                  <div className="title-diachi text-title">?????a ch???</div>
                  <input className="form-control btn-formEdit" onChange={(e) => handleChane(e)} value={userinfo.diachi} id="diachi" placeholder={userOrder.diachi} type="text"  />
                </div>
              </div>
              <div className="btn-form">
                <button  className="btn btn-primary">L??u th??ng tin</button>
                <button className="btn btn-primary" onClick={() => btnSaveEditInfo()} >Tho??t</button>
                </div>
            </form>
          </div>
        </div>
        
      </div>
    );
  }

// ===========================================================================================================

  function btnAddAdress() {
    setAddress(true);
    setEditinfo(false)
  }
  function btnSaveNewAdress() {
    setAddress(false);
  }
  // function showAddAdress() {
  //   if (address === false) {
  //     return FormAddAdress();
  //   } else {
  //     return renderFormAddAdress();
  //   }
  // }
  
  function FormAddAdress() {
    return (
      <div className="info-addAdress" onClick={() => btnAddAdress()}>
        <div className="info-add">
          <img src={plus} />
          <div className="info-txtadd">Th??m ?????a ch???</div>
        </div>
      </div>
    );
  }


  // function renderFormAddAdress() {
  //   return (
  //     <div className="formAddAdress">
  //       <div className="formEdit">
  //         <div className="info-editAdress">
  //           <form className="form-edit">
  //             <div className="form-center">
  //               <div className="title-formEdit">Th??m th??ng tin ng?????i nh???n h??ng</div>
  //               <div className="form-editName">
  //                 <div className="text-title">H???</div>
  //                 <div className="form-input">
  //                   <input className="form-control btn-formEdit" type="text" placeholder="Nh???p h??? c???a b???n"/></div>
  //               </div>
  //               <div className="form-editName">
  //                 <div className="text-title">T??n</div>
  //                 <div className="form-input">
  //                   <input className="form-control btn-formEdit" type="text" placeholder="Nh???p t??n c???a b???n"/></div>
  //               </div>
  //               <div className="form-email">
  //                 <div className="form-phone">
  //                   <div className="text-title">S??? ??i???n tho???i</div>
  //                   <input className="form-control btn-formEdit" placeholder="Nh???p s??? ??i???n tho???i"/>
  //                 </div>
  //                 <div className="form-editemail">
  //                   <div className="text-title">Email</div>
  //                   <input className="form-control btn-formEdit" placeholder="Nh???p email c???a b???n" />
  //                 </div>
  //               </div>
  //               <div className="form-diachi">
  //                 <div className="title-diachi text-title">?????a ch???</div>
  //                 <input className="form-control btn-formEdit" placeholder="Nh???p ?????a ch??? c???a b???n" />
  //               </div>
  //             </div>
  //             <div className="btn-form">
  //               <button className="btn btn-primary" onClick={() => btnSaveNewAdress()} >L??u th??ng tin</button>
  //               <button className="btn btn-primary" onClick={() => btnSaveNewAdress()} >Tho??t</button>
  //               </div>
  //           </form>
  //         </div>
  //       </div>
        
  //     </div>
  //   );
  // }
 
// ===========================================================================================================

  function Address(){
    if(userOrder.diachi && userOrder.sdt !== null){
      return (
        <div className="info-receive">
            <div className="info-nameUser">
              <p>{userOrder.lastname} {" "} {userOrder.firstname}</p>
              <div className="logo-edit">
                <button className="btn-editUser" onClick={() => btnEditInfo()}>
                <img src={edit} />
                </button>
              </div>
            </div>
            <div className="phone-adress">{userOrder.sdt}</div>
            <div className="phone-adress">{userOrder.diachi}
            </div>
        </div>
      )
    }else{
      return (
      <div className="addSdtAddress">Vui l??ng th??m ?????a ch??? v?? s??? ??i???n tho???i</div>
      )
    }
  }

  function renderFormAddAdressAndPhone() {
    return (
      <div className="formAddAdress">
        <div className="formEdit">
          <div className="info-editAdress">
            <form className="form-edit" onSubmit={(e) => savePhoneAddress(e) }>
              <div className="form-center">
                <div className="form-email">
                  <div className="form-phone">
                    <div className="text-title">S??? ??i???n tho???i</div>
                    <input type="text" className="form-control btn-formEdit" onChange={(e) => handleChane(e)} id="sdt" value={userinfo.sdt} placeholder="Nh???p s??? ??i???n tho???i"/>
                  </div>
                </div>
                <div className="form-diachi">
                  <div className="title-diachi text-title">?????a ch???</div>
                  <input className="form-control btn-formEdit" type="text" onChange={(e) => handleChane(e)} id="diachi" value={userinfo.diachi} placeholder="Nh???p ?????a ch??? c???a b???n" />
                </div>
              </div>
              <div className="btn-form">
                <button className="btn btn-primary"  onClick={() => btnSaveNewAdress()} >L??u th??ng tin</button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    );
  }
 

  return (
    <div className="wrapper order">
      <div className="container-order">
        <div className="center-order">
          <div className="info-orderUser">
            <div className="info-orderRight">
              <div className="info-ordertitle">
                <p>Nh???n h??ng t???i nh??</p>
              </div>
              <div className="info-orderDataUser">
                <div className="info-user">
                  <div className="info-nhanhang">Th??ng tin nh???n h??ng</div>
                  {/* {showEditInfo()} */}
                  {/* {Address()} */}
                 {AddressAndPhone()}
                </div>
              </div>
              <div className="info-delivery">
                <div className="info-PTgiaohang">
                  <div className="info-giaohang"> Ph????ng th???c giao h??ng</div>
                  <div className="form-check">
                    <input
                      className="form-check-input check-giaohang"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    />
                    <p className="">Giao h??ng ti??u chu???n</p>
                  </div>
                </div>
                <div className="info-note">
                  <div className="note-tile">Ghi ch?? cho ????n h??ng</div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nh???p th??ng tin ghi ch?? cho ????n h??ng"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="info-PTthanhtoan">
                  <div className="info-hinhthucTT">
                    Ch???n h??nh th???c thanh to??n
                  </div>
                  <div className="form-checkTT">
                    <input
                      className="check-TT"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                      checked
                    />
                    <p className="TT-defaul" for="defaultCheck1">
                      Thanh to??n khi nh???n h??ng
                    </p>
                  </div>
                  <div className="form-checkTT">
                    <input
                      className="check-TT"
                      type="checkbox"
                      value=""
                      id="defaultCheck2"
                      disabled
                    />
                    <p className="TT-card" for="defaultCheck2">
                      Thanh to??n qua th??? ng??n h??ng
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-orderNote"></div>
          </div>

          <div className="info-orderPro">
            <div className="info-pro">
              <div className="info-tile">
                <p>Th??ng tin ????n h??ng</p>
                <div className="info-editcart" onClick={() => editCart()}>
                  Ch???nh s???a
                </div>
              </div>
              {checkout.map((pro, index) => <CheckoutItem pro={pro} index={index} solver={solver}/>)}
            </div>
            <div className="pay-order">
            <div className="pay-info pay-orders">
              <div className="thanhtoan">
                <strong>Thanh to??n</strong>
              </div>
              <div className="tamtinh-thanhtien ">
                <p className="txt-ship">Ph?? v???n chuy???n</p>
                <p className=" ships">{solver.formatCurrency("vi-VN","currency","VND",0)}</p>

              </div>
              <div className="tamtinh-thanhtien">
                <p className="txt-left">Th??nh ti???n</p>
                <p className="thanhtien">{solver.formatCurrency("vi-VN","currency","VND",totalPrice(checkout))}</p>
              </div>
              <div className="VAT">( Bao g???m VAT )</div>
              {btnOrder()}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
