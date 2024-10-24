// import React, { useEffect, useState } from 'react';
// import Header from '../../components/Header/Header';
// import Breadcrumbs from '../../components/Breadcrumbs/Crumbs';
// import styles from '../../pages/Checkout/Checkout.module.scss';
// import Button from '../../components/UI/Button/Button';
// import Footer from '../../components/Footer/Footer';
// import { useAuth } from '../../AuthContext';
// import axios from '../../axios/index';

// export default function Checkout() {
//     const { cartItems, setCartItems, totalPrice, setTotalPrice } = useAuth();
//     const [formData, setFormData] = useState({
//         name: '',
//         countryCode: '+996',
//         phone: '',
//         address: '',
//         email: '',
//         home: '',
//         items: []
//     });

//     useEffect(() => {
//         const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//         setCartItems(storedCartItems);
//     }, [setCartItems]);

//     useEffect(() => {
//         const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//         setTotalPrice(total);

//         setFormData(prevFormData => ({
//             ...prevFormData,
//             items: cartItems.map(item => ({
//                 products: item.id,
//                 quantity: item.quantity,
//                 name: item.name,
//                 count: item.quantity,
//                 price: item.price
//             }))
//         }));
//     }, [cartItems, setTotalPrice]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const fullPhoneNumber = formData.countryCode + formData.phone;
//         const orderData = {
//             ...formData,
//             phone: fullPhoneNumber,
//             items: cartItems.map(item => ({
//                 product: item.id,
//                 quantity: item.quantity,
//             })),
//             totalPrice
//         };

//         axios.post('orders/', orderData)
//             .then(res => {
//                 console.log('успешно!', res.data);
//                 setCartItems([]);
//                 localStorage.removeItem('cartItems');

//                 setFormData({
//                     name: '',
//                     countryCode: '+996',
//                     phone: '',
//                     address: '',
//                     email: '',
//                     home: '',
//                     items: []
//                 });
//                 setTotalPrice(0);
//             })
//             .catch(err => {
//                 console.log('ошибка при отправлении данных', err);
//             });
//     };



//     return (
//         <>
//             <div>
//                 <Header />
//                 <Breadcrumbs />
//                 <section className={styles.address}>
//                     <div className="container">
//                         <div className={styles.address_item}>
//                             <div className={styles.address_item_form}>
//                                 <div className={styles.address_item_form_title}>
//                                     <h2>Billing Address</h2>
//                                 </div>

//                                 <div className={styles.address_item_form_forms}>
//                                     <form onSubmit={handleSubmit}>
//                                         <div className={styles.address_item_form_forms_one}>
//                                             <label htmlFor="name">
//                                                 <p>Name</p>
//                                                 <input
//                                                     type="text"
//                                                     id='name'
//                                                     name='name'
//                                                     value={formData.name}
//                                                     onChange={handleChange}
//                                                 />
//                                             </label>
//                                             <label htmlFor="address">
//                                                 <p>Address</p>
//                                                 <input
//                                                     type="text"
//                                                     id='address'
//                                                     name='address'
//                                                     value={formData.address}
//                                                     onChange={handleChange}
//                                                 />
//                                             </label>
//                                             <label htmlFor="home">
//                                                 <p>Home</p>
//                                                 <input
//                                                     type="text"
//                                                     id='home'
//                                                     name='home'
//                                                     value={formData.home}
//                                                     onChange={handleChange}
//                                                 />
//                                             </label>
//                                         </div>

//                                         <div className={styles.address_item_form_forms_two}>
//                                             <label htmlFor="email">
//                                                 <p>Email Address</p>
//                                                 <input
//                                                     type="email"
//                                                     id='email'
//                                                     name='email'
//                                                     value={formData.email}
//                                                     onChange={handleChange}
//                                                 />
//                                             </label>

//                                             <label className={styles.phone}>
//                                                 <p>Phone Number</p>
//                                                 <div className={styles.num}>
//                                                     <select name="countryCode" onChange={handleChange}>
//                                                         <option value="+996">+996</option>
//                                                         <option value="+997">+997</option>
//                                                         <option value="+998">+998</option>
//                                                         <option value="+999">+999</option>
//                                                     </select>
//                                                     <input
//                                                         name="phone"
//                                                         type="tel"
//                                                         value={formData.phone}
//                                                         onChange={handleChange}
//                                                     />
//                                                 </div>
//                                             </label>
//                                         </div>

//                                         <div className={styles.btns}>
//                                             <Button type="submit">
//                                                 Pleace Order
//                                             </Button>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>

