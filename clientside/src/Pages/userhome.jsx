import React from "react";
import Navbaruser from "../component/usernavbar"
import SubNavbar from "../component/subnavbar";
import Carousel from "../component/carousel";
import FoodCard from "../component/foodcard";
import Footer from "../component/footer";

const User = () => {
  const foods = [
    { id: 1, title: "Ice Cream", img: "https://t4.ftcdn.net/jpg/07/10/22/23/240_F_710222325_nW5TLBK4JjUVdP4kB9oZAJihEGoOVue7.jpg" },
    { id: 2, title: "Cake", img: "https://img.freepik.com/premium-photo/professional-photography-delicious-chocolate-cake_758367-17611.jpg" }, 
    { id: 3, title: "Burger", img: "https://t4.ftcdn.net/jpg/02/44/61/19/240_F_244611927_yrh0ZIYwOGTDurVnCMAt7Cq8DR4sBkB0.jpg" },
    { id: 4, title: "Pasta", img: "https://img.freepik.com/premium-photo/classic-italian-pasta-penne-parmesan-cheese-dark-table-penne-pasta-with-sauce-top-view-generative-ai_47243-2249.jpg" },
    { id: 5, title: "Pizza", img: "https://i.pinimg.com/236x/37/b6/60/37b660cb40988dda83c8d345f62c83da.jpg" },
    { id: 6, title: "Sushi", img: "https://i.pinimg.com/1200x/4f/1c/f0/4f1cf0a91fdee088f1d0ca9284181252.jpg" },
    { id: 7, title: "Biriyani", img: "https://stock.adobe.com/images/indian-chicken-biryani-spicy-food-photography-with-flying-food-effect-black-background/912102578" },
    { id: 8, title: "Sushi", img: "https://i.pinimg.com/1200x/4f/1c/f0/4f1cf0a91fdee088f1d0ca9284181252.jpg" },
    { id: 9, title: "Sushi", img: "https://i.pinimg.com/1200x/4f/1c/f0/4f1cf0a91fdee088f1d0ca9284181252.jpg" },
    { id: 10, title: "Sushi", img: "https://i.pinimg.com/1200x/4f/1c/f0/4f1cf0a91fdee088f1d0ca9284181252.jpg" },
    
    
  ];
  return (
    <>
      <Navbaruser />
      <SubNavbar />
      {/* <Carousel /> */}
      <section className="card-section">
        <h2>What's on your mind?</h2>
        <div className="card-container">
          {foods.map((item) => (
            <FoodCard key={item.id} title={item.title} img={item.img} />
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default User;
