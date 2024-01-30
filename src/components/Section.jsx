const Section=()=>{
return(
  <main className="section ">
    <div className="section-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="button">
            <button>Shop Now</button>
            <button className="button2">Category</button>
        </div>
        <div className="shoping">
            <p>Also Available On</p>
            <div className="brand-icons">
                <img src="/images/amazon.png" alt="amazon-logo" />
                <img src="/images/flipkart.png" alt="flipkart-logo" />
            </div>
        </div>
        <div className="section image"></div>
    </div>
    <div className="main-image">
        <img src="/images/shoe_image.png" alt="main-image" />
    </div>
  </main>  
);
};
export default Section;