//                             <div className={styles.address_item_order}>
//                                 <div className={styles.address_item_order_title}>
//                                     <h3>Your Order</h3>
//                                 </div>
//                                 <div className={styles.address_item_order_product}>
//                                     <h4>Products</h4>
//                                     <p>Subtotal</p>
//                                 </div>
//                                 <div className={styles.address_item_order_scroll}>
//                                     {cartItems.map((item) => (
//                                         <div key={item.id} className={styles.address_item_order_scroll_total}>
//                                             <div className={styles.card}>
//                                                 <div className={styles.product}>
//                                                 <img src={item.image} alt="" />
//                                                     <div>
//                                                         <h5>{item.name}</h5>
//                                                     </div>
//                                                 </div>
//                                                 <div className={styles.count}>
//                                                     <p>(x {item.quantity})</p>
//                                                 </div>
//                                                 <div className={styles.price}>
//                                                     <p>{item.price}</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 <div className={styles.address_item_order_subtotal}>
//                                     <div className={styles.address_item_order_subtotal_elem}>
//                                         <div className={styles.address_item_order_subtotal_elem_title}>
//                                             <h3>Subtotal</h3>
//                                             <p>${totalPrice.toFixed(2)}</p>
//                                         </div>
//                                         <div className={styles.address_item_order_subtotal_elem_titles}>
//                                             <h2>Total</h2>
//                                             <p>${totalPrice.toFixed(2)}</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className={styles.address_item_order_pay}>
//                                     <div className={styles.address_item_order_pay_elem}>
//                                         <div className={styles.address_item_order_pay_elem_title}>
//                                             <h2>Payment Method</h2>
//                                         </div>
//                                         <div className={styles.address_item_order_pay_elem_method}>
//                                             <div className={styles.address_item_order_pay_elem_method_met}>
//                                                 <label htmlFor="id1">
//                                                     <input type="radio" id="id1" className={styles.checkbox} name='check1' />
//                                                     <div className={styles.cont}>
//                                                         <img src="/assets/img/cards.png" alt="Кредитная карта" />
//                                                     </div>
//                                                 </label>
//                                             </div>
//                                             <div className={styles.address_item_order_pay_elem_method_met}>
//                                                 <label htmlFor="id2">
//                                                     <input type="radio" id="id2" className={styles.checkbox} name='check1' />
//                                                     <div className={styles.cont}>
//                                                         <p>Dorect bank transfer</p>
//                                                     </div>
//                                                 </label>
//                                             </div>
//                                             <div className={styles.address_item_order_pay_elem_method_met}>
//                                                 <label htmlFor="id3">
//                                                     <input type="radio" id="id3" className={styles.checkbox} name='check1' />
//                                                     <div className={styles.cont}>
//                                                         <p>Cash on delivery</p>
//                                                     </div>
//                                                 </label>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 <section className={styles.footer}>
//                     <div className="container">
//                         <Footer />
//                     </div>
//                 </section>
//             </div>
//         </>
//     );
// }



import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Breadcrumbs from '../../components/Breadcrumbs/Crumbs';
import styles from '../../pages/Checkout/Checkout.module.scss';
import Button from '../../components/UI/Button/Button';
import Footer from '../../components/Footer/Footer';
import { useAuth } from '../../AuthContext';
import axios from '../../axios/index';
import { useLocation } from 'react-router-dom';

