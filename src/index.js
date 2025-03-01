import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className='container'>
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    )
}

function Header() {
    return (
        <header className='header'>
            <h1>Fast React Pizza Co.</h1>
        </header>
    )
}

function Footer() {

    return (
        <footer className='footer'>
            <div className="order">
                <p>{new Date().toLocaleTimeString()} We are currently open!</p>
                <button className="btn">Order Now</button>
            </div>
        </footer>
    )
}

function Menu() {
    const pizzaLength = pizzaData.length;

    return (
        <main className='menu'>
            <h2>Our Menu</h2>
            {pizzaLength > 0 ? (
                    <>
                        <p>Authentic italian Pizza</p>
                        <ul className="pizzas">
                            {pizzaData.map((pizza) => (
                                <Pizza pizzaObj={pizza}/>
                            ))}
                        </ul>
                    </>
                ) :
                (<p>
                    We're still working on our menu
                </p>)}
        </main>
    )
}

function Pizza({pizzaObj}) {
    return (
        <li className={`pizza ${pizzaObj.soldOut && 'sold-out'}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{ pizzaObj.soldOut ? 'Sold Out' : pizzaObj.price}</span>
            </div>
        </li>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)