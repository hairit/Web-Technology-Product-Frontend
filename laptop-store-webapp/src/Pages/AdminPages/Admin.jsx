import React from 'react';
import { useEffect, useState } from 'react';
import Customer from './Customer/Customer';
import Order from './Order/Order';
import Product from './Product/Product';
import User from './User/User';
import Bills from './Bills/Bills'
import Sidebar from './Sidebar/Sidebar';
import { Route, BrowserRouter as Router, NavLink, useHistory } from 'react-router-dom';
import "./Admin.css"
import { FaUser, FaHome, FaMoneyBillWave, FaUserFriends } from 'react-icons/fa'
import { RiBillLine } from 'react-icons/ri'
import { GrProductHunt } from 'react-icons/gr'
import { FcStatistics } from 'react-icons/fc'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi';
import { CgLogOut } from 'react-icons/cg';
import call from '../../API/API';
import URL from '../../DATA/URL';
import AddProduct from './Product/AddProduct/AddProduct';
import BillsCustomer from './Bill/BillsCustomer';
import Users from './User/Users';
export default function Admin({ changeAdminMode, match, logout }) {
    const history = useHistory();
    const [user, setUser] = useState(null);
    useEffect(() => {
        changeAdminMode('on');
        console.log(match.match.params.idUser);
        call('GET', `data/user/${match.match.params.idUser}`, null)
            .then(res => {
                        if(res.data.mode === "ADMIN"){
                                setUser(res.data);
                        }else {

                        }})
            .catch(() => setUser(null))
    }, [])
    return (
        <Router>
            <div className="admin">
                <div className="admin-tabs">
                        <div className="admin-page-logo">
                            Admin
                        </div>
                        <NavLink className="admin-tab" to={`/admin/${match.match.params.idUser}`}><FaHome className="admin-tab-icon" />Dashboard</NavLink>
                        <NavLink className="admin-tab" to={`/admin/${match.match.params.idUser}/product/list`}><GrProductHunt className="admin-tab-icon" />Products</NavLink>
                        <NavLink className="admin-tab" to={`/admin/${match.match.params.idUser}/users`}><FaUser className="admin-tab-icon" />Users</NavLink> 
                    
                </div>
                <div className="admin-pages">
                    <div className='admin-pages-header'>
                        <div className="admin-logout" onClick={() => {
                                logout();
                                history.push('/login');
                            }} ><CgLogOut className="admin-logout-icon" />Thoát</div>
                        </div>
                    <div className="admin-pages-main">
                        <Route path="/admin/:iduser/customer" component={() => <Customer idUser={match.match.params.idUser} />}></Route>
                        <Route path="/admin/:idUser/bills/customer/:idCustomer" component={(match) => <BillsCustomer match={match} />}></Route>
                        <Route path="/admin/:idUser/order" component={() => <Order />}></Route>
                        <Route path="/admin/:idUser/bills" component={() => <Bills />}></Route>
                        <Route path="/admin/:idUser/product" component={() => <Product idUser={match.match.params.idUser} />}></Route>
                        <Route path="/admin/:idUser/users" component={() => <Users />}></Route>
                    </div>
                </div>
            </div>
        </Router>
    )
}