export default function Checkout() {
    const { cartItems, setCartItems, totalPrice, setTotalPrice } = useAuth();
    const location = useLocation();
    const itemFromBuyNow = location.state?.item;
    const [formData, setFormData] = useState({
        name: '',
        countryCode: '+996',
        phone: '',
        address: '',
        email: '',
        home: '',
        items: []
    });

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        if (itemFromBuyNow) {
            storedCartItems.push({
                ...itemFromBuyNow,
                quantity: itemFromBuyNow.quantity || 1,
            });
        }
        setCartItems(storedCartItems);
    }, [setCartItems]);

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(total);

        setFormData(prevFormData => ({
            ...prevFormData,
            items: cartItems.map(item => ({
                products: item.id,
                quantity: item.quantity,
                name: item.name,
                count: item.quantity,
                price: item.price
            }))
        }));
    }, [cartItems, setTotalPrice]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const fullPhoneNumber = formData.countryCode + formData.phone;
        const orderData = {
            ...formData,
            phone: fullPhoneNumber,
            items: cartItems.map(item => ({
                product: item.id,
                quantity: item.quantity,
            })),
            totalPrice
        };

        axios.post('orders/', orderData)
            .then(res => {
                console.log('успешно!', res.data);
                setCartItems([]);
                localStorage.removeItem('cartItems');

                setFormData({
                    name: '',
                    countryCode: '+996',
                    phone: '',
                    address: '',
                    email: '',
                    home: '',
                    items: []
                });
                setTotalPrice(0);
            })
            .catch(err => {
                console.log('ошибка при отправлении данных', err);
            });
    };



    

    return (
        <>
            <div>
                <Header />
                <Breadcrumbs />      
                <section className={styles.address}>
                    <div className="container">
                        <div className={styles.address_item}>
                            <div className={styles.address_item_form}>
                                <div className={styles.address_item_form_title}>
                                    <h2>Billing Address</h2>
                                </div>

                                <div className={styles.address_item_form_forms}>
                                    <form onSubmit={handleSubmit}>
                                        <div className={styles.address_item_form_forms_one}>
                                            <label htmlFor="name">
                                                <p>Name</p>
                                                <input
                                                    type="text"
                                                    id='name'
                                                    name='name'
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            <label htmlFor="address">
                                                <p>Address</p>
                                                <input
                                                    type="text"
                                                    id='address'
                                                    name='address'
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            <label htmlFor="home">
                                                <p>Home</p>
                                                <input
                                                    type="text"
                                                    id='home'
                                                    name='home'
                                                    value={formData.home}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                        </div>

                                        <div className={styles.address_item_form_forms_two}>
                                            <label htmlFor="email">
                                                <p>Email Address</p>
                                                <input
                                                    type="email"
                                                    id='email'
                                                    name='email'
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </label>

                                            <label className={styles.phone}>
                                                <p>Phone Number</p>
                                                <div className={styles.num}>
                                                    <select name="countryCode" onChange={handleChange}>
                                                        <option value="+996">+996</option>
                                                        <option value="+997">+997</option>
                                                        <option value="+998">+998</option>
                                                        <option value="+999">+999</option>
                                                    </select>
                                                    <input
                                                        name="phone"
                                                        type="tel"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </label>
                                        </div>

                                        <div className={styles.btns}>
                                            <Button type="submit">
                                                Pleace Order
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className={styles.address_item_order}>
                                <div className={styles.address_item_order_title}>
                                    <h3>Your Order</h3>
                                </div>
                                <div className={styles.address_item_order_product}>
                                    <h4>Products</h4>
                                    <p>Subtotal</p>
                                </div>
                                <div className={styles.address_item_order_scroll}>
                                    {cartItems.map((item) => (
                                        <div key={item.id} className={styles.address_item_order_scroll_total}>
                                            <div className={styles.card}>
                                                <div className={styles.product}>
                                                    <img src={item.image} alt="" />
                                                    <div>
                                                        <h5>{item.name}</h5>
                                                    </div>
                                                </div>
                                                <div className={styles.count}>
                                                    <p>(x {item.quantity})</p>
                                                </div>
                                                <div className={styles.price}>
                                                    <p>{item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.address_item_order_subtotal}>
                                    <div className={styles.address_item_order_subtotal_elem}>
                                        <div className={styles.address_item_order_subtotal_elem_title}>
                                            <h3>Subtotal</h3>
                                            <p>${totalPrice.toFixed(2)}</p>
                                        </div>
                                        <div className={styles.address_item_order_subtotal_elem_titles}>
                                            <h2>Total</h2>
                                            <p>${totalPrice.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.address_item_order_pay}>
                                    <div className={styles.address_item_order_pay_elem}>
                                        <div className={styles.address_item_order_pay_elem_title}>
                                            <h2>Payment Method</h2>
                                        </div>
                                        <div className={styles.address_item_order_pay_elem_method}>
                                            <div className={styles.address_item_order_pay_elem_method_met}>
                                                <label htmlFor="id1">
                                                    <input type="radio" id="id1" className={styles.checkbox} name='check1' />
                                                    <div className={styles.cont}>
                                                        <img src="/assets/img/cards.png" alt="Кредитная карта" />
                                                    </div>
                                                </label>
                                            </div>
                                            <div className={styles.address_item_order_pay_elem_method_met}>
                                                <label htmlFor="id2">
                                                    <input type="radio" id="id2" className={styles.checkbox} name='check1' />
                                                    <div className={styles.cont}>
                                                        <p>Dorect bank transfer</p>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className={styles.address_item_order_pay_elem_method_met}>
                                                <label htmlFor="id3">
                                                    <input type="radio" id="id3" className={styles.checkbox} name='check1' />
                                                    <div className={styles.cont}>
                                                        <p>Cash on delivery</p>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.footer}>
                    <div className="container">
                        <Footer />
                    </div>
                </section>
            </div>
        </>
    );
}

